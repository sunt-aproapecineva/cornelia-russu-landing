import { useCallback, useEffect, useState } from 'react'
import { Hero } from './sections/Hero'
import { Recognition } from './sections/Recognition'
import { Argument } from './sections/Argument'
import { Bio } from './sections/Bio'
import { Boundaries } from './sections/Boundaries'
import { Waitlist } from './sections/Waitlist'
import { Closing } from './sections/Closing'
import { ThankYou } from './sections/ThankYou'

/* Rutare minimă, cu două stări. Nu merită un router întreg pentru o
   singură pagină, dar merită un URL adevărat: e linkabil, se poate
   măsura conversia pe el și butonul „înapoi" al browserului face
   ce trebuie. */

const THANKYOU_PATH = '/multumesc'

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const goThankYou = useCallback(() => {
    window.history.pushState({}, '', THANKYOU_PATH)
    setPath(THANKYOU_PATH)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const goHome = useCallback(() => {
    window.history.pushState({}, '', '/')
    setPath('/')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  if (path.replace(/\/+$/, '') === THANKYOU_PATH) {
    return <ThankYou onBack={goHome} />
  }

  return (
    <>
      <Hero />
      <main>
        <Recognition />
        <Argument />
        <Bio />
        <Boundaries />
        <Waitlist onSent={goThankYou} />
      </main>
      <Closing />
    </>
  )
}
