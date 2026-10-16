export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Nav */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="text-lg font-black tracking-[0.2em]">BTOSTUDIO</span>
          <a
            href="/onboard"
            className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition hover:bg-zinc-200"
          >
            Join as Subcontractor
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <p className="text-xs font-bold tracking-[0.5em] text-zinc-500">
          CONTRACTING & LOGISTICS
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
          We win the contracts.
          <br />
          You do the work.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-zinc-400 sm:text-lg">
          BTOSTUDIO bids on commercial and government contracts across Ontario.
          Our network of trusted subcontractors delivers — moving, transport,
          trades, and more.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/onboard"
            className="rounded-full bg-white px-8 py-3 text-base font-bold text-black transition hover:bg-zinc-200"
          >
            Become a Subcontractor
          </a>
          <a
            href="mailto:orriefoye6@gmail.com?subject=BTOSTUDIO%20inquiry"
            className="rounded-full border border-white/20 px-8 py-3 text-base font-bold text-white transition hover:border-white/50"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-white/10 bg-zinc-900/40">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-black sm:text-3xl">
            What we do
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                t: "Moving & Transport",
                d: "Residential and commercial moves, deliveries, and logistics — powered by owner-operators with their own trucks.",
              },
              {
                t: "Government Contracts",
                d: "We bid on municipal, provincial, and federal opportunities and assemble the right crew for each job.",
              },
              {
                t: "Subcontractor Network",
                d: "Drivers, movers, and tradespeople get steady work without chasing contracts. We handle the bidding.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6"
              >
                <h3 className="text-lg font-bold">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For subcontractors */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="text-xs font-bold tracking-[0.5em] text-zinc-500">
            FOR SUBCONTRACTORS
          </p>
          <h2 className="mt-4 text-2xl font-black sm:text-3xl">
            Your truck. Our contracts. Steady work.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Sign up in minutes — tell us about yourself, snap photos of your
            documents, and you&apos;re on the roster. When a job fits, we call
            you. You invoice per job and keep what you earn.
          </p>
          <a
            href="/onboard"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-bold text-black transition hover:bg-zinc-200"
          >
            Get on the Roster
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-8 text-center">
        <p className="text-sm font-black tracking-[0.2em]">BTOSTUDIO</p>
        <p className="mt-2 text-xs text-zinc-600">
          Brampton, Ontario, Canada
        </p>
        <p className="mt-4 text-xs text-zinc-700">
          © 2026 BTOSTUDIO. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
