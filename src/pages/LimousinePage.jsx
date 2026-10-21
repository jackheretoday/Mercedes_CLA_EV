import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  ShieldCheck,
  Volume2,
  Wind,
  DoorClosed,
  Wifi,
  Wine,
  Gauge,
  Sliders,
  ChevronRight,
  ArrowUpRight,
  Check,
  Compass,
  PhoneCall
} from 'lucide-react'
import { cn } from "@/lib/utils"

export default function LimousinePage() {
  const [selectedModel, setSelectedModel] = useState(0)
  const [activeAtmosphere, setActiveAtmosphere] = useState('presidential')
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const limousineModels = [
    {
      id: "maybach-s680",
      name: "Mercedes-Maybach S 680",
      badge: "V12 Biturbo Flagship",
      tagline: "The Zenith of Aristocratic Opulence",
      price: "₹ 3,44,00,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hDA-FS8tRGQAsRgbTrr_0NUj3siZ4Ix_uHhEzUbpMUkuZvMt3qiJHAA&s=10",
      specs: {
        engine: "5,980 cc V12 Biturbo",
        power: "612 hp (450 kW)",
        torque: "900 Nm",
        acceleration: "0-100 km/h in 4.5s",
        wheelbase: "3,396 mm (Extended Suite)",
        transmission: "9G-TRONIC 4MATIC"
      },
      highlights: [
        "Hand-finished two-tone paintwork with fine dividing line",
        "Robbe & Berking silver-plated champagne flutes with holder",
        "Burmester® High-End 4D Surround Sound (31 Speakers, 1,750W)",
        "Executive rear seats with 43.5° recline and calf massage"
      ]
    },
    {
      id: "maybach-eqs",
      name: "Mercedes-Maybach EQS 680",
      badge: "100% Electric Ultra-Luxury",
      tagline: "Silent Grandeur for a Conscious Era",
      price: "₹ 2,25,00,000",
      image: "https://www.mercedes-benz.co.in/content/dam/hq/passengercars/cars/s-class/mercedes-maybach-s-class-z223-pi/overview/interior/10-2022/images/mercedes-maybach-s-class-z223-interior-hotspot-5000x2500-10-2022.jpg?im=Resize,width=1920",
      specs: {
        engine: "Dual Permanently Synchronous Motors",
        power: "658 hp (484 kW)",
        torque: "950 Nm",
        acceleration: "0-100 km/h in 4.4s",
        wheelbase: "3,210 mm",
        transmission: "Fully Variable 4MATIC Electric All-Wheel Drive"
      },
      highlights: [
        "MBUX Hyperscreen with bespoke Maybach zero-layer graphics",
        "Acoustic comfort glass with active road noise cancellation",
        "Up to 611 km pure electric range (WLTP)",
        "Zero tailpipe emissions with vegan certified interior trims available"
      ]
    },
    {
      id: "maybach-haute-voiture",
      name: "Maybach Haute Voiture",
      badge: "Limited Edition (1 of 150)",
      tagline: "Haute Couture Transformed Into Automotive Art",
      price: "Price Upon Application",
      image: "https://www.mercedes-benz.co.uk/content/dam/hq/passengercars/cars/s-class/mercedes-maybach-s-class-z223-pi/overview/specialedition/10-2022/images/mercedes-maybach-s-class-z223-specialedition-haute-voiture-01-1884x1884-10-2022.jpg",
      specs: {
        engine: "Handcrafted 6.0L V12 Biturbo",
        power: "612 hp (450 kW)",
        torque: "900 Nm",
        acceleration: "0-100 km/h in 4.5s",
        wheelbase: "3,396 mm",
        transmission: "Exclusive Sindelfingen Atelier Build"
      },
      highlights: [
        "High-fashion bouclé fabric weave in blue, beige, and rose gold",
        "Custom matching travel luggage set and collectible miniature",
        "Numbered 1 of 150 center console badge in 24k rose gold",
        "Shimmering metallic nautical blue with rose gold two-tone finish"
      ]
    }
  ]

  const atmospheres = [
    {
      id: "presidential",
      title: "Presidential Lounge",
      subtitle: "Unwind with chilled champagne and tailored warmth",
      icon: Wine,
      color: "from-amber-500/20 via-yellow-500/10 to-transparent",
      image: "https://limousinesworld.com/wp-content/uploads/2021/01/interior1-1.png",
      features: [
        "Refrigerated compartment with temperature memory",
        "Silver-plated champagne flutes anchored in center console",
        "43.5° recline with continuous calf and footrest warming",
        "Active ambient lighting with 64-colour warm gold radiance"
      ]
    },
    {
      id: "executive",
      title: "Executive Boardroom",
      subtitle: "A seamless high-speed mobile command center",
      icon: Wifi,
      color: "from-blue-500/20 via-indigo-500/10 to-transparent",
      image: "https://images.netdirector.co.uk/gforces-auto/image/upload/w_313,h_235,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/b6388f2003ab89c1f5ca98cae8517513/mercedes_benz_s_class_wv223_comfort_mbux_hotspot_fondtablet_2560x1920_08_2020.jpg",
      features: [
        "Twin folding aircraft tables wrapped in fine nappa leather",
        "Dual 11.6-inch high-resolution MBUX rear entertainment screens",
        "Removable 7-inch MBUX rear tablet with wireless smart home control",
        "Dual Qi-wireless inductive charging trays and 100W USB-C ports"
      ]
    },
    {
      id: "sanctuary",
      title: "Acoustic Sanctuary",
      subtitle: "Complete disconnect from the outside world",
      icon: Volume2,
      color: "from-emerald-500/20 via-teal-500/10 to-transparent",
      image: "https://s1.cdn.autoevolution.com/images/news/the-s-class-coupe-has-the-quietest-interior-of-a-production-car-82862_1.jpg",
      features: [
        "Active road noise compensation using Burmester counter-frequencies",
        "Double-laminated acoustic safety glass with infrared reflection",
        "AIR-BALANCE package with bespoke No. 12 Mood ionization fragrance",
        "10 distinct massage programs including hot-stone relaxing sequence"
      ]
    }
  ]

  const craftsmanshipHighlights = [
    {
      title: "Electric Comfort Doors",
      category: "EFFORTLESS ACCESS",
      desc: "Rear doors that open and close automatically with a gentle touch, through the key, or via gesture control by the driver.",
      image: "https://www.mercedes-benz.co.uk/content/dam/hq/passengercars/cars/s-class/mercedes-maybach-s-class-z223-pi/overview/eqiupment/10-2022/images/mercedes-maybach-s-class-z223-equipment-comfort-doors-764x573-10-2022.jpg",
      icon: DoorClosed
    },
    {
      title: "Burmester® 4D Sound",
      category: "ACOUSTIC PERFECTION",
      desc: "31 high-performance speakers and 8 structural sound transducers built directly into the seat frames deliver tactile bass vibrations you feel.",
      image: "https://www.mercedes-benz.co.uk/content/dam/hq/passengercars/cars/s-class/mercedes-maybach-s-class-z223-pi/overview/eqiupment/10-2022/images/mercedes-maybach-s-class-z223-equipment-comfort-noisecompensation-764x573-10-2022.jpg",
      icon: Volume2
    },
    {
      title: "Active Ambient Luminescence",
      category: "IMMERSIVE LIGHT",
      desc: "253 individually addressable LEDs embedded within high-grade optic fibers reinforce safety cues and visual serenity across the entire cabin.",
      image: "https://www.mercedes-benz.co.uk/content/dam/hq/passengercars/cars/s-class/mercedes-maybach-s-class-z223-pi/overview/eqiupment/10-2022/images/mercedes-maybach-s-class-z223-equipment-comfort-backlight-764x573-10-2022.jpg",
      icon: Sparkles
    },
    {
      title: "Air Balance Fragrance Atomizer",
      category: "OLFACTORY COMFORT",
      desc: "Individual cabin fragrance dispensation featuring negative oxygen ion generation to cleanse ambient air and soothe passenger senses.",
      image: "https://www.mercedes-benz.co.uk/content/dam/hq/passengercars/cars/s-class/mercedes-maybach-s-class-z223-pi/overview/eqiupment/10-2022/images/mercedes-maybach-s-class-z223-equipment-comfort-scent-764x573-10-2022.jpg",
      icon: Wind
    }
  ]

  const activeModelData = limousineModels[selectedModel]
  const currentAtmosphere = atmospheres.find(a => a.id === activeAtmosphere)

  return (
    <div className="min-h-screen bg-[#fcfcfd] dark:bg-[#060606] text-zinc-900 dark:text-white transition-colors duration-500 overflow-x-clip relative">
      {/* Background Ambience Glows */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-amber-500/10 dark:bg-amber-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 -left-40 w-[700px] h-[700px] bg-indigo-500/10 dark:bg-indigo-900/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/mercedes_amg_s_class_sideview.jpeg"
            alt="Mercedes-Maybach S-Class Limousine"
            className="w-full h-full object-cover object-center scale-105 filter brightness-95 dark:brightness-90 transition-transform duration-1000 ease-out"
          />
          {/* Dark top vignette for header and title legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none" />
          {/* White fade towards the bottom of hero section image */}
          <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center text-white mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black font-michroma tracking-tighter uppercase mb-6 drop-shadow-2xl">
              LIMOUSINE
            </h1>

            <p className="text-lg sm:text-2xl font-light tracking-wide max-w-3xl mx-auto text-white/95 mb-4 font-serif italic drop-shadow-md">
              "The definition of supreme arrival. Where time stands still and ultimate comfort reigns."
            </p>

            <p className="text-xs sm:text-sm tracking-[0.35em] text-white/90 uppercase max-w-2xl mx-auto mb-10 drop-shadow-md">
              Mercedes-Maybach Extended Wheelbase Range • Handcrafted in Sindelfingen
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <button
                onClick={() => {
                  const el = document.getElementById("fleet-showcase")
                  el?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-8 py-4 bg-zinc-950 text-white font-michroma text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-amber-400 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-xl border border-zinc-800"
              >
                Explore Fleet
              </button>

              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="px-8 py-4 border border-zinc-900/30 bg-white/80 backdrop-blur-md text-zinc-900 font-michroma text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-zinc-950 hover:text-white transition-all duration-300 shadow-md"
              >
                VIP Commission
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-500 pointer-events-none">
          <span className="text-[9px] uppercase tracking-[0.4em] font-michroma font-medium">The Extended Silhouette</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-600 dark:from-zinc-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Fleet Showcase Section */}
      <section id="fleet-showcase" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-michroma tracking-[0.3em] uppercase mb-3">
              <Compass size={16} />
              <span>The Limousine Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-michroma tracking-tight">
              Distinguished Fleet
            </h2>
          </div>

          {/* Model Switcher Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-zinc-200/80 dark:bg-zinc-900/80 border border-black/5 dark:border-white/10 backdrop-blur-md">
            {limousineModels.map((model, idx) => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(idx)}
                className={cn(
                  "px-5 py-2.5 rounded-lg text-xs font-michroma tracking-wider transition-all duration-300",
                  selectedModel === idx
                    ? "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-md font-bold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                )}
              >
                {model.name.replace("Mercedes-", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Active Model Spotlight Card */}
        <motion.div
          key={activeModelData.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-950/70 overflow-hidden shadow-2xl backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Column */}
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[580px] overflow-hidden bg-zinc-900 group">
              <img
                src={activeModelData.image}
                alt={activeModelData.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-michroma text-[10px] tracking-widest uppercase">
                  {activeModelData.badge}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60 font-michroma mb-1">Starting From</p>
                  <p className="text-3xl font-michroma font-bold text-amber-300">{activeModelData.price}</p>
                </div>
                <div className="hidden sm:block text-right">
                  <p className="text-xs uppercase tracking-widest text-white/60 font-michroma">Production</p>
                  <p className="text-sm font-semibold text-white">Custom Commission</p>
                </div>
              </div>
            </div>

            {/* Spec & Details Column */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-amber-600 dark:text-amber-400 font-michroma block mb-2">
                  Flagship Specification
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold font-michroma tracking-tight mb-3">
                  {activeModelData.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                  {activeModelData.tagline}
                </p>

                {/* Specs Matrix */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-black/5 dark:border-white/5">
                    <span className="text-[10px] font-michroma uppercase text-zinc-500 dark:text-zinc-400 block mb-1">
                      Powertrain
                    </span>
                    <span className="text-sm font-bold tracking-tight block">
                      {activeModelData.specs.engine}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-black/5 dark:border-white/5">
                    <span className="text-[10px] font-michroma uppercase text-zinc-500 dark:text-zinc-400 block mb-1">
                      Power Output
                    </span>
                    <span className="text-sm font-bold tracking-tight block">
                      {activeModelData.specs.power}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-black/5 dark:border-white/5">
                    <span className="text-[10px] font-michroma uppercase text-zinc-500 dark:text-zinc-400 block mb-1">
                      Torque
                    </span>
                    <span className="text-sm font-bold tracking-tight block">
                      {activeModelData.specs.torque}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-black/5 dark:border-white/5">
                    <span className="text-[10px] font-michroma uppercase text-zinc-500 dark:text-zinc-400 block mb-1">
                      Acceleration
                    </span>
                    <span className="text-sm font-bold tracking-tight text-amber-600 dark:text-amber-400 block">
                      {activeModelData.specs.acceleration}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-10">
                  <span className="text-[10px] font-michroma uppercase text-zinc-400 tracking-widest block mb-1">
                    Signature Amenities
                  </span>
                  {activeModelData.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-black/10 dark:border-white/10 flex items-center gap-4">
                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="flex-1 py-4 bg-zinc-900 text-white dark:bg-white dark:text-black font-michroma text-xs font-bold uppercase tracking-wider rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <span>Book Private Viewing</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* First-Class Rear Lounge Experience Visualizer */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.5em] text-amber-600 dark:text-amber-400 font-michroma block mb-3">
            First-Class Rear Compartment
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-michroma tracking-tight mb-4">
            Curated Atmospheres
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
            Select an executive mode below to see how the Maybach Limousine adapts its sound, illumination, and seating ergonomics for the journey.
          </p>
        </div>

        {/* Atmosphere Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {atmospheres.map((atm) => {
            const Icon = atm.icon
            const isActive = activeAtmosphere === atm.id
            return (
              <button
                key={atm.id}
                onClick={() => setActiveAtmosphere(atm.id)}
                className={cn(
                  "p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden",
                  isActive
                    ? "border-amber-500/50 bg-amber-500/5 dark:bg-amber-400/10 shadow-lg"
                    : "border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900/50 hover:border-black/20 dark:hover:border-white/20"
                )}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                    isActive ? "bg-amber-500 text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                  )}>
                    <Icon size={24} />
                  </div>
                  {isActive && (
                    <span className="text-[10px] font-michroma uppercase px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                      Active Mode
                    </span>
                  )}
                </div>
                <h4 className="text-xl font-bold font-michroma tracking-tight mb-1">{atm.title}</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{atm.subtitle}</p>
              </button>
            )
          })}
        </div>

        {/* Active Atmosphere Details Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAtmosphere.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className={cn(
              "p-8 lg:p-14 rounded-3xl border border-black/10 dark:border-white/10 bg-gradient-to-br shadow-xl backdrop-blur-md relative overflow-hidden",
              currentAtmosphere.color,
              "bg-white/80 dark:bg-zinc-950/80"
            )}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-[11px] font-michroma uppercase tracking-[0.4em] text-amber-600 dark:text-amber-400 block mb-2">
                  Rear Suite Configuration
                </span>
                <h3 className="text-3xl md:text-5xl font-bold font-michroma tracking-tight mb-4">
                  {currentAtmosphere.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-base mb-8 max-w-xl leading-relaxed">
                  {currentAtmosphere.subtitle}. Every individual setting is memorized to passenger profiles and synchronizes through the MBUX Touch Tablet.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentAtmosphere.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-black/5 dark:border-white/5">
                      <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs font-medium leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-zinc-900">
                  <img
                    src={currentAtmosphere.image}
                    alt={currentAtmosphere.title}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Craftsmanship Highlights Grid */}
      <section className="py-28 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.5em] text-amber-600 dark:text-amber-400 font-michroma block mb-3">
            Mastery of the Detail
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-michroma tracking-tight">
            Craftsmanship & Innovation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {craftsmanshipHighlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900/50 hover:border-amber-500/40 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 bg-zinc-950 border border-black/5 dark:border-white/5 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-amber-300 flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400 font-michroma block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold font-michroma tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-michroma text-zinc-400 group-hover:text-amber-500 transition-colors">
                  <span>Explore Feature</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Extended Dimension & Silhouette Showcase */}
      <section className="py-24 px-6 lg:px-12 border-t border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.5em] text-amber-600 dark:text-amber-400 font-michroma block mb-3">
              Imperial Proportions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-michroma tracking-tight mb-6">
              5,469 mm of Pure Majesty
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
              The Maybach Limousine features an extended wheelbase lengthened by 180 mm entirely dedicated to the rear occupants. With active rear-axle steering that pivots the rear wheels up to 10°, this imperial carriage turns with the agility of a compact saloon.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-sm">
                <span className="text-xs font-michroma uppercase text-zinc-500">Overall Vehicle Length</span>
                <span className="text-base font-bold font-michroma text-zinc-900 dark:text-white">5,469 mm</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-sm">
                <span className="text-xs font-michroma uppercase text-zinc-500">Executive Wheelbase</span>
                <span className="text-base font-bold font-michroma text-amber-600 dark:text-amber-400">3,396 mm</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-sm">
                <span className="text-xs font-michroma uppercase text-zinc-500">Max Recline Angle</span>
                <span className="text-base font-bold font-michroma text-zinc-900 dark:text-white">43.5 Degrees</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-zinc-900">
              <img
                src="/images/Limousine.jpg.webp"
                alt="Maybach Side Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action: VIP Concierge Section */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10">


          <h2 className="text-4xl md:text-7xl font-bold font-michroma tracking-tighter mb-6 uppercase">
            Commission Your Limousine
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Every Maybach Limousine is built as a singular expression of its owner. Request a private appointment with our Sindelfingen Center of Excellence concierge.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="w-full sm:w-auto px-10 py-5 bg-zinc-900 text-white dark:bg-white dark:text-black font-michroma text-xs font-bold uppercase tracking-[0.25em] rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
            >
              <PhoneCall size={16} />
              <span>Request Private Consultation</span>
            </button>
            <a
              href="tel:+9118001029222"
              className="w-full sm:w-auto px-10 py-5 border border-black/20 dark:border-white/20 bg-transparent text-zinc-900 dark:text-white font-michroma text-xs font-bold uppercase tracking-[0.25em] rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            >
              Maybach Concierge: 1800-102-9222
            </a>
          </div>
        </div>
      </section>

      {/* VIP Consultation Modal */}
      <AnimatePresence>
        {isConsultationModalOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConsultationModalOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative z-10 w-full max-w-lg rounded-3xl bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 p-8 md:p-10 shadow-2xl text-zinc-900 dark:text-white"
            >
              {formSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center mb-6">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold font-michroma mb-3">Appointment Confirmed</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    A dedicated Maybach Client Advisor has received your commission inquiry and will reach out within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false)
                      setIsConsultationModalOpen(false)
                    }}
                    className="px-8 py-3 bg-zinc-900 text-white dark:bg-white dark:text-black font-michroma text-xs font-bold uppercase rounded-lg"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-[10px] font-michroma uppercase text-amber-600 dark:text-amber-400 tracking-widest block">
                        VIP Service
                      </span>
                      <h3 className="text-2xl font-bold font-michroma">Maybach Atelier</h3>
                    </div>
                    <button
                      onClick={() => setIsConsultationModalOpen(false)}
                      className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm"
                    >
                      ✕
                    </button>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setFormSubmitted(true)
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="text-xs uppercase font-michroma tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1.5">
                        Selected Limousine
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-sm focus:outline-none focus:border-amber-500 font-michroma">
                        <option>Mercedes-Maybach S 680 (V12 Biturbo)</option>
                        <option>Mercedes-Maybach EQS 680 (Electric)</option>
                        <option>Maybach Haute Voiture Limited Edition</option>
                        <option>Mercedes-Benz S 450d Limousine</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs uppercase font-michroma tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1.5">
                          Full Name
                        </label>
                        <input
                          required
                          placeholder="Lord / Lady / Dr."
                          className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-sm focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase font-michroma tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1.5">
                          Contact Number
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-sm focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs uppercase font-michroma tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1.5">
                        City / Preferred Showroom
                      </label>
                      <input
                        required
                        placeholder="Mumbai / Delhi / Bengaluru"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-michroma tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1.5">
                        Preferred Experience
                      </label>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <label className="flex items-center gap-2 p-2.5 rounded-lg border border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/50 cursor-pointer">
                          <input type="radio" name="exp" defaultChecked className="accent-amber-500" />
                          <span>Private Atelier Visit</span>
                        </label>
                        <label className="flex items-center gap-2 p-2.5 rounded-lg border border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/50 cursor-pointer">
                          <input type="radio" name="exp" className="accent-amber-500" />
                          <span>Chauffeur Home Demo</span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 mt-2 bg-zinc-900 text-white dark:bg-white dark:text-black font-michroma text-xs font-bold uppercase tracking-widest rounded-xl hover:opacity-90 transition-opacity"
                    >
                      Confirm Private Appointment
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
