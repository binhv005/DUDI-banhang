import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0) // Default first item open

  const faqs = [
    {
      question: 'Giá đã gồm cổng thanh toán chưa?',
      answer: 'Chưa gồm phí dịch vụ và phí giao dịch của nhà cung cấp.'
    },
    {
      question: 'Ai nhập sản phẩm?',
      answer: 'Hai bên phải chốt số lượng nhập ban đầu. Phần vượt hạn mức được báo giá riêng.'
    },
    {
      question: 'Có đồng bộ sàn không?',
      answer: 'Không mặc định. Mỗi sàn hoặc hệ thống đồng bộ cần khảo sát API.'
    },
    {
      question: 'Có quản lý nhiều kho không?',
      answer: 'Không nằm trong gói Cơ bản hoặc Tiêu chuẩn mặc định.'
    },
    {
      question: 'Có cam kết doanh thu không?',
      answer: 'Không. Website là một phần của quy trình bán hàng và marketing.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIdx(openIdx === index ? -1 : index)
  }

  return (
    <section id="faq" className="landing-section bg-gradient-to-b from-white via-slate-50/50 to-white py-10 lg:py-16 relative overflow-hidden text-slate-800 border-y border-slate-200/80">
      
      {/* Soft Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-bold uppercase tracking-wider mb-2">
            S10 • Giải Đáp Thắc Mắc
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Các câu trả lời rõ ràng, thẳng thắn cho những băn khoăn phổ biến nhất trước khi triển khai website bán hàng.
          </p>
        </motion.div>

        {/* Centered FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-red-500 bg-gradient-to-r from-red-600 via-red-600 to-rose-600 text-white shadow-lg shadow-red-500/25 ring-2 ring-red-400/30'
                    : 'border-slate-200/80 bg-white hover:bg-slate-50/90 hover:border-red-200 shadow-xs hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-xl cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={`text-xs sm:text-sm md:text-base font-bold ${isOpen ? 'text-white' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen ? 'bg-white text-red-600 rotate-180 shadow-md' : 'bg-slate-100 text-slate-500 border border-slate-200'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 pt-0 text-xs sm:text-sm text-red-50 leading-relaxed font-normal">
                        <div className="pt-2.5 border-t border-white/20">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
