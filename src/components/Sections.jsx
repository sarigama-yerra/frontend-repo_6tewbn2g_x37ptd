import { Shield, BadgeCheck, Layers, Sparkles, Wallet, Globe2 } from 'lucide-react'

export default function Sections() {
  return (
    <>
      <section id="about" className="relative py-20">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Who we are</h2>
            <p className="mt-3 text-white/80">Zyntra builds core identity rails for the decentralized web. We deliver interoperable credentials, cross-chain reputation, and compliance-ready trust layers without compromising privacy.</p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-center gap-3"><BadgeCheck className="text-cyan-400" size={18}/> Verifiable Credentials</li>
              <li className="flex items-center gap-3"><Layers className="text-cyan-400" size={18}/> Cross-chain compatibility</li>
              <li className="flex items-center gap-3"><Shield className="text-cyan-400" size={18}/> Privacy-preserving by design</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Sparkles, title: 'Reputation Graphs', copy: 'Aggregate onchain and offchain signals into portable scores.' },
              { icon: Wallet, title: 'Smart Wallet Ready', copy: 'Seamless integration with account abstraction and MPC.' },
              { icon: Globe2, title: 'Global Scale', copy: 'Built to support millions of identities and verifications.' },
              { icon: Shield, title: 'Compliance', copy: 'Configurable KYC/AML with zero-knowledge proofs.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <f.icon className="text-cyan-400" />
                <h3 className="mt-3 text-white font-medium">{f.title}</h3>
                <p className="mt-1 text-white/70 text-sm">{f.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="relative py-20">
        <div className="relative mx-auto max-w-7xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Solutions</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: 'Onchain Identity SDK', d: 'Issue, verify, and manage credentials with a few lines of code.' },
              { t: 'Reputation Oracles', d: 'Pluggable risk and trust scores for DeFi, NFTs, and gaming.' },
              { t: 'Compliance Bridge', d: 'KYC/AML flows powered by ZK proofs and selective disclosure.' },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
                <h3 className="text-white font-medium">{c.t}</h3>
                <p className="mt-2 text-white/70 text-sm">{c.d}</p>
                <a href="#contact" className="mt-4 inline-flex text-cyan-400 hover:text-cyan-300 text-sm">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="relative py-20">
        <div className="relative mx-auto max-w-7xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Why Zyntra</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { h: 'Privacy-first', p: 'Selective disclosure and zero-knowledge flows keep users in control.' },
              { h: 'Composable', p: 'Works with your existing stack: EVM, Solana, Cosmos, and more.' },
              { h: 'Enterprise-ready', p: 'Audit trails, SLAs, and SOC2 practices baked in.' },
            ].map((i) => (
              <div key={i.h} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-medium">{i.h}</h3>
                <p className="mt-2 text-white/70 text-sm">{i.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20">
        <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Let’s build the future of identity</h2>
            <p className="mt-3 text-white/80">Tell us about your product and we’ll reach out with a tailored demo and integration plan.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <label className="block text-white/80 text-sm">Name</label>
              <input className="mt-1 w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Satoshi Nakamoto" />
            </div>
            <div>
              <label className="block text-white/80 text-sm">Work email</label>
              <input type="email" className="mt-1 w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-white/80 text-sm">What are you building?</label>
              <textarea className="mt-1 w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" rows={4} placeholder="Share a bit about your use case..." />
            </div>
            <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-3 font-medium shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all">Request demo</button>
          </form>
        </div>
      </section>
    </>
  )
}
