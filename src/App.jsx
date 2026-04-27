import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import SUVPage from "./pages/SUVPage"
import CabrioletPage from "./pages/CabrioletPage"
import AMGPage from "./pages/AMGPage"
import ScrollToTop from "./components/ScrollToTop"
import { motion } from "framer-motion"

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative bg-black min-h-screen font-inter overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/suv" element={<SUVPage />} />
            <Route path="/cabriolets" element={<CabrioletPage />} />
            <Route path="/amg" element={<AMGPage />} />
          </Routes>
        </main>

        <footer className="relative z-20 bg-black border-t border-white/5 py-20 px-10 text-center">
          <img
            src="https://assets.oneweb.mercedes-benz.com/plugin/hp-assets/latest/images/brands/mercedes-benz/logo-140years.webp"
            alt="Mercedes-Benz"
            className="h-12 w-auto mx-auto mb-8 object-contain opacity-40 hover:opacity-100 transition-opacity"
          />
          <p className="text-[10px] tracking-widest text-white/20 uppercase">© 2026 Mercedes-Benz AG. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  )
}
