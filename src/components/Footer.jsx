import React from 'react'
import { Phone, Mail, MapPin, FileText, ArrowUp, ShieldCheck, MessageSquare } from 'lucide-react'
import { HOTLINE_NUMBER, EMAIL_ADDRESS, ZALO_LINK, handlePhoneClick } from '../utils/phoneHandler'

export default function Footer({ showToast }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer id="footer" className="bg-[#08090C] text-neutral-300 pt-12 pb-8 border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8">
          
          {/* Col 1: Company Profile & Tax Info (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="DUDI Software Logo"
                className="h-10 w-10 object-contain bg-red-600 rounded-lg p-1.5 shadow-md shadow-red-600/20"
                width="40"
                height="40"
              />
              <span className="font-extrabold text-2xl tracking-tight text-white">
                DUDI <span className="text-red-500">Software</span>
              </span>
            </div>

            <h3 className="text-sm sm:text-base font-bold text-white pt-1">
              Công ty TNHH Giải Pháp Phần Mềm DUDI
            </h3>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
              Đơn vị cung cấp giải pháp thiết kế website bán hàng chuẩn mực, tối ưu trải nghiệm người dùng và chuyển giao công nghệ toàn diện.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded border border-red-500/40 bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <span>
                  Mã số thuế: <strong className="text-white font-bold">0319641544</strong>
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded border border-red-500/40 bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-neutral-300 leading-relaxed">
                  Địa chỉ: 49/2 Đường 14, Phường Thủ Đức, Thành phố Hồ Chí Minh
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Direct Contact (3.5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              LIÊN HỆ TRỰC TIẾP
            </h4>

            <div className="space-y-3.5">
              {/* Hotline */}
              <button
                onClick={(e) => handlePhoneClick(e, showToast)}
                className="w-full flex items-center gap-3.5 text-left group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg border border-neutral-800 bg-neutral-900/90 flex items-center justify-center text-red-500 shrink-0 group-hover:border-red-500/50 group-hover:scale-105 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-neutral-400">Hotline: </span>
                  <strong className="text-white text-sm font-bold group-hover:text-red-400 transition-colors">
                    {HOTLINE_NUMBER}
                  </strong>
                </div>
              </button>

              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg border border-neutral-800 bg-neutral-900/90 flex items-center justify-center text-red-500 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="text-xs text-neutral-300 hover:text-red-400 transition-colors"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>

              {/* Zalo OA */}
              <a
                href={ZALO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg border border-neutral-800 bg-neutral-900/90 flex items-center justify-center text-red-500 shrink-0 group-hover:border-red-500/50 group-hover:scale-105 transition-all">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-neutral-400">Zalo OA: </span>
                  <strong className="text-white text-sm font-bold group-hover:text-red-400 transition-colors">
                    {HOTLINE_NUMBER}
                  </strong>
                </div>
              </a>
            </div>
          </div>

          {/* Col 3: Terms & Transparency (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              ĐIỀU KHOẢN & MINH BẠCH
            </h4>

            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-neutral-400 shrink-0"></span>
                <span>Minh bạch phạm vi theo hợp đồng</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-neutral-400 shrink-0"></span>
                <span>Nghiệm thu theo từng mốc kỹ thuật</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-neutral-400 shrink-0"></span>
                <span>Hỗ trợ xử lý lỗi phát sinh sau bàn giao</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-neutral-400 shrink-0"></span>
                <span>Bảo mật thông tin khách hàng</span>
              </li>
            </ul>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-200 hover:bg-neutral-800 hover:border-neutral-700 hover:text-white transition-all cursor-pointer font-medium shadow-sm active:scale-95"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Về đầu trang</span>
            </button>
          </div>

        </div>

        {/* Bottom Legal Copyright & Regulatory statement */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div className="text-center sm:text-left">
            Copyright © {new Date().getFullYear()} DUDI Software. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-medium text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Thông tin đăng ký kinh doanh chính thức</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
