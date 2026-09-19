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
        {/* S02: Hero */}
        <Hero
          onCtaClick={handleHeroCta}
        />

        {/* S03: Đối tượng phù hợp */}
        <TargetAudience
          onSelectPackage={handleSelectPackage}
        />

        {/* S04: Vấn đề */}
        <Problems />

        {/* S05: Đầu ra / Nhận được */}
        <Deliverables />

        {/* S06: Bảng giá */}
        <Pricing
          onSelectPackage={handleSelectPackage}
        />

        {/* S07: Quy trình */}
        <Process />

        {/* S08: Case / Mẫu */}
        <CaseStudies
          onSelectPackage={handleSelectPackage}
        />

        {/* S09: Giới hạn */}
        <Limitations />

        {/* S10: FAQ */}
        <FAQ />

        {/* S11: Form nhận yêu cầu */}
        <ContactForm
          selectedPackage={selectedPackage}
          onFormSubmitted={() => showToast('Gửi yêu cầu tư vấn thành công!')}
        />

        {/* S12: Final CTA */}
        <FinalCTA
          showToast={showToast}
          onCtaClick={handleHeroCta}
        />
      </main>

      {/* S13: Footer */}
      <Footer
        showToast={showToast}
      />

      {/* S18: Floating Action Buttons (Mascot AI Chat, Call, Zalo, ScrollToTop) */}
      <FloatingActions
        showToast={showToast}
        onSelectPackage={handleSelectPackage}
      />

    </div>
  )
}