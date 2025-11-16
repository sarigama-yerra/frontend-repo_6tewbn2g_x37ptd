export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600" />
          <span className="text-white/80 font-medium">Zyntra</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Zyntra Labs. All rights reserved.</p>
        <div className="flex items-center gap-5 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Status</a>
        </div>
      </div>
    </footer>
  )
}
