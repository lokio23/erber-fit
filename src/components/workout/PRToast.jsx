import { useEffect, useState } from 'react'

export default function PRToast({ message, onDismiss }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onDismiss, 300)
    }, 3000)
    return () => clearTimeout(timer)
  }, [onDismiss])

  return (
    <div
      className={`fixed top-4 left-4 right-4 z-50 bg-accent text-black rounded-xl px-4 py-3 text-center shadow-lg transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <p className="font-header text-lg tracking-wide">{message}</p>
    </div>
  )
}
