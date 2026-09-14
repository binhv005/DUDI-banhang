import React, { useState, useEffect } from 'react'
import { Send, CheckCircle2, AlertCircle, Info, ShieldCheck, Clock, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactForm({ selectedPackage, onFormSubmitted }) {
  // Capture UTM parameters from URL
  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search)
      setUtmParams({
        utm_source: searchParams.get('utm_source') || '',
        utm_medium: searchParams.get('utm_medium') || '',
        utm_campaign: searchParams.get('utm_campaign') || '',
        utm_term: searchParams.get('utm_term') || '',
        utm_content: searchParams.get('utm_content') || ''
      })
    }
  }, [])

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    industry: '',
    productCount: 'Dưới 50',
    paymentMethods: ['COD'],
    inventory: 'Không',
    packageInterest: 'Chưa rõ',
    description: ''
  })

  // Synchronize packageInterest when user clicks package from elsewhere
  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({
        ...prev,
        packageInterest: selectedPackage
      }))
    }
  }, [selectedPackage])

  // Validation errors & submission state
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [lastSubmitTime, setLastSubmitTime] = useState(0)
  const [rateLimitMessage, setRateLimitMessage] = useState('')

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Handle Payment Checkboxes
  const handlePaymentChange = (method) => {
    setFormData(prev => {
      const current = prev.paymentMethods
      if (current.includes(method)) {
        return { ...prev, paymentMethods: current.filter(m => m !== method) }
      } else {
        return { ...prev, paymentMethods: [...current, method] }
      }
    })
  }

  // Validate form
  const validate = () => {
    const newErrors = {}

    // Họ và tên: Bắt buộc, 2 đến 80 ký tự
    const nameTrim = formData.fullName.trim()
    if (!nameTrim) {
      newErrors.fullName = 'Vui lòng nhập họ và tên'
    } else if (nameTrim.length < 2 || nameTrim.length > 80) {
      newErrors.fullName = 'Họ và tên phải từ 2 đến 80 ký tự'
    }

    // Điện thoại hoặc Zalo: Bắt buộc, 9 đến 12 chữ số
    const phoneClean = formData.phone.replace(/[\s.-]/g, '')
    if (!phoneClean) {
      newErrors.phone = 'Vui lòng nhập số điện thoại hoặc Zalo'
    } else if (!/^\d{9,12}$/.test(phoneClean)) {
      newErrors.phone = 'Số điện thoại phải từ 9 đến 12 chữ số'
    }

    // Ngành hàng: Bắt buộc, 2 đến 120 ký tự
    const industryTrim = formData.industry.trim()
    if (!industryTrim) {
      newErrors.industry = 'Vui lòng nhập ngành hàng'
    } else if (industryTrim.length < 2 || industryTrim.length > 120) {
      newErrors.industry = 'Ngành hàng phải từ 2 đến 120 ký tự'
    }

    // Mô tả: Bắt buộc, 10 đến 1000 ký tự
    const descTrim = formData.description.trim()
    if (!descTrim) {
      newErrors.description = 'Vui lòng nhập mô tả nhu cầu'
    } else if (descTrim.length < 10 || descTrim.length > 1000) {
      newErrors.description = 'Mô tả phải từ 10 đến 1000 ký tự (Hiện tại: ' + descTrim.length + ' ký tự)'
    }

    // Thanh toán ít nhất 1 phương thức
    if (formData.paymentMethods.length === 0) {
      newErrors.paymentMethods = 'Vui lòng chọn ít nhất một phương thức thanh toán'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle submit with Google Apps Script email integration & rate limiting
  const handleSubmit = async (e) => {
    e.preventDefault()
    setRateLimitMessage('')

    // Check rate limit: 15 seconds cooldown
    const now = Date.now()
    if (now - lastSubmitTime < 15000 && lastSubmitTime > 0) {
      const waitSec = Math.ceil((15000 - (now - lastSubmitTime)) / 1000)
      setRateLimitMessage(`Vui lòng đợi ${waitSec} giây trước khi gửi yêu cầu tiếp theo.`)
      return
    }

    if (!validate()) return

    setIsSubmitting(true)

    const payload = {
      ...formData,
      utm: utmParams,
      submittedAt: new Date().toISOString()
    }

    console.log('Sending Form payload:', payload)

    const googleScriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL

    if (googleScriptUrl && googleScriptUrl.trim() !== '') {
      try {
        await fetch(googleScriptUrl.trim(), {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(payload)
        })
      } catch (err) {
        console.error('Error submitting to Google Script:', err)
      }
    }

    setIsSubmitting(false)
    setIsSuccess(true)
    setLastSubmitTime(Date.now())
    if (onFormSubmitted) {
      onFormSubmitted()
    }
  }

  const hasOnlinePayment = formData.paymentMethods.includes('Online')

  return (
    <section id="contact" className="landing-section relative py-8 lg:py-12 border-y border-red-100/60 overflow-hidden bg-gradient-to-b from-white via-red-50/25 to-white">
      {/* Decorative ambient loang glow orbs */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-red-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: 30% - Transparent Robot Character & 24/7 Floating Badge - Hidden on mobile */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center space-y-2 relative">
            
            {/* Rich Multi-layer Ambient Loang Glow behind the Robot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-red-500/35 via-rose-400/30 to-amber-300/35 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-rose-500/25 to-pink-500/25 rounded-full blur-2xl animate-blob-1 pointer-events-none" />

            {/* Robot Character with Natural Infinite Floating & Breathing Animation */}
            <div className="relative flex flex-col items-center justify-center">
              
              {/* Cyan Holographic Glow behind robot's virtual screen */}
              <motion.div
                animate={{
                  opacity: [0.35, 0.7, 0.35],
                  scale: [0.95, 1.08, 0.95]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/3 w-36 h-28 bg-cyan-400/30 rounded-full blur-xl pointer-events-none z-0"
              />

              {/* Little floating tech spark dots */}
              <motion.div
                animate={{
                  y: [0, -18, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0.6, 1.2, 0.6]
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
                className="absolute top-12 left-6 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] pointer-events-none z-20"
              />
              <motion.div
                animate={{
                  y: [0, -22, 0],
                  opacity: [0, 0.9, 0],
                  scale: [0.5, 1.1, 0.5]
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute top-20 right-8 w-1.5 h-1.5 rounded-full bg-red-400 shadow-[0_0_8px_#f87171] pointer-events-none z-20"
              />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0, -1, 0],
                  scale: [1, 1.012, 1]
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.06,
                  y: -14,
                  rotate: 1.5,
                  transition: { duration: 0.3 }
                }}
                className="relative flex items-center justify-center cursor-pointer select-none z-10"
              >
                <img
                  src="/dudi-contact-transparent.webp"
                  alt="DUDI Software Robot"
                  className="max-h-[270px] sm:max-h-[310px] lg:max-h-[330px] w-auto object-contain drop-shadow-[0_16px_32px_rgba(225,29,72,0.22)] select-none pointer-events-auto filter transition-all duration-300 hover:drop-shadow-[0_20px_40px_rgba(225,29,72,0.35)]"
                />
              </motion.div>

              {/* Natural Floor Shadow with synchronized subtle scale and opacity */}
              <motion.div
                animate={{
                  scaleX: [1, 0.78, 1],
                  scaleY: [1, 0.82, 1],
                  opacity: [0.4, 0.18, 0.4]
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-32 h-3.5 bg-gradient-to-r from-transparent via-slate-900/35 to-transparent rounded-full blur-xs -mt-1 pointer-events-none"
              />
            </div>

            {/* Prominent Dynamic Floating & Ambient Glow Loang Pill Badge */}
            <motion.div
              animate={{
                y: [0, -4, 0]
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1]
              }}
              whileHover={{ scale: 1.04, y: -6 }}
              className="relative group cursor-pointer inline-flex self-center mt-1"
            >
              {/* Animated Loang Glow Ambient Orbs behind Badge */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600/40 via-rose-500/35 to-amber-500/35 rounded-full blur-lg opacity-85 group-hover:opacity-100 transition-opacity duration-500 animate-pulse pointer-events-none" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/30 to-rose-600/40 rounded-full blur-xs pointer-events-none" />

              {/* Prominent Glassmorphic Pill Content */}
              <div className="relative bg-white/95 backdrop-blur-xl border-2 border-red-500/30 rounded-full px-3.5 py-1.5 shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                {/* Pulsing Beacon with glow ripple */}
                <div className="relative flex items-center justify-center w-3 h-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-md shadow-emerald-500/60" />
                </div>

                {/* Bold Prominent Text */}
                <span className="text-[11px] font-black tracking-wider uppercase text-red-700 select-none whitespace-nowrap">
                  Tư Vấn Miễn Phí 24/7
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 70% - Spacious Form Card with Red Gradient */}
          <div className="lg:col-span-7 w-full relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45 }}
              className="bg-gradient-to-b from-red-600 via-red-600 to-red-700 text-white rounded-2xl p-4 sm:p-6 border-2 border-red-500 shadow-2xl shadow-red-600/30 relative"
            >
              {/* Cute DUDI Robot Head Peeking at the Top-Right of Form Card */}
              <motion.div
                animate={{
                  y: [0, -4, 0],
                  rotate: [0, 1.5, 0, -1.5, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                whileHover={{ scale: 1.15, y: -7, rotate: 3, transition: { duration: 0.2 } }}
                className="absolute -top-7 sm:-top-9 right-3 sm:right-6 z-20 cursor-pointer select-none"
              >
                <img
                  src="/robot-head.webp"
                  alt="DUDI Robot"
                  className="w-14 h-14 sm:w-20 sm:h-20 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.38)] filter transition-all duration-300 hover:drop-shadow-[0_16px_32px_rgba(225,29,72,0.48)]"
                />
              </motion.div>
              
              {/* Card Header */}
              <div className="mb-3">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white text-red-700 text-[10px] font-bold uppercase tracking-wider mb-1 shadow-xs">
                  S11 • GỬI YÊU CẦU TƯ VẤN
                </div>
                <h2 className="text-lg sm:text-xl font-black text-white tracking-tight leading-tight">
                  Đăng Ký Nhận Tư Vấn & Báo Giá
                </h2>
                <p className="text-[11px] sm:text-xs text-red-100 mt-0.5">
                  Điền thông tin để chuyên viên DUDI liên hệ hỗ trợ bạn nhanh nhất.
                </p>
              </div>

              {isSuccess ? (
                <div className="text-center py-6 px-3 space-y-3 animate-fade-in bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-white text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-extrabold text-white">
                    Gửi Yêu Cầu Thành Công!
                  </h3>
                  <p className="text-xs text-white font-medium bg-white/15 border border-white/25 rounded-xl p-2.5 leading-relaxed">
                    DUDI đã nhận thông tin và sẽ liên hệ qua điện thoại hoặc Zalo ngay.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false)
                      setFormData({
                        fullName: '',
                        phone: '',
                        industry: '',
                        productCount: 'Dưới 50',
                        paymentMethods: ['COD'],
                        inventory: 'Không',
                        packageInterest: 'Chưa rõ',
                        description: ''
                      })
                    }}
                    className="mt-2 px-4 py-1.5 text-xs font-bold text-red-700 bg-white hover:bg-red-50 rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    Gửi thêm yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-2.5">
                  
                  {rateLimitMessage && (
                    <div className="p-2.5 bg-white text-amber-800 rounded-lg text-xs flex items-center gap-1.5 shadow-sm font-medium">
                      <Clock className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                      <span>{rateLimitMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2.5">
                    
                    {/* Họ và tên */}
                    <div>
                      <label htmlFor="fullName" className="block text-[11px] font-bold text-white uppercase tracking-wider mb-1">
                        Họ và tên <span className="text-red-200">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Nguyễn Văn A"
                        maxLength={80}
                        className={`w-full px-2.5 py-1.5 rounded-lg text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-white transition-all shadow-xs ${
                          errors.fullName
                            ? 'ring-2 ring-amber-300 bg-red-50'
                            : ''
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-0.5 text-[10px] text-amber-200 flex items-center gap-0.5 font-semibold">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Điện thoại hoặc Zalo */}
                    <div>
                      <label htmlFor="phone" className="block text-[11px] font-bold text-white uppercase tracking-wider mb-1">
                        Điện thoại/Zalo <span className="text-red-200">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0909xxxxxx"
                        maxLength={15}
                        className={`w-full px-2.5 py-1.5 rounded-lg text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-white transition-all shadow-xs ${
                          errors.phone
                            ? 'ring-2 ring-amber-300 bg-red-50'
                            : ''
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-0.5 text-[10px] text-amber-200 flex items-center gap-0.5 font-semibold">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Ngành hàng */}
                    <div>
                      <label htmlFor="industry" className="block text-[11px] font-bold text-white uppercase tracking-wider mb-1">
                        Ngành hàng <span className="text-red-200">*</span>
                      </label>
                      <input
                        type="text"
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        placeholder="Thời trang, mỹ phẩm..."
                        maxLength={120}
                        className={`w-full px-2.5 py-1.5 rounded-lg text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-white transition-all shadow-xs ${
                          errors.industry
                            ? 'ring-2 ring-amber-300 bg-red-50'
                            : ''
                        }`}
                      />
                      {errors.industry && (
                        <p className="mt-0.5 text-[10px] text-amber-200 flex items-center gap-0.5 font-semibold">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.industry}</span>
                        </p>
                      )}
                    </div>

                    {/* Số sản phẩm */}
                    <div>
                      <label htmlFor="productCount" className="block text-[11px] font-bold text-white uppercase tracking-wider mb-1">
                        Số sản phẩm
                      </label>
                      <select
                        id="productCount"
                        name="productCount"
                        value={formData.productCount}
                        onChange={handleChange}
                        className="w-full px-2.5 py-1.5 rounded-lg text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-white shadow-xs font-medium"
                      >
                        <option value="Dưới 50">Dưới 50</option>
                        <option value="51 đến 300">51 đến 300</option>
                        <option value="Trên 300">Trên 300</option>
                      </select>
                    </div>

                    {/* Tồn kho */}
                    <div>
                      <label htmlFor="inventory" className="block text-[11px] font-bold text-white uppercase tracking-wider mb-1">
                        Quản lý tồn kho
                      </label>
                      <select
                        id="inventory"
                        name="inventory"
                        value={formData.inventory}
                        onChange={handleChange}
                        className="w-full px-2.5 py-1.5 rounded-lg text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-white shadow-xs font-medium"
                      >
                        <option value="Không">Không</option>
                        <option value="Một kho">1 kho</option>
                        <option value="Nhiều kho">Nhiều kho</option>
                      </select>
                    </div>

                    {/* Gói quan tâm */}
                    <div>
                      <label htmlFor="packageInterest" className="block text-[11px] font-bold text-white uppercase tracking-wider mb-1">
                        Gói quan tâm
                      </label>
                      <select
                        id="packageInterest"
                        name="packageInterest"
                        value={formData.packageInterest}
                        onChange={handleChange}
                        className="w-full px-2.5 py-1.5 rounded-lg text-xs text-red-700 bg-white focus:outline-none focus:ring-2 focus:ring-white font-bold shadow-xs"
                      >
                        <option value="Cơ bản">Cơ bản (5tr)</option>
                        <option value="Tiêu chuẩn">Tiêu chuẩn (10tr)</option>
                        <option value="Cao cấp">Cao cấp (Báo giá)</option>
                        <option value="Chưa rõ">Tư vấn thêm</option>
                      </select>
                    </div>

                  </div>

                  {/* Thanh toán (Checkbox) */}
                  <div className="pt-0.5">
                    <label className="block text-[11px] font-bold text-white uppercase tracking-wider mb-1">
                      Thanh toán <span className="text-red-200">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['COD', 'Chuyển khoản', 'Online'].map((method) => (
                        <label key={method} className="inline-flex items-center gap-1.5 cursor-pointer text-xs font-semibold text-white">
                          <input
                            type="checkbox"
                            checked={formData.paymentMethods.includes(method)}
                            onChange={() => handlePaymentChange(method)}
                            className="w-4 h-4 text-red-600 rounded bg-white focus:ring-white"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                    {errors.paymentMethods && (
                      <p className="mt-0.5 text-[10px] text-amber-200 flex items-center gap-0.5 font-semibold">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.paymentMethods}</span>
                      </p>
                    )}

                    {hasOnlinePayment && (
                      <div className="mt-1.5 p-2 bg-white/15 border border-white/25 rounded-lg text-[10px] text-white flex items-start gap-1 animate-fade-in font-medium">
                        <Info className="w-3 h-3 text-amber-300 shrink-0 mt-0.5" />
                        <span>Cần hồ sơ ĐKKD/Hộ kinh doanh theo quy định cổng thanh toán (VNPAY/MoMo).</span>
                      </div>
                    )}
                  </div>

                  {/* Mô tả */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="description" className="block text-[11px] font-bold text-white uppercase tracking-wider">
                        Mô tả yêu cầu <span className="text-red-200">*</span>
                      </label>
                      <span className="text-[10px] text-red-200 font-medium">
                        {formData.description.length}/1000
                      </span>
                    </div>
                    <textarea
                      id="description"
                      name="description"
                      rows={2}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Mô tả sơ lược về sản phẩm bạn đang bán hoặc mong muốn tính năng..."
                      maxLength={1000}
                      className={`w-full px-2.5 py-1.5 rounded-lg text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-white transition-all shadow-xs ${
                        errors.description
                          ? 'ring-2 ring-amber-300 bg-red-50'
                          : ''
                      }`}
                    />
                    {errors.description && (
                      <p className="mt-0.5 text-[10px] text-amber-200 flex items-center gap-0.5 font-semibold">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.description}</span>
                      </p>
                    )}
                  </div>

                  {/* Security Notice */}
                  <div className="flex items-center gap-1.5 text-[10px] text-red-100 pt-0.5 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span>DUDI cam kết bảo mật 100% thông tin khách hàng.</span>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-black text-red-700 bg-white hover:bg-red-50 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Đang xử lý thông tin...</span>
                      ) : (
                        <>
                          <span>Gửi thông tin đăng ký tư vấn</span>
                          <Send className="w-3.5 h-3.5 text-red-700" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}
