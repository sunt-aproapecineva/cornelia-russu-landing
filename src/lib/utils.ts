import { useEffect, useRef, useState } from 'react'

/**
 * Adaugă `.is-in` pe elementele `.reveal` din interior, o singură dată.
 *
 * Deliberat NU folosește IntersectionObserver: acesta livrează o intrare
 * doar când raportul de intersecție se schimbă, iar la un scroll rapid
 * (sau la o ancoră care sare) un element poate trece de la 0 la 0 fără
 * niciun callback — și rămâne invizibil pentru totdeauna. Pe un landing,
 * text ascuns e mult mai rău decât o animație ratată, așa că măturăm
 * lista la fiecare cadru de scroll și o golim pe măsură ce apar.
 */
export function useReveal<T extends HTMLElement>(margin = 0.08) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const pending = new Set<HTMLElement>(
      root.classList.contains('reveal')
        ? [root as HTMLElement]
        : Array.from(root.querySelectorAll<HTMLElement>('.reveal')),
    )
    if (!pending.size) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      pending.forEach((t) => t.classList.add('is-in'))
      return
    }

    let frame = 0
    const sweep = () => {
      frame = 0
      const limit = window.innerHeight * (1 - margin)
      pending.forEach((el) => {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add('is-in')
          pending.delete(el)
        }
      })
      if (!pending.size) stop()
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(sweep)
    }
    /* Pagina își schimbă înălțimea după ce se încarcă imaginile, iar asta
       nu produce niciun eveniment de scroll — fără observatorul de mai jos,
       un element ajuns în ecran prin creșterea paginii ar rămâne ascuns
       până la primul scroll. */
    const ro = new ResizeObserver(schedule)
    ro.observe(document.documentElement)

    const stop = () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('load', schedule)
      ro.disconnect()
      if (frame) cancelAnimationFrame(frame)
      frame = 0
    }

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('load', schedule)
    sweep()

    return stop
  }, [margin])

  return ref
}

/** Care card e „activ" — pentru navigarea sticky din secțiunea de argument. */
export function useActiveCard(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((e): e is HTMLElement => Boolean(e))
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.6 },
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [ids])
  return active
}
