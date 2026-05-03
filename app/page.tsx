export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#';

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Early-Stage Founders
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Know Exactly How Long<br />
          <span className="text-[#58a6ff]">Your Runway Lasts</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your bank accounts and get a real-time dashboard showing burn rate vs revenue growth — with scenario-based predictions so you never run out of cash unexpectedly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
          >
            Start Free Trial — $29/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required for 14-day trial</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🏦', title: 'Bank Integration', desc: 'Plaid-powered connection to all major banks. Transactions sync automatically every day.' },
            { icon: '📉', title: 'Burn Rate Analysis', desc: 'See your monthly burn broken down by category. Spot trends before they become problems.' },
            { icon: '🔮', title: 'Scenario Modeling', desc: 'Model best, base, and worst-case growth scenarios. Know your runway under each outcome.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
          <h3 className="text-white text-2xl font-bold mb-2">Founder Plan</h3>
          <div className="flex items-end justify-center gap-1 mb-4">
            <span className="text-5xl font-extrabold text-white">$29</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to stay on top of your runway</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited bank account connections',
              'Real-time burn rate dashboard',
              'Revenue vs expense tracking',
              'Scenario-based runway predictions',
              'Monthly financial reports',
              'Email alerts when runway drops below threshold',
              '14-day free trial',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors duration-200"
          >
            Get Started Free
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the bank connection work?',
              a: 'We use Plaid, the industry-standard bank connectivity platform trusted by thousands of apps. Your credentials are never stored on our servers — Plaid handles authentication directly with your bank using bank-level encryption.',
            },
            {
              q: 'How accurate are the runway predictions?',
              a: 'Predictions are based on your actual transaction history and the growth scenarios you define. You can set conservative, base, and optimistic revenue growth rates and see how each affects your runway in real time.',
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes, absolutely. You can cancel from your account settings at any time with no questions asked. You keep access until the end of your billing period.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} Revenue Runway Calculator. Built for founders who want to stay funded.</p>
      </footer>
    </main>
  );
}
