export function fireConfetti() {
  const canvas = document.createElement('canvas')
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999'
  document.body.appendChild(canvas)
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const colors = ['#39FF14', '#1a8a0a', '#fff', '#ff4444', '#ffcc00']
  const particles = Array.from({ length: 80 }, () => ({
    x: canvas.width * Math.random(),
    y: -20,
    vx: (Math.random() - 0.5) * 8,
    vy: Math.random() * 3 + 2,
    size: Math.random() * 6 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 360,
    spin: (Math.random() - 0.5) * 10
  }))

  let frame = 0
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let alive = false
    particles.forEach(p => {
      p.x += p.vx
      p.y += p.vy
      p.vy += 0.1
      p.rotation += p.spin
      if (p.y < canvas.height + 20) alive = true
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate((p.rotation * Math.PI) / 180)
      ctx.fillStyle = p.color
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6)
      ctx.restore()
    })
    frame++
    if (alive && frame < 180) {
      requestAnimationFrame(animate)
    } else {
      canvas.remove()
    }
  }
  requestAnimationFrame(animate)
}
