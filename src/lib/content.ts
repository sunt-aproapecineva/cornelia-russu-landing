/* ════════════════════════════════════════════════════════════════
   CONȚINUT — Cornelia Russu.
   Copy de landing, nu scenarii de reel: un singur gând per bloc,
   spus scurt. Sursele rămân aceleași (deck-ul de strategie,
   biografia 23.07.2026), dar textul e rescris pentru pagină.
   Marcat cu TODO ce așteaptă confirmare de la client.
════════════════════════════════════════════════════════════════ */

export const IMG = (n: string) => `/img/${n}.webp`

export const BRAND = 'Cornelia Russu'
/* „Lista" nu spune nimic cuiva care ajunge prima dată pe pagină.
   Îndemnul e mereu același și numește emoția, nu mecanica. */
export const CTA = 'Vreau curaj'
export const YEAR = '2026'

/* Fără label — slide 6: „este doar Cornelia Russu". */

export const NAV = [
  { label: 'Unde ești', href: '#recunoastere' },
  { label: 'De ce stai', href: '#argument' },
  { label: 'Cine sunt', href: '#cornelia' },
  { label: 'Primul pas', href: '#lista' },
]

export const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/cornelia_russu/' },
]

/* ── HERO ─────────────────────────────────────────────────────────
   Numele e mesajul, fără titlu și fără label — slide 6.
   Filosofia (slide 7) stă centrată jos, ca slogan, cu un singur
   îndemn discret sub ea.                                          */
export const HERO = {
  marquee: 'Cornelia — Russu',
  slogan: ['Nu rezultatele schimbă identitatea.', 'Identitatea schimbă rezultatele.'],
  cta: 'Începe schimbarea acum',
}

/* ── 2. RECUNOAȘTEREA + PROPUNEREA DE VALOARE ────────────────────
   Sus: acuzarea care absolvă. Jos: ce oferă, promisiunea și
   acreditarea. Teracota cade exact pe „curajul schimbării" —
   brandbookul spune apăsat că #DA6342 ESTE culoarea curajului,
   deci e cea mai justă folosire a accentului de pe toată pagina. */
export const RECOGNITION = {
  hook: 'Nu-ți lipsește disciplina.',
  sub: 'Ai destulă disciplină cât să duci în spate o viață care nu-ți place.',
  label: ['Identity', 'Shifting'],
  /* Misiunea, verbatim din slide 23. */
  missionPre: 'Îți ofer ',
  missionAccent: 'curajul schimbării',
  missionPost: ', ca să ai viața pe care o vrei.',
  promise: 'După consultație, cel mai probabil n-o să te mai recunoști.',
  /* ⚠️ NEVERIFICAT — de confirmat denumirea exactă a instituției și ce
     anume atestă, înainte de publicare. E o afirmație factuală despre
     o instituție reală; biografia spune doar „programe acreditate în
     Marea Britanie, Statele Unite și Europa". */
  credential: {
    label: 'Formare acreditată',
    org: 'London School of Business & Communications',
  },
}

/* ── 3–5. ARGUMENTUL ─────────────────────────────────────────────
   Trei bătăi: explicația comodă → analogia → răsturnarea.
   Analogia NU se explică.                                        */
export const ARGUMENT = {
  heading: 'De ce ai rămas pe loc, deși ai făcut tot ce trebuia.',
  cta: 'Nu-ți trebuie încă un curs.',
  ctaLabel: CTA,
  cards: [
    {
      id: 'explicatia',
      nav: 'Explicația comodă',
      title: 'Nu informația îți lipsea.',
      image: 'card-1',
      body: [
        'Întâi am crezut că îmi lipsește informația. Apoi că îmi lipsesc strategiile. Nu era nici una, nici alta.',
      ],
      closer: 'Construiam o viață nouă cu o identitate croită pentru alta.',
    },
    {
      id: 'barca',
      nav: 'Barca',
      title: 'Vâslești perfect.',
      image: 'card-2',
      body: [
        'Ai văzut vreodată pe cineva vâslind într-o barcă legată de mal? Trage din toate puterile, se întinde frânghia și barca revine. Din afară pare că muncește cel mai mult dintre toți. Și chiar așa e.',
      ],
      closer: 'Nu vâsleai greșit. Doar că nimeni nu ți-a arătat frânghia.',
    },
    {
      id: 'rasturnarea',
      nav: 'Răsturnarea',
      title: 'Aceleași cuvinte. Două identități.',
      image: null,
      body: [],
      closer: 'Diferența e direcția din care le citești.',
    },
  ],
}

/* Blocul-semnătură: Identity Shifting demonstrat, nu explicat. */
export const INVERSION = {
  pairs: [
    ['Comparația', 'încrederea'],
    ['Frica', 'vizibilitatea'],
    ['Îndoiala', 'vânzarea'],
    ['Rușinea', 'vocea'],
  ] as [string, string][],
  verb: 'ucide',
  action: 'Acum citește de la dreapta la stânga',
  reset: 'Citește înapoi',
}

