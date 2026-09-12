import { BOUNDARIES, IMG } from '../lib/content'
import { useReveal } from '../lib/utils'

/* Blocul care nu există în referință și care e obligatoriu aici.
   Slide 13: limitele se impun de la prima întâlnire cu brandul.
   Filtrul care transformă lista din înscriere în selecție. */

export function Boundaries() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section ref={ref} className="relative overflow-hidden bg-espresso px-6 py-24 md:py-36">
      {/* portret decupat pe dreapta, stins — ea privește, nu vinde */}
      <img
        src={IMG(BOUNDARIES.image)}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute -right-24 bottom-0 hidden h-[85%] w-auto object-contain opacity-25 lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/85 to-transparent"
      />

      <div className="relative mx-auto max-w-5xl">
        <p className="reveal text-xs font-semibold uppercase tracking-widest text-cream/50">
          {BOUNDARIES.eyebrow}
        </p>

        <div className="mt-10 max-w-3xl">
          {BOUNDARIES.lines.map((line, i) => (
            <p
              key={line}
              className="reveal display text-[clamp(1.25rem,3.2vw,2.1rem)] leading-[1.3] text-cream/55"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {line}
            </p>
          ))}

          <p
            className="reveal display mt-9 text-[clamp(1.4rem,3.6vw,2.4rem)] leading-[1.25] text-cream"
            style={{ transitionDelay: `${BOUNDARIES.lines.length * 100}ms` }}
          >
            {BOUNDARIES.turn}
          </p>

          <p
            className="reveal mt-6 font-serif text-xl italic leading-snug text-terracotta md:text-2xl"
            style={{ transitionDelay: `${BOUNDARIES.lines.length * 100 + 120}ms` }}
          >
            {BOUNDARIES.closer}
          </p>
        </div>
      </div>
    </section>
  )
}
