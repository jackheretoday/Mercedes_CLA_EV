import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils"

const suvModels = [
  {
    name: "GLC",
    tagline: "Ready for it.",
    price: "₹ 75,90,000",
    image: "/images/glc.png"
  },
  {
    name: "GLE",
    tagline: "All kinds of strength.",
    price: "₹ 97,85,000",
    image: "/images/gle.png"
  },
  {
    name: "GLS",
    tagline: "The S-Class of SUVs.",
    price: "₹ 1,32,00,000",
    image: "/images/gls.png"
  },
  {
    name: "EQE SUV",
    tagline: "Electric intelligence.",
    price: "₹ 1,39,00,000",
    image: "/images/eqe.png"
  }
]

const SUVPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-10 relative overflow-hidden">
      {/* Animated Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

      <header className="max-w-7xl mx-auto mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block">The Range</span>
          <h1 className="text-7xl font-bold font-michroma tracking-tighter mb-6">SUV RANGE</h1>
          <p className="text-white/40 max-w-2xl text-lg leading-relaxed">
            From the agile GLC to the majestic GLS, explore our lineup of SUVs that redefine luxury, capability, and performance.
          </p>
        </motion.div>
      </header>

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {suvModels.map((car, index) => (
          <motion.div
            key={car.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative bg-zinc-900/30 rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500"
          >
            <div className="p-10 pb-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-3xl font-bold font-michroma mb-1">{car.name}</h2>
                  <p className="text-white/40 uppercase tracking-widest text-[10px]">{car.tagline}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">Starting from</span>
                  <span className="text-lg font-bold text-white/80">{car.price}</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full mt-4 group-hover:scale-105 transition-transform duration-700">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-10 pt-4 flex gap-4">
              <button className="flex-1 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-white/90 transition-colors">
                Explore
              </button>
              <button className="px-6 py-4 bg-white/5 text-white border border-white/10 font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-white/10 transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Feature Highlight */}
      <section className="max-w-7xl mx-auto mt-40">
        <div className="relative h-[600px] rounded-3xl overflow-hidden border border-white/5 group">
          <img
            src="https://cdn.motor1.com/images/mgl/NGGl0n/s1/mercedes-benz-eqe-suv-interior-teaser.webp"
            alt="EQE SUV Highlight"
            className="w-full h-full object-cover opacity-60 scale-110 group-hover:scale-100 transition-transform duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-20 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-5xl font-bold font-michroma mb-6">ELECTRIC INTELLIGENCE</h3>
              <p className="text-white/60 max-w-xl mb-10 text-lg">
                The EQE SUV combines high-performance electric drive with the luxury and space you expect from a Mercedes-Benz SUV.
              </p>
              <button className="flex items-center gap-3 text-white font-bold uppercase tracking-[0.3em] text-xs group/btn">
                Discover EQ Power <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SUVPage
