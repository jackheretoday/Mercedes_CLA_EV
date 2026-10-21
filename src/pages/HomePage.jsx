import * as React from "react"
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const frameCount = 300
const currentFrame = (index) =>
  `/car_scroll_frames/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`

export default function HomePage() {
  const imagesRef = React.useRef([])
  const [progress, setProgress] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(true)
  const [showSlogan, setShowSlogan] = React.useState(false)
  const canvasRef = React.useRef(null)
  const containerRef = React.useRef(null)
  const currentFrameRef = React.useRef(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 35,
    mass: 0.2,
    restDelta: 0.0005
  })

  const opacity1 = useTransform(smoothProgress, [0, 0.12, 0.24], [1, 1, 0])
  const opacity2 = useTransform(smoothProgress, [0.24, 0.36, 0.48, 0.58], [0, 1, 1, 0])
  const canvasOpacity = useTransform(smoothProgress, [0.92, 0.98], [1, 0])

  const renderFrame = React.useCallback((index) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const imgs = imagesRef.current
    if (!imgs || imgs.length === 0) return

    const clampedIndex = Math.max(0, Math.min(Math.round(index), frameCount - 1))
    currentFrameRef.current = clampedIndex
    const img = imgs[clampedIndex]

    if (img && img.complete && img.naturalWidth > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight)
      const x = (canvas.width - img.naturalWidth * scale) / 2
      const y = (canvas.height - img.naturalHeight * scale) / 2
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"
      ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale)
    }
  }, [])

  const resizeCanvas = React.useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`
    renderFrame(currentFrameRef.current)
  }, [renderFrame])

  // Preload all frames
  React.useEffect(() => {
    const loadedImages = new Array(frameCount)
    let loadedCount = 0
    let isCancelled = false

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image()

      const handleLoadOrError = () => {
        if (isCancelled) return
        loadedCount++
        setProgress(Math.round((loadedCount / frameCount) * 100))

        if (i === 1) {
          imagesRef.current[0] = img
          renderFrame(0)
        }

        if (loadedCount >= frameCount) {
          imagesRef.current = loadedImages
          setIsLoading(false)
        }
      }

      img.onload = handleLoadOrError
      img.onerror = handleLoadOrError
      img.src = currentFrame(i)
      loadedImages[i - 1] = img
    }

    return () => {
      isCancelled = true
    }
  }, [renderFrame])

  // Initialize canvas size and draw first frame once loaded
  React.useEffect(() => {
    if (!isLoading) {
      resizeCanvas()
      renderFrame(0)
    }
  }, [isLoading, resizeCanvas, renderFrame])

  // Window resize handler
  React.useEffect(() => {
    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [resizeCanvas])

  // Handle scroll progress and update frames
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const frame = Math.min(frameCount - 1, Math.max(0, Math.floor((latest / 0.95) * frameCount)))
    renderFrame(frame)

    if (latest > 0.62 && !showSlogan) {
      setShowSlogan(true)
    } else if (latest < 0.58 && showSlogan) {
      setShowSlogan(false)
    }
  })

  return (
    <div className="relative bg-black min-h-screen">
      {isLoading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[100]">
          <div className="text-center">
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-michroma">Calibrating Light</p>
          </div>
        </div>
      )}

      <div className={cn("relative w-full transition-opacity duration-1000", isLoading ? "opacity-0" : "opacity-100")}>
        {/* Main Cinematic Scroll Sequence */}
        <section ref={containerRef} className="h-[500vh] relative">
          <div className="sticky top-0 h-screen w-full overflow-hidden z-0 bg-black">
            {/* Background Depth Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] z-0" />

            <motion.canvas
              ref={canvasRef}
              style={{ opacity: canvasOpacity }}
              className="absolute top-0 left-0 w-screen h-screen pointer-events-none z-10"
            />

            <div className="relative z-10 h-full w-full">
              {/* Step 1: Intro */}
              <motion.div
                style={{ opacity: opacity1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
              >
                <div>
                  <h1 className="text-8xl font-black tracking-tighter mb-4 text-glow font-michroma">THE EQE</h1>
                  <p className="text-sm tracking-[0.5em] text-white/50 uppercase">Electric Intelligence. Engineered.</p>
                </div>

                {/* Subtle Scroll Hint */}
                <div className="absolute bottom-12 flex flex-col items-center gap-2 text-white/40">
                  <span className="text-[10px] tracking-[0.4em] uppercase font-michroma">Scroll to Illuminate</span>
                  <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                      animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      className="w-1 h-2 bg-white rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Step 2: Innovation */}
              <motion.div
                style={{ opacity: opacity2 }}
                className="absolute inset-0 flex items-center justify-center text-center"
              >
                <div>
                  <h2 className="text-6xl font-bold tracking-tight mb-4 uppercase font-michroma">Silent Speed</h2>
                  <p className="text-sm tracking-[0.4em] text-white/50 uppercase">The future of performance is quiet.</p>
                </div>
              </motion.div>

              {/* Step 3: Slogan Reveal - Automatic Slow Glowing Reveal */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <AnimatePresence>
                  {showSlogan && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                      transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
                      className="relative"
                    >
                      {/* Slow Breathing Background Glow */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-white/30 blur-[180px] rounded-full -z-10"
                      />

                      <h2 className="text-6xl md:text-8xl font-black italic leading-none font-michroma tracking-tight">
                        "LET THERE BE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 drop-shadow-[0_0_60px_rgba(255,255,255,0.4)]">LIGHT!"</span>
                      </h2>

                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "100%", opacity: 1 }}
                        transition={{ delay: 1.5, duration: 2 }}
                        className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mt-12 mb-8"
                      />

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 2 }}
                        className="max-w-xl mx-auto text-xs tracking-[0.5em] leading-relaxed text-white/40 uppercase"
                      >
                        A revolutionary fusion of digitalization, <br /> electrification, and advanced LED design.
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections - Pushing up with z-index to slide over the sticky car */}
        <div className="relative z-20 bg-black shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
          {/* Video Section */}
          <section className="min-h-screen flex flex-col items-center justify-center py-40 px-10 text-white">
            <div className="max-w-6xl w-full">
              <div className="mb-16 text-center">
                <h2 className="text-5xl font-black tracking-tighter mb-4 uppercase italic">Experience the Vision</h2>
                <div className="w-20 h-1 bg-white mx-auto mb-8" />
              </div>

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/KXaYogGftLI?autoplay=0&mute=1&loop=1&playlist=KXaYogGftLI"
                  title="Mercedes-Benz EQE"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="relative z-20 min-h-screen bg-black py-40 px-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20">
                <h2 className="text-4xl font-bold mb-4 tracking-tighter uppercase font-michroma">Future Forward</h2>
                <p className="text-white/40 max-w-xl">Every detail of the EQE has been meticulously crafted to define the next generation of luxury electric mobility.</p>
              </div>
              <CarouselSpacing />

              {/* 360 Interactive 3D Model & Color Picker */}
              <div className="mt-40">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold uppercase tracking-widest mb-2 font-michroma text-white/80">Interactive 3D Showroom</h3>
                  <p className="text-xs text-white/30 uppercase tracking-[0.4em]">Explore the 2026 CLA Sedan EV</p>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-950 shadow-2xl group">
                    <iframe
                      id="sketchfab-viewer"
                      title="2026 Mercedes-Benz CLA Sedan EV"
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      src="https://sketchfab.com/models/52c4a3cc5536425782e13bd8282f9d99/embed?autostart=1&ui_controls=0&ui_infos=0&ui_inspector=0&ui_watermark=0&ui_hint=0&ui_ar=0&transparent=1"
                    ></iframe>
                  </div>

                  <SketchfabConfigurator />
                </div>
              </div>
            </div>
          </section>

          <footer className="relative z-20 bg-black border-t border-white/5 py-20 px-10 text-center">
            <img
              src="https://assets.oneweb.mercedes-benz.com/plugin/hp-assets/latest/images/brands/mercedes-benz/logo-140years.webp"
              alt="Mercedes-Benz"
              className="h-12 w-auto mx-auto mb-8 object-contain opacity-40 hover:opacity-100 transition-opacity"
            />
            <p className="text-[10px] tracking-widest text-white/20 uppercase">© 2026 Mercedes-Benz AG. All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

function SketchfabConfigurator() {
  const [api, setApi] = React.useState(null)
  const [selectedColor, setSelectedColor] = React.useState("Polar White")

  const colors = [
    { name: "Polar White", hex: "#FFFFFF" },
    { name: "Cosmic Black", hex: "#040303bc" },
    { name: "Aqua Mint", hex: "#5d9d81" },
    { name: "Alpine Grey", hex: "#555555" },
    { name: "Clear Blue", hex: "#0a3984ff" },
    { name: "Patagonia Red", hex: "#4C0606" },
  ]

  // Apply default color once API is ready
  React.useEffect(() => {
    if (api) {
      const defaultColor = colors.find(c => c.name === "Polar White")
      if (defaultColor) applyPaintColor(defaultColor)
    }
  }, [api])

  React.useEffect(() => {
    const iframe = document.getElementById('sketchfab-viewer')
    if (!iframe) return

    const client = new window.Sketchfab('1.12.1', iframe)

    client.init('52c4a3cc5536425782e13bd8282f9d99', {
      success: (api) => {
        api.start()
        api.addEventListener('viewerready', () => {
          setApi(api)
        })
      },
      error: () => {
        console.error('Sketchfab API error')
      }
    })
  }, [])

  const hexToRgb = (hex) => {
    // Remove # if present
    const cleanHex = hex.replace('#', '')
    const r = parseInt(cleanHex.slice(0, 2), 16) / 255
    const g = parseInt(cleanHex.slice(2, 4), 16) / 255
    const b = parseInt(cleanHex.slice(4, 6), 16) / 255
    return [r, g, b]
  }

  const applyPaintColor = (color) => {
    if (!api) return
    const paintRgb = hexToRgb(color.hex)
    const beigeRgb = hexToRgb("#F5F5DC") // Brighter Beige for visibility
    const darkRgb = hexToRgb("#0A0A0A")   // Deep Black

    api.getMaterialList((err, materials) => {
      if (err) return
      materials.forEach((mat) => {
        const name = mat.name.toLowerCase()

        // Exterior Paint Mapping
        if (name.includes('paint') || name.includes('body') || name.includes('car_paint') || name.includes('exterior')) {
          mat.channels.AlbedoPBR.color = paintRgb
          mat.channels.DiffuseColor.color = paintRgb
          api.setMaterial(mat)
        }

        // Interior/Seat Mapping - Broadened Search
        if (
          name.includes('seat') ||
          name.includes('leather') ||
          name.includes('upholstery') ||
          name.includes('interior') ||
          name.includes('cabin') ||
          name.includes('fabric') ||
          name.includes('chair')
        ) {
          const interiorColor = (color.name === "Polar White" || color.name === "Cosmic Black") ? beigeRgb : darkRgb

          // Apply to both PBR and Diffuse channels for maximum compatibility
          if (mat.channels.AlbedoPBR) mat.channels.AlbedoPBR.color = interiorColor
          if (mat.channels.DiffuseColor) mat.channels.DiffuseColor.color = interiorColor

          api.setMaterial(mat)
        }
      })
    })
  }

  const handleColorChange = (color) => {
    setSelectedColor(color.name)
    applyPaintColor(color)
  }

  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="flex flex-col items-center mb-8">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 mb-2">Exterior Paint</span>
        <span className="text-sm font-michroma text-white tracking-widest">{selectedColor}</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => handleColorChange(color)}
            className="group flex flex-col items-center gap-3"
          >
            <div
              className={cn(
                "w-12 h-12 rounded-full border p-1 transition-all duration-500",
                selectedColor === color.name ? "border-white scale-110" : "border-white/10 group-hover:border-white/40"
              )}
              style={{ boxShadow: selectedColor === color.name ? `0 0 20px ${color.hex}44` : 'none' }}
            >
              <div
                className="w-full h-full rounded-full shadow-inner"
                style={{ backgroundColor: color.hex }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function ThreeSixtyViewer({ images }) {
  const [index, setIndex] = React.useState(0)
  const [isDragging, setIsDragging] = React.useState(false)
  const lastX = React.useRef(0)
  const containerRef = React.useRef(null)
  const canvasRef = React.useRef(null)

  const render = React.useCallback((idx) => {
    const canvas = canvasRef.current
    if (!canvas || !images[idx]) return
    const ctx = canvas.getContext("2d")
    const img = images[idx]

    const scale = Math.max(canvas.width / img.width, canvas.height / img.height)
    const x = (canvas.width / 2) - (img.width / 2) * scale
    const y = (canvas.height / 2) - (img.height / 2) * scale

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale)
  }, [images])

  React.useEffect(() => {
    if (canvasRef.current && images.length > 0) {
      const canvas = canvasRef.current
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      render(0)
    }
  }, [images, render])

  const handleStart = (e) => {
    setIsDragging(true)
    lastX.current = e.clientX || e.touches[0].clientX
  }

  const handleMove = (e) => {
    if (!isDragging) return
    const currentX = e.clientX || e.touches[0].clientX
    const delta = currentX - lastX.current

    // Sensitivity: how many pixels of drag to change 1 frame
    const sensitivity = 5
    if (Math.abs(delta) > sensitivity) {
      const framesToMove = Math.floor(delta / sensitivity)
      setIndex(prev => {
        let next = (prev - framesToMove) % frameCount
        if (next < 0) next = frameCount + next
        render(next)
        return next
      })
      lastX.current = currentX
    }
  }

  const handleEnd = () => setIsDragging(false)

  return (
    <div
      ref={containerRef}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      className="w-full aspect-[16/9] cursor-grab active:cursor-grabbing relative group rounded-2xl overflow-hidden bg-zinc-950 border border-white/5"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none"
      />

      {/* Interaction Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2">
        <div className="flex items-center gap-4 text-white/20">
          <motion.div animate={{ x: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 2 }}>←</motion.div>
          <span className="text-[10px] uppercase tracking-widest">DRAG TO ROTATE</span>
          <motion.div animate={{ x: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 2 }}>→</motion.div>
        </div>
        <div className="w-32 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white/20"
            style={{ width: `${(index / (frameCount - 1)) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}

function CarouselSpacing() {
  const features = [
    { title: "Aerodynamics", desc: "0.22 Cd drag coefficient for maximum efficiency." },
    { title: "Battery Tech", desc: "90 kWh usable energy with 300+ miles range." },
    { title: "MBUX Hyperscreen", desc: "Zero-layer interface across 56 inches of glass." },
    { title: "Sustainable", desc: "Recycled materials in every corner of the interior." },
    { title: "Intelligent Drive", desc: "Level 3 autonomous ready for the long road ahead." },
  ]

  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent className="-ml-4">
        {features.map((feature, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="border-none bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors cursor-pointer group">
                <CardContent className="flex flex-col items-start justify-end p-10 h-80">
                  <span className="text-4xl font-black text-white/5 mb-6 group-hover:text-white/10 transition-colors">{index + 1}</span>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-end gap-2 mt-8">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  )
}