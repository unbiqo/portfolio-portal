import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { TerrariumSpinner, TerrariumContainer } from './voxel-terrarium-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelTerrarium = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()
  const modelOffsetX = -0.4
  const urlTerrariumGLB = '/terrarium.glb'

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      const scene = new THREE.Scene()

      const target = new THREE.Vector3(-0.5, 1.2, 0)
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      )

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.enableZoom = false
      controls.target = target

      const MIN_ZOOM = 0.9
      const MAX_ZOOM = 3.0
      const ZOOM_STEP = 1.06
      const DOUBLE_TAP_ZOOM = 1.125
      const DOUBLE_TAP_DELAY = 280
      const DOUBLE_TAP_DISTANCE = 24
      const INITIAL_ZOOM = 1.75
      const ZOOM_DAMPING = 0.5

      const zoomCamera = nextZoom => {
        const clamped = THREE.MathUtils.clamp(nextZoom, MIN_ZOOM, MAX_ZOOM)
        if (camera.zoom === clamped) return
        camera.zoom = clamped
        camera.updateProjectionMatrix()
      }

      zoomCamera(INITIAL_ZOOM)

      const getTouchDistance = touches => {
        const dx = touches[0].clientX - touches[1].clientX
        const dy = touches[0].clientY - touches[1].clientY
        return Math.hypot(dx, dy)
      }

      let lastPinchDistance = null
      let isPinching = false
      let lastTapTime = 0
      let lastTapPosition = null
      let tapMoved = false
      let tapStart = null

      const handleWheel = event => {
        event.preventDefault()
        const direction = Math.sign(event.deltaY)
        if (direction === 0) return
        const zoomFactor = direction > 0 ? 1 / ZOOM_STEP : ZOOM_STEP
        const damped = 1 + (zoomFactor - 1) * ZOOM_DAMPING
        zoomCamera(camera.zoom * damped)
      }

      const handleTouchStart = event => {
        if (event.touches.length === 2) {
          isPinching = true
          lastPinchDistance = getTouchDistance(event.touches)
          return
        }
        if (event.touches.length === 1) {
          tapMoved = false
          tapStart = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
          }
        }
      }

      const handleTouchMove = event => {
        if (event.touches.length === 2) {
          event.preventDefault()
          const distance = getTouchDistance(event.touches)
          if (lastPinchDistance) {
            const zoomFactor = distance / lastPinchDistance
            const damped = 1 + (zoomFactor - 1) * ZOOM_DAMPING
            zoomCamera(camera.zoom * damped)
          }
          lastPinchDistance = distance
          return
        }
        if (event.touches.length === 1 && tapStart) {
          const dx = event.touches[0].clientX - tapStart.x
          const dy = event.touches[0].clientY - tapStart.y
          if (Math.hypot(dx, dy) > 8) {
            tapMoved = true
          }
        }
      }

      const handleTouchEnd = event => {
        if (event.touches.length < 2) {
          isPinching = false
          lastPinchDistance = null
        }
        if (
          isPinching ||
          tapMoved ||
          event.touches.length !== 0 ||
          event.changedTouches.length !== 1
        ) {
          return
        }
        const touch = event.changedTouches[0]
        const now = Date.now()
        if (
          lastTapTime &&
          now - lastTapTime < DOUBLE_TAP_DELAY &&
          lastTapPosition
        ) {
          const dx = touch.clientX - lastTapPosition.x
          const dy = touch.clientY - lastTapPosition.y
          if (Math.hypot(dx, dy) < DOUBLE_TAP_DISTANCE) {
            event.preventDefault()
            zoomCamera(camera.zoom * DOUBLE_TAP_ZOOM)
          }
          lastTapTime = 0
          lastTapPosition = null
          return
        }
        lastTapTime = now
        lastTapPosition = { x: touch.clientX, y: touch.clientY }
      }

      renderer.domElement.style.touchAction = 'none'
      renderer.domElement.addEventListener('wheel', handleWheel, {
        passive: false
      })
      renderer.domElement.addEventListener('touchstart', handleTouchStart, {
        passive: true
      })
      renderer.domElement.addEventListener('touchmove', handleTouchMove, {
        passive: false
      })
      renderer.domElement.addEventListener('touchend', handleTouchEnd, {
        passive: false
      })
      renderer.domElement.addEventListener('touchcancel', handleTouchEnd, {
        passive: false
      })

      loadGLTFModel(scene, urlTerrariumGLB, {
        receiveShadow: false,
        castShadow: false
      }).then(obj => {
        obj.position.x = modelOffsetX
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.removeEventListener('wheel', handleWheel)
        renderer.domElement.removeEventListener('touchstart', handleTouchStart)
        renderer.domElement.removeEventListener('touchmove', handleTouchMove)
        renderer.domElement.removeEventListener('touchend', handleTouchEnd)
        renderer.domElement.removeEventListener('touchcancel', handleTouchEnd)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <TerrariumContainer ref={refContainer}>
      {loading && <TerrariumSpinner />}
    </TerrariumContainer>
  )
}

export default VoxelTerrarium
