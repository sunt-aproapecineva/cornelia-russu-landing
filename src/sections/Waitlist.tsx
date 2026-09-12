import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { FORM, WAITLIST } from '../lib/content'
import { useReveal } from '../lib/utils'

/* Ce primești acum: consultație 30 min + audit personal.
   Formularul nu e un final de pagină — e poarta care face oferta
   posibilă (calificare + „analiza vie" cerută de slide 4) și, în
   același timp, controlul de capacitate. */

export function Waitlist({ onSent }: { onSent: () => void }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      id="lista"
      ref={ref}
      className="relative z-10 rounded-t-[25px] bg-cream px-6 py-20 text-espresso md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="reveal text-xs font-semibold uppercase tracking-widest text-espresso/60">
          {WAITLIST.eyebrow}
        </p>
        <h2 className="display reveal mt-6 text-[clamp(2rem,6vw,3.6rem)] leading-[1.08]">
          {WAITLIST.title}
        </h2>
        <p
          className="reveal mx-auto mt-6 max-w-xl leading-relaxed text-espresso/70"
          style={{ transitionDelay: '120ms' }}
        >
          {WAITLIST.sub}
        </p>
      </div>

      {/* cele două avantaje */}
      <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:mt-16 md:grid-cols-2">
        {WAITLIST.items.map((item, i) => (
          <article
            key={item.n}
            className="reveal rounded-3xl bg-cream-light p-7 md:p-9"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-espresso/45">
              {item.n}
            </span>
            <h3 className="display mt-3 text-2xl leading-tight">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-espresso/70">{item.text}</p>
          </article>
        ))}
      </div>

      <p className="reveal mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-espresso/55">
        {WAITLIST.note}
      </p>

      {/* despărțitor */}
      <div className="reveal mx-auto mt-20 flex max-w-4xl items-center gap-[2px]">
        <span className="h-2 w-2 rounded-full bg-muted" />
        <span className="h-[2px] flex-1 bg-muted" />
        <span className="h-2 w-2 rounded-full bg-muted" />
      </div>

      <Form onSent={onSent} />
    </section>
  )
}

function Form({ onSent }: { onSent: () => void }) {
  const [stage, setStage] = useState('')
  const [block, setBlock] = useState('')
  const [delay, setDelay] = useState('')

  return (
    <div id="inscriere" className="mx-auto mt-16 max-w-2xl md:mt-20">
      <div className="text-center">
        <p className="reveal text-xs font-semibold uppercase tracking-widest text-espresso/60">
          {FORM.eyebrow}
        </p>
        <h3 className="display reveal mt-4 text-[clamp(1.75rem,4.5vw,2.6rem)] leading-tight">
          {FORM.title}
        </h3>
        <p className="reveal mx-auto mt-4 max-w-lg leading-relaxed text-espresso/70">
          {FORM.sub}
        </p>
      </div>

      <form
        className="reveal mt-10 flex flex-col gap-8"
        onSubmit={(e) => {
          e.preventDefault()
          /* TODO: conectează la CRM / listă. Deocamdată doar duce
             mai departe, fără să trimită nicăieri. */
          onSent()
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Numele tău" name="name" />
          <Field label="Email" name="email" type="email" />
        </div>

        <Choice
          legend={FORM.stage.label}
          name="stage"
          options={FORM.stage.options}
          value={stage}
          onChange={setStage}
        />
        <Choice
          legend={FORM.block.label}
          name="block"
          options={FORM.block.options}
          value={block}
          onChange={setBlock}
        />
        <Choice
          legend={FORM.delay.label}
          name="delay"
          options={FORM.delay.options}
          value={delay}
          onChange={setDelay}
        />

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">{FORM.tried.label}</span>
          <textarea
            name="tried"
            rows={4}
            required
            placeholder={FORM.tried.placeholder}
            className="resize-none rounded-2xl border border-muted bg-cream-light px-4 py-3 text-espresso outline-none transition-colors placeholder:text-espresso/35 focus:border-espresso"
          />
        </label>

        <label className="flex items-start gap-3 text-sm leading-relaxed text-espresso/70">
          <input
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 accent-[#1D0E0A]"
          />
          {FORM.consent}
        </label>

        <button
          type="submit"
          className="group mx-auto flex items-center gap-3 rounded-full bg-espresso py-2 pl-2 pr-6 text-cream transition-colors duration-300 hover:bg-[#120806]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-light text-espresso transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRight size={17} />
          </span>
          <span className="text-sm font-medium uppercase tracking-wide">{FORM.submit}</span>
        </button>
      </form>
    </div>
  )
}

function Field({ label, name, type = 'text' }: { label: string; name: string; type?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium">{label}</span>
      <input
        type={type}
        name={name}
        required
        className="rounded-2xl border border-muted bg-cream-light px-4 py-3 text-espresso outline-none transition-colors focus:border-espresso"
      />
    </label>
  )
}

function Choice({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string
  name: string
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-3 text-sm font-medium">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value === o
          return (
            <label
              key={o}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors duration-200 ${
                on
                  ? 'border-espresso bg-espresso text-cream'
                  : 'border-muted bg-cream-light text-espresso/75 hover:border-muted-dark'
              }`}
            >
              <input
                type="radio"
                name={name}
                value={o}
                checked={on}
                onChange={() => onChange(o)}
                required
                className="sr-only"
              />
              {o}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
