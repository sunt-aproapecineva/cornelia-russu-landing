import { ArrowRight, Plus } from 'lucide-react'
import { CTA, RECOGNITION } from '../lib/content'
import { useReveal } from '../lib/utils'

/* Secțiunea crem care urcă peste hero (rounded-t + z-10), după referință.
   Sus: acuzarea care absolvă. Jos: propunerea de valoare — misiunea,
   promisiunea de după consultație și acreditarea. */

export function Recognition() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      id="recunoastere"
      ref={ref}
      className="relative z-10 -mt-[25px] rounded-t-[25px] bg-cream px-6 py-20 text-espresso md:py-32"
    >
      {/* hook + acțiuni */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="display reveal text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.05]">
          {RECOGNITION.hook}
        </h2>
        <p
          className="reveal mt-6 max-w-lg text-base leading-relaxed text-espresso/70 md:text-lg"
          style={{ transitionDelay: '120ms' }}
        >
          {RECOGNITION.sub}
        </p>

        <div
          className="reveal mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ transitionDelay: '240ms' }}
        >
          <a
            href="#lista"
            className="group flex items-center gap-3 rounded-full bg-espresso py-2 pl-2 pr-6 text-cream transition-colors duration-300 hover:bg-[#120806]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream-light text-espresso">
              <ArrowRight size={16} />
            </span>
            <span className="text-sm font-medium uppercase tracking-wide">{CTA}</span>
          </a>
          <a
            href="#cornelia"
            className="flex items-center gap-3 rounded-full bg-muted py-2 pl-2 pr-6 text-espresso transition-colors duration-300 hover:bg-muted-dark"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream-light text-espresso">
              <Plus size={16} />
            </span>
            <span className="text-sm font-medium uppercase tracking-wide">Cine sunt</span>
          </a>
        </div>
      </div>

      {/* despărțitor decorativ */}
      <div className="reveal mx-auto mt-20 flex max-w-6xl items-center gap-[2px] md:mt-28">
        <span className="h-2 w-2 rounded-full bg-muted" />
        <span className="h-[2px] flex-1 bg-muted" />
        <span className="h-2 w-2 rounded-full bg-muted" />
      </div>

      {/* propunerea de valoare */}
      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-10 md:mt-20 md:flex-row md:gap-16">
        <div className="reveal shrink-0 md:w-40">
          <p className="text-xs font-semibold uppercase leading-relaxed tracking-widest text-espresso/60">
            {RECOGNITION.label[0]}
            <br />
            {RECOGNITION.label[1]}
          </p>
        </div>

        <div className="flex-1">
          {/* Misiunea. Teracota cade pe „curajul schimbării" — brandbookul
              spune că #DA6342 este culoarea curajului, deci e cea mai
              justă folosire a accentului de pe toată pagina. */}
          <p className="reveal display text-[clamp(1.6rem,4vw,2.8rem)] leading-[1.2]">
            {RECOGNITION.missionPre}
            <span className="text-terracotta">{RECOGNITION.missionAccent}</span>
            {RECOGNITION.missionPost}
          </p>

          <p
            className="reveal mt-7 font-serif text-xl italic leading-snug text-espresso/80 md:text-2xl"
            style={{ transitionDelay: '120ms' }}
          >
            {RECOGNITION.promise}
          </p>

          <div
            className="reveal mt-10 flex items-baseline gap-3 border-t border-muted pt-5"
            style={{ transitionDelay: '240ms' }}
          >
            <span className="shrink-0 text-[11px] font-semibold uppercase tracking-widest text-espresso/50">
              {RECOGNITION.credential.label}
            </span>
            <span className="font-serif text-base leading-snug text-espresso/85 md:text-lg">
              {RECOGNITION.credential.org}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
