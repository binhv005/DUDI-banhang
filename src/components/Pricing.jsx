import React, { useState } from 'react'
import { Rocket, Zap, Crown, ArrowRight, ChevronDown, Check, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Pricing({ onSelectPackage }) {
  const [expandedPlan, setExpandedPlan] = useState(null)

  const toggleExpand = (planId) => {
    setExpandedPlan(prev => prev === planId ? null : planId)
  }

  const plans = [
    {
      id: 'basic',
      name: 'GÓI CƠ BẢN',
      price: '5.000.000',
      unit: 'đồng',
      ctaText: 'Chọn gói Cơ bản',
      highlight: false,
      badge: null,
      packageKey: 'Cơ bản',
      cardBg: 'bg-gradient-to-b from-[#fcdedb] via-[#f9ceca] to-[#f4b8b4] text-slate-800',
      titleColor: 'text-slate-900',
      priceColor: 'text-slate-950',
      descColor: 'text-slate-700',
      btnGradient: 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-rose-400/50',
      icon: Rocket,
      iconColor: 'text-rose-500',
      desc: 'Dành cho cá nhân và shop nhỏ mới bắt đầu kinh doanh online. Trưng bày tối đa 50 sản phẩm, nhận đơn COD tiện lợi mà không phát sinh chi phí vận hành phức tạp.',
      banner: (
        <svg viewBox="0 0 400 150" className="w-full h-full object-cover" preserveAspectRatio="none">
          <defs>
            <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#faecea" />
              <stop offset="100%" stopColor="#fcdedb" />
            </linearGradient>
          </defs>
          <rect width="400" height="150" fill="url(#sky1)" />
          {/* Skyline Back */}
          <path d="M0,150 L0,95 L25,95 L25,65 L45,65 L45,100 L60,100 L60,50 L70,30 L80,50 L80,105 L105,105 L105,75 L125,75 L125,115 L150,115 L150,60 L170,60 L170,110 L190,110 L190,40 L195,20 L200,40 L210,40 L210,120 L235,120 L235,80 L260,80 L260,105 L285,105 L285,65 L300,65 L300,95 L320,95 L320,55 L335,55 L335,110 L360,110 L360,70 L380,70 L380,115 L400,115 L400,150 Z" fill="#d89a98" fillOpacity="0.4" />
          {/* Skyline Front */}
          <path d="M0,150 L0,110 L20,110 L20,80 L40,80 L40,120 L65,120 L65,70 L85,70 L85,125 L110,125 L110,90 L130,90 L130,130 L155,130 L155,75 L165,55 L175,75 L175,125 L200,125 L200,85 L220,85 L220,135 L245,135 L245,95 L270,95 L270,125 L295,125 L295,75 L315,75 L315,130 L340,130 L340,85 L365,85 L365,120 L400,120 L400,150 Z" fill="#bf7a78" fillOpacity="0.65" />
        </svg>
      ),
      specs: [
        { label: 'Phù hợp', value: 'Mới bắt đầu bán' },
        { label: 'Sản phẩm', value: 'Tối đa 50' },
        { label: 'Danh mục', value: 'Tối đa 5' },
        { label: 'Giao diện', value: 'Mẫu có sẵn' },
        { label: 'Giỏ hàng và đặt hàng', value: 'Có' },
        { label: 'Thanh toán', value: 'COD' },
        { label: 'Quản lý đơn', value: 'Trạng thái cơ bản' },
        { label: 'Tồn kho', value: 'Không' },
        { label: 'Khách hàng', value: 'Lưu thông tin đơn' },
        { label: 'Khuyến mãi', value: 'Không' },
        { label: 'Biến thể', value: 'Không / 1 thuộc tính' },
        { label: 'Báo cáo', value: 'Không' },
        { label: 'Tracking', value: 'Sự kiện đơn cơ bản' },
      ]
    },
    {
      id: 'standard',
      name: 'GÓI TIÊU CHUẨN',
      price: '10.000.000',
      unit: 'đồng',
      ctaText: 'Chọn gói Tiêu chuẩn',
      highlight: true,
      badge: 'Được lựa chọn nhiều nhất',
      packageKey: 'Tiêu chuẩn',
      cardBg: 'bg-gradient-to-b from-[#759ee0] via-[#638dd4] to-[#4e77be] text-white',
      titleColor: 'text-white',
      priceColor: 'text-white',
      descColor: 'text-blue-50',
      btnGradient: 'bg-gradient-to-r from-rose-600 via-red-500 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-rose-600/50',
      icon: Zap,
      iconColor: 'text-blue-600',
      desc: 'Dành cho các cửa hàng, thương hiệu đã có lượng đơn đều đặn. Tối đa 300 sản phẩm, kiểm soát tồn kho đơn giản, mã giảm giá kích cầu và nhận chuyển khoản ngân hàng.',
      banner: (
        <svg viewBox="0 0 400 150" className="w-full h-full object-cover" preserveAspectRatio="none">
          <defs>
            <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#cae3fd" />
              <stop offset="100%" stopColor="#9ec7f8" />
            </linearGradient>
          </defs>
          <rect width="400" height="150" fill="url(#sky2)" />
          {/* Clouds */}
          <ellipse cx="70" cy="45" rx="40" ry="20" fill="#ffffff" fillOpacity="0.8" />
          <ellipse cx="110" cy="35" rx="30" ry="18" fill="#ffffff" fillOpacity="0.9" />
          <ellipse cx="320" cy="50" rx="50" ry="25" fill="#ffffff" fillOpacity="0.8" />
          {/* Blue City Skyline */}
          <path d="M0,150 L0,80 L30,80 L30,40 L40,18 L50,40 L50,95 L75,95 L75,60 L95,60 L95,110 L120,110 L120,35 L130,10 L140,35 L140,100 L170,100 L170,70 L195,70 L195,115 L225,115 L225,55 L245,55 L245,105 L270,105 L270,45 L280,20 L290,45 L290,110 L320,110 L320,75 L345,75 L345,120 L375,120 L375,60 L400,60 L400,150 Z" fill="#244473" fillOpacity="0.85" />
          <path d="M15,150 L15,105 L35,105 L35,150 M85,150 L85,85 L110,85 L110,150 M180,150 L180,95 L210,95 L210,150 M280,150 L280,75 L305,75 L305,150 M355,150 L355,90 L385,90 L385,150" fill="#172e50" fillOpacity="0.5" />
        </svg>
      ),
      specs: [
        { label: 'Phù hợp', value: 'Đã bán ổn định' },
        { label: 'Sản phẩm', value: 'Tối đa 300' },
        { label: 'Danh mục', value: 'Tối đa 20' },
        { label: 'Giao diện', value: 'Bố cục theo ngành' },
        { label: 'Giỏ hàng và đặt hàng', value: 'Có' },
        { label: 'Thanh toán', value: 'COD & Chuyển khoản' },
        { label: 'Quản lý đơn', value: 'Quy trình đã chốt' },
        { label: 'Tồn kho', value: 'Tồn kho đơn giản' },
        { label: 'Khách hàng', value: 'Danh sách khách hàng' },
        { label: 'Khuyến mãi', value: 'Mã giảm giá đơn giản' },
        { label: 'Biến thể', value: 'Tối đa 2 thuộc tính' },
        { label: 'Báo cáo', value: 'Đơn & doanh thu cơ bản' },
        { label: 'Tracking', value: 'GA4 ecommerce cơ bản' },
      ]
    },
    {
      id: 'premium',
      name: 'GÓI CAO CẤP',
      price: 'Liên hệ',
      unit: '',
      ctaText: 'Nhận báo giá riêng',
      highlight: false,
      badge: null,
      packageKey: 'Cao cấp',
      cardBg: 'bg-gradient-to-b from-[#c5e8d0] via-[#b0dec0] to-[#99cfab] text-slate-800',
      titleColor: 'text-slate-900',
      priceColor: 'text-slate-950',
      descColor: 'text-slate-700',
      btnGradient: 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-rose-400/50',
      icon: Crown,
      iconColor: 'text-emerald-600',
      desc: 'Dành cho doanh nghiệp hoặc chuỗi cửa hàng cần mở rộng quy mô. Thiết kế theo hành vi mua hàng riêng, phân quyền đa nhân sự và tích hợp thanh toán trực tuyến.',
      banner: (
        <svg viewBox="0 0 400 150" className="w-full h-full object-cover" preserveAspectRatio="none">
          <defs>
            <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f3faef" />
              <stop offset="100%" stopColor="#cbe9d2" />
            </linearGradient>
          </defs>
          <rect width="400" height="150" fill="url(#sky3)" />
          {/* Mountains & Nature */}
          <path d="M0,150 L0,75 Q90,20 180,80 T360,70 L400,75 L400,150 Z" fill="#88b692" fillOpacity="0.45" />
          <path d="M0,150 L0,100 Q120,55 240,110 T400,95 L400,150 Z" fill="#60946c" fillOpacity="0.6" />
          <path d="M0,150 Q60,95 130,120 Q200,145 300,110 Q360,90 400,120 L400,150 Z" fill="#43734e" fillOpacity="0.8" />
        </svg>
      ),
      specs: [
        { label: 'Phù hợp', value: 'Cần mở rộng vận hành' },
        { label: 'Sản phẩm', value: 'Chốt theo hạ tầng' },
        { label: 'Danh mục', value: 'Tối đa 50 / Báo giá' },
        { label: 'Giao diện', value: 'Thiết kế theo hành vi' },
        { label: 'Giỏ hàng và đặt hàng', value: 'Có' },
        { label: 'Thanh toán', value: 'COD, CK & Cổng Online' },
        { label: 'Quản lý đơn', value: 'Workflow & phân quyền' },
        { label: 'Tồn kho', value: 'Tồn kho & cảnh báo' },
        { label: 'Khách hàng', value: 'Lịch sử mua & phân nhóm' },
        { label: 'Khuyến mãi', value: 'Mã giảm giá & điều kiện' },
        { label: 'Biến thể', value: 'Theo cấu trúc chốt' },
        { label: 'Báo cáo', value: 'Đa chiều theo thời gian' },
        { label: 'Tracking', value: 'GA4 ecommerce & funnel' },
      ]
    }
  ]

  return (
    <section id="pricing" className="landing-section bg-gradient-to-b from-slate-50/70 via-white to-slate-50/70 py-10 lg:py-16 relative overflow-hidden text-slate-800 border-y border-slate-200/80">
      {/* Subtle modern geometric background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
      
      {/* Rich Multi-color Ambient Loang Glow Mesh Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-red-200/35 via-rose-200/25 to-blue-200/35 rounded-full blur-3xl pointer-events-none" />
      
      {/* Loang Glow behind Card 1 (Rose) */}
      <div className="absolute top-1/3 left-[15%] -translate-x-1/2 w-80 h-80 bg-rose-200/35 rounded-full blur-3xl animate-blob-1 pointer-events-none" />
      
      {/* Loang Glow behind Card 2 (Blue - Center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-blue-200/40 rounded-full blur-3xl animate-pulse pointer-events-none" />
      
      {/* Loang Glow behind Card 3 (Emerald/Green) */}
      <div className="absolute top-1/3 right-[15%] translate-x-1/2 w-80 h-80 bg-emerald-200/35 rounded-full blur-3xl animate-blob-2 pointer-events-none" />
      
      {/* Bottom ambient accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-rose-200/25 via-blue-200/25 to-emerald-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-bold uppercase tracking-wider mb-2 shadow-xs whitespace-nowrap">
            S06 • Bảng Giá Dịch Vụ
          </div>
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-normal sm:whitespace-nowrap">
            Bảng Giá Website Bán Hàng Minh Bạch
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
            Chi phí rõ ràng, không phát sinh chi phí ẩn. Lựa chọn gói giải pháp phù hợp với định mức sản phẩm và mô hình kinh doanh của bạn.
          </p>
        </motion.div>

        {/* Pricing Cards Grid matching sample */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const isExpanded = expandedPlan === plan.id

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: plan.highlight ? -12 : -8, scale: plan.highlight ? 1.045 : 1.015, transition: { duration: 0.25 } }}
                className={`group rounded-3xl overflow-visible transition-all duration-300 relative flex flex-col justify-between ${
                  plan.highlight
                    ? 'shadow-[0_22px_50px_rgba(37,99,235,0.32)] ring-3 ring-blue-400/80 md:-translate-y-3.5 md:scale-[1.03] z-20'
                    : 'shadow-lg shadow-slate-300/40 hover:shadow-2xl z-10'
                } ${plan.cardBg}`}
              >
                {/* Glowing Aura for Highlight Card */}
                {plan.highlight && (
                  <div className="absolute -inset-1.5 bg-gradient-to-b from-blue-400/40 via-indigo-500/30 to-cyan-400/35 rounded-[32px] blur-xl opacity-85 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-pulse" />
                )}

                {/* Floating Top Badge - Red Background, Positioned Above the Card */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white text-[9.5px] sm:text-[11px] font-black px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full uppercase tracking-wider shadow-lg shadow-red-600/40 flex items-center gap-1.5 border-2 border-white z-30 animate-pulse whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-yellow-300 animate-spin shrink-0" style={{ animationDuration: '5s' }} />
                    <span className="drop-shadow-sm whitespace-nowrap">{plan.badge}</span>
                  </div>
                )}

                {/* Top Banner with Decorative Illustration */}
                <div className="relative h-28 sm:h-32 w-full rounded-t-3xl overflow-hidden">
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                    {plan.banner}
                  </div>
                </div>

                {/* Overlapping Round White Icon Badge (Outside overflow-hidden to prevent clipping) */}
                <div className="absolute top-28 sm:top-32 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                  <div className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-white/95 group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-2xl transition-all duration-300 ${
                    plan.highlight ? 'ring-4 ring-blue-300/70 shadow-blue-500/30' : ''
                  }`}>
                    <Icon className={`w-6 h-6 ${plan.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="pt-8 px-4 sm:px-5 pb-5 flex-1 flex flex-col justify-between text-center rounded-b-3xl">
                  
                  <div>
                    {/* Plan Name */}
                    <h3 className={`text-xs sm:text-sm font-black tracking-wider uppercase mb-0.5 drop-shadow-sm ${plan.titleColor}`}>
                      {plan.name}
                    </h3>

                    {/* Big Price */}
                    <div className="my-2 flex items-baseline justify-center gap-1">
                      <span className={`text-2xl sm:text-3xl font-black tracking-tight drop-shadow-sm transition-transform duration-300 group-hover:scale-105 ${plan.priceColor}`}>
                        {plan.price}
                      </span>
                      {plan.unit && (
                        <span className={`text-xs font-bold opacity-80 ${plan.titleColor}`}>
                          {plan.unit}
                        </span>
                      )}
                    </div>

                    {/* Description summary */}
                    <p className={`text-[11px] sm:text-xs leading-relaxed mb-3 px-1 min-h-[48px] flex items-center justify-center opacity-90 ${plan.descColor}`}>
                      {plan.desc}
                    </p>
                  </div>

                  {/* Toggle Button for Technical Specs */}
                  <div className="pt-1">
                    <button
                      onClick={() => toggleExpand(plan.id)}
                      className="inline-flex items-center justify-center gap-1 text-[11px] font-bold text-slate-800 bg-white/80 hover:bg-white active:scale-95 px-3 py-1.5 rounded-lg transition-all cursor-pointer shadow-xs hover:shadow-md mb-3 border border-white/70"
                    >
                      <span>{isExpanded ? 'Thu gọn thông số' : 'Chi tiết thông số kỹ thuật'}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Expandable Technical Specs Table */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden mb-3"
                        >
                          <div className="bg-black/15 backdrop-blur-md rounded-xl p-3 text-left border border-white/20 shadow-inner space-y-1">
                            <div className="text-[10px] font-black uppercase tracking-wider mb-1.5 pb-1 border-b border-white/20 text-white flex items-center justify-between">
                              <span>Thông số kỹ thuật</span>
                              <span className="text-[9px] font-medium opacity-75">13 mục</span>
                            </div>
                            {plan.specs.map((spec, specIdx) => (
                              <div
                                key={specIdx}
                                className="flex items-center justify-between text-[11px] py-0.5 border-b border-white/10 last:border-0 text-white"
                              >
                                <span className="opacity-80 font-medium">
                                  {spec.label}:
                                </span>
                                <span className="font-bold text-right ml-2 text-white">
                                  {spec.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Main CTA Button matching sample glow pill */}
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => onSelectPackage && onSelectPackage(plan.packageKey)}
                      className={`group/btn w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${plan.btnGradient}`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </motion.button>
                  </div>

                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
