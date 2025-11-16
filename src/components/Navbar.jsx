import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Why Zyntra', href: '#features' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-md bg-white/10 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-lg shadow-blue-500/30" />
          <span className="font-semibold text-white tracking-tight text-lg">Zyntra</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-white/80 hover:text-white transition-colors text-sm">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all">
            Get in touch
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-2xl bg-white/10 border border-white/10 p-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-white/90 py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="block text-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-4 py-2 font-medium">
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
