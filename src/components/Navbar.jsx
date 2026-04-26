import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Heart, MapPin, User, X, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null)

  const menuData = {
    Models: [
      { title: "All models", type: "primary" },
      { title: "New models", type: "primary" },
      { divider: true },
      { title: "Electric", type: "secondary" },
      { title: "Plug-in Hybrid", type: "secondary" },
      { divider: true },
      { title: "Limousine", type: "secondary" },
      { title: "SUV Range", type: "secondary" },
      { title: "Hatchback", type: "secondary" },
      { title: "Coupés", type: "secondary" },
      { title: "Cabriolets / Roadsters", type: "secondary" },
      { title: "MPV", type: "secondary" },
    ],
    Buy: [
      { title: "Configurator", type: "primary" },
      { title: "Stock Search", type: "primary" },
      { divider: true },
      { title: "Online Showroom", type: "secondary" },
      { title: "Offers & Financing", type: "secondary" },
      { title: "Fleet Sales", type: "secondary" },
      { title: "Accessories", type: "secondary" },
    ],
    Services: [
      { title: "Maintenance & Repair", type: "primary" },
      { title: "Warranty & Insurance", type: "primary" },
      { divider: true },
      { title: "Mercedes me Connect", type: "secondary" },
      { title: "Service Packages", type: "secondary" },
      { title: "Original Parts", type: "secondary" },
      { title: "Digital Extras", type: "secondary" },
    ],
    Brand: [
      { title: "Mercedes-Benz Brand", type: "primary" },
      { title: "Mercedes-EQ", type: "primary" },
      { divider: true },
      { title: "Mercedes-AMG", type: "secondary" },
      { title: "Mercedes-Maybach", type: "secondary" },
      { title: "Sustainability", type: "secondary" },
      { title: "Museum & Heritage", type: "secondary" },
    ]
  }

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-[60] flex items-center h-24 px-10 bg-black border-b border-white/5"
      >
        {/* Left: Navigation Links */}
        <div className="flex-1 hidden lg:flex items-center gap-10">
          {Object.keys(menuData).map((item) => (
            <button 
              key={item} 
              onMouseEnter={() => setActiveMenu(item)}
              className="text-base font-medium tracking-wider text-white/70 hover:text-white transition-colors flex items-center gap-1 group h-full"
            >
              {item}
              <motion.div
                animate={{ rotate: activeMenu === item ? 180 : 0 }}
                className="opacity-40 group-hover:opacity-100"
              >
                <ChevronRight size={14} className="rotate-90" />
              </motion.div>
            </button>
          ))}
        </div>

        {/* Center: Logo */}
        <div className="flex items-center justify-center">
          <a href="/" className="group relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              <img 
                src="https://assets.oneweb.mercedes-benz.com/plugin/hp-assets/latest/images/brands/mercedes-benz/logo-140years.webp" 
                alt="Mercedes-Benz 140 Years" 
                className="h-24 w-auto object-contain transition-transform duration-700 group-hover:scale-105" 
              />
            </motion.div>
          </a>
        </div>

        {/* Right: Utilities & Login */}
        <div className="flex-1 flex items-center justify-end gap-8">
          <div className="hidden xl:flex items-center gap-1 cursor-pointer group">
            <span className="text-base font-medium text-white/70 group-hover:text-white transition-colors">Provider/...</span>
          </div>
          
          <div className="flex items-center gap-6 border-l border-white/10 pl-8">
            <button className="text-white/70 hover:text-white transition-colors">
              <Search size={24} strokeWidth={1.5} />
            </button>
            <button className="text-white/70 hover:text-white transition-colors">
              <Heart size={24} strokeWidth={1.5} />
            </button>
            <button className="text-white/70 hover:text-white transition-colors">
              <MapPin size={24} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex items-center gap-4 border-l border-white/10 pl-8 cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <User size={22} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-white/40 uppercase tracking-tighter leading-none mb-1">Private customer</span>
              <span className="text-base font-bold text-white group-hover:text-white/80 transition-colors">Login</span>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Dropdown Overlay */}
      <AnimatePresence>
        {activeMenu && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveMenu(null)}
              className="fixed inset-0 bg-black/60 z-[70] backdrop-blur-sm"
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-screen w-full max-w-xl bg-white z-[80] shadow-2xl p-20 flex flex-col overflow-y-auto"
            >
              <button 
                onClick={() => setActiveMenu(null)}
                className="absolute top-10 right-10 text-black/40 hover:text-black transition-colors"
              >
                <X size={32} strokeWidth={1} />
              </button>

              <h2 className="font-serif text-6xl text-black mb-12 tracking-tight">
                {activeMenu}
              </h2>

              <div className="flex flex-col gap-6">
                {menuData[activeMenu].map((item, idx) => {
                  if (item.divider) return <div key={idx} className="h-[1px] bg-black/5 my-4" />
                  return (
                    <a 
                      key={idx}
                      href="#"
                      className={cn(
                        "transition-all duration-300 hover:translate-x-2",
                        item.type === "primary" 
                          ? "text-xl font-bold text-black" 
                          : "text-lg text-black/60 hover:text-black"
                      )}
                    >
                      {item.title}
                    </a>
                  )
                })}
              </div>

              <div className="mt-auto pt-20">
                <button className="w-full py-6 px-10 bg-[#e6e6e6] text-black font-bold flex items-center justify-between group rounded-sm">
                  Experience & Buy
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight size={20} />
                  </motion.div>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
