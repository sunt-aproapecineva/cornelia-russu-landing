import { useState } from 'react'
import { ArrowRight, ArrowLeftRight } from 'lucide-react'
import { ARGUMENT, CTA, IMG, INVERSION } from '../lib/content'
import { useActiveCard, useReveal } from '../lib/utils'

/* Structura din referință: fundal fix + coloană stângă lipită + carduri
   care intră din dreapta. Cele trei carduri = cele trei bătăi ale
   argumentului: explicația comodă → analogia → răsturnarea.
   Analogia NU se explică — regula din documentul de formate. */

const IDS = ARGUMENT.cards.map((c) => c.id)

export function Argument() {
  const active = useActiveCard(IDS)
  const ref = useReveal<HTMLDivElement>()

  /* Fără `overflow-hidden` pe secțiune: ar face din ea un container de
     scroll și ar anula `position: sticky` pe coloana din stânga. Fundalul
     stă direct pe secțiune, cu `bg-fixed` doar pe desktop — pe iOS
     `background-attachment: fixed` sacadează. */
  return (
    <section
      id="argument"
      className="relative bg-espresso bg-cover bg-center lg:bg-fixed"
      style={{ backgroundImage: `url(${IMG('arg-bg')})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-espresso/60" />

      <div
        ref={ref}
        className="relative px-5 py-20 md:px-10 md:py-40 lg:grid lg:grid-cols-[400px_1fr] lg:gap-24 lg:px-16 lg:py-48 xl:grid-cols-[460px_1fr] xl:gap-48"
      >
        {/* ── coloana lipită ── */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-32">
          <h2 className="display reveal text-[clamp(1.75rem,4.5vw,2.9rem)] leading-[1.15] text-cream">
            {ARGUMENT.heading}
          </h2>

          <nav className="my-12 hidden flex-col gap-2 lg:flex">
            {ARGUMENT.cards.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() =>
                  document
                    .getElementById(c.id)
                    ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
                className={`rounded-xl bg-espresso/40 px-5 py-3 text-left text-sm transition-colors duration-300 ${
                  active === c.id ? 'text-cream' : 'text-cream/40 hover:text-cream/70'
                }`}
              >
                {c.nav}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <p className="max-w-xs text-sm leading-relaxed text-cream/60">{ARGUMENT.cta}</p>
            <a
              href="#lista"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-cream px-5 py-2.5 text-sm font-medium text-espresso transition-colors duration-300 hover:bg-cream-light"
            >
              {CTA} <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* ── cardurile ── */}
        <div className="flex flex-col gap-6 md:gap-10">
          {ARGUMENT.cards.map((card) => (
            <article
              key={card.id}
              id={card.id}
              className="reveal scroll-mt-24 rounded-3xl bg-espresso/45 p-6 backdrop-blur-sm md:p-10"
            >
              <p className="text-xs uppercase tracking-widest text-cream/45">{card.nav}</p>
              <h3 className="display mt-3 text-[clamp(1.6rem,3.6vw,2.4rem)] leading-[1.15] text-cream">
                {card.title}
              </h3>

              {card.image && (
                <div className="mt-7 overflow-hidden rounded-2xl bg-espresso/40">
                  <img
                    src={IMG(card.image)}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-top"
                  />
                </div>
              )}

              {card.id === 'rasturnarea' && <Inversion />}

              {card.body.map((p) => (
                <p
                  key={p}
                  className="mt-5 text-sm leading-relaxed text-cream/65 md:text-base"
                >
                  {p}
                </p>
              ))}

              <p className="mt-7 font-serif text-lg italic leading-snug text-cream md:text-2xl">
                {card.closer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Blocul-semnătură: aceeași listă, două identități.
   Identity Shifting demonstrat, nu explicat. */
function Inversion() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="mt-7">
      <ul className="flex flex-col gap-1">
        {INVERSION.pairs.map(([vice, virtue]) => {
          const a = flipped ? virtue : vice
          const b = flipped ? vice : virtue
          return (
            <li
              key={vice}
              className="display grid grid-cols-[1fr_auto_1fr] items-baseline gap-x-3 text-[clamp(0.95rem,2.6vw,1.5rem)] leading-tight"
            >
              <span className="text-right text-cream transition-colors duration-500">{a}</span>
              <span className="text-cream/35">{INVERSION.verb}</span>
              <span
                className={`transition-colors duration-500 ${
                  flipped ? 'text-cream/45' : 'text-cream'
                }`}
              >
                {b}
              </span>
            </li>
          )
        })}
      </ul>

      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        aria-pressed={flipped}
        className="mt-7 inline-flex items-center gap-2 rounded-xl border border-terracotta/60 bg-terracotta/10 px-5 py-2.5 text-sm font-medium text-terracotta transition-colors duration-300 hover:bg-terracotta/20"
      >
        <ArrowLeftRight size={15} />
        {flipped ? INVERSION.reset : INVERSION.action}
      </button>
    </div>
  )
}
