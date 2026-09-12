import { BRAND, CLOSING, CTA, NAV, SOCIAL, YEAR } from '../lib/content'
import { useReveal } from '../lib/utils'

/* Închiderea e „cardul final" din reels: o sentință, fără îndemn.
   Nu explică analogia — o lasă deschisă. */

export function Closing() {
  const ref = useReveal<HTMLElement>()

  return (
    <footer ref={ref} className="bg-espresso px-6 pb-10 pt-24 md:pt-36">
      <div className="mx-auto max-w-4xl text-center">
        <p className="reveal display text-[clamp(1.75rem,5.5vw,3.4rem)] leading-[1.15] text-cream/50">
          {CLOSING.line}
        </p>
        <p
          className="reveal display text-[clamp(1.75rem,5.5vw,3.4rem)] leading-[1.15] text-cream"
          style={{ transitionDelay: '140ms' }}
        >
          {CLOSING.line2}
        </p>
        <a
          href="#lista"
          className="reveal mt-10 inline-block border-b border-cream/30 pb-1 text-sm text-cream/70 transition-colors duration-300 hover:border-cream hover:text-cream"
          style={{ transitionDelay: '280ms' }}
        >
          {CTA}
        </a>
      </div>

      <div className="mx-auto mt-24 h-px max-w-6xl bg-cream/12" />

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-6 text-sm text-cream/50 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-lg text-cream">{BRAND}</p>
          <p className="mt-1">© {YEAR}</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="transition-colors duration-300 hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {SOCIAL.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
