import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero({ onCtaClick }) {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-76px)] lg:h-[calc(100vh-76px)] flex items-center bg-cover bg-right sm:bg-center lg:bg-right bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/hero-bg.webp')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading, Value Proposition & CTA with Ambient Loang Effect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 xl:col-span-6 relative"
          >
            {/* Ambient diffused light / loang màu mềm mại đa tầng */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-white/95 via-white/80 to-red-50/40 backdrop-blur-md rounded-3xl border border-white/80 shadow-2xl shadow-red-500/10 -z-10 pointer-events-none" />
            
            {/* Soft decorative animated ambient glow spots */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-red-400/30 rounded-full blur-3xl animate-blob-1 -z-10 pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-400/25 rounded-full blur-3xl animate-blob-2 -z-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl animate-pulse-slow -z-10 pointer-events-none" />

            <div className="flex flex-col items-start space-y-6 text-left p-2 sm:p-4">
              {/* Service Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-red-100/90 border border-red-200 text-red-700 text-[11px] sm:text-xs font-bold shadow-sm backdrop-blur-sm whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-600 animate-pulse shrink-0"></span>
                <span className="whitespace-nowrap">Dịch vụ thiết kế website bán hàng chuyên nghiệp</span>
              </motion.div>

              {/* Main H1 Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight leading-[1.2]"
              >
                Website Bán Hàng <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-amber-600">
                  Tối Ưu Nhận Đơn
                </span> Cho Doanh Nghiệp
              </motion.h1>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="pt-2 w-full sm:w-auto flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onCtaClick && onCtaClick()}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-lg shadow-red-600/30 transition-all cursor-pointer group animate-shimmer whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">Nhận tư vấn website bán hàng</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-4 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-sm hover:shadow"
                >
                  <span>Xem 3 gói bảng giá</span>
                </motion.a>
              </motion.div>
            </div>

          </motion.div>

          {/* Right Column: Empty spacer to let the 3D background visual be fully visible */}
          <div className="lg:col-span-5 xl:col-span-6 min-h-[300px] pointer-events-none"></div>

        </div>
      </div>
    </section>
  )
}
