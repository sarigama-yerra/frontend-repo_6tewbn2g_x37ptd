import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.25),rgba(0,0,0,0))]" />
      <div className="absolute inset-0 opacity-60 pointer-events-none bg-[conic-gradient(at_10%_10%,#22d3ee_10%,#1e40af_40%,#7c3aed_70%,#22d3ee_100%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
          >
            Zyntra — Digital Identity for Web3
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-xl"
          >
            A future-forward platform for secure onchain identity, trust primitives, and verifiable reputation — designed for the next era of the internet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-3 font-medium shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all">
              Talk to us
            </a>
            <a href="#solutions" className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white px-6 py-3 font-medium backdrop-blur hover:bg-white/15 transition-all">
              Explore solutions
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </div>
    </section>
  )
}
