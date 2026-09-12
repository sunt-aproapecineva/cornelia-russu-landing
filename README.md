# Cornelia Russu — landing

Pagină de încălzire pentru brandul personal Cornelia Russu. Un singur îndemn:
**„Vreau curaj"** → formular de calificare → pagina de mulțumire cu WhatsApp.

## Cum pornești

```bash
npm install
npm run dev
```

Rulează pe `http://localhost:5184`. Build de producție: `npm run build`.

## Stack

Vite · React 19 · TypeScript · Tailwind v4 (temă în `src/index.css`, fără `tailwind.config`) · lucide-react.

## Structură

Tot textul stă într-un singur loc: [`src/lib/content.ts`](src/lib/content.ts). Secțiunile
nu conțin copy, doar aranjare.

| # | Secțiune | Ce face |
|---|---|---|
| 1 | `Hero` | Numele la 27vh derulează continuu, literele trec prin spatele portretului. Filosofia centrată jos. |
| 2 | `Recognition` | Acuzarea care absolvă, apoi propunerea de valoare și acreditarea. |
| 3 | `Argument` | Trei bătăi: explicația comodă → analogia bărcii → răsturnarea interactivă. |
| 4 | `Bio` | Cine e, așezată după recunoaștere, nu înainte. |
| 5 | `Boundaries` | Pentru cine nu e. Limitele se impun devreme. |
| 6 | `Waitlist` | Consultație + audit, apoi formularul de calificare. |
| 7 | `Closing` | Sentința de închidere și subsolul. |
| — | `ThankYou` | Ruta `/multumesc`, cu butonul de WhatsApp. |

## Identitate

Espresso `#1D0E0A` · crem `#F1E7E5` · teracotă `#DA6342`.

Teracota e accent, nu fundal: apare de cel mult patru ori pe pagină, iar pe cea mai
importantă dintre ele cade pe cuvintele „curajul schimbării".

**Fonturi: EB Garamond + Inter Tight + Inter.** Brandbookul cerea Amiri, dar Amiri nu
conține `Ș ș Ț ț` (U+0218–021B), deci nu poate culege română — toate diacriticele cădeau
pe un font de rezervă. EB Garamond acoperă complet româna și păstrează aceeași motivație
din deck: serif clasic, contrast rafinat, italice elegante.

Fotografiile sunt virate în duoton espresso din negativele alb-negru, fiindcă fundalurile
albe și reci din ședință contraziceau paleta.

## Rutare

Două stări, fără router: `/` și `/multumesc`, prin `history.pushState`. Butonul „înapoi"
al browserului funcționează. Pentru ca ruta să meargă și la reîncărcare pe host,
`public/_redirects` (Netlify) și `vercel.json` trimit totul spre `index.html`.

## Ce mai lipsește

- Formularul nu trimite nicăieri. `Waitlist.tsx` doar duce mai departe spre `/multumesc`
  — de conectat la CRM.
- Denumirea instituției de formare din `content.ts` (`RECOGNITION.credential`) **nu e
  verificată**. De confirmat înainte de publicare.
- Conturile din `SOCIAL`: doar Instagram e real.
