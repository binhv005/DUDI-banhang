import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { ZALO_LINK, handlePhoneClick } from '../utils/phoneHandler';
import AIChatModal from './AIChatModal';

export default function FloatingActions({ showToast, onSelectPackage }) {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const heroBottom = heroElement.getBoundingClientRect().bottom;
        setShowTopBtn(heroBottom < 100);
      } else {
        setShowTopBtn(window.scrollY > 350);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Floating AI Chatbot Modal */}
      <AIChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
        onSelectPackage={onSelectPackage}
      />

      <div 
        className="fixed right-4 sm:right-6 bottom-6 z-[9999] flex flex-col items-center gap-3 animate-slide-up transition-all"
        aria-label="Cụm phím tác vụ nhanh"
      >
        {/* 1. Nút Robot Mascot AI (Ở TRÊN CÙNG NHẤT) */}
        <button 
          type="button"
          data-chat-toggle="true"
          onClick={() => setIsChatOpen(prev => !prev)}
          className={`w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-gradient-to-tr from-red-600 via-red-500 to-rose-500 p-0.5 shadow-xl hover:shadow-red-500/50 hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer group relative ${isChatOpen ? 'ring-4 ring-red-400/50 scale-105' : ''}`}
          title="Chat với Trợ lý AI Website Bán Hàng DUDI"
          aria-label="Mở Trợ lý AI Website Bán Hàng DUDI"
          style={{ width: '56px', height: '56px' }}
        >
          {/* Animated Glow Ring */}
          <span className="absolute -inset-1 rounded-full bg-red-500/35 animate-ping pointer-events-none opacity-75"></span>
          
          <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden relative z-10 shadow-inner">
            <img 
              src="/robot-mascot.webp" 
              alt="Trợ lý AI Web Bán Hàng" 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          {/* Online Indicator Dot */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full z-20 shadow-sm animate-pulse"></span>
        </button>

        {/* 2. Call Button */}
        <button
          onClick={(e) => handlePhoneClick(e, showToast)}
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl hover:shadow-red-500/40 active:scale-95 transition-all flex items-center justify-center cursor-pointer group relative"
          title="Gọi điện hoặc sao chép Hotline 0909 163 821"
          aria-label="Gọi hotline 0909 163 821"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform relative z-10" />
        </button>

        {/* 3. Zalo Button */}
        <a
          href={ZALO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-blue-500/40 active:scale-95 transition-all flex items-center justify-center group font-extrabold text-xs sm:text-sm tracking-tight cursor-pointer"
          title="Nhắn tin qua Zalo 0909 163 821"
          aria-label="Chat Zalo với DUDI"
        >
          <span>Zalo</span>
        </a>

        {/* 4. Scroll To Top Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white shadow-lg hover:shadow-slate-900/30 active:scale-95 transition-all flex items-center justify-center cursor-pointer group border border-slate-700/50"
            title="Cuộn lên đầu trang"
            aria-label="Lên đầu trang"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        )}
      </div>
    </>
  );
}