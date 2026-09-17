import React from 'react'
import { ArrowRight, Phone, MessageSquare, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { HOTLINE_NUMBER, ZALO_LINK, handlePhoneClick } from '../utils/phoneHandler'

export default function FinalCTA({ showToast, onCtaClick }) {
  return (
    <section id="final-cta" className="landing-section py-8 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
      
      {/* ========================================================= */}
      {/* OUTER AMBIENT LOANG GLOW AURA (Behind the card)           */}
      {/* ========================================================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-rose-400/20 via-red-500/20 to-pink-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-6 right-[10%] w-[380px] h-[380px] bg-gradient-to-br from-rose-500/25 via-red-500/20 to-transparent rounded-full blur-3xl animate-blob-1 pointer-events-none" />
      <div className="absolute bottom-6 left-[10%] w-[380px] h-[380px] bg-gradient-to-tr from-red-500/25 via-rose-400/20 to-amber-400/20 rounded-full blur-3xl animate-blob-2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Card with Modern Hexagon Tech & Internal Loang Background */}
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#edf2f7] to-[#e6ecf2] border border-red-200/50 shadow-[0_22px_60px_rgba(225,29,72,0.12)] py-10 sm:py-14 px-5 sm:px-8 lg:px-12 text-center text-slate-900">
          
          {/* ========================================================= */}
          {/* INTERNAL MULTI-COLOR LOANG GLOW MESH                     */}
          {/* ========================================================= */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-red-200/45 via-rose-200/40 to-amber-100/40 rounded-full blur-3xl animate-pulse-slow pointer-events-none z-0" />
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-rose-400/25 rounded-full blur-3xl animate-blob-1 pointer-events-none z-0" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-red-400/25 rounded-full blur-3xl animate-blob-2 pointer-events-none z-0" />

          {/* ========================================================= */}
          {/* VECTOR DIAGONAL CAPSULES & CIRCLES - MINIMAL CORNERS      */}
          {/* ========================================================= */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
            <svg
              viewBox="0 0 1200 600"
              className="absolute inset-0 w-full h-full object-cover"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* ================= LEFT SIDE (TUCKED TO CORNER) ================= */}
              <g opacity="0.95">
                {/* Bottom-Left Corner Red Triangle */}
                <polygon points="0,470 0,600 130,600" fill="#e53935" />

                {/* Top-Left Dots */}
                <circle cx="50" cy="35" r="10" fill="#1e293b" />
                <circle cx="95" cy="55" r="32" fill="#e53935" />
                <circle cx="100" cy="190" r="13" fill="#1e293b" />

                {/* Thick Dark Navy Capsule Bar */}
                <line x1="-30" y1="60" x2="65" y2="155" stroke="#1e293b" strokeWidth="46" strokeLinecap="round" />

                {/* Mid Red Capsule Bar */}
                <line x1="-30" y1="220" x2="45" y2="295" stroke="#e53935" strokeWidth="24" strokeLinecap="round" />

                {/* Thin Dark Navy Bar */}
                <line x1="-30" y1="310" x2="75" y2="415" stroke="#1e293b" strokeWidth="18" strokeLinecap="round" />
              </g>

              {/* ================= RIGHT SIDE (TUCKED TO CORNER) ================= */}
              <g opacity="0.95">
                {/* Top-Right Corner Red Triangle */}
                <polygon points="1070,0 1200,0 1200,130" fill="#e53935" />

                {/* Upper Right Bars */}
                <line x1="1135" y1="185" x2="1230" y2="280" stroke="#1e293b" strokeWidth="18" strokeLinecap="round" />
                <line x1="1155" y1="305" x2="1230" y2="380" stroke="#e53935" strokeWidth="24" strokeLinecap="round" />

                {/* Bottom-Right Dots */}
                <circle cx="1100" cy="410" r="13" fill="#1e293b" />
                <circle cx="1105" cy="545" r="32" fill="#e53935" />
                <circle cx="1150" cy="565" r="10" fill="#1e293b" />

                {/* Thick Dark Navy Capsule Bar */}
                <line x1="1135" y1="445" x2="1230" y2="540" stroke="#1e293b" strokeWidth="46" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          {/* Ambient center soft glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/60 rounded-full blur-3xl pointer-events-none z-0" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto relative z-10 space-y-4"
          >
            
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-[11px] font-black uppercase tracking-wider shadow-md shadow-red-600/25">
              <Zap className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
              <span>S012 • Khởi Tạo Kênh Bán Hàng Ngay Hôm Nay</span>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              Sẵn Sàng Sở Hữu Website Bán Hàng Tối Ưu Nhận Đơn?
            </h2>

            {/* Benefit Summary */}
            <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
              Được đồng hành bởi DUDI SOFTWARE với chi phí minh bạch từ 5.000.000đ, quy trình 5 bước chuẩn mực và hệ thống quản lý đơn hàng chuyên nghiệp.
            </p>

            {/* Single Primary Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onCtaClick && onCtaClick()}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-red-600 via-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white text-sm sm:text-base font-black rounded-xl shadow-xl shadow-red-600/30 hover:shadow-2xl hover:shadow-red-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Nhận tư vấn website bán hàng</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Secondary Direct Channels */}
            <div className="pt-4 border-t border-slate-300/80 flex flex-wrap items-center justify-center gap-3 text-xs font-bold">
              <button
                onClick={(e) => handlePhoneClick(e, showToast)}
                className="flex items-center gap-2 text-slate-800 hover:text-red-600 transition-colors cursor-pointer bg-white/90 hover:bg-white backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-200 shadow-xs hover:shadow-md active:scale-95 text-xs font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" />
                <span>Hotline: {HOTLINE_NUMBER}</span>
              </button>

              <a
                href={ZALO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-800 hover:text-blue-600 transition-colors bg-white/90 hover:bg-white backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-200 shadow-xs hover:shadow-md active:scale-95 text-xs font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                <span>Tư vấn qua Zalo</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}

