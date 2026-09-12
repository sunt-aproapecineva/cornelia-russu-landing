import { useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { BRAND, IMG, THANKYOU } from '../lib/content'

/* Ecranul de după formular. Un singur lucru de făcut aici: WhatsApp.
   Nimic altceva pe pagină nu concurează cu butonul. */

export function ThankYou({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    const prev = document.title
    document.title = `${THANKYOU.title} · ${BRAND}`
    return () => {
      document.title = prev
    }
  }, [])

  return (
    <section className="relative isolate flex min-h-[100dvh] w-full flex-col overflow-hidden bg-espresso">
      <img
        src={IMG('hero-bg')}
        alt=""
        aria-hidden="true"
        className="anim-fade-in absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-espresso/70" />

      <header className="relative z-10 px-6 pt-6 sm:px-10 sm:pt-8">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            onBack()
          }}
          className="anim-fade-up font-serif text-lg tracking-wide text-cream transition-opacity duration-300 hover:opacity-60"
          style={{ animationDelay: '200ms' }}
        >
          {BRAND}
        </a>
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <p
          className="anim-fade-up text-xs font-semibold uppercase tracking-[0.2em] text-cream/50"
          style={{ animationDelay: '300ms' }}
        >
          {THANKYOU.eyebrow}
        </p>

        <h1
          className="anim-fade-up display mt-6 max-w-4xl text-[clamp(2.4rem,9vw,5.5rem)] leading-[1.02] text-cream"
          style={{ animationDelay: '450ms' }}
        >
          {THANKYOU.title}
        </h1>

        <p
          className="anim-fade-up mt-7 max-w-md text-base leading-relaxed text-cream/70 sm:text-lg"
          style={{ animationDelay: '650ms' }}
        >
          {THANKYOU.body}
        </p>

        <a
          href={THANKYOU.href}
          target="_blank"
          rel="noreferrer"
          className="anim-fade-up group mt-11 inline-flex max-w-xl items-center gap-4 rounded-full bg-terracotta py-3 pl-7 pr-3 text-cream transition-colors duration-300 hover:bg-[#c4573a]"
          style={{ animationDelay: '850ms' }}
        >
          <span className="text-left text-sm font-medium leading-snug sm:text-base">
            {THANKYOU.cta}
          </span>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-espresso transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowUpRight size={19} />
          </span>
        </a>

        <p
          className="anim-fade-up mt-6 text-sm text-cream/45"
          style={{ animationDelay: '1000ms' }}
        >
          {THANKYOU.note}
        </p>
      </div>

      <footer className="relative z-10 px-6 pb-8 text-center sm:px-10">
        <p
          className="anim-fade-up font-serif text-base italic leading-snug text-cream/55 sm:text-lg"
          style={{ animationDelay: '1150ms' }}
        >
          {THANKYOU.whisper}
        </p>
      </footer>
    </section>
  )
}
