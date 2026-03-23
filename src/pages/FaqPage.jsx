import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'Čo je Fudoma a pre koho je určená?',
    a: 'Fudoma je webová aplikácia pre gastronomické prevádzky — reštaurácie, hotely, kaviarne, školské jedálne a catering. Pomáha s plánovaním menu, kalkuláciou food costu a správou nákupných zoznamov.',
  },
  {
    q: 'Musím niečo inštalovať?',
    a: 'Nie. Fudoma je čisto webová aplikácia, ktorá funguje v prehliadači. Stačí sa prihlásiť a môžete začať pracovať — z počítača, tabletu aj telefónu.',
  },
  {
    q: 'Ako dlho trvá demo perióda?',
    a: 'Demo verzia je k dispozícii 30 dní s plným prístupom ku všetkým funkciám. Nevyžaduje kreditnú kartu ani záväzok k platbe.',
  },
  {
    q: 'Koľko používateľov môže mať prístup?',
    a: 'V závislosti od zvoleného plánu: Štart (1 prevádzka, 1 používateľ), Pro (3 prevádzky, viacero používateľov), Enterprise (neobmedzene).',
  },
  {
    q: 'Môžem pridať vlastné recepty?',
    a: 'Áno. Okrem prístupu k databáze 3 000+ receptov môžete pridávať vlastné recepty s vlastnými kalkuláciami, fotografiami a poznámkami.',
  },
  {
    q: 'Ako funguje kalkulácia food costu?',
    a: 'Pre každý recept zadáte ceny surovín a počet porcií. Fudoma automaticky vypočíta food cost na porciu aj celkové náklady. Ceny surovín môžete aktualizovať podľa dodávateľov.',
  },
  {
    q: 'Funguje Fudoma aj na Slovensku a v Česku?',
    a: 'Áno. Aplikácia je dostupná v slovenčine a češtine. Podporuje slovenské aj české alergénové označenia a daňové sadzby.',
  },
  {
    q: 'Ako prebieha platba?',
    a: 'Platba prebieha mesačne alebo ročne (s 20% zľavou pri ročnej platbe) cez platobnú bránu. Akceptujeme kartu, bankový prevod a faktúru.',
  },
  {
    q: 'Môžem exportovať dáta?',
    a: 'Áno. V pláne Pro a Enterprise je k dispozícii export receptov, nákupných zoznamov a reportov vo formátoch PDF, Excel a CSV.',
  },
  {
    q: 'Čo ak chcem zrušiť predplatné?',
    a: 'Predplatné môžete zrušiť kedykoľvek bez poplatku. Prístup zostane aktívny do konca zaplateného obdobia. Vaše dáta si môžete exportovať.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-item__q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-item__arrow">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="faq-item__a">{a}</div>}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner" style={{ textAlign: 'center' }}>
          <p className="eyebrow">Podpora</p>
          <h1 className="page-hero__heading">Často kladené otázky</h1>
          <p className="page-hero__sub">
            Nenašli ste odpoveď? Kontaktujte nás na <strong>info@fudoma.com</strong>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* STILL QUESTIONS */}
      <section className="section section--cream">
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-heading">Stále máte otázky?</h2>
          <p className="body-text" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            Náš tím je tu pre vás od pondelka do piatku 9:00 — 17:00.
            Odpovieme do 24 hodín.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/kontakt" className="btn btn--primary">Napíšte nám</Link>
            <a href="tel:+421948762105" className="btn btn--outline">+421 948 762 105</a>
          </div>
        </div>
      </section>
    </>
  );
}
