export const HOTLINE_NUMBER = '0909 163 821'
export const HOTLINE_RAW = '0909163821'
export const ZALO_LINK = 'https://zalo.me/0909163821'
export const EMAIL_ADDRESS = 'contact@dudisoftware.com'

export function isMobileDevice() {
  if (typeof window === 'undefined') return false
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
  const isSmallScreen = window.innerWidth < 768
  return (isMobileUA || (isTouch && isSmallScreen))
}

export function handlePhoneClick(e, showToast) {
  if (e && e.preventDefault) {
    e.preventDefault()
  }

  if (isMobileDevice()) {
    window.location.href = `tel:${HOTLINE_RAW}`
  } else {
    navigator.clipboard.writeText(HOTLINE_NUMBER).then(() => {
      if (showToast) {
        showToast('Đã sao chép số điện thoại')
      }
    }).catch(() => {
      // Fallback
      const textArea = document.createElement('textarea')
      textArea.value = HOTLINE_NUMBER
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      if (showToast) {
        showToast('Đã sao chép số điện thoại')
      }
    })
  }
}
