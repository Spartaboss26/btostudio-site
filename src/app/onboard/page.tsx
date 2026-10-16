"use client";

import { useState } from "react";

const inputCls =
  "w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-white/40 focus:outline-none";

const labelCls = "mb-1 block text-sm font-bold text-zinc-300";

const fileCls =
  "w-full rounded-xl border border-dashed border-white/20 bg-zinc-900/60 px-4 py-4 text-sm text-zinc-400 file:mr-4 file:rounded-full file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-bold file:text-black";

export default function Onboard() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="text-lg font-black tracking-[0.2em]">
            BTOSTUDIO
          </a>
          <span className="text-xs font-bold tracking-[0.25em] text-zinc-500">
            SUBCONTRACTOR SIGNUP
          </span>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        {sent ? (
          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-10 text-center">
            <p className="text-4xl">✓</p>
            <h1 className="mt-4 text-2xl font-black">You&apos;re on the list.</h1>
            <p className="mx-auto mt-3 max-w-md text-zinc-400">
              We got your info and documents. We&apos;ll review everything and
              reach out when a job fits. Thanks for signing up with BTOSTUDIO.
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-black sm:text-4xl">
              Join the roster.
            </h1>
            <p className="mt-3 max-w-xl text-zinc-400">
              Fill this out and snap photos of your documents. Takes about 3
              minutes. Once approved, you&apos;re on our call list for jobs.
            </p>

            <form
              action="https://formsubmit.co/orriefoye6@gmail.com"
              method="POST"
              encType="multipart/form-data"
              className="mt-8 space-y-6"
              onSubmit={() => setSent(true)}
            >
              <input type="hidden" name="_subject" value="New BTOSTUDIO subcontractor signup" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              {/* Personal info */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="name">Full name *</label>
                  <input id="name" name="name" required placeholder="Your name" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="phone">Phone *</label>
                  <input id="phone" name="phone" required type="tel" placeholder="555-555-5555" className={inputCls} />
                </div>
              </div>
              <div>
                <label className={labelCls} htmlFor="email">Email *</label>
                <input id="email" name="email" required type="email" placeholder="you@email.com" className={inputCls} />
              </div>
              <div>
                <label className={labelCls} htmlFor="location">Where are you based? *</label>
                <input id="location" name="location" required placeholder="City, Province" className={inputCls} />
              </div>

              {/* Work info */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="truck">Truck / vehicle details *</label>
                  <input id="truck" name="truck" required placeholder="e.g. 26ft straight truck, 2019 Freightliner" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="experience">Years of experience *</label>
                  <input id="experience" name="experience" required inputMode="numeric" placeholder="e.g. 7" className={inputCls} />
                </div>
              </div>
              <div>
                <label className={labelCls} htmlFor="rates">Your rates</label>
                <input id="rates" name="rates" placeholder="e.g. $80/hr or $400 per local move" className={inputCls} />
              </div>
              <div>
                <label className={labelCls} htmlFor="notes">Anything else we should know?</label>
                <textarea id="notes" name="notes" rows={3} placeholder="Helpers, equipment, availability..." className={inputCls} />
              </div>

              {/* Documents */}
              <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5 sm:p-6">
                <h2 className="text-lg font-black">Your documents</h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Tap to take a photo or upload a file for each one.
                </p>
                <div className="mt-5 space-y-5">
                  <div>
                    <label className={labelCls} htmlFor="doc-license">Driver&apos;s licence *</label>
                    <input id="doc-license" name="drivers_license" type="file" accept="image/*" capture="environment" required className={fileCls} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="doc-cvor">CVOR abstract *</label>
                    <input id="doc-cvor" name="cvor" type="file" accept="image/*,.pdf" capture="environment" required className={fileCls} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="doc-insurance">Commercial insurance papers *</label>
                    <input id="doc-insurance" name="insurance" type="file" accept="image/*,.pdf" capture="environment" required className={fileCls} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="doc-wsib">WSIB clearance or exemption letter *</label>
                    <input id="doc-wsib" name="wsib" type="file" accept="image/*,.pdf" capture="environment" required className={fileCls} />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-white py-4 text-base font-black text-black transition hover:bg-zinc-200"
              >
                Submit Application
              </button>
              <p className="text-center text-xs text-zinc-600">
                By submitting, you agree to be contacted by BTOSTUDIO about subcontract work.
              </p>
            </form>
          </>
        )}
      </main>

      <footer className="border-t border-white/10 px-4 py-8 text-center">
        <p className="text-sm font-black tracking-[0.2em]">BTOSTUDIO</p>
        <p className="mt-2 text-xs text-zinc-600">Brampton, Ontario, Canada</p>
      </footer>
    </div>
  );
}
