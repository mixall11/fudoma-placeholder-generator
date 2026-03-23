import { Link } from 'react-router-dom';
import PlaceholderImg from '../components/PlaceholderImg';

const pillars = [
  {
    icon: '⏱',
    title: 'Šetrí čas',
    desc: 'Automatizácia manuálneho plánovania jedálneho lístka a objednávok surovín. Ušetrí hodiny každý týždeň.',
  },
  {
    icon: '💰',
    title: 'Znižuje náklady',
    desc: 'Efektívna správa zdrojov a presné kalkulácie nákladov na porciu. Kontrola cashflow v reálnom čase.',
  },
  {
    icon: '🌿',
    title: 'Neplytvá surovinami',
    desc: 'Presné výpočty ingrediencií podľa počtu porcií. Minimalizácia odpadu a optimalizácia zásob.',
  },
];

const features = [
  { title: 'Databáza receptov', desc: 'Viac ako 3 000 receptov s kalkuláciami nákladov, alergenmi a nutričnými hodnotami.' },
  { title: 'Plánovanie menu', desc: 'Drag & drop tvorba jedálneho lístka na týždeň alebo mesiac dopredu.' },
  { title: 'Nákupné zoznamy', desc: 'Automatické generovanie nákupných zoznamov podľa naplánovaného menu a počtu porcií.' },
  { title: 'Kalkulácia cien', desc: 'Okamžitý výpočet food costu a odporúčanej predajnej ceny pre každý recept.' },
  { title: 'Správa dodávateľov', desc: 'Centrálna správa dodávateľov, cenníkov a objednávok na jednom mieste.' },
  { title: 'Reporty a štatistiky', desc: 'Prehľadné grafy a reporty o nákladoch, tržbách a efektivite prevádzky.' },
];

const steps = [
  { num: '01', title: 'Vyhľadajte', desc: 'Prezrite databázu viac ako 3 000 receptov alebo pridajte vlastné.' },
  { num: '02', title: 'Naplánujte', desc: 'Zostavte jedálny lístok a nastavte počty porcií pre každý deň.' },
  { num: '03', title: 'Objednajte', desc: 'Automaticky generovaný nákupný zoznam odošlite priamo dodávateľom.' },
];

const blogPosts = [
  { title: 'Ako ušetriť 30% nákladov na suroviny v reštaurácii', date: 'Marec 2026', cat: 'Gastronómia' },
  { title: 'Food cost: Čo to je a prečo ho musíte sledovať každý deň', date: 'Február 2026', cat: 'Financie' },
  { title: 'Digitalizácia reštaurácie — kde začať a čoho sa vyvarovať', date: 'Február 2026', cat: 'Technológie' },
];

