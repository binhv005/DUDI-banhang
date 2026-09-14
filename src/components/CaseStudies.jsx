import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Check, ExternalLink, ArrowRight, Layers, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CaseStudies({ onSelectPackage }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      id: 'hagiang',
      num: 'DỰ ÁN 01',
      pillLabel: 'DỰ ÁN 01: Odyssey Ha Giang Loop',
      pillPrice: '11,5tr',
      industry: 'Du lịch & Tour quốc tế',
      price: '11,5 triệu',
      priceUnit: '/ trọn gói',
      title: 'Website Odyssey Ha Giang Loop',
      desc: 'Nền tảng đặt tour du lịch cao cấp khám phá Hà Giang, tối ưu trải nghiệm và tỷ lệ chuyển đổi cho khách quốc tế.',
      domain: 'odysseyhagiangloop.com',
      url: 'https://www.odysseyhagiangloop.com/',
      image: '/project-hagiang-hero.webp',
      features: [
        'Giao diện độc quyền & chuẩn Mobile',
        'Lịch trình tour & Booking đa bước',
        'Kết nối WhatsApp & Email tự động',
        'Tối ưu SEO & Tốc độ tải toàn cầu'
      ],
      status: 'Đang hoạt động'
    },
    {
      id: 'caonguyenxanh',
      num: 'DỰ ÁN 02',
      pillLabel: 'DỰ ÁN 02: Bao Bì Cao Nguyên Xanh',
      pillPrice: '3,5tr',
      industry: 'Sản xuất & In ấn bao bì',
      price: '3,5 triệu',
      priceUnit: '/ trọn gói',
      title: 'Website Bao Bì Cao Nguyên Xanh',
      desc: 'Website hồ sơ năng lực doanh nghiệp sản xuất bao bì giấy, hộp cứng và tem nhãn công nghiệp chuẩn B2B.',
      domain: 'caonguyenxanh.com.vn',
      url: 'https://caonguyenxanh.com.vn/',
      image: '/project-caonguyenxanh.webp',
      features: [
        'Showcase năng lực sản xuất & máy in',
        'Danh mục bao bì phân loại theo ngành',
        'Form nhận báo giá nhanh về phòng Sale',
        'Tối ưu chuẩn SEO On-page & Mobile'
      ],
      status: 'Đang hoạt động'
    }
  ]

  const currentProject = projects[currentIndex]

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  return (
    <section
      id="cases"
      className="landing-section relative py-8 lg:py-12 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(90, 10, 15, 0.92), rgba(125, 18, 24, 0.88), rgba(90, 10, 15, 0.92)), url('/projects-bg.webp')"
      }}
    >
      {/* Decorative ambient aurora lights */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-red-500/15 rounded-full blur-3xl animate-blob-1 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-blob-2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full">

        {/* Section Header with Carousel Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/10 text-white text-[11px] font-bold uppercase tracking-wider mb-1.5 backdrop-blur-md border border-white/15">
              <Layers className="w-3 h-3 text-red-300" />
              <span>DỰ ÁN THỰC TẾ</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              Một số dự án DUDI đã thực hiện
            </h2>
          </div>

          {/* Carousel Navigation Bar */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={prevProject}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
              title="Dự án trước"
              aria-label="Dự án trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Active Project Pill Indicator */}
            <div className="bg-white text-slate-900 px-3.5 py-1 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="font-bold truncate max-w-[160px] sm:max-w-none">{currentProject.pillLabel}</span>
              <span className="bg-red-50 text-red-600 px-1.5 py-0.5 rounded-full text-[10px] font-black border border-red-100">
                {currentProject.pillPrice}
              </span>
            </div>

            <button
              onClick={nextProject}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
              title="Dự án tiếp theo"
              aria-label="Dự án tiếp theo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Main Big Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="bg-[#8b151b]/95 border border-red-500/30 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xl backdrop-blur-xl transition-all duration-300"
          >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">

            {/* Left Column: Image Preview with overlay bar */}
            <div className="lg:col-span-6 relative group">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/15 aspect-[16/10] bg-slate-950">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                {/* Bottom Bar inside Image */}
                <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between bg-black/65 backdrop-blur-md rounded-lg p-1.5 px-2.5 border border-white/10">
                  <div className="flex items-center gap-1.5 pl-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] font-semibold text-white truncate max-w-[140px] sm:max-w-none">
                      {currentProject.domain}
                    </span>
                  </div>
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold transition-colors shadow-xs"
                  >
                    <span>Xem web</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Project Details */}
            <div className="lg:col-span-6 space-y-3.5 text-left">

              {/* Meta row */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-black/25 border border-white/15 text-white font-black text-[10px] uppercase tracking-wider">
                    {currentProject.num}
                  </span>
                  <span className="text-xs text-red-100 font-semibold">
                    {currentProject.industry}
                  </span>
                </div>

                <div className="bg-black/25 px-2.5 py-0.5 rounded-lg border border-white/10 text-white">
                  <span className="text-xs font-black text-white">{currentProject.price}</span>
                  <span className="text-[10px] text-red-200 font-normal ml-1">{currentProject.priceUnit}</span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug">
                  {currentProject.title}
                </h3>
                <p className="mt-1 text-xs text-red-100/90 leading-relaxed">
                  {currentProject.desc}
                </p>
              </div>

              {/* 4 Feature Cards (2x2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                {currentProject.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-center gap-2 bg-black/20 hover:bg-black/30 rounded-lg px-2.5 py-1.5 border border-white/5 transition-colors"
                  >
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-[11px] font-medium text-white">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Status & External Link CTA */}
              <div className="pt-2.5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{currentProject.status}</span>
                </div>

                <a
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-slate-100 active:scale-95 text-slate-950 font-bold text-xs shadow-lg transition-all group cursor-pointer"
                >
                  <span>{currentProject.domain}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

          </div>
        </motion.div>
      </AnimatePresence>

        {/* Section Bottom Link */}
        <div className="mt-5 pt-3.5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-red-100/80 gap-2 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-red-300 shrink-0" />
            <span>Khám phá thêm các dự án tiêu biểu tại hệ sinh thái DUDI.</span>
          </div>
          <a
            href="https://dudisoftware.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline underline-offset-4 font-semibold inline-flex items-center gap-1 transition-colors text-[11px]"
          >
            <span>Xem tất cả dự án tại dudisoftware.com</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  )
}
