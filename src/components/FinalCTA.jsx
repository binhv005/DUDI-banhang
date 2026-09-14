import React from 'react'
import { ArrowRight, Phone, MessageSquare, ShieldCheck, Zap, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { HOTLINE_NUMBER, ZALO_LINK, handlePhoneClick } from '../utils/phoneHandler'

export default function FinalCTA({ showToast, onCtaClick }) {
  return (
    <section
      className="relative py-8 sm:py-10 lg:py-12 text-white text-center overflow-hidden bg-cover bg-center border-y border-red-700/50"
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(175, 20, 26, 0.92) 0%, rgba(220, 38, 38, 0.86) 50%, rgba(153, 22, 28, 0.94) 100%), url('/final-cta-bg.webp')"
      }}
    >
      {/* Subtle light glow elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-blob-1 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-black/25 rounded-full blur-3xl animate-blob-2 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-3.5"
      >
        
        {/* Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20 shadow-xs">
          <Zap className="w-3 h-3 text-amber-300" />
          <span>S012 • Khởi Tạo Kênh Bán Hàng Ngay Hôm Nay</span>
        </div>

        {/* Headline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-snug drop-shadow-sm">
          Sẵn Sàng Sở Hữu Website Bán Hàng Tối Ưu Nhận Đơn?
        </h2>

        {/* Benefit Summary */}
        <p className="text-xs sm:text-sm text-red-50/95 leading-relaxed max-w-xl mx-auto font-normal drop-shadow-xs">
          Được đồng hành bởi DUDI SOFTWARE với chi phí minh bạch từ 5.000.000đ, quy trình 5 bước chuẩn mực và hệ thống quản lý đơn hàng chuyên nghiệp.
        </p>

        {/* Trust points */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 py-1 text-xs font-semibold text-white">
          <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 text-[11px] sm:text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
            <span>Bảo hành kỹ thuật</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 text-[11px] sm:text-xs">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>Cam kết đúng tiến độ</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 text-[11px] sm:text-xs">
            <Zap className="w-3.5 h-3.5 text-yellow-300" />
            <span>Không phát sinh phí ẩn</span>
          </div>
        </div>

        {/* Single Primary Action */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onCtaClick && onCtaClick()}
            className="w-full sm:w-auto px-7 py-3 bg-white hover:bg-slate-50 text-red-600 hover:text-red-700 text-sm sm:text-base font-black rounded-xl shadow-xl hover:shadow-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Nhận tư vấn website bán hàng</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Secondary Direct Channels */}
        <div className="pt-3.5 border-t border-white/20 flex flex-wrap items-center justify-center gap-3 text-xs font-bold">
          <button
            onClick={(e) => handlePhoneClick(e, showToast)}
            className="flex items-center gap-1.5 text-white/95 hover:text-white transition-colors cursor-pointer bg-black/20 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/10 hover:bg-black/30 active:scale-95 text-xs"
          >
            <Phone className="w-3.5 h-3.5 text-red-300" />
            <span>Hotline: {HOTLINE_NUMBER}</span>
          </button>

          <a
            href={ZALO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/95 hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/10 hover:bg-black/30 active:scale-95 text-xs"
          >
            <MessageSquare className="w-3.5 h-3.5 text-blue-300" />
            <span>Tư vấn qua Zalo</span>
          </a>
        </div>

      </motion.div>
    </section>
  )
}