/* ── 6. CORNELIA ─────────────────────────────────────────────────
   Relatabilitatea nu vine din lipsa banilor (biografia o contrazice),
   ci din lipsa tiparelor mentale.                                 */
export const BIO = {
  eyebrow: 'Cine sunt',
  title: 'Nu vin dintr-o familie de antreprenori. Vin dintr-o familie de angajați.',
  image: 'bio',
  body: [
    'Am făcut tot ce se cere: Dreptul, un an la Vilnius, master în Drept Internațional, apoi două companii cu capital străin. Traseul corect, executat corect. Și tot m-am blocat.',
    'Vedeam oameni care depuneau același efort, uneori mai puțin, și obțineau cu totul alte rezultate. Nu aveam modele antreprenoriale și nici tiparele mentale necesare.',
  ],
  quote:
    'Poți avea toate cunoștințele din lume. Dacă identitatea ta nu e compatibilă cu viața pe care încerci s-o construiești, vei reproduce aceleași rezultate.',
  facts: [
    'Drept Internațional · master în Drepturile Omului',
    'Zece ani de studiu al identității și al sistemului nervos',
    'Certificări acreditate în UK, SUA și Europa',
  ],
}

/* ── 7. GRANIȚELE ────────────────────────────────────────────────
   Cerut de slide 13: limitele se impun de la prima întâlnire.    */
export const BOUNDARIES = {
  eyebrow: 'Pentru cine nu e',
  image: 'boundaries',
  lines: [
    'Nu lucrez cu cine caută încă o teorie de pus în raft.',
    'Nu lucrez cu cine vrea rezultat fără să schimbe nimic.',
    'Nu lucrez cu cine încă nu s-a săturat de viața pe care o are.',
  ],
  turn: 'Lucrez cu femei care au obosit să trăiască sub cât pot.',
  closer: 'Dacă te-ai recunoscut în ultimul rând, ne înțelegem.',
}

/* ── 8. LISTA ────────────────────────────────────────────────────
   Cele două sunt secvențiale: întâi consultația, apoi auditul care
   iese din ea. Numerele 01/02 poartă ordinea.                     */
export const WAITLIST = {
  eyebrow: 'Primul pas',
  title: 'Nu e o înscriere. E o filtrare.',
  sub: 'Ce dau mai jos e timpul meu, iar timpul meu nu se scalează.',
  items: [
    {
      n: '01',
      title: 'Consultație de 30 de minute',
      text: 'Unu la unu, cu mine. Ne uităm la unde ești blocată și de ce.',
    },
    {
      n: '02',
      title: 'Audit personal',
      text: 'Pașii concreți de după consultație: ce schimbi, în ce ordine, până devii femeia pentru care viața pe care o vrei e deja normalul ei.',
    },
  ],
  note: 'Gratuit, fără nicio obligație. Locurile sunt limitate pentru că sunt treizeci de minute reale.',
}

/* ── 9. FORMULAR ─────────────────────────────────────────────────
   Poartă de calificare + „analiza vie" cerută de slide 4.        */
export const FORM = {
  eyebrow: 'Înscriere',
  title: 'Patru întrebări.',
  sub: 'Din răspunsurile astea iese auditul.',
  stage: {
    label: 'Unde ești acum?',
    options: [
      'Am o idee, n-am început',
      'Am început, fără venit constant',
      'Am venit, dar oscilează',
      'Am venit stabil și vreau mai mult',
    ],
  },
  block: {
    label: 'Ce te oprește cel mai des?',
    options: [
      'Frica de a fi văzută',
      'Nu știu de unde să încep',
      'Mă compar și mă blochez',
      'Nu-mi pot cere prețul',
    ],
  },
  delay: {
    label: 'De cât timp amâni?',
    options: ['Câteva luni', 'Un an', 'Doi-trei ani', 'Mai mult'],
  },
  tried: {
    label: 'Ce ai încercat deja și nu a mers?',
    placeholder: 'Pe scurt. Aici e partea care contează cel mai mult.',
  },
  submit: CTA,
  consent: 'Sunt de acord să fiu contactată în legătură cu lista de așteptare.',
}

/* ── 10. SENTINȚA ────────────────────────────────────────────────
   Închidere fără îndemn. Nu explică analogia — o lasă deschisă.  */
export const CLOSING = {
  line: 'Poți continua să vâslești.',
  line2: 'Sau te poți uita în spate, la ce te ține.',
}

/* ── 11. PAGINA DE MULȚUMIRE ─────────────────────────────────────
   Ruta /multumesc. Un singur lucru de făcut aici: WhatsApp.
   Nimic altceva nu concurează cu butonul.                        */
export const THANKYOU = {
  eyebrow: 'Am primit',
  title: 'A rămas un singur pas.',
  body: 'Ți-am primit răspunsurile și le citesc eu, una câte una. Dar ca să nu pierdem timp, scrie-mi direct.',
  cta: 'Hai să vedem primul pas spre noua ta identitate',
  href: 'https://wa.link/8snz6i',
  note: 'Îți răspund personal. Nu e un bot.',
  whisper: 'Nu rezultatele schimbă identitatea. Identitatea schimbă rezultatele.',
}
