import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { BRAND, HERO, IMG, NAV, SOCIAL, YEAR } from '../lib/content'

/* Compoziția din referință: aceeași fotografie folosită de două ori —
   o dată întreagă (fundal, gradată închis) și o dată decupată (z-20),
   cu numele uriaș care derulează între ele. Literele trec prin spatele ei. */

const EASE_DRAWER = 'cubic-bezier(0.76, 0, 0.24, 1)'

export function Hero() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* `isolate` închide straturile heroului într-un context propriu, ca
          portretul (z-20) să nu acopere marginea rotunjită a secțiunii
          următoare, care urcă 25px peste el. */}
      <section className="relative isolate z-0 h-[100dvh] w-full overflow-hidden bg-espresso">
      {/* fundal — fotografia întreagă, gradată espresso */}
      <img
        src={IMG('hero-bg')}
        alt=""
        aria-hidden="true"
        className="anim-fade-in absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-espresso/35" aria-hidden="true" />

      {/* numele — două jumătăți identice pentru buclă continuă */}
      <div
        className="anim-fade-up absolute inset-x-0 top-[15vh] z-10 overflow-hidden sm:top-[13vh]"
        style={{ animationDelay: '500ms' }}
        aria-hidden="true"
      >
        <div className="marquee display-tight flex w-max whitespace-nowrap text-[17vh] leading-none text-cream sm:text-[27vh]">
          <span className="pr-[6vw]">{HERO.marquee}&nbsp;</span>
          <span className="pr-[6vw]">{HERO.marquee}&nbsp;</span>
        </div>
      </div>

      {/* linia crem — rămâne la z-10, deci trece prin spatele ei */}
      <div
        className="anim-line absolute inset-x-6 bottom-44 z-10 h-0.5 bg-cream sm:inset-x-10 sm:bottom-48"
        style={{ animationDelay: '1200ms' }}
        aria-hidden="true"
      />

      {/* portretul decupat — deasupra numelui, ancorat jos.
          Două pânze: 16:9 pe desktop, 3:4 pe mobil, ca `object-cover`
          să nu-i taie capul pe niciun format. */}
      <picture>
        <source media="(min-width: 768px)" srcSet={IMG('hero-cut-wide')} />
        <img
          src={IMG('hero-cut-tall')}
          alt="Cornelia Russu"
          className="anim-rise-in pointer-events-none absolute inset-0 z-20 h-full w-full object-cover object-bottom"
          style={{ animationDelay: '300ms' }}
        />
      </picture>

      {/* ── chrome ── */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <a
          href="#recunoastere"
          className="anim-fade-up font-serif text-lg tracking-wide text-cream transition-opacity duration-300 hover:opacity-60"
          style={{ animationDelay: '800ms' }}
        >
          {BRAND}
        </a>

        <div className="hidden items-start gap-16 sm:flex lg:gap-24">
          <span
            className="anim-fade-up text-sm text-cream"
            style={{ animationDelay: '900ms' }}
          >
            {YEAR}
          </span>
          <nav className="flex flex-col gap-0.5 text-sm">
            {NAV.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className="anim-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1000 + i * 80}ms` }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <nav className="flex flex-col gap-0.5 text-sm">
            {SOCIAL.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="anim-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1150 + i * 80}ms` }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

      </header>

      {/* Voal jos: sloganul cade peste portret, iar pielea neagră și
          lemnul au luminanțe prea apropiate de crem pe alocuri. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[25] h-44 bg-gradient-to-t from-espresso via-espresso/75 to-transparent sm:h-48"
      />

      {/* sloganul — filosofia, centrată */}
      <div className="absolute inset-x-0 bottom-8 z-30 px-6 text-center sm:bottom-12">
        <p
          className="anim-fade-up display text-[clamp(1.15rem,3.6vw,2.3rem)] leading-[1.22] text-cream"
          style={{ animationDelay: '1400ms' }}
        >
          {HERO.slogan[0]}
          <br />
          {HERO.slogan[1]}
        </p>
        <a
          href="#lista"
          className="anim-fade-up mt-4 inline-block border-b border-cream/30 pb-1 text-[11px] uppercase tracking-[0.18em] text-cream/70 transition-colors duration-300 hover:border-cream hover:text-cream sm:text-xs"
          style={{ animationDelay: '1550ms' }}
        >
          {HERO.cta}
        </a>
      </div>

      </section>

    {/* hamburger → X — fix, ca să stea peste sertar */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
        aria-expanded={open}
        className="anim-fade-up fixed right-6 top-6 z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] sm:hidden"
        style={{ animationDelay: '900ms' }}
      >
        <span
          className="h-[2px] w-6 bg-cream transition-transform duration-500"
          style={{
            transitionTimingFunction: EASE_DRAWER,
            transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
          }}
        />
        <span
          className="h-[2px] w-6 bg-cream transition-opacity duration-300"
          style={{ opacity: open ? 0 : 1 }}
        />
        <span
          className="h-[2px] w-6 bg-cream transition-transform duration-500"
          style={{
            transitionTimingFunction: EASE_DRAWER,
            transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }}
        />
      </button>

      {/* ── sertar mobil ── frate al secțiunii, ca să nu fie prins în
          contextul de stivuire al heroului ── */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-espresso/50 backdrop-blur-sm transition-opacity duration-500 sm:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <div
        className="fixed inset-y-0 right-0 z-40 w-[80%] max-w-sm bg-espresso-soft px-8 py-10 transition-transform duration-[600ms] sm:hidden"
        style={{
          transitionTimingFunction: EASE_DRAWER,
          transform: open ? 'translateX(0)' : 'translateX(100%)',
        }}
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Închide meniul"
          className="absolute right-6 top-6 z-50 text-cream transition-all duration-300"
          style={{
            transform: open ? 'rotate(0deg)' : 'rotate(90deg)',
            opacity: open ? 1 : 0,
            transitionDelay: open ? '300ms' : '0ms',
          }}
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        <p
          className="text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? 'none' : 'translateY(16px)',
            transitionDelay: open ? '250ms' : '0ms',
          }}
        >
          Pagina
        </p>
        <nav className="mt-5 flex flex-col gap-1">
          {NAV.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display text-4xl text-cream transition-all duration-500"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(24px)',
                transitionDelay: open ? `${300 + i * 80}ms` : '0ms',
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p
          className="mt-12 text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? 'none' : 'translateY(16px)',
            transitionDelay: open ? '500ms' : '0ms',
          }}
        >
          Unde mă găsești
        </p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {SOCIAL.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-cream transition-all duration-500"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(16px)',
                transitionDelay: open ? `${550 + i * 60}ms` : '0ms',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
