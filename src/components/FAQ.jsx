import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0) // Default first item open

  const faqs = [
    {
      question: 'Giá đã gồm cổng thanh toán chưa?',
      answer: 'Chưa gồm phí dịch vụ và phí giao dịch của nhà cung cấp.'
    },
    {
      question: 'Ai nhập sản phẩm?',
      answer: 'Hai bên phải chốt số lượng nhập ban đầu. Phần vượt hạn mức được báo giá riêng.'
    },
    {
      question: 'Có đồng bộ sàn không?',
      answer: 'Không mặc định. Mỗi sàn hoặc hệ thống đồng bộ cần khảo sát API.'
    },
    {
      question: 'Có quản lý nhiều kho không?',
      answer: 'Không nằm trong gói Cơ bản hoặc Tiêu chuẩn mặc định.'
    },
    {
      question: 'Có cam kết doanh thu không?',
      answer: 'Không. Website là một phần của quy trình bán hàng và marketing.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIdx(openIdx === index ? -1 : index)
  }

  return (
    <section id="faq" className="landing-section bg-[#080d1a] py-10 lg:py-16 relative overflow-hidden text-white border-y border-cyan-950/80">
      
      {/* ========================================================================= */}
      {/* CYBER CIRCUIT BOARD TECH BACKGROUND                                       */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        
        {/* Radial Center Lighting & Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,57,112,0.45)_0%,rgba(8,13,26,0.85)_60%,#050811_100%)]" />
        
        {/* Soft Ambient Glowing Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* High Precision Vector Circuit Board Traces SVG */}
        <svg
          viewBox="0 0 1440 800"
          className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-screen"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Glow Filter for Cyan Circuit Tracks */}
            <filter id="circuitGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Glowing Linear Gradients */}
            <linearGradient id="traceGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="traceGradBlue" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </linearGradient>

            {/* Chip Grid Matrix Pattern */}
            <pattern id="chipGrid" width="16" height="16" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="15" height="15" fill="none" stroke="#0ea5e9" strokeWidth="0.7" opacity="0.2" />
              <line x1="0" y1="0" x2="15" y2="15" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.15" />
              <line x1="15" y1="0" x2="0" y2="15" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.15" />
            </pattern>
          </defs>

          {/* ================= LAYER 1: BASE SUBSTRATE CIRCUIT GRID ================= */}
          <g stroke="#0369a1" strokeWidth="1" opacity="0.3" fill="none">
            {/* Horizontal & Vertical Guide Tracks */}
            <path d="M 0 100 H 1440 M 0 250 H 1440 M 0 400 H 1440 M 0 550 H 1440 M 0 700 H 1440" strokeDasharray="3 9" />
            <path d="M 200 0 V 800 M 450 0 V 800 M 720 0 V 800 M 990 0 V 800 M 1240 0 V 800" strokeDasharray="3 9" />
          </g>

          {/* ================= LAYER 2: CHIP BLOCKS / IC PACKAGES ================= */}
          <g>
            {/* Top-Left IC Chip */}
            <rect x="70" y="80" width="70" height="50" rx="3" fill="url(#chipGrid)" stroke="#38bdf8" strokeWidth="1.2" opacity="0.4" />
            <rect x="85" y="92" width="40" height="26" rx="2" fill="#0369a1" opacity="0.2" />

            {/* Bottom-Left IC Chip */}
            <rect x="90" y="620" width="80" height="60" rx="3" fill="url(#chipGrid)" stroke="#38bdf8" strokeWidth="1.2" opacity="0.4" />
            <rect x="110" y="635" width="40" height="30" rx="2" fill="#0369a1" opacity="0.2" />

            {/* Top-Right IC Chip */}
            <rect x="1270" y="90" width="80" height="60" rx="3" fill="url(#chipGrid)" stroke="#38bdf8" strokeWidth="1.2" opacity="0.4" />
            <rect x="1290" y="105" width="40" height="30" rx="2" fill="#0369a1" opacity="0.2" />

            {/* Bottom-Right IC Chip */}
            <rect x="1240" y="640" width="90" height="50" rx="3" fill="url(#chipGrid)" stroke="#38bdf8" strokeWidth="1.2" opacity="0.4" />
            <rect x="1265" y="652" width="40" height="26" rx="2" fill="#0369a1" opacity="0.2" />

            {/* Center Mid Packages */}
            <rect x="360" y="220" width="45" height="35" rx="2" fill="url(#chipGrid)" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" />
            <rect x="1040" y="240" width="55" height="35" rx="2" fill="url(#chipGrid)" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" />
            <rect x="380" y="520" width="60" height="40" rx="2" fill="url(#chipGrid)" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" />
            <rect x="1000" y="510" width="50" height="35" rx="2" fill="url(#chipGrid)" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" />
          </g>

          {/* ================= LAYER 3: INTRICATE MAIN CIRCUIT TRACKS (CYAN/BLUE) ================= */}
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            
            {/* --- LEFT WING MAIN TRACES --- */}
            {/* Trace 1: Top-Left Angle bus */}
            <path d="M 0 160 H 120 L 220 260 H 340 L 400 320 H 480" stroke="#00f0ff" strokeWidth="3" filter="url(#circuitGlow)" opacity="0.8" />
            <path d="M 0 190 H 100 L 190 280 H 310 L 370 340 H 460" stroke="#0ea5e9" strokeWidth="1.8" opacity="0.6" />
            <path d="M 0 220 H 80 L 160 300 H 280 L 340 360 H 440" stroke="#0284c7" strokeWidth="1.5" opacity="0.5" />

            {/* Trace 2: Mid-Left Heavy Bus Line */}
            <path d="M 0 380 H 140 L 220 460 H 380 L 440 400 H 520 L 560 360 V 300" stroke="#00f0ff" strokeWidth="3.5" filter="url(#circuitGlow)" opacity="0.85" />
            <path d="M 0 410 H 110 L 190 490 H 350 L 410 430 H 490" stroke="#38bdf8" strokeWidth="2" opacity="0.7" />
            <path d="M 0 440 H 80 L 160 520 H 320 L 380 460 H 460" stroke="#0369a1" strokeWidth="1.5" opacity="0.5" />

            {/* Trace 3: Bottom-Left Radiating Bus */}
            <path d="M 0 680 H 160 L 280 560 H 420 L 500 480 H 580" stroke="#00f0ff" strokeWidth="3" filter="url(#circuitGlow)" opacity="0.8" />
            <path d="M 0 650 H 130 L 250 530 H 390 L 470 450 H 550" stroke="#0ea5e9" strokeWidth="1.8" opacity="0.65" />
            <path d="M 0 620 H 100 L 220 500 H 360" stroke="#0284c7" strokeWidth="1.5" opacity="0.5" />

            {/* --- RIGHT WING MAIN TRACES --- */}
            {/* Trace 4: Top-Right Angle Bus */}
            <path d="M 1440 160 H 1320 L 1220 260 H 1100 L 1040 320 H 960" stroke="#00f0ff" strokeWidth="3" filter="url(#circuitGlow)" opacity="0.8" />
            <path d="M 1440 190 H 1340 L 1250 280 H 1130 L 1070 340 H 980" stroke="#0ea5e9" strokeWidth="1.8" opacity="0.6" />
            <path d="M 1440 220 H 1360 L 1280 300 H 1160 L 1100 360 H 1000" stroke="#0284c7" strokeWidth="1.5" opacity="0.5" />

            {/* Trace 5: Mid-Right Heavy Bus Line */}
            <path d="M 1440 380 H 1300 L 1220 460 H 1060 L 1000 400 H 920 L 880 360 V 300" stroke="#00f0ff" strokeWidth="3.5" filter="url(#circuitGlow)" opacity="0.85" />
            <path d="M 1440 410 H 1330 L 1250 490 H 1090 L 1030 430 H 950" stroke="#38bdf8" strokeWidth="2" opacity="0.7" />
            <path d="M 1440 440 H 1360 L 1280 520 H 1120 L 1060 460 H 980" stroke="#0369a1" strokeWidth="1.5" opacity="0.5" />

            {/* Trace 6: Bottom-Right Radiating Bus */}
            <path d="M 1440 680 H 1280 L 1160 560 H 1020 L 940 480 H 860" stroke="#00f0ff" strokeWidth="3" filter="url(#circuitGlow)" opacity="0.8" />
            <path d="M 1440 650 H 1310 L 1190 530 H 1050 L 970 450 H 890" stroke="#0ea5e9" strokeWidth="1.8" opacity="0.65" />
            <path d="M 1440 620 H 1340 L 1220 500 H 1080" stroke="#0284c7" strokeWidth="1.5" opacity="0.5" />

            {/* --- CENTER MOTHERBOARD DATA CHANNELS --- */}
            {/* Center Vertical Core Lines */}
            <path d="M 720 0 V 180 L 680 220 V 360 L 720 400 V 800" stroke="#00f0ff" strokeWidth="3.5" filter="url(#circuitGlow)" opacity="0.85" />
            <path d="M 690 0 V 160 L 650 200 V 380 L 690 420 V 800" stroke="#38bdf8" strokeWidth="2" opacity="0.6" />
            <path d="M 750 0 V 160 L 790 200 V 380 L 750 420 V 800" stroke="#38bdf8" strokeWidth="2" opacity="0.6" />

            {/* Diagonal Radiating Secondary Branches */}
            <path d="M 680 220 L 580 120 H 480" stroke="#38bdf8" strokeWidth="2" opacity="0.7" />
            <path d="M 790 200 L 890 100 H 990" stroke="#38bdf8" strokeWidth="2" opacity="0.7" />
            <path d="M 680 580 L 580 680 H 460" stroke="#38bdf8" strokeWidth="2" opacity="0.7" />
            <path d="M 790 580 L 890 680 H 1010" stroke="#38bdf8" strokeWidth="2" opacity="0.7" />

            <path d="M 520 400 L 600 480 V 580 H 680" stroke="#00f0ff" strokeWidth="2.5" opacity="0.75" />
            <path d="M 920 400 L 840 480 V 580 H 760" stroke="#00f0ff" strokeWidth="2.5" opacity="0.75" />
          </g>

          {/* ================= LAYER 4: SOLDER PADS & GLOWING CIRCUIT TERMINAL NODES ================= */}
          <g>
            {/* Big Glowing Terminal Nodes */}
            <circle cx="480" cy="320" r="5" fill="#00f0ff" filter="url(#circuitGlow)" />
            <circle cx="480" cy="320" r="2.5" fill="#ffffff" />

            <circle cx="560" cy="300" r="5.5" fill="#00f0ff" filter="url(#circuitGlow)" />
            <circle cx="560" cy="300" r="2.5" fill="#ffffff" />

            <circle cx="580" cy="480" r="5" fill="#00f0ff" filter="url(#circuitGlow)" />
            <circle cx="580" cy="480" r="2.5" fill="#ffffff" />

            <circle cx="960" cy="320" r="5" fill="#00f0ff" filter="url(#circuitGlow)" />
            <circle cx="960" cy="320" r="2.5" fill="#ffffff" />

            <circle cx="880" cy="300" r="5.5" fill="#00f0ff" filter="url(#circuitGlow)" />
            <circle cx="880" cy="300" r="2.5" fill="#ffffff" />

            <circle cx="860" cy="480" r="5" fill="#00f0ff" filter="url(#circuitGlow)" />
            <circle cx="860" cy="480" r="2.5" fill="#ffffff" />

            {/* Secondary Solder Terminals (Hollow Rings) */}
            <circle cx="460" cy="340" r="4.5" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="440" cy="360" r="4.5" fill="none" stroke="#0ea5e9" strokeWidth="1.8" />
            <circle cx="490" cy="430" r="4.5" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="460" cy="460" r="4.5" fill="none" stroke="#0ea5e9" strokeWidth="1.8" />
            <circle cx="550" cy="450" r="4.5" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="360" cy="500" r="4.5" fill="none" stroke="#0ea5e9" strokeWidth="1.8" />

            <circle cx="980" cy="340" r="4.5" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="1000" cy="360" r="4.5" fill="none" stroke="#0ea5e9" strokeWidth="1.8" />
            <circle cx="950" cy="430" r="4.5" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="980" cy="460" r="4.5" fill="none" stroke="#0ea5e9" strokeWidth="1.8" />
            <circle cx="890" cy="450" r="4.5" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="1080" cy="500" r="4.5" fill="none" stroke="#0ea5e9" strokeWidth="1.8" />

            <circle cx="480" cy="120" r="4" fill="#00f0ff" />
            <circle cx="990" cy="100" r="4" fill="#00f0ff" />
            <circle cx="460" cy="680" r="4" fill="#00f0ff" />
            <circle cx="1010" cy="680" r="4" fill="#00f0ff" />

            {/* Solder Points Array Dots (3x1 or 5x1 patterns) */}
            <circle cx="230" cy="240" r="2.5" fill="#38bdf8" opacity="0.6" />
            <circle cx="245" cy="240" r="2.5" fill="#38bdf8" opacity="0.6" />
            <circle cx="260" cy="240" r="2.5" fill="#38bdf8" opacity="0.6" />

            <circle cx="1180" cy="240" r="2.5" fill="#38bdf8" opacity="0.6" />
            <circle cx="1195" cy="240" r="2.5" fill="#38bdf8" opacity="0.6" />
            <circle cx="1210" cy="240" r="2.5" fill="#38bdf8" opacity="0.6" />

            <circle cx="330" cy="580" r="2.5" fill="#38bdf8" opacity="0.6" />
            <circle cx="345" cy="580" r="2.5" fill="#38bdf8" opacity="0.6" />
            <circle cx="360" cy="580" r="2.5" fill="#38bdf8" opacity="0.6" />

            <circle cx="1080" cy="580" r="2.5" fill="#38bdf8" opacity="0.6" />
            <circle cx="1095" cy="580" r="2.5" fill="#38bdf8" opacity="0.6" />
            <circle cx="1110" cy="580" r="2.5" fill="#38bdf8" opacity="0.6" />

            {/* Small Glowing Micro Diodes / SMT Resistors */}
            <rect x="250" y="320" width="18" height="6" rx="2" fill="#00f0ff" opacity="0.7" filter="url(#circuitGlow)" />
            <rect x="1170" y="320" width="18" height="6" rx="2" fill="#00f0ff" opacity="0.7" filter="url(#circuitGlow)" />
            <rect x="280" y="470" width="18" height="6" rx="2" fill="#00f0ff" opacity="0.7" filter="url(#circuitGlow)" />
            <rect x="1140" y="470" width="18" height="6" rx="2" fill="#00f0ff" opacity="0.7" filter="url(#circuitGlow)" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-[11px] font-bold uppercase tracking-wider mb-2 shadow-xs backdrop-blur-sm">
            S10 • Giải Đáp Thắc Mắc
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Các câu trả lời rõ ràng, thẳng thắn cho những băn khoăn phổ biến nhất trước khi triển khai website bán hàng.
          </p>
        </motion.div>

        {/* 2-Column Grid: FAQ list on Left, Mascot Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT: FAQ Accordion List (7 cols) */}
          <div className="lg:col-span-7 space-y-2.5">
            {faqs.map((faq, index) => {
              const isOpen = openIdx === index
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`border rounded-xl transition-all duration-300 overflow-hidden backdrop-blur-md ${
                    isOpen
                      ? 'border-red-400 bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white shadow-xl shadow-red-600/35 ring-2 ring-red-400/30'
                      : 'border-slate-800/90 bg-[#0b1222]/85 hover:bg-[#0e172c]/90 hover:border-cyan-800/60 shadow-md'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-4 py-3.5 flex items-center justify-between gap-3 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-xl cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className={`text-xs sm:text-sm font-bold ${isOpen ? 'text-white' : 'text-white'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen ? 'bg-white text-red-600 rotate-180 shadow-md' : 'bg-slate-800 text-slate-300 border border-slate-700/60'
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-3.5 pt-0 text-xs sm:text-sm text-red-50 leading-relaxed font-normal">
                          <div className="pt-2 border-t border-white/20">
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* RIGHT: Transparent FAQ Mascots Image with gentle floating animation (5 cols) - Hidden on mobile */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center relative select-none pt-2 lg:pt-0">
            {/* Ambient soft glow behind mascots */}
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-cyan-500/20 via-red-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Floating Mascots Image */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 0.8, 0, -0.8, 0]
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.04,
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="relative z-10 cursor-pointer flex items-center justify-center"
            >
              <img
                src="/dudi-faq-mascots.webp"
                alt="DUDI FAQ Mascots"
                className="max-h-[300px] sm:max-h-[360px] lg:max-h-[420px] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] filter transition-all duration-300 hover:drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
              />
            </motion.div>

            {/* Natural Floor Shadow */}
            <motion.div
              animate={{
                scaleX: [1, 0.82, 1],
                scaleY: [1, 0.85, 1],
                opacity: [0.45, 0.22, 0.45]
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-44 h-3.5 bg-gradient-to-r from-transparent via-black/60 to-transparent rounded-full blur-xs -mt-1 pointer-events-none"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
