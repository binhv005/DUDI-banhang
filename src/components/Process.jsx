import React, { useState } from 'react'
import { Inbox, CheckSquare, Code2, ShieldCheck, Rocket, UserCheck, Clock, Settings, Handshake, TrendingUp, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Process() {
  const [activeStep, setActiveStep] = useState(0) // Default Step 01 is active

  const defaultColor = '#991b1b' // Unified brand red/crimson base color

  const steps = [
    {
      id: '01',
      number: '01',
      title: '01. TIẾP NHẬN',
      icon: UserCheck,
      hoverColor: '#0284c7', // Sky Blue
      cardBg: 'bg-gradient-to-b from-sky-50/80 via-white to-sky-50/30',
      cardBorder: 'border-sky-200/90',
      badgeStyle: 'bg-sky-50 text-sky-700 border-sky-200/80',
      badgeIcon: 'text-sky-600',
      summary: 'Tiếp nhận yêu cầu ngành hàng & tính năng riêng biệt.',
      input: 'Yêu cầu & ý tưởng từ khách hàng',
      output: 'Khung giải pháp & báo giá sơ bộ',
      status: 'Tiếp nhận 24/7'
    },
    {
      id: '02',
      number: '02',
      title: '02. XÁC NHẬN',
      icon: Clock,
      hoverColor: '#16a34a', // Green
      cardBg: 'bg-gradient-to-b from-emerald-50/80 via-white to-emerald-50/30',
      cardBorder: 'border-emerald-200/90',
      badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      badgeIcon: 'text-emerald-600',
      summary: 'Dữ liệu sản phẩm mẫu, danh mục & cổng thanh toán.',
      input: 'Dữ liệu sản phẩm, danh mục & brand',
      output: 'Đặc tả kỹ thuật & hợp đồng chốt',
      status: 'Chốt phạm vi'
    },
    {
      id: '03',
      number: '03',
      title: '03. TRIỂN KHAI',
      icon: Settings,
      hoverColor: '#4f46e5', // Indigo
      cardBg: 'bg-gradient-to-b from-indigo-50/80 via-white to-indigo-50/30',
      cardBorder: 'border-indigo-200/90',
      badgeStyle: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      badgeIcon: 'text-indigo-600',
      summary: 'Thiết kế chuẩn thương hiệu & cấu hình kỹ thuật.',
      input: 'Giao diện & cấu hình chuẩn chỉ',
      output: 'Website hoàn chỉnh trên staging',
      status: 'Lập trình chuẩn SEO'
    },
    {
      id: '04',
      number: '04',
      title: '04. TEST & KIỂM THỬ',
      icon: Handshake,
      hoverColor: '#ea580c', // Orange
      cardBg: 'bg-gradient-to-b from-orange-50/80 via-white to-orange-50/30',
      cardBorder: 'border-orange-200/90',
      badgeStyle: 'bg-orange-50 text-orange-700 border-orange-200/80',
      badgeIcon: 'text-orange-600',
      summary: 'Kiểm thử luồng đặt hàng & hiển thị đa thiết bị.',
      input: 'Test luồng giỏ hàng, mobile & PC',
      output: 'Biên bản test không phát sinh lỗi',
      status: 'Kiểm thử 100%'
    },
    {
      id: '05',
      number: '05',
      title: '05. BÀN GIAO',
      icon: TrendingUp,
      hoverColor: '#9333ea', // Purple
      cardBg: 'bg-gradient-to-b from-purple-50/80 via-white to-purple-50/30',
      cardBorder: 'border-purple-200/90',
      badgeStyle: 'bg-purple-50 text-purple-700 border-purple-200/80',
      badgeIcon: 'text-purple-600',
      summary: 'Nghiệm thu hệ thống, bàn giao admin & tài liệu.',
      input: 'Khách hàng nghiệm thu hoạt động',
      output: 'Tài khoản admin & tài liệu bảo hành',
      status: 'Tiếp nhận đơn ngay'
    }
  ]

  return (
    <section id="process" className="landing-section bg-gradient-to-b from-white via-slate-50/50 to-white py-12 lg:py-16 border-y border-slate-200/60 relative overflow-hidden">
      {/* Decorative subtle ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-bold uppercase tracking-wider mb-2">
            S07 • QUY TRÌNH 5 BƯỚC
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight sm:whitespace-nowrap">
            Quy Trình Triển Khai Chặt Chẽ & Minh Bạch
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600">
            Mỗi giai đoạn đều xác định rõ ràng thông tin đầu vào, kết quả đầu ra và trạng thái thực hiện, đảm bảo đúng tiến độ cam kết.
          </p>
        </motion.div>

        {/* DESKTOP TIMELINE FLOWCHART */}
        <div className="hidden md:block">
          
          {/* Top Hanging Bookmark Cards Grid */}
          <div className="grid grid-cols-5 gap-3.5 lg:gap-5 items-end mb-3.5">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isSelected = activeStep === index

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  whileHover={{ y: -6, transition: { duration: 0.15 } }}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Hanging Bookmark Shape - Filled with step color when selected */}
                  <div
                    className={`w-full rounded-t-full rounded-b-2xl pt-3 px-3.5 pb-3.5 shadow-sm relative flex flex-col items-center transition-all duration-300 group-hover:shadow-2xl border-2 ${
                      isSelected ? 'shadow-xl -translate-y-1' : 'bg-white border-red-200/90 text-red-800'
                    } overflow-visible`}
                    style={isSelected ? {
                      backgroundColor: step.hoverColor,
                      borderColor: step.hoverColor,
                      boxShadow: `0 16px 36px -4px ${step.hoverColor}50`
                    } : {}}
                  >
                    {/* Cute DUDI Robot Head Pop-up on Selected Card */}
                    <div className={`absolute -top-9 lg:-top-11 left-1/2 -translate-x-1/2 transition-all duration-250 ease-out pointer-events-none z-30 flex flex-col items-center ${
                      isSelected ? 'opacity-100 translate-y-0 scale-105' : 'opacity-0 -translate-y-2 scale-75'
                    }`}>
                      <img
                        src="/robot-head.webp"
                        alt="DUDI Robot"
                        className="w-10 h-10 lg:w-12 lg:h-12 object-contain drop-shadow-xl"
                      />
                    </div>

                    {/* Top Circular Icon Badge */}
                    <div
                      className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-200 group-hover:scale-110 group-hover:rotate-6 relative z-10 ${
                        isSelected ? 'bg-white shadow-md' : 'bg-red-50 text-red-700 border border-red-200/80 shadow-2xs'
                      }`}
                      style={isSelected ? {
                        color: step.hoverColor
                      } : {}}
                    >
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6 transition-colors duration-200" />
                    </div>

                    {/* Pill Text Content */}
                    <p
                      className={`text-xs lg:text-[13px] text-center leading-relaxed font-semibold min-h-[48px] flex items-center justify-center transition-colors duration-200 px-1 ${
                        isSelected ? 'text-white' : 'text-red-800'
                      }`}
                    >
                      {step.summary}
                    </p>
                  </div>

                  {/* Downward Pointer Triangle */}
                  <div className="flex justify-center -mt-[1px] transition-transform duration-200 group-hover:translate-y-0.5">
                    <div
                      className={`w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[9px] transition-colors duration-200 ${
                        isSelected ? '' : 'border-t-red-200/90'
                      }`}
                      style={isSelected ? { borderTopColor: step.hoverColor } : {}}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Middle Connecting Line + Colored Circular Number Nodes */}
          <div className="relative py-3 my-1">
            {/* Horizontal Timeline Connector Line */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-red-200 -translate-y-1/2 z-0" />

            {/* 5 Number Circles */}
            <div className="grid grid-cols-5 gap-3.5 lg:gap-5 relative z-10">
              {steps.map((step, index) => {
                const isSelected = activeStep === index

                return (
                  <div key={step.id} className="flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: index * 0.06 + 0.15 }}
                      whileHover={{ scale: 1.15 }}
                      onClick={() => setActiveStep(index)}
                      className={`w-8 h-8 lg:w-9 lg:h-9 rounded-full border-2 flex items-center justify-center font-black text-xs lg:text-sm shadow-xs ring-4 ring-red-50/80 cursor-pointer transition-all duration-200 ${
                        isSelected ? 'shadow-md scale-110 text-white' : 'bg-white text-red-700 border-red-300'
                      }`}
                      style={isSelected ? {
                        backgroundColor: step.hoverColor,
                        borderColor: step.hoverColor
                      } : {}}
                    >
                      {step.number}
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bottom Step Titles */}
          <div className="grid grid-cols-5 gap-3.5 lg:gap-5 items-start mt-2.5">
            {steps.map((step, index) => {
              const isSelected = activeStep === index

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 + 0.08 }}
                  onClick={() => setActiveStep(index)}
                  className="text-center px-0.5 cursor-pointer"
                >
                  {/* Step Title */}
                  <h4
                    className={`text-xs sm:text-sm lg:text-base font-black tracking-wide uppercase transition-colors duration-200 ${
                      isSelected ? '' : 'text-slate-900'
                    }`}
                    style={isSelected ? { color: step.hoverColor } : {}}
                  >
                    {step.title}
                  </h4>
                </motion.div>
              )
            })}
          </div>

        </div>

        {/* MOBILE & TABLET VIEW: Sleek Bookmark Card List */}
        <div className="md:hidden space-y-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isSelected = activeStep === index

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setActiveStep(index)}
                onTouchStart={() => setActiveStep(index)}
                className={`bg-white rounded-xl shadow-xs border transition-all duration-200 overflow-hidden flex items-stretch cursor-pointer ${
                  isSelected ? 'shadow-md border-2 ring-2 ring-red-500/20' : 'border-slate-200'
                }`}
                style={isSelected ? { borderColor: step.hoverColor } : {}}
              >
                {/* Left Colored Banner with Icon */}
                <div
                  className={`w-14 shrink-0 p-2 flex flex-col items-center justify-center border-r transition-colors duration-200 ${
                    isSelected ? '' : 'bg-red-50/80 border-red-100 text-red-700'
                  }`}
                  style={isSelected ? {
                    backgroundColor: `${step.hoverColor}20`,
                    borderColor: `${step.hoverColor}40`,
                    color: step.hoverColor
                  } : {}}
                >
                  <div
                    className={`w-7 h-7 rounded-full border shadow-2xs flex items-center justify-center mb-0.5 transition-colors duration-200 ${
                      isSelected ? 'bg-white' : 'bg-white border-red-200/80 text-red-700'
                    }`}
                    style={isSelected ? {
                      borderColor: `${step.hoverColor}50`,
                      color: step.hoverColor
                    } : {}}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span
                    className="text-[10px] font-black tracking-wider transition-colors duration-200"
                    style={isSelected ? { color: step.hoverColor } : { color: '#b91c1c' }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Right Content */}
                <div className="p-2.5 flex-1 flex flex-col justify-center">
                  <h3
                    className={`text-xs font-black uppercase tracking-wider mb-0.5 transition-colors duration-200 ${
                      isSelected ? '' : 'text-slate-900'
                    }`}
                    style={isSelected ? { color: step.hoverColor } : {}}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-[11px] leading-snug font-medium transition-colors duration-200 ${
                      isSelected ? 'text-slate-800 font-semibold' : 'text-slate-600'
                    }`}
                  >
                    {step.summary}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}



