import { useCallback, useRef } from 'react'

const PREFIX = 'erberfit_'

export default function DataManager() {
  const fileRef = useRef(null)

  const handleExport = useCallback(() => {
    const data = {}
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key.startsWith(PREFIX)) {
        try { data[key] = JSON.parse(localStorage.getItem(key)) }
        catch { data[key] = localStorage.getItem(key) }
      }
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `erberfit-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }, [])

  const handleImport = useCallback((e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result)
        Object.entries(data).forEach(([key, value]) => {
          if (key.startsWith(PREFIX)) {
            localStorage.setItem(key, JSON.stringify(value))
          }
        })
        window.location.reload()
      } catch {
        alert('Invalid backup file')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }, [])

  return (
    <div className="flex items-center gap-3 justify-center">
      <button
        onClick={handleExport}
        className="text-xs text-text-secondary hover:text-text-primary transition-colors"
      >
        Export Data
      </button>
      <span className="text-text-secondary text-xs">|</span>
      <button
        onClick={() => fileRef.current?.click()}
        className="text-xs text-text-secondary hover:text-text-primary transition-colors"
      >
        Import Data
      </button>
      <input
        ref={fileRef}
        type="file"
        accept=".json"
        onChange={handleImport}
        className="hidden"
      />
    </div>
  )
}
