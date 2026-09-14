import React, { useState } from 'react'
import { MessageSquareWarning, DollarSign, RefreshCw, BarChart2, HelpCircle, ShieldAlert, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Problems() {
  const [activeProblem, setActiveProblem] = useState(0)
  const [startIndex, setStartIndex] = useState(0)

  const problems = [
    {
      icon: MessageSquareWarning,
      step: '01',
      title: 'Sót Đơn Hàng',
      description: 'Dễ trôi chat, nhầm lẫn đơn khi khách nhắn tin qua mạng xã hội.'
    },
    {
      icon: DollarSign,
      step: '02',
      title: 'Chi Phí Sàn Cao',
      description: 'Phí sàn & chiết khấu ngày càng tăng, khó giữ chân khách hàng cũ.'
    },
    {
      icon: RefreshCw,
      step: '03',
      title: 'Mất Kiểm Soát',
      description: 'Thiếu hệ thống quản lý tập trung, khó theo dõi hàng tồn & đơn hàng.'
    },
    {
      icon: BarChart2,
      step: '04',
      title: 'Thiếu Dữ Liệu',
      description: 'Không lưu giữ được tệp khách hàng quen và thương hiệu riêng.'
    },
    {
      icon: HelpCircle,
      step: '05',
      title: 'Tư Vấn Lặp Lại',
      description: 'Tốn thời gian giải đáp liên tục về giá bán, thông số và tồn kho.'
    },
    {
      icon: ShieldAlert,
      step: '06',
      title: 'Rủi Ro Kênh Bán',
      description: 'Phụ thuộc một nền tảng dễ bị bóp tương tác hoặc khóa tài khoản.'
    }
  ]

  const maxStartIndex = problems.length - 4 // 2 (hiển thị 4 card trên màn hình)

  const handlePrev = () => {
    if (activeProblem > 0) {
      const prev = activeProblem - 1
      setActiveProblem(prev)
      if (prev < startIndex) {
        setStartIndex(prev)
      }
    }
  }

  const handleNext = () => {
    if (activeProblem < problems.length - 1) {
      const next = activeProblem + 1
      setActiveProblem(next)
      if (next > startIndex + 3) {
        setStartIndex(next - 3)
      }
    }
  }

  // 4 card hiển thị theo startIndex
  const visibleProblems = problems.slice(startIndex, startIndex + 4)

  return (
    <section id="problems" className="landing-section bg-gradient-to-b from-[#1c222d] via-[#161a23] to-[#12151d] py-12 lg:py-16 border-y border-slate-800/80 relative overflow-hidden text-white">
      {/* Subtle modern geometric background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      {/* Soft ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-red-600/15 via-rose-500/15 to-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-[11px] font-bold uppercase tracking-wider mb-2 shadow-xs">
            S04 • VẤN ĐỀ THỰC TẾ
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight sm:whitespace-nowrap drop-shadow-sm">
            Những Bất Cập Khi Chưa Có Kênh Bán Riêng
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Tổng hợp các trở ngại thực tế mà các nhà bán hàng thường gặp phải khi vận hành kinh doanh.
          </p>
        </motion.div>

        {/* Carousel Container with 4 Visible Cards + Left/Right Navigation Arrows */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-4">
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeProblem === 0}
            title="Xem vấn đề trước"
            aria-label="Vấn đề trước"
            className={`absolute -left-3 sm:-left-5 lg:-left-7 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full z-30 flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer ${
              activeProblem === 0
                ? 'bg-slate-800/40 border border-slate-700/40 text-slate-600 opacity-40 cursor-not-allowed'
                : 'bg-slate-800/90 hover:bg-red-600 text-white border border-slate-600 hover:border-red-500 hover:scale-110 shadow-red-600/20 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={activeProblem >= problems.length - 1}
            title="Xem vấn đề tiếp theo"
            aria-label="Vấn đề tiếp theo"
            className={`absolute -right-3 sm:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full z-30 flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer ${
              activeProblem >= problems.length - 1
                ? 'bg-slate-800/40 border border-slate-700/40 text-slate-600 opacity-40 cursor-not-allowed'
                : 'bg-slate-800/90 hover:bg-red-600 text-white border border-slate-600 hover:border-red-500 hover:scale-110 shadow-red-600/20 active:scale-95'
            }`}
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleProblems.map((item, localIdx) => {
                const globalIndex = startIndex + localIdx
                const Icon = item.icon
                const isActive = activeProblem === globalIndex

                return (
                  <motion.div
                    key={item.step}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setActiveProblem(globalIndex)}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className={`relative rounded-2xl p-4.5 sm:p-5 transition-all duration-300 flex flex-col items-center text-center group min-h-[240px] justify-between cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-b from-red-600 via-red-600 to-red-700 text-white shadow-2xl shadow-red-600/40 border-2 border-red-400 scale-[1.02] -translate-y-1.5 z-10 ring-4 ring-red-500/20'
                        : 'bg-white text-slate-900 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-red-300'
                    }`}
                  >
                    {/* Chevron Arrow Connector (Displayed between visible cards on lg) */}
                    {localIdx < 3 && (
                      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-3.5 translate-x-1/2 w-6 h-9 items-center justify-center z-20 pointer-events-none">
                        <svg
                          viewBox="0 0 20 32"
                          className={`w-5 h-8 fill-current drop-shadow-xs transition-colors duration-300 ${
                            isActive
                              ? 'text-red-500'
                              : 'text-amber-400/90'
                          }`}
                        >
                          <path d="M0 0 L10 16 L0 32 L8 32 L18 16 L8 0 Z" />
                        </svg>
                      </div>
                    )}

                    {/* Top Icon */}
                    <div className="mb-3.5 flex items-center justify-center">
                      <Icon
                        className={`w-7 h-7 stroke-[2] transition-all duration-300 ${
                          isActive
                            ? 'text-white scale-110 drop-shadow-sm'
                            : 'text-slate-800 group-hover:text-red-600 group-hover:scale-110'
                        }`}
                      />
                    </div>

                    {/* Title & Description */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3
                        className={`text-sm sm:text-[14.5px] font-black uppercase tracking-wider mb-2 transition-colors duration-200 ${
                          isActive ? 'text-white' : 'text-slate-900 group-hover:text-red-600'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs leading-relaxed font-medium ${
                          isActive ? 'text-red-50' : 'text-slate-600'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Step Indicator */}
                    <div
                      className={`mt-3.5 pt-2.5 w-full flex items-center justify-start border-t ${
                        isActive ? 'border-white/20' : 'border-slate-100'
                      }`}
                    >
                      <span
                        className={`text-[11px] font-extrabold transition-colors ${
                          isActive ? 'text-white bg-white/20 px-2.5 py-0.5 rounded-md' : 'text-slate-400 group-hover:text-red-600'
                        }`}
                      >
                        {item.step}
                      </span>
                    </div>

                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>


        </div>

      </div>
    </section>
  )
}
