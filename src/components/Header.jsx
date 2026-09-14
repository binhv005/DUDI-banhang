import React, { useState, useEffect } from 'react'
import { Phone, MessageSquare, ArrowRight, Menu, X } from 'lucide-react'
import { HOTLINE_NUMBER, ZALO_LINK, handlePhoneClick } from '../utils/phoneHandler'

export default function Header({ showToast, onSelectPackage }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Đối tượng', href: '#audience' },
    { name: 'Vấn đề', href: '#problems' },
    { name: 'Đầu ra', href: '#deliverables' },
    { name: 'Bảng giá', href: '#pricing' },
    { name: 'Quy trình', href: '#process' },
    { name: 'Mẫu website', href: '#cases' },
    { name: 'Giới hạn', href: '#limitations' },
    { name: 'FAQ', href: '#faq' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-slate-100'
          : 'bg-white py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg p-1">
          <img
            src="/logo.webp"
            alt="DUDI SOFTWARE Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            width="120"
            height="36"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none whitespace-nowrap">
              DUDI <span className="text-red-600">SOFTWARE</span>
            </span>
            <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider whitespace-nowrap">
              Giải pháp website bán hàng
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 rounded-lg hover:text-red-600 hover:bg-red-50/70 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button (Contact buttons removed as requested) */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:scale-95 rounded-xl shadow-sm hover:shadow-red-500/20 transition-all whitespace-nowrap"
          >
            <span>Tư vấn ngay</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={(e) => handlePhoneClick(e, showToast)}
            className="p-2 text-red-600 bg-red-50 rounded-lg"
            aria-label="Gọi hotline"
          >
            <Phone className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-red-600 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Mở menu điều hướng"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fade-in">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-red-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  handlePhoneClick(e, showToast)
                  setMobileMenuOpen(false)
                }}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" />
                <span>{HOTLINE_NUMBER}</span>
              </button>
              <a
                href={ZALO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-blue-700 bg-blue-50 rounded-lg"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Zalo</span>
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm"
            >
              <span>Nhận tư vấn website bán hàng</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
