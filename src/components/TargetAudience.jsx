import React from 'react'
import { Store, TrendingUp, Building2, ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TargetAudience({ onSelectPackage }) {
  const audiences = [
    {
      id: 'basic',
      packageName: 'Cơ bản',
      badge: 'Gói Cơ bản (5.000.000đ)',
      title: 'Mới bắt đầu bán',
      icon: Store,
      description: 'Dành cho cá nhân, shop mới bán online cần kênh bán riêng gọn nhẹ, tối ưu ngân sách.',
      needs: [
        'Quy mô dưới 50 sản phẩm',
        'Nhận đơn COD tiện lợi',
        'Kênh bán độc lập, dễ quản trị',
        'Tiết kiệm tối đa chi phí ban đầu'
      ],
      recommendedPlan: 'Cơ bản',
      ctaText: 'Xem chi tiết gói Cơ bản',
      highlight: false
    },
    {
      id: 'standard',
      packageName: 'Tiêu chuẩn',
      badge: 'Gói Tiêu chuẩn (10.000.000đ) - Phổ biến',
      title: 'Đã bán ổn định',
      icon: TrendingUp,
      description: 'Dành cho shop có đơn đều đặn, cần website chuyên nghiệp, quản lý đơn và tồn kho.',
      needs: [
        'Quy mô lên đến 300 sản phẩm',
        'Thanh toán COD & Chuyển khoản',
        'Quản lý trạng thái đơn & tồn kho',
        'Tạo mã giảm giá & gắn tracking GA4'
      ],
      recommendedPlan: 'Tiêu chuẩn',
      ctaText: 'Xem chi tiết gói Tiêu chuẩn',
      highlight: true
    },
    {
      id: 'premium',
      packageName: 'Cao cấp',
      badge: 'Gói Cao cấp (Liên hệ báo giá)',
      title: 'Cần mở rộng vận hành',
      icon: Building2,
      description: 'Dành cho doanh nghiệp hoặc chuỗi cửa hàng cần mở rộng, tích hợp cổng thanh toán và vận hành đa nhân sự.',
      needs: [
        'Sản phẩm & biến thể không giới hạn',
        'Tích hợp cổng online (VNPAY, MoMo...)',
        'Phân quyền nhiều nhân sự xử lý đơn',
        'Báo cáo doanh thu & phễu chuyển đổi'
      ],
      recommendedPlan: 'Cao cấp',
      ctaText: 'Xem chi tiết gói Cao cấp',
      highlight: false
    }
  ]

  return (
    <section id="audience" className="landing-section bg-gradient-to-b from-red-50/40 via-white to-red-50/30 py-12 lg:py-16 border-y border-red-100/60 relative overflow-hidden">
      {/* Decorative ambient loang glow orbs */}
      <div className="absolute top-10 -left-20 w-80 h-80 bg-red-300/20 rounded-full blur-3xl animate-blob-1 pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl animate-blob-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            S03 • Định Vị Nhu Cầu
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight sm:whitespace-nowrap">
            Giải Pháp Phù Hợp Từng Giai Đoạn Kinh Doanh
          </h2>
        </motion.div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {audiences.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 relative ${
                  item.highlight
                    ? 'bg-gradient-to-b from-red-600 via-red-600 to-red-700 text-white border-2 border-red-500 shadow-2xl shadow-red-600/25'
                    : 'bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-md hover:border-red-200 hover:shadow-xl hover:shadow-red-500/5'
                }`}
              >
                {item.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-red-700 text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-red-200">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                    <span>Lựa chọn tối ưu nhất</span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                      item.highlight ? 'bg-white text-red-600' : 'bg-red-50 text-red-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wide ${
                        item.highlight ? 'text-red-100' : 'text-red-600'
                      }`}>
                        {item.badge}
                      </span>
                      <h3 className={`text-lg font-extrabold ${
                        item.highlight ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    item.highlight ? 'text-red-50/90' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>

                  {/* Need checklist */}
                  <div className={`space-y-2 mb-5 pt-3.5 border-t ${
                    item.highlight ? 'border-white/20' : 'border-slate-100'
                  }`}>
                    <div className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${
                      item.highlight ? 'text-white' : 'text-slate-800'
                    }`}>
                      Đặc điểm phù hợp:
                    </div>
                    {item.needs.map((need, idx) => (
                      <div key={idx} className={`flex items-start gap-2 text-xs ${
                        item.highlight ? 'text-red-50' : 'text-slate-600'
                      }`}>
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          item.highlight ? 'text-white' : 'text-red-500'
                        }`} />
                        <span>{need}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className={`pt-4 border-t ${
                  item.highlight ? 'border-white/20' : 'border-slate-100'
                }`}>
                  <button
                    onClick={() => onSelectPackage && onSelectPackage(item.recommendedPlan)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      item.highlight
                        ? 'bg-white hover:bg-red-50 text-red-600 shadow-md hover:shadow-lg active:scale-95 font-black'
                        : 'bg-slate-100 hover:bg-red-50 text-slate-800 hover:text-red-600 active:scale-95'
                    }`}
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
