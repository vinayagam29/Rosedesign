
import { useEffect, useRef, useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const difference = currentScrollY - lastScrollY.current

      if (currentScrollY < 80) {
        setHidden(false)
      } else if (difference > 5) {
        setHidden(true)
        setMenuOpen(false)
      } else if (difference < -5) {
        setHidden(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#portfolio' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 bg-ivory/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="mx-auto flex max-w-360 items-center justify-between border-b border-rose-black/10 px-6 py-2 md:px-12">

        <a href="#home" className="shrink-0">
          <img
            src="/RoseDsigns_logo1.png"
            alt="RoseDsigns"
            className="h-12 w-12 object-contain"
          />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:text-antique-rose"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden border border-rose-black px-6 py-3 text-[11px] uppercase tracking-[0.18em] transition-all duration-300 hover:bg-rose-black hover:text-ivory md:block"
        >
          Let's Talk ↗
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-rose-black md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </nav>

      <div
        className={`absolute left-0 top-full w-full border-b border-rose-black/10 bg-ivory px-8 transition-all duration-300 md:hidden ${
          menuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-3 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-[0.2em] transition-colors hover:text-antique-rose"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="border border-rose-black px-5 py-3 text-center text-xs uppercase tracking-widest"
          >
            Let's Talk ↗
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
