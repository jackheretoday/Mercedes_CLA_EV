import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Heart, MapPin, User, X, ChevronRight, Sun, Moon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from "@/lib/utils"
import { useTheme } from "@/context/ThemeContext"

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null)
  const { theme, toggleTheme, isDark } = useTheme()

  const menuData = {
    Models: [
      { title: "All models", type: "primary" },
      { title: "New models", type: "primary" },
      { divider: true },
      { title: "Electric", type: "secondary" },
      { title: "Plug-in Hybrid", type: "secondary" },
      { divider: true },
      { title: "Limousine", type: "secondary", path: "/limousine" },
      { title: "SUV Range", type: "secondary", path: "/suv" },
      { title: "Hatchback", type: "secondary" },
      { title: "Coupés", type: "secondary" },
      { title: "Cabriolets / Roadsters", type: "secondary", path: "/cabriolets" },
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
      { title: "Mercedes-AMG", type: "secondary", path: "/amg" },
      { title: "Mercedes-Maybach", type: "secondary", path: "/limousine" },
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
        className="fixed top-0 left-0 w-full z-[60] flex items-center h-24 px-6 lg:px-10 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-black/10 dark:border-white/5 transition-colors duration-500"
      >
        {/* Left: Navigation Links */}
        <div className="flex-1 hidden lg:flex items-center gap-8 xl:gap-10">
          {Object.keys(menuData).map((item) => (
            <button 
              key={item} 
              onMouseEnter={() => setActiveMenu(item)}
              className="text-sm xl:text-base font-medium tracking-wider text-zinc-700 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors flex items-center gap-1 group h-full"
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
          <Link to="/" className="group relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              <img 
                src="https://assets.oneweb.mercedes-benz.com/plugin/hp-assets/latest/images/brands/mercedes-benz/logo-140years.webp" 
                alt="Mercedes-Benz 140 Years" 
                className="h-20 lg:h-24 w-auto object-contain transition-all duration-700 group-hover:scale-105 filter invert dark:invert-0" 
              />
            </motion.div>
          </Link>
        </div>

        {/* Right: Utilities, Theme Toggle & Login */}
        <div className="flex-1 flex items-center justify-end gap-5 lg:gap-8">
          <div className="hidden 2xl:flex items-center gap-1 cursor-pointer group">
            <span className="text-sm font-medium text-zinc-600 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
              Provider/...
            </span>
          </div>
          
          <div className="flex items-center gap-4 lg:gap-6 border-l border-black/10 dark:border-white/10 pl-5 lg:pl-8">
            <button 
              aria-label="Search"
              className="text-zinc-700 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors"
            >
              <Search size={22} strokeWidth={1.5} />
            </button>
            <button 
              aria-label="Wishlist"
              className="text-zinc-700 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors hidden sm:block"
            >
              <Heart size={22} strokeWidth={1.5} />
            </button>
            <button 
              aria-label="Dealers"
              className="text-zinc-700 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors hidden sm:block"
            >
              <MapPin size={22} strokeWidth={1.5} />
            </button>
          </div>

          {/* Theme Change Button */}
          <div className="flex items-center border-l border-black/10 dark:border-white/10 pl-5 lg:pl-6">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
              className="relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-zinc-800 dark:text-amber-300 transition-all duration-300 group shadow-sm"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5"
                  >
                    <Moon size={16} strokeWidth={2} className="text-amber-300" />
                    <span className="text-[10px] font-michroma uppercase tracking-widest text-zinc-300 hidden md:inline">
                      Dark
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5"
                  >
                    <Sun size={16} strokeWidth={2} className="text-amber-500" />
                    <span className="text-[10px] font-michroma uppercase tracking-widest text-zinc-700 hidden md:inline">
                      Light
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* User / Login */}
          <div className="flex items-center gap-3 lg:gap-4 border-l border-black/10 dark:border-white/10 pl-5 lg:pl-8 cursor-pointer group">
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-colors">
              <User size={20} strokeWidth={1.5} className="text-zinc-800 dark:text-white" />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[10px] text-zinc-500 dark:text-white/40 uppercase tracking-tighter leading-none mb-1">
                Private customer
              </span>
              <span className="text-sm lg:text-base font-bold text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-white/80 transition-colors">
                Login
              </span>
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
            
            {/* Menu Content Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-screen w-full max-w-xl bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white z-[80] shadow-2xl p-10 lg:p-20 flex flex-col overflow-y-auto border-l border-black/10 dark:border-white/10 transition-colors duration-500"
            >
              <button 
                onClick={() => setActiveMenu(null)}
                className="absolute top-8 right-8 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <X size={28} strokeWidth={1.5} />
              </button>

              <h2 className="font-serif text-5xl lg:text-6xl text-zinc-900 dark:text-white mb-10 tracking-tight">
                {activeMenu}
              </h2>

              <div className="flex flex-col gap-5">
                {menuData[activeMenu].map((item, idx) => {
                  if (item.divider) return <div key={idx} className="h-[1px] bg-black/10 dark:bg-white/10 my-3" />
                  
                  const Component = item.path ? Link : 'a'
                  const props = item.path ? { to: item.path } : { href: "#" }

                  return (
                    <Component 
                      key={idx}
                      {...props}
                      onClick={() => setActiveMenu(null)}
                      className={cn(
                        "transition-all duration-300 hover:translate-x-2",
                        item.type === "primary" 
                          ? "text-xl font-bold text-zinc-900 dark:text-white" 
                          : "text-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                      )}
                    >
                      {item.title}
                    </Component>
                  )
                })}
              </div>

              <div className="mt-auto pt-16">
                <button 
                  onClick={() => setActiveMenu(null)}
                  className="w-full py-5 px-8 bg-zinc-900 text-white dark:bg-white dark:text-black font-michroma text-xs font-bold uppercase tracking-wider flex items-center justify-between group rounded-xl shadow-lg"
                >
                  <span>Experience & Buy</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight size={18} />
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