const plans = [
  { name: 'Štart', price: '29 €', note: 'bez DPH / mesiac', features: ['1 prevádzka', '500 receptov', 'Nákupné zoznamy', 'Email podpora'] },
  { name: 'Pro', price: '59 €', note: 'bez DPH / mesiac', featured: true, features: ['3 prevádzky', 'Neobmedzené recepty', 'Kalkulácie nákladov', 'Správa dodávateľov', 'Prioritná podpora'] },
  { name: 'Enterprise', price: 'Na mieru', note: 'kontaktujte nás', features: ['Neobmedzené prevádzky', 'API integrácie', 'Vlastné reporty', 'Dedikovaný account manager', 'SLA zmluva'] },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="hero__eyebrow">Softvér pre gastronomické prevádzky</p>
            <h1 className="hero__heading">FUDOMA</h1>
            <p className="hero__tagline">Effective time saving and cashflow control</p>
            <p className="hero__desc">
              Komplexný nástroj na správu receptov, plánovanie menu a kontrolu nákladov
              pre reštaurácie, hotely a stravovacie prevádzky.
            </p>
            <div className="hero__ctas">
              <Link to="/demo" className="btn btn--primary">CHCEM VEDIEŤ VIAC</Link>
              <Link to="/kontakt" className="btn btn--outline">MÁM ZÁUJEM</Link>
            </div>
          </div>
          <div className="hero__image">
            <PlaceholderImg width={680} height={480} label="Hero — App Screenshot" color="#f5e5d0" />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section section--cream">
        <div className="container">
          <div className="grid-3">
            {pillars.map(p => (
              <div key={p.title} className="pillar-card">
                <div className="pillar-card__icon">{p.icon}</div>
                <h3 className="pillar-card__title">{p.title}</h3>
                <p className="pillar-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ČO JE FUDOMA */}
      <section className="section">
        <div className="container split">
          <div className="split__text">
            <p className="eyebrow">Čo je Fudoma</p>
            <h2 className="section-heading">Váš digitálny asistent pre gastronomickú prevádzku</h2>
            <p className="body-text">
              Fudoma je webová aplikácia navrhnutá priamo pre potreby slovenských a českých
              gastronomických prevádzok. Funguje v prehliadači — bez inštalácie, kedykoľvek
              a kdekoľvek.
            </p>
            <ul className="check-list">
              <li>Webová aplikácia — bez inštalácie</li>
              <li>Databáza s viac ako 3 000 receptami</li>
              <li>Automatické výpočty ingrediencií</li>
              <li>Generovanie nákupných zoznamov</li>
              <li>Kalkulácia food costu v reálnom čase</li>
            </ul>
            <Link to="/demo" className="btn btn--primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              Vyskúšaj zadarmo
            </Link>
          </div>
          <div className="split__image">
            <PlaceholderImg width={1536} height={911} label="Aplikácia — Dashboard" color="#faebd7" />
          </div>
        </div>
      </section>

      {/* AKO TO FUNGUJE */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow eyebrow--light">Postup</p>
            <h2 className="section-heading section-heading--light">Ako to funguje?</h2>
          </div>
          <div className="steps">
            {steps.map((step, i) => (
              <div key={i} className="step-card">
                <div className="step-card__num">{step.num}</div>
                <div className="step-card__icon-ph">
                  <PlaceholderImg width={120} height={120} label="Ikona" color="#f0dfc8" />
                </div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNKCIE */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Funkcie</p>
            <h2 className="section-heading">Všetko čo vaša prevádzka potrebuje</h2>
          </div>
          <div className="grid-3">
            {features.map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-card__dot" />
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Ukážky</p>
            <h2 className="section-heading">Pohľad do aplikácie</h2>
          </div>
          <div className="screenshots-grid">
            <div className="screenshots-grid__main">
              <PlaceholderImg width={1200} height={750} label="Prehľad — Hlavný dashboard" color="#faebd7" />
            </div>
            <div className="screenshots-grid__side">
              <PlaceholderImg width={600} height={360} label="Recepty — Zoznam receptov" color="#e8d5c0" />
              <PlaceholderImg width={600} height={360} label="Menu — Týždenné plánovanie" color="#ead8c4" />
            </div>
          </div>
          <div className="screenshots-row">
            <PlaceholderImg width={400} height={280} label="Nákupný zoznam" color="#f0e0cc" />
            <PlaceholderImg width={400} height={280} label="Kalkulácia nákladov" color="#e8d5c0" />
            <PlaceholderImg width={400} height={280} label="Správa dodávateľov" color="#f5e8d8" />
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--row">
            <div>
              <p className="eyebrow">Blog</p>
              <h2 className="section-heading">Novinky a tipy</h2>
            </div>
            <Link to="/blog" className="btn btn--outline">Všetky články</Link>
          </div>
          <div className="grid-3">
            {blogPosts.map((post, i) => (
              <article key={i} className="blog-card">
                <PlaceholderImg
                  width={800} height={500}
                  label={`Blog — ${post.cat}`}
                  color={['#faebd7', '#f0dfc8', '#e8d5c0'][i]}
                />
                <div className="blog-card__body">
                  <span className="blog-card__cat">{post.cat}</span>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__date">{post.date}</p>
                  <Link to="/blog" className="blog-card__link">Čítať viac →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Cenník</p>
            <h2 className="section-heading">Transparentné ceny bez prekvapení</h2>
          </div>
          <div className="grid-3">
            {plans.map(plan => (
              <div key={plan.name} className={`plan-card ${plan.featured ? 'plan-card--featured' : ''}`}>
                {plan.featured && <div className="plan-card__badge">Najpopulárnejší</div>}
                <h3 className="plan-card__name">{plan.name}</h3>
                <div className="plan-card__price">{plan.price}</div>
                <div className="plan-card__note">{plan.note}</div>
                <ul className="plan-card__features">
                  {plan.features.map(f => <li key={f}><span>✓</span> {f}</li>)}
                </ul>
                <Link to="/demo" className={`btn ${plan.featured ? 'btn--primary' : 'btn--outline'}`}>
                  Začať zadarmo
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <h2 className="cta-banner__heading">Pripravení zefektívniť vašu prevádzku?</h2>
          <p className="cta-banner__sub">Vyskúšajte Fudoma 30 dní zadarmo. Bez kreditnej karty.</p>
          <div className="hero__ctas">
            <Link to="/demo" className="btn btn--white">BEZPLATNÁ DEMO VERZIA</Link>
            <Link to="/kontakt" className="btn btn--outline-white">Kontaktujte nás</Link>
          </div>
        </div>
      </section>
    </>
  );
}
