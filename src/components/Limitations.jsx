import React, { useRef, useEffect, useState } from 'react'
import {
  ShieldX,
  BookOpen,
  CreditCard,
  Truck,
  Receipt,
  MessageSquare,
  Server,
  Globe,
  Key,
  Camera,
  Database,
  Building2,
  Users,
  Store,
  ShoppingBag,
  Smartphone,
  MoveHorizontal,
  ChevronDown
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Limitations() {
  const scrollRef = useRef(null)
  const [isInteracting, setIsInteracting] = useState(false)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)
  const animationFrameId = useRef(null)

  const outOfScopeItems = [
    {
      title: 'Phí cổng thanh toán',
      desc: 'Phí thiết lập hoặc phí phần trăm giao dịch của đối tác thanh toán.',
      icon: CreditCard,
      color: 'bg-indigo-50/90 border-indigo-200 hover:border-indigo-400 hover:shadow-indigo-500/10',
      iconBg: 'bg-indigo-100 text-indigo-600',
      dotColor: 'bg-indigo-500'
    },
    {
      title: 'Vận chuyển',
      desc: 'Cước phí giao nhận hoặc phí kết nối API đơn vị vận chuyển bên thứ ba.',
      icon: Truck,
      color: 'bg-blue-50/90 border-blue-200 hover:border-blue-400 hover:shadow-blue-500/10',
      iconBg: 'bg-blue-100 text-blue-600',
      dotColor: 'bg-blue-500'
    },
    {
      title: 'Hóa đơn điện tử',
      desc: 'Phí dịch vụ hoặc bản quyền của nhà cung cấp phần mềm hóa đơn.',
      icon: Receipt,
      color: 'bg-emerald-50/90 border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-500/10',
      iconBg: 'bg-emerald-100 text-emerald-600',
      dotColor: 'bg-emerald-500'
    },
    {
      title: 'SMS Brandname',
      desc: 'Cước phí tin nhắn SMS Brandname hoặc thông báo OTP.',
      icon: MessageSquare,
      color: 'bg-amber-50/90 border-amber-200 hover:border-amber-400 hover:shadow-amber-500/10',
      iconBg: 'bg-amber-100 text-amber-600',
      dotColor: 'bg-amber-500'
    },
    {
      title: 'Hosting & Máy chủ',
      desc: 'Chi phí thuê máy chủ/hạ tầng lưu trữ dữ liệu định kỳ.',
      icon: Server,
      color: 'bg-sky-50/90 border-sky-200 hover:border-sky-400 hover:shadow-sky-500/10',
      iconBg: 'bg-sky-100 text-sky-600',
      dotColor: 'bg-sky-500'
    },
    {
      title: 'Domain & Tên miền',
      desc: 'Phí đăng ký và duy trì tên miền (.com, .vn, .com.vn...).',
      icon: Globe,
      color: 'bg-violet-50/90 border-violet-200 hover:border-violet-400 hover:shadow-violet-500/10',
      iconBg: 'bg-violet-100 text-violet-600',
      dotColor: 'bg-violet-500'
    },
    {
      title: 'Bản quyền & License',
      desc: 'Phí mua bản quyền phần mềm bên ngoài hoặc plugin đặc thù.',
      icon: Key,
      color: 'bg-rose-50/90 border-rose-200 hover:border-rose-400 hover:shadow-rose-500/10',
      iconBg: 'bg-rose-100 text-rose-600',
      dotColor: 'bg-rose-500'
    },
    {
      title: 'Chụp ảnh & Media',
      desc: 'Dịch vụ chụp ảnh sản phẩm, quay video hoặc thiết kế đồ họa tư liệu.',
      icon: Camera,
      color: 'bg-orange-50/90 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/10',
      iconBg: 'bg-orange-100 text-orange-600',
      dotColor: 'bg-orange-500'
    },
    {
      title: 'Nhập liệu vượt mức',
      desc: 'Khối lượng sản phẩm nhập vượt quá định mức của gói đã chọn.',
      icon: Database,
      color: 'bg-cyan-50/90 border-cyan-200 hover:border-cyan-400 hover:shadow-cyan-500/10',
      iconBg: 'bg-cyan-100 text-cyan-600',
      dotColor: 'bg-cyan-500'
    },
    {
      title: 'Hệ thống ERP',
      desc: 'Hệ thống hoạch định nguồn lực doanh nghiệp phức tạp.',
      icon: Building2,
      color: 'bg-purple-50/90 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/10',
      iconBg: 'bg-purple-100 text-purple-600',
      dotColor: 'bg-purple-500'
    },
    {
      title: 'Hệ thống CRM',
      desc: 'Hệ thống quản lý quan hệ khách hàng chuyên sâu đa kênh.',
      icon: Users,
      color: 'bg-teal-50/90 border-teal-200 hover:border-teal-400 hover:shadow-teal-500/10',
      iconBg: 'bg-teal-100 text-teal-600',
      dotColor: 'bg-teal-500'
    },
    {
      title: 'Phần mềm POS',
      desc: 'Phần mềm bán lẻ tại quầy hoặc máy in hóa đơn trực tiếp.',
      icon: Store,
      color: 'bg-pink-50/90 border-pink-200 hover:border-pink-400 hover:shadow-pink-500/10',
      iconBg: 'bg-pink-100 text-pink-600',
      dotColor: 'bg-pink-500'
    },
    {
      title: 'Sàn đa nhà bán',
      desc: 'Mô hình sàn marketplace nhiều gian hàng độc lập cùng bán.',
      icon: ShoppingBag,
      color: 'bg-red-50/90 border-red-200 hover:border-red-400 hover:shadow-red-500/10',
      iconBg: 'bg-red-100 text-red-600',
      dotColor: 'bg-red-500'
    },
    {
      title: 'Ứng dụng di động',
      desc: 'Ứng dụng iOS / Android Native tải về từ App Store / Google Play.',
      icon: Smartphone,
      color: 'bg-fuchsia-50/90 border-fuchsia-200 hover:border-fuchsia-400 hover:shadow-fuchsia-500/10',
      iconBg: 'bg-fuchsia-100 text-fuchsia-600',
      dotColor: 'bg-fuchsia-500'
    },
  ]

  // Tripled list for infinite looping scroll
  const displayedItems = [...outOfScopeItems, ...outOfScopeItems, ...outOfScopeItems]

  // Continuous slow auto-scrolling
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const scrollSpeed = 0.6 // Slow, relaxed scrolling speed (pixels per frame)

    const step = () => {
      if (!isInteracting && el) {
        el.scrollLeft += scrollSpeed

        // Infinite loop wrap-around
        const singleSetWidth = el.scrollWidth / 3
        if (el.scrollLeft >= singleSetWidth * 2) {
          el.scrollLeft -= singleSetWidth
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += singleSetWidth
        }
      }
      animationFrameId.current = requestAnimationFrame(step)
    }

    animationFrameId.current = requestAnimationFrame(step)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [isInteracting])

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e) => {
    isDown.current = true
    setIsInteracting(true)
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeftStart.current = scrollRef.current.scrollLeft
  }

  const handleMouseMove = (e) => {
    if (!isDown.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5 // Multiplier for smooth responsive drag
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk

    // Wrap around while dragging
    const el = scrollRef.current
    const singleSetWidth = el.scrollWidth / 3
    if (el.scrollLeft >= singleSetWidth * 2) {
      el.scrollLeft -= singleSetWidth
      scrollLeftStart.current -= singleSetWidth
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += singleSetWidth
      scrollLeftStart.current += singleSetWidth
    }
  }

  const handleMouseUp = () => {
    isDown.current = false
    setTimeout(() => setIsInteracting(false), 800) // Smooth resume after drag
  }

  const handleMouseLeave = () => {
    isDown.current = false
    setIsInteracting(false)
  }

  const [showTerms, setShowTerms] = useState(false)

  const terms = [
    {
      term: 'Một sản phẩm',
      meaning: 'Một mã sản phẩm chính. Biến thể, nhiều bảng giá hoặc cấu hình phức tạp có thể làm tăng phạm vi.'
    },
    {
      term: 'Một cổng thanh toán',
      meaning: 'Một nhà cung cấp có tài liệu và tài khoản hợp lệ. Phí giao dịch hoặc duy trì do khách thanh toán.'
    },
    {
      term: 'Tồn kho đơn giản',
      meaning: 'Nhập, trừ và xem số lượng theo sản phẩm hoặc biến thể. Không gồm nhiều kho, lô, hạn dùng hoặc điều chuyển.'
    },
    {
      term: 'Workflow đơn hàng',
      meaning: 'Tập trạng thái và quyền chuyển trạng thái được chốt trước khi lập trình.'
    },
    {
      term: 'GA4 ecommerce',
      meaning: 'Các sự kiện xem sản phẩm, thêm giỏ, bắt đầu thanh toán và mua hàng khi nền tảng cho phép.'
    },
  ]

  return (
    <section id="limitations" className="landing-section bg-gradient-to-b from-red-50/20 via-white to-red-50/20 py-6 lg:py-8 border-y border-red-100/60 relative overflow-hidden">
      {/* Soft ambient loang spots */}
      <div className="absolute top-1/4 -right-24 w-80 h-80 bg-red-200/20 rounded-full blur-3xl animate-blob-2 pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl animate-blob-1 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-5 sm:mb-6"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-bold uppercase tracking-wider mb-1.5 whitespace-nowrap">
            S09 • Giới Hạn & Thuật Ngữ
          </div>
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-normal sm:whitespace-nowrap">
            Minh Bạch Phạm Vi & Giới Hạn Dịch Vụ
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Để quá trình hợp tác thuận lợi, DUDI nêu rõ các hạng mục ngoài phạm vi tiêu chuẩn và định nghĩa chính xác các thuật ngữ kỹ thuật.
          </p>
        </motion.div>

        {/* 14 Out of Scope Items - 1 Single Row Interactive Draggable Slow Marquee */}
        <div className="mb-5 overflow-hidden relative">
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/50">
                <ShieldX className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                Các Hạng Mục Ngoài Phạm Vi Gói Tiêu Chuẩn
              </h3>
            </div>

            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-500 text-[11px] font-medium self-start sm:self-auto shrink-0 border border-slate-200/60 shadow-2xs">
              <MoveHorizontal className="w-3 h-3 text-slate-400 animate-pulse" />
              <span>Kéo chuột để xem</span>
            </div>
          </div>

          {/* Draggable Marquee Wrapper with side fade masks */}
          <div className="relative w-full overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-1">
            {/* Left & Right gradient fade masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

            {/* 1 Row Draggable Scroll Container */}
            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => setIsInteracting(true)}
              onTouchEnd={() => setTimeout(() => setIsInteracting(false), 800)}
              className="flex gap-3 overflow-x-auto py-1 select-none cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {displayedItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={`item-${idx}`}
                    className={`w-64 sm:w-72 shrink-0 ${item.color} backdrop-blur-sm rounded-xl p-3 border shadow-2xs hover:shadow-sm transition-all group flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className={`w-6 h-6 rounded-md ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-slate-900 truncate">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug pl-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Expandable Collapsible Section: Terminology Clarifications */}
        <div className="mt-2">
          {/* Toggle Button */}
          <button
            onClick={() => setShowTerms(!showTerms)}
            className="w-full flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-white/90 hover:bg-white border border-red-200/80 shadow-2xs hover:shadow-md transition-all group cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8.5 h-8.5 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-200/60 group-hover:scale-105 transition-transform">
                <BookOpen className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-red-600 transition-colors">
                  Thuật Ngữ Kỹ Thuật Cần Hiểu Đúng
                </h3>
              </div>
            </div>

            <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
              showTerms 
                ? 'bg-red-600 text-white rotate-180 shadow-xs' 
                : 'bg-red-50 text-red-600 border border-red-200/80 group-hover:bg-red-100'
            }`}>
              <ChevronDown className="w-4 h-4 stroke-[2.5]" />
            </div>
          </button>

          {/* Animated Expandable Content */}
          <AnimatePresence>
            {showTerms && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-4 pb-1">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
                    
                    {/* Left: 2 Columns of Terms Cards in Red (lg:col-span-8) */}
                    <div className="lg:col-span-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {terms.map((t, idx) => (
                          <div
                            key={idx}
                            className={`bg-gradient-to-br from-red-600 via-red-600 to-red-700 text-white rounded-xl p-3 sm:p-3.5 border border-red-500 shadow-md hover:shadow-lg transition-all ${
                              idx === terms.length - 1 ? 'sm:col-span-2' : ''
                            }`}
                          >
                            <div className="text-[11px] sm:text-[11.5px] font-black text-white uppercase tracking-wider mb-1 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
                              <span>{t.term}</span>
                            </div>
                            <p className="text-[11px] sm:text-xs text-red-50 leading-snug font-normal">
                              {t.meaning}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Transparent Mascot Presenting the Cards (lg:col-span-4) - Hidden on mobile */}
                    <div className="hidden lg:flex lg:col-span-4 flex-col items-center justify-center relative select-none">
                      {/* Ambient subtle glow */}
                      <div className="absolute w-44 h-44 sm:w-52 sm:h-52 bg-gradient-to-br from-red-500/20 via-rose-400/15 to-transparent rounded-full blur-2xl pointer-events-none" />

                      {/* Mascot Image with floating animation */}
                      <motion.div
                        animate={{
                          y: [0, -6, 0],
                          rotate: [0, 0.8, 0, -0.8, 0]
                        }}
                        transition={{
                          duration: 4.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        whileHover={{
                          scale: 1.04,
                          y: -10,
                          transition: { duration: 0.3 }
                        }}
                        className="relative z-10 cursor-pointer"
                      >
                        <img
                          src="/dudi-mascot-presenting.webp"
                          alt="DUDI Tech Mascot"
                          className="max-h-[200px] sm:max-h-[240px] lg:max-h-[270px] w-auto object-contain drop-shadow-[0_12px_24px_rgba(225,29,72,0.2)] filter transition-all duration-300 hover:drop-shadow-[0_16px_32px_rgba(225,29,72,0.3)]"
                        />
                      </motion.div>

                      {/* Natural Floor shadow */}
                      <motion.div
                        animate={{
                          scaleX: [1, 0.82, 1],
                          scaleY: [1, 0.85, 1],
                          opacity: [0.35, 0.18, 0.35]
                        }}
                        transition={{
                          duration: 4.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-32 h-3 bg-gradient-to-r from-transparent via-slate-900/30 to-transparent rounded-full blur-xs -mt-1 pointer-events-none"
                      />
                    </div>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
