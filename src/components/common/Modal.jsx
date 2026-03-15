import { createPortal } from 'react-dom'
import { useEffect } from 'react'

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-surface rounded-t-2xl border-t border-surface-lighter p-5 pb-8 max-h-[80vh] overflow-y-auto animate-slide-up">
        <div className="w-10 h-1 bg-surface-lighter rounded-full mx-auto mb-4" />
        {title && (
          <h3 className="font-header text-xl tracking-wide text-text-primary mb-4">{title}</h3>
        )}
        {children}
      </div>
    </div>,
    document.body
  )
}
