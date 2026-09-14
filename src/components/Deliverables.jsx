import React, { useState } from 'react'
import { PackageCheck, Layers, FileText, CheckCircle2, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Deliverables() {
  // Mặc định mở card đầu tiên (OPTION 01)
  const [activeTab, setActiveTab] = useState(0)

  const categories = [
    {
      id: 0,
      optionLabel: 'OPTION 01',
      tag: '01. HẠNG MỤC BÀN GIAO',
      title: 'Hạng Mục Khách Hàng Nhận Được',
      icon: PackageCheck,
      color: '#f43f5e', // Rose / Red
      glowColor: 'rgba(244, 63, 94, 0.25)',
      badgeGradient: 'from-rose-500 to-red-600',
      items: [
        'Website bán hàng hoàn chỉnh & chuẩn SEO',
        'Giao diện tương thích PC, Tablet & Mobile',
        'Hệ thống Admin tiếp nhận & xử lý đơn hàng',
        'Cấu hình thanh toán (COD, CK, Cổng online)',
        'Tích hợp tracking đo lường & GA4 ecommerce',
        'Bàn giao hệ thống & tài liệu hướng dẫn'
      ]
    },
    {
      id: 1,
      optionLabel: 'OPTION 02',
      tag: '02. GIỚI HẠN PHẠM VI',
      title: 'Giới Hạn Phạm Vi Triển Khai',
      icon: Layers,
      color: '#f97316', // Orange
      glowColor: 'rgba(249, 115, 22, 0.25)',
      badgeGradient: 'from-orange-500 to-amber-600',
      items: [
        'Số lượng SP theo định mức từng gói',
        'Cấu trúc biến thể theo thỏa thuận ban đầu',
        'Quản lý tồn kho cơ bản theo từng sản phẩm',
        'Mẫu thiết kế theo chuẩn chốt hợp đồng',
        'Không gồm phí bên thứ 3 (cổng TT, SMS, hosting riêng)'
      ]
    },
    {
      id: 2,
      optionLabel: 'OPTION 03',
      tag: '03. DỮ LIỆU CUNG CẤP',
      title: 'Dữ Liệu Khách Cần Cung Cấp',
      icon: FileText,
      color: '#3b82f6', // Royal Blue
      glowColor: 'rgba(59, 130, 246, 0.25)',
      badgeGradient: 'from-blue-500 to-indigo-600',
      items: [
        'Logo, brand kit & thông tin liên hệ',
        'Danh mục sản phẩm mẫu (ảnh, giá, mô tả)',
        'Tài khoản ngân hàng hoặc cổng thanh toán',
        'Nội dung các trang chính sách mua hàng',
        'Thông tin Domain & Hosting (nếu dùng riêng)'
      ]
    }
  ]

  return (
    <section id="deliverables" className="landing-section bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-6 lg:py-8 border-y border-slate-200/60 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.35 }}
          className="text-center max-w-4xl mx-auto mb-5 lg:mb-6"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-100 text-red-700 text-[10.5px] font-bold uppercase tracking-wider mb-1.5">
            S05 • PHẠM VI BÀN GIAO
          </div>
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight sm:whitespace-nowrap">
            Khách Hàng Nhận Được Gì Khi Nghiệm Thu
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 sm:whitespace-nowrap">
            Minh bạch tuyệt đối về hạng mục bàn giao, giới hạn cam kết và các dữ liệu hai bên cần phối hợp triển khai.
          </p>
        </motion.div>

        {/* MAIN INFOGRAPHIC CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT: CIRCULAR INFOGRAPHIC WHEEL */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center relative select-none">
            <div className="relative w-[380px] h-[380px] flex items-center justify-center">
              
              {/* Outer SVG: Connector lines & Orbit Arcs */}
              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10" viewBox="0 0 380 380">
                
                {/* Background Rotating Guide Orbit Circle (cx=152, cy=190, r=132) */}
                <motion.circle
                  cx="152"
                  cy="190"
                  r="132"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '152px 190px' }}
                />
                
                {/* Arc 1 - Rose / Top Left */}
                <path
                  d="M 35 128 A 132 132 0 0 1 135 62"
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth={activeTab === 0 ? 6 : 4}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                  style={{
                    filter: activeTab === 0 ? 'drop-shadow(0 0 10px rgba(244, 63, 94, 0.85))' : 'none',
                    opacity: activeTab === 0 ? 1 : 0.45
                  }}
                />
                {/* Arc 2 - Orange / Middle Left */}
                <path
                  d="M 20 190 A 132 132 0 0 1 35 145"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth={activeTab === 1 ? 6 : 4}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                  style={{
                    filter: activeTab === 1 ? 'drop-shadow(0 0 10px rgba(249, 115, 22, 0.85))' : 'none',
                    opacity: activeTab === 1 ? 1 : 0.45
                  }}
                />
                {/* Arc 3 - Blue / Bottom Left */}
                <path
                  d="M 135 318 A 132 132 0 0 1 35 252"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth={activeTab === 2 ? 6 : 4}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                  style={{
                    filter: activeTab === 2 ? 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.85))' : 'none',
                    opacity: activeTab === 2 ? 1 : 0.45
                  }}
                />

                {/* Direct Connector Lines from Center Circle to the 3 Floating Badges */}
                {/* Line 1 -> Option 01 (Top) */}
                <line
                  x1="244"
                  y1="110"
                  x2="314"
                  y2="56"
                  stroke={activeTab === 0 ? '#f43f5e' : '#cbd5e1'}
                  strokeWidth={activeTab === 0 ? 2.5 : 1.5}
                  strokeDasharray={activeTab === 0 ? 'none' : '3 3'}
                  className="transition-all duration-300"
                />
                <circle
                  cx="244"
                  cy="110"
                  r={activeTab === 0 ? 5 : 3.5}
                  fill={activeTab === 0 ? '#f43f5e' : '#94a3b8'}
                  className="transition-all duration-300"
                />

                {/* Line 2 -> Option 02 (Middle) */}
                <line
                  x1="284"
                  y1="190"
                  x2="314"
                  y2="190"
                  stroke={activeTab === 1 ? '#f97316' : '#cbd5e1'}
                  strokeWidth={activeTab === 1 ? 2.5 : 1.5}
                  strokeDasharray={activeTab === 1 ? 'none' : '3 3'}
                  className="transition-all duration-300"
                />
                <circle
                  cx="284"
                  cy="190"
                  r={activeTab === 1 ? 5 : 3.5}
                  fill={activeTab === 1 ? '#f97316' : '#94a3b8'}
                  className="transition-all duration-300"
                />

                {/* Line 3 -> Option 03 (Bottom) */}
                <line
                  x1="244"
                  y1="270"
                  x2="314"
                  y2="324"
                  stroke={activeTab === 2 ? '#3b82f6' : '#cbd5e1'}
                  strokeWidth={activeTab === 2 ? 2.5 : 1.5}
                  strokeDasharray={activeTab === 2 ? 'none' : '3 3'}
                  className="transition-all duration-300"
                />
                <circle
                  cx="244"
                  cy="270"
                  r={activeTab === 2 ? 5 : 3.5}
                  fill={activeTab === 2 ? '#3b82f6' : '#94a3b8'}
                  className="transition-all duration-300"
                />
              </svg>

              {/* Ambient Loang Glow behind center circle */}
              <div className="absolute left-[5px] top-[42px] w-[295px] h-[295px] rounded-full bg-gradient-to-tr from-red-600/35 via-rose-500/30 to-amber-500/25 blur-2xl pointer-events-none" />

              {/* Main Center Memphis Geometric Circular Hub */}
              <motion.div
                animate={{
                  y: [0, -4, 0],
                  scale: [1, 1.015, 1]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute left-[5px] top-[42px] w-[295px] h-[295px] flex items-center justify-center select-none z-10 cursor-pointer"
              >
                <svg viewBox="0 0 320 320" className="w-full h-full overflow-visible drop-shadow-[0_12px_28px_rgba(225,29,72,0.32)]">
                  <defs>
                    <pattern id="memphisStripesWhite" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="10" stroke="#ffffff" strokeWidth="3" />
                    </pattern>

                    <linearGradient id="memphisCrimsonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#881337" />
                      <stop offset="100%" stopColor="#4c0519" />
                    </linearGradient>
                    <linearGradient id="memphisRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#e11d48" />
                    </linearGradient>
                    <linearGradient id="memphisCoralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fda4af" />
                      <stop offset="100%" stopColor="#f87171" />
                    </linearGradient>
                    <linearGradient id="memphisCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="memphisRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f87171" />
                      <stop offset="50%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>

                    <filter id="memphisShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#881337" floodOpacity="0.28" />
                    </filter>
                  </defs>

                  {/* LAYER 1: Diagonal Pill Capsules (-45 deg tilt) */}
                  <g transform="rotate(-45 160 160)">
                    <rect x="85" y="25" width="70" height="270" rx="35" fill="url(#memphisCrimsonGrad)" filter="url(#memphisShadow)" />
                    <rect x="165" y="65" width="48" height="225" rx="24" fill="url(#memphisRoseGrad)" filter="url(#memphisShadow)" />
                    <rect x="135" y="10" width="28" height="140" rx="14" fill="url(#memphisCyanGrad)" opacity="0.9" />
                    <rect x="42" y="95" width="34" height="190" rx="17" fill="url(#memphisCoralGrad)" filter="url(#memphisShadow)" />
                    <rect x="222" y="55" width="22" height="160" rx="11" fill="#fca5a5" />
                    <rect x="15" y="165" width="20" height="130" rx="10" fill="#f87171" />

                    <line x1="25" y1="55" x2="25" y2="155" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" />
                    <line x1="252" y1="175" x2="252" y2="265" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" />
                  </g>

                  {/* LAYER 2: Geometric Circles */}
                  <circle cx="105" cy="90" r="48" fill="#fda4af" opacity="0.95" />
                  <circle cx="82" cy="110" r="32" fill="#e11d48" />
                  <circle cx="82" cy="110" r="32" fill="url(#memphisStripesWhite)" />
                  <circle cx="82" cy="110" r="32" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.8" />

                  <circle cx="95" cy="225" r="44" fill="#dc2626" />
                  <circle cx="95" cy="225" r="44" fill="url(#memphisStripesWhite)" />
                  <circle cx="95" cy="225" r="44" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.9" />

                  <circle cx="235" cy="170" r="28" fill="#f43f5e" />
                  <circle cx="235" cy="170" r="28" fill="url(#memphisStripesWhite)" />
                  <circle cx="235" cy="170" r="28" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.8" />

                  <circle cx="45" cy="245" r="10" fill="#fda4af" />
                  <circle cx="55" cy="165" r="7" fill="#fb7185" />
                  <circle cx="260" cy="95" r="11" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.9" />
                  <circle cx="268" cy="85" r="5" fill="#fca5a5" />
                  <circle cx="160" cy="25" r="9" fill="#fb7185" />
                  <circle cx="215" cy="270" r="7" fill="#f87171" />
                  <circle cx="130" cy="298" r="6" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.85" />

                  {/* LAYER 3: Outer Ring */}
                  <circle cx="160" cy="160" r="96" fill="url(#memphisRingGrad)" />
                  <circle cx="160" cy="160" r="96" fill="none" stroke="#ffffff" strokeWidth="3.5" opacity="0.75" />

                  {/* LAYER 4: Inner White Disc */}
                  <circle cx="160" cy="160" r="84" fill="#ffffff" filter="url(#memphisShadow)" />
                </svg>

                {/* Central Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 pointer-events-none px-3">
                  <h3 className="text-[15px] sm:text-[17px] font-black tracking-wider text-slate-900 leading-tight uppercase">
                    QUY CHUẨN
                  </h3>
                  <span className="text-[15px] sm:text-[17px] font-black tracking-wider text-red-600 leading-tight uppercase drop-shadow-xs">
                    BÀN GIAO
                  </span>
                </div>
              </motion.div>

              {/* 3 Floating Node Badges */}
              {/* Node 1 - Option 01 (Rose/Red) */}
              <motion.button
                onClick={() => setActiveTab(0)}
                animate={activeTab === 0 ? {
                  scale: [1.06, 1.12, 1.06],
                  y: [0, -1.5, 0]
                } : {
                  scale: 1,
                  y: 0
                }}
                transition={{ duration: 2.5, repeat: activeTab === 0 ? Infinity : 0, ease: 'easeInOut' }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className={`absolute right-1 top-[24px] w-16 h-16 rounded-full bg-gradient-to-tr from-rose-500 to-red-600 text-white flex items-center justify-center transition-all duration-300 z-20 cursor-pointer shadow-lg ${
                  activeTab === 0
                    ? 'ring-3.5 ring-offset-2 ring-rose-400 shadow-rose-500/60'
                    : 'opacity-85 hover:opacity-100 hover:shadow-rose-400/40'
                }`}
              >
                <PackageCheck className="w-8 h-8" />
              </motion.button>

              {/* Node 2 - Option 02 (Orange) */}
              <motion.button
                onClick={() => setActiveTab(1)}
                animate={activeTab === 1 ? {
                  scale: [1.06, 1.12, 1.06],
                  y: [0, -1.5, 0]
                } : {
                  scale: 1,
                  y: 0
                }}
                transition={{ duration: 2.5, repeat: activeTab === 1 ? Infinity : 0, ease: 'easeInOut' }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className={`absolute right-1 top-[158px] w-16 h-16 rounded-full bg-gradient-to-tr from-orange-500 to-amber-600 text-white flex items-center justify-center transition-all duration-300 z-20 cursor-pointer shadow-lg ${
                  activeTab === 1
                    ? 'ring-3.5 ring-offset-2 ring-orange-400 shadow-orange-500/60'
                    : 'opacity-85 hover:opacity-100 hover:shadow-orange-400/40'
                }`}
              >
                <Layers className="w-8 h-8" />
              </motion.button>

              {/* Node 3 - Option 03 (Blue) */}
              <motion.button
                onClick={() => setActiveTab(2)}
                animate={activeTab === 2 ? {
                  scale: [1.06, 1.12, 1.06],
                  y: [0, -1.5, 0]
                } : {
                  scale: 1,
                  y: 0
                }}
                transition={{ duration: 2.5, repeat: activeTab === 2 ? Infinity : 0, ease: 'easeInOut' }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className={`absolute right-1 top-[292px] w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center transition-all duration-300 z-20 cursor-pointer shadow-lg ${
                  activeTab === 2
                    ? 'ring-3.5 ring-offset-2 ring-blue-400 shadow-blue-500/60'
                    : 'opacity-85 hover:opacity-100 hover:shadow-blue-400/40'
                }`}
              >
                <FileText className="w-8 h-8" />
              </motion.button>

            </div>
          </div>

          {/* RIGHT: 3 DETAILED OPTION ROWS / CARDS */}
          <div className="lg:col-span-7 flex flex-col space-y-2.5">
            {categories.map((cat, index) => {
              const Icon = cat.icon
              const isSelected = activeTab === index

              return (
                <div key={cat.id} className="relative group">
                  {/* Ambient Glowing Loang behind selected card */}
                  {isSelected && (
                    <motion.div
                      layoutId={`glow-${cat.id}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute -inset-1 rounded-2xl blur-lg opacity-70 pointer-events-none transition-all duration-400"
                      style={{
                        background: `radial-gradient(circle, ${cat.glowColor} 0%, transparent 70%)`
                      }}
                    />
                  )}

                  <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                    whileHover={{ y: -1.5, transition: { duration: 0.2 } }}
                    onClick={() => setActiveTab(isSelected ? null : index)}
                    className={`relative rounded-xl p-3.5 sm:p-4 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-sm ${
                      isSelected
                        ? 'bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white shadow-xl shadow-red-600/35 ring-2 ring-red-400/30 border border-red-400'
                        : 'bg-white/95 hover:bg-slate-50/90 border border-slate-200/80 text-slate-900 shadow-2xs hover:shadow-md'
                    }`}
                  >
                    {/* Memphis Top-Right Decorative Graphic Cluster (Compact & Subtle) */}
                    <div className="absolute top-0 right-0 w-14 h-14 sm:w-16 sm:h-16 overflow-hidden pointer-events-none select-none z-0">
                      <svg viewBox="0 0 140 140" className="w-full h-full">
                        <defs>
                          <pattern id={`cardStripes-${cat.id}`} width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="0" x2="0" y2="8" stroke={isSelected ? '#ffffff' : cat.color} strokeWidth="2.5" opacity={isSelected ? '0.35' : '0.4'} />
                          </pattern>
                        </defs>
                        
                        {/* Diagonal Capsule Pill */}
                        <g transform="rotate(-45 100 40)">
                          <rect x="75" y="-10" width="36" height="110" rx="18" fill={isSelected ? '#ffffff' : cat.color} opacity={isSelected ? '0.12' : '0.06'} />
                          <rect x="118" y="10" width="18" height="75" rx="9" fill={isSelected ? '#ffffff' : cat.color} opacity={isSelected ? '0.18' : '0.09'} />
                          <line x1="65" y1="15" x2="65" y2="65" stroke={isSelected ? '#ffffff' : cat.color} strokeWidth="2" strokeDasharray="3 3" opacity={isSelected ? '0.35' : '0.15'} />
                        </g>

                        {/* Striped Circle in Corner */}
                        <circle cx="115" cy="25" r="28" fill={`url(#cardStripes-${cat.id})`} />
                        <circle cx="115" cy="25" r="28" fill="none" stroke={isSelected ? '#ffffff' : cat.color} strokeWidth="1.5" opacity={isSelected ? '0.35' : '0.15'} />

                        {/* Floating Memphis Rings & Dots */}
                        <circle cx="65" cy="20" r="6" fill="none" stroke={isSelected ? '#ffffff' : cat.color} strokeWidth="2" opacity={isSelected ? '0.4' : '0.15'} />
                        <circle cx="130" cy="70" r="4.5" fill={isSelected ? '#ffffff' : cat.color} opacity={isSelected ? '0.3' : '0.1'} />
                      </svg>
                    </div>

                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-2.5 relative z-10">
                      <div className="flex items-center gap-3">
                        {/* Memphis Layered Icon Container (Left side) */}
                        <div className="relative shrink-0 select-none">
                          <div
                            className={`absolute -inset-0.5 rounded-lg rotate-6 transition-all duration-300 opacity-20 ${
                              isSelected ? 'scale-105 bg-white opacity-40 rotate-12' : 'group-hover:rotate-12'
                            }`}
                            style={!isSelected ? { backgroundColor: cat.color } : {}}
                          />
                          {/* Main Icon Box */}
                          <div
                            className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 z-10 ${
                              isSelected
                                ? 'bg-white text-red-600 scale-105 shadow-md'
                                : `text-white bg-gradient-to-tr ${cat.badgeGradient} shadow-sm group-hover:scale-105`
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        <div>
                          <h3 className={`text-sm sm:text-[15px] font-extrabold leading-snug transition-colors ${
                            isSelected ? 'text-white' : 'text-slate-900 group-hover:text-red-600'
                          }`}>
                            {cat.title}
                          </h3>
                        </div>
                      </div>

                      {/* Expand/Collapse Chevron Indicator */}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isSelected
                            ? 'bg-white text-red-600 rotate-180 shadow-sm'
                            : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Collapsible List of Deliverable Items (2 Columns) */}
                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden relative z-10"
                        >
                          <div className="pt-3 mt-3 border-t border-white/20">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {cat.items.map((item, itemIdx) => (
                                <motion.li
                                  key={itemIdx}
                                  initial={{ opacity: 0, y: 3 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.12, delay: itemIdx * 0.025 }}
                                  className="flex items-center gap-2.5 text-[11.5px] sm:text-[12.5px] text-white font-medium leading-snug p-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 transition-all shadow-xs backdrop-blur-xs group/item"
                                >
                                  <div
                                    className="w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 bg-white text-red-600 shadow-2xs transition-transform group-hover/item:scale-110"
                                  >
                                    <CheckCircle2
                                      className="w-3.5 h-3.5 stroke-[2.5]"
                                    />
                                  </div>
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
