import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowRight, Play } from 'lucide-react'
import { cn } from "@/lib/utils"

const CabrioletPage = () => {
  const highlights = [
    {
      title: "Floral Design",
      desc: "MAYBACH seat pattern in a new floral design, crafted with crystal white nappa leather.",
      image: "https://www.mercedes-benz.co.in/content/dam/hq/passengercars/cars/sl/mercedes-maybach-sl-z232-pi/overview/spa-highlights/07-2025/images/mercedes-maybach-sl-z232-spa-seat-pattern-2400x2400-07-2025.jpg?im=Resize,width=736"
    },
    {
      title: "Exquisite Comfort",
      desc: "Backrests featuring the iconic Maybach emblem, ensuring unparalleled luxury.",
      image: "https://www.mercedes-benz.co.in/content/dam/hq/passengercars/cars/sl/mercedes-maybach-sl-z232-pi/overview/spa-highlights/07-2025/images/mercedes-maybach-sl-z232-spa-backrest-2400x2400-07-2025.jpg?im=Resize,width=736"
    },
    {
      title: "Forged Perfection",
      desc: "Multi-spoke forged wheels that define the silhouette of the SL Monogram Series.",
      image: "https://www.mercedes-benz.co.in/content/dam/hq/passengercars/cars/sl/mercedes-maybach-sl-z232-pi/overview/spa-highlights/07-2025/images/mercedes-maybach-sl-z232-spa-wheels-2400x2400-07-2025.jpg?im=Resize,width=736"
    }
  ]

  return (
    <div className="min-h-screen bg-[#fcfcfd] dark:bg-[#0a0a0a] text-zinc-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-black/5 dark:bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.mercedes-benz.co.in/content/dam/hq/passengercars/cars/sl/mercedes-maybach-sl-z232-pi/overview/spa-highlights/07-2025/images/mercedes-maybach-sl-z232-spa-exterior-2400x2400-07-2025.jpg?im=Resize,width=1920"
            alt="Mercedes-Maybach SL"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#fcfcfd] dark:to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 text-center px-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-xs uppercase tracking-[0.8em] text-white/60 mb-6 block font-michroma">Mercedes-Maybach</span>
            <h1 className="text-6xl md:text-9xl font-bold font-michroma tracking-tighter mb-8">SL MONOGRAM</h1>
            <p className="text-white/60 max-w-3xl mx-auto text-sm md:text-lg tracking-widest uppercase leading-loose">
              Sophistication meets open-top performance. <br /> The pinnacle of the SL range.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 dark:text-white/20">Scroll to Explore</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-zinc-400 dark:from-white/20 to-transparent" />
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-40 px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-2xl mb-8 border border-black/10 dark:border-white/5 bg-zinc-100 dark:bg-zinc-900 shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <h3 className="text-xl font-bold font-michroma mb-4 tracking-tight">{item.title}</h3>
              <p className="text-zinc-600 dark:text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-60 relative overflow-hidden text-center px-10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.mercedes-benz.co.in/content/dam/hq/passengercars/cars/sl/mercedes-maybach-sl-z232-pi/overview/spa-highlights/07-2025/images/mercedes-maybach-sl-z232-spa-exterior-2400x2400-07-2025.jpg"
            alt="Maybach SL"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fcfcfd] dark:from-[#0a0a0a] via-transparent to-[#fcfcfd] dark:to-[#0a0a0a]" />
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-michroma mb-12 tracking-tighter">THE ULTIMATE IN OPEN-AIR LUXURY</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="px-12 py-6 bg-zinc-900 text-white dark:bg-white dark:text-black font-bold uppercase tracking-[0.3em] text-xs hover:opacity-90 transition-all transform hover:scale-105 shadow-xl">
              Experience Maybach
            </button>
            <button className="px-12 py-6 bg-transparent border border-black/20 dark:border-white/20 text-zinc-900 dark:text-white font-bold uppercase tracking-[0.3em] text-xs hover:bg-black/5 dark:hover:bg-white/5 transition-all">
              Request Info
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CabrioletPage
