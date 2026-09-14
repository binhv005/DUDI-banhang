import React, { useState, useEffect } from 'react'
import { Phone, MessageSquare, ArrowUp } from 'lucide-react'
import { ZALO_LINK, handlePhoneClick } from '../utils/phoneHandler'

export default function FloatingActions({ showToast }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero (usually ~450px)
      const heroElement = document.getElementById('hero')
      if (heroElement) {
        const heroBottom = heroElement.getBoundingClientRect().bottom
        setIsVisible(heroBottom < 100)
      } else {
        setIsVisible(window.scrollY > 400)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed right-4 sm:right-6 bottom-6 z-40 flex flex-col items-center gap-3 animate-slide-up transition-all"
      aria-label="Cụm phím tác vụ nhanh"
    >
      {/* 1. Call Button (Top) */}
      <button
        onClick={(e) => handlePhoneClick(e, showToast)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl hover:shadow-red-500/40 active:scale-95 transition-all flex items-center justify-center cursor-pointer group relative"
        title="Gọi điện hoặc sao chép Hotline 0909 163 821"
        aria-label="Gọi hotline 0909 163 821"
      >
        <span className="absolute -inset-1 rounded-full bg-red-500/30 animate-ping pointer-events-none"></span>
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform relative z-10" />
      </button>

      {/* 2. Zalo Button (Middle) */}
      <a
        href={ZALO_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-blue-500/40 active:scale-95 transition-all flex items-center justify-center group font-bold text-xs sm:text-sm tracking-tight"
        title="Nhắn tin qua Zalo"
        aria-label="Chat Zalo với DUDI"
      >
        <span>Zalo</span>
      </a>

      {/* 3. Scroll To Top Button (Bottom - below Call and Zalo) */}
      <button
        onClick={scrollToTop}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-slate-900/30 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
        title="Cuộn lên đầu trang"
        aria-label="Lên đầu trang"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  )
}
