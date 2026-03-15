import { useState, useRef, useCallback, useEffect } from 'react'

function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = ctx.createOscillator()
    const gain = ctx.createGain()
    oscillator.connect(gain)
    gain.connect(ctx.destination)
    oscillator.frequency.value = 880
    oscillator.type = 'square'
    gain.gain.value = 0.3
    oscillator.start()
    setTimeout(() => { oscillator.stop(); ctx.close() }, 200)
  } catch {
    // AudioContext not available
  }
}

export function useRestTimer() {
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)
  const totalRef = useRef(0)

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIsRunning(false)
    setTimeRemaining(0)
    totalRef.current = 0
  }, [])

  const startTimer = useCallback((seconds) => {
    stopTimer()
    totalRef.current = seconds
    setTimeRemaining(seconds)
    setIsRunning(true)

    intervalRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
          setIsRunning(false)
          playBeep()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [stopTimer])

  const progress = totalRef.current > 0
    ? 1 - (timeRemaining / totalRef.current)
    : 0

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return { timeRemaining, isRunning, startTimer, stopTimer, progress }
}
