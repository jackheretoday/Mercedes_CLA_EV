import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Play } from 'lucide-react'
import { cn } from "@/lib/utils"

const AMGPage = () => {
  const [api, setApi] = useState(null)
  const [selectedColor, setSelectedColor] = useState("Sun Yellow")

  const colors = [
    { name: "Sun Yellow", hex: "#F7D117" },
    { name: "Obsidian Black", hex: "#0a0a0a" },
    { name: "Selenite Grey", hex: "#555555" },
    { name: "Hyper Blue", hex: "#0a3984" },
  ]

  useEffect(() => {
    const iframe = document.getElementById('amg-sketchfab-viewer')
    if (!iframe) return

    const client = new window.Sketchfab('1.12.1', iframe)

    client.init('f7a625e6f5de425e89e84ae2e92cad65', {
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
    const cleanHex = hex.replace('#', '')
    const r = parseInt(cleanHex.slice(0, 2), 16) / 255
    const g = parseInt(cleanHex.slice(2, 4), 16) / 255
    const b = parseInt(cleanHex.slice(4, 6), 16) / 255
    return [r, g, b]
  }

  const applyColor = (color, apiInstance = api) => {
    if (!apiInstance) return

    // Use original model without coloring for Sun Yellow
    if (color.name === "Sun Yellow") {
      // Re-initialize model state if needed, but for this model, skipping suffices
      return
    }

    const paintRgb = hexToRgb(color.hex)

    apiInstance.getMaterialList((err, materials) => {
      if (err) return
      materials.forEach((mat) => {
        const name = mat.name.toLowerCase()
        if (name.includes('paint') || name.includes('body') || name.includes('car_paint') || name.includes('exterior')) {
          if (mat.channels.AlbedoPBR) mat.channels.AlbedoPBR.color = paintRgb
          if (mat.channels.DiffuseColor) mat.channels.DiffuseColor.color = paintRgb
          apiInstance.setMaterial(mat)
        }
      })
    })
  }

  const handleColorChange = (color) => {
    setSelectedColor(color.name)
    applyColor(color)
  }

  return (
    <div className="min-h-screen bg-[#fcfcfd] dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      {/* Hero Section with Image Background */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d3q27bh1u24u2o.cloudfront.net/news/Main_image_5Cb2Vjd.png"
            className="w-full h-full object-cover scale-105 opacity-70"
            alt="AMG Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#fcfcfd] dark:to-black" />
        </div>

        <div className="relative z-10 text-center px-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src="https://assets.oneweb.mercedes-benz.com/plugin/hp-assets/latest/images/brands/mercedes-amg/logo.svg"
              className="h-12 mx-auto mb-10 invert"
              alt="AMG"
            />
            <h1 className="text-5xl md:text-[7rem] font-black italic tracking-tighter mb-4 font-michroma leading-none text-white">
              DRIVING <br />
              <span className="text-red-600">PERFORMANCE</span>
            </h1>
            <p className="text-xs tracking-[0.8em] text-white/50 uppercase font-michroma mt-8">The pinnacle of automotive emotion</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Video Section - Moved from Hero */}
      <section className="py-20 bg-zinc-50 dark:bg-black transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-10">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 group">
            <iframe
              src="https://notube.lbbonline.com/media/64db214daffcd100170b63e4"
              className="w-full h-full object-cover"
              frameBorder="0"
              allow="autoplay; fullscreen"
            />
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl" />
          </div>
        </div>
      </section>

      {/* 3D Configurator Section */}
      <section className="py-40 px-10 bg-white dark:bg-[#0a0a0a] border-y border-black/10 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 dark:text-white/30 mb-2 block font-michroma">Interactive Experience</span>
            <h2 className="text-5xl font-bold font-michroma mb-4 tracking-tighter">SL 63 AMG</h2>
            <p className="text-zinc-500 dark:text-white/40 uppercase tracking-widest text-xs">Uncompromising design. Absolute power.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
            <div className="lg:col-span-2 relative aspect-video rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-zinc-950 shadow-2xl group">
              <iframe
                id="amg-sketchfab-viewer"
                title="Mersedes-Benz SL63 AMG"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/f7a625e6f5de425e89e84ae2e92cad65/embed?autostart=1&ui_controls=0&ui_infos=0&transparent=1"
              ></iframe>
            </div>

            <div className="flex flex-col gap-12">
              <div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 dark:text-white/30 mb-6 block font-michroma">Manufaktur Paint</span>
                <div className="flex flex-wrap gap-6">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => handleColorChange(color)}
                      className={cn(
                        "w-14 h-14 rounded-full border-2 p-1.5 transition-all duration-500",
                        selectedColor === color.name ? "border-red-600 scale-110 shadow-[0_0_20px_rgba(239,68,68,0.3)]" : "border-black/10 dark:border-white/10 hover:border-black/40 dark:hover:border-white/40"
                      )}
                    >
                      <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: color.hex }} />
                    </button>
                  ))}
                </div>
                <p className="mt-6 text-sm font-michroma text-zinc-900 dark:text-white tracking-widest uppercase">{selectedColor}</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-zinc-100 dark:bg-zinc-900/50 p-6 rounded-xl border border-black/5 dark:border-white/5">
                  <h3 className="text-3xl font-black font-michroma italic text-red-600">585 HP</h3>
                  <p className="text-zinc-500 dark:text-white/30 text-[10px] uppercase tracking-widest mt-1">Biturbo V8 Engine</p>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-900/50 p-6 rounded-xl border border-black/5 dark:border-white/5">
                  <h3 className="text-3xl font-black font-michroma italic text-zinc-900 dark:text-white">3.6 SEC</h3>
                  <p className="text-zinc-500 dark:text-white/30 text-[10px] uppercase tracking-widest mt-1">0-100 KM/H Sprint</p>
                </div>
              </div>

              <button className="w-full py-6 bg-zinc-900 text-white dark:bg-white dark:text-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
                Configure Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Brand Video Section */}
      <section className="py-40 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.05)_0%,transparent_70%)]" />
        <div className="max-w-6xl mx-auto px-10 relative z-10">

          <div className="mt-16 text-center">
            <h2 className="text-5xl font-black font-michroma italic mb-6 tracking-tighter">ONE MAN, ONE ENGINE.</h2>
            <p className="text-white/40 max-w-2xl mx-auto leading-relaxed text-lg">
              Every AMG engine is hand-built by a single master technician. A philosophy of excellence that defines the heartbeat of every Mercedes-AMG.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AMGPage
