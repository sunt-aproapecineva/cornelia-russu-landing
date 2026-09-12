import { BIO, IMG } from '../lib/content'
import { useReveal } from '../lib/utils'

/* Biografia vine DUPĂ recunoaștere și după argument, nu înainte.
   În momentul ăsta nu mai răspunde la „de ce să te cred", ci la
   „a, de-asta mă înțelege". Fără label — slide 6. */

export function Bio() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      id="cornelia"
      ref={ref}
      className="relative z-10 rounded-t-[25px] bg-cream px-6 py-20 text-espresso md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="reveal text-xs font-semibold uppercase tracking-widest text-espresso/60">
          {BIO.eyebrow}
        </p>

        <div className="mt-8 grid gap-12 md:mt-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-16">
          {/* portret */}
          <div className="reveal">
            <div className="overflow-hidden rounded-2xl bg-muted">
              <img
                src={IMG(BIO.image)}
                alt="Cornelia Russu"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <ul className="mt-6 flex flex-col gap-2">
              {BIO.facts.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed text-espresso/70">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-dark" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* text */}
          <div>
            <h2 className="display reveal text-[clamp(1.8rem,4.4vw,3rem)] leading-[1.12]">
              {BIO.title}
            </h2>

            {BIO.body.map((p, i) => (
              <p
                key={p}
                className="reveal mt-5 leading-relaxed text-espresso/75"
                style={{ transitionDelay: `${100 + i * 70}ms` }}
              >
                {p}
              </p>
            ))}

            <blockquote
              className="reveal mt-10 border-l-2 border-terracotta pl-6 font-serif text-xl italic leading-snug text-espresso md:text-2xl"
              style={{ transitionDelay: '400ms' }}
            >
              {BIO.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
