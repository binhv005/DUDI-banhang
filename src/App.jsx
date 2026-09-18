import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TargetAudience from './components/TargetAudience'
import Problems from './components/Problems'
import Deliverables from './components/Deliverables'
import Pricing from './components/Pricing'
import Process from './components/Process'
import CaseStudies from './components/CaseStudies'
import Limitations from './components/Limitations'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Toast from './components/Toast'

export default function App() {
  const [toastMessage, setToastMessage] = useState('')
  const [selectedPackage, setSelectedPackage] = useState('Chưa rõ')

  const showToast = (message) => {
    setToastMessage(message)
    setTimeout(() => {
      setToastMessage('')
    }, 3000)
  }

  const handleSelectPackage = (packageName) => {
    setSelectedPackage(packageName)
    const formElement = document.getElementById('contact')
    if (formElement) {
      const headerOffset = 80
      const elementPosition = formElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleHeroCta = () => {
    const formElement = document.getElementById('contact')
    if (formElement) {
      const headerOffset = 80
      const elementPosition = formElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-red-100 selection:text-red-700 relative">
      
      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />

      {/* S01: Header */}
      <Header
        showToast={showToast}
        onSelectPackage={handleSelectPackage}
      />

      <main className="flex-1 w-full">
        {/* S02: Hero (Background: Trắng / Gradient nhạt) */}
        <Hero
          onCtaClick={handleHeroCta}
        />

        {/* S03: Đối tượng phù hợp (Background: Đỏ rất nhạt) */}
        <TargetAudience
          onSelectPackage={handleSelectPackage}
        />

        {/* S04: Vấn đề (Background: Trắng) */}
        <Problems />

        {/* S05: Đầu ra / Nhận được (Background: Đỏ/Xám rất nhạt) */}
        <Deliverables />

        {/* S06: Bảng giá (Background: Trắng) */}
        <Pricing
          onSelectPackage={handleSelectPackage}
        />

        {/* S07: Quy trình (Background: Đỏ rất nhạt) */}
        <Process />

        {/* S08: Case / Mẫu (Background: Trắng) */}
        <CaseStudies
          onSelectPackage={handleSelectPackage}
        />

        {/* S09: Giới hạn (Background: Đỏ/Xám rất nhạt) */}
        <Limitations />

        {/* S10: FAQ (Background: Trắng) */}
        <FAQ />

        {/* S11: Form nhận yêu cầu (Background: Đỏ rất nhạt) */}
        <ContactForm
          selectedPackage={selectedPackage}
          onFormSubmitted={() => showToast('Gửi yêu cầu tư vấn thành công!')}
        />

        {/* S12: Final CTA (Background: Trắng / Red Card) */}
        <FinalCTA
          showToast={showToast}
          onCtaClick={handleHeroCta}
        />
      </main>

      {/* S13: Footer */}
      <Footer
        showToast={showToast}
      />

      {/* S18: Floating Action Buttons (Call, Zalo, ScrollToTop) */}
      <FloatingActions
        showToast={showToast}
      />

    </div>
  )
}
