import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import SUVPage from "./pages/SUVPage"
import CabrioletPage from "./pages/CabrioletPage"
import AMGPage from "./pages/AMGPage"
import LimousinePage from "./pages/LimousinePage"
import ScrollToTop from "./components/ScrollToTop"
import { ThemeProvider } from "./context/ThemeContext"

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="relative bg-[#fcfcfd] dark:bg-black text-zinc-900 dark:text-white min-h-screen font-inter overflow-x-clip transition-colors duration-500">
          <Navbar />
          <main className="min-h-screen relative">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/limousine" element={<LimousinePage />} />
              <Route path="/suv" element={<SUVPage />} />
              <Route path="/cabriolets" element={<CabrioletPage />} />
              <Route path="/amg" element={<AMGPage />} />
            </Routes>
          </main>

          <footer className="relative z-20 bg-zinc-100 dark:bg-black text-zinc-800 dark:text-white border-t border-black/10 dark:border-white/5 py-20 px-10 text-center transition-colors duration-500">
            <img
              src="https://assets.oneweb.mercedes-benz.com/plugin/hp-assets/latest/images/brands/mercedes-benz/logo-140years.webp"
              alt="Mercedes-Benz"
              className="h-12 w-auto mx-auto mb-8 object-contain opacity-60 dark:opacity-40 hover:opacity-100 transition-all filter invert dark:invert-0"
            />
            <p className="text-[10px] tracking-widest text-zinc-500 dark:text-white/30 uppercase">
              © 2026 Mercedes-Benz AG. All Rights Reserved.
            </p>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  )
}
