import { Link } from 'react-router-dom';
import PlaceholderImg from '../components/PlaceholderImg';

const screens = [
  { w: 1280, h: 800, label: 'Dashboard — Prehľad prevádzky', color: '#faebd7' },
  { w: 1280, h: 800, label: 'Recepty — Vyhľadávanie a filtrovanie', color: '#f5e5d0' },
  { w: 1280, h: 800, label: 'Menu — Týždenný plánovač', color: '#ead5bb' },
  { w: 1280, h: 800, label: 'Nákupný zoznam — Automatické generovanie', color: '#f0dfc8' },
  { w: 1280, h: 800, label: 'Kalkulácie — Food cost analýza', color: '#e8d5c0' },
  { w: 1280, h: 800, label: 'Dodávatelia — Správa kontaktov', color: '#f5e0cc' },
];

export default function DemoPage() {
  return (
    <>
      <section className="page-hero page-hero--orange">
        <div className="container page-hero__inner" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <p className="eyebrow eyebrow--light">30 dní zadarmo</p>
          <h1 className="page-hero__heading page-hero__heading--light">Vyskúšajte Fudoma</h1>
          <p className="page-hero__sub page-hero__sub--light">
            Bezplatná demo verzia so všetkými funkciami. Bez kreditnej karty. Bez záväzkov.
          </p>
        </div>
      </section>

      {/* DEMO FORM */}
      <section className="section">
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="demo-form-card">
            <h2 className="section-heading" style={{ marginBottom: '2rem' }}>Začnite zadarmo</h2>
            <form className="demo-form" onSubmit={e => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Meno</label>
                  <input type="text" placeholder="Vaše meno" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Priezvisko</label>
                  <input type="text" placeholder="Vaše priezvisko" className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="vas@email.sk" className="form-input" />
              </div>
              <div className="form-group">
                <label>Názov prevádzky</label>
                <input type="text" placeholder="Názov reštaurácie / hotela" className="form-input" />
              </div>
              <div className="form-group">
                <label>Typ prevádzky</label>
                <select className="form-input">
                  <option value="">Vyberte typ...</option>
                  <option>Reštaurácia</option>
                  <option>Hotel</option>
                  <option>Kaviareň</option>
                  <option>Školská jedáleň</option>
                  <option>Catering</option>
                  <option>Iné</option>
                </select>
              </div>
              <div className="form-group">
                <label>Telefón (voliteľné)</label>
                <input type="tel" placeholder="+421 9XX XXX XXX" className="form-input" />
              </div>
              <div className="form-group form-group--checkbox">
                <input type="checkbox" id="gdpr" />
                <label htmlFor="gdpr">
                  Súhlasím so spracovaním osobných údajov v zmysle GDPR
                </label>
              </div>
              <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                AKTIVOVAŤ BEZPLATNÚ DEMO VERZIU
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FEATURES HIGHLIGHT */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Čo obsahuje demo</p>
            <h2 className="section-heading">Plný prístup na 30 dní</h2>
          </div>
          <div className="grid-3">
            {[
              { icon: '📖', title: '3 000+ receptov', desc: 'Kompletná databáza s kalkuláciami a alergénmi.' },
              { icon: '📅', title: 'Plánovač menu', desc: 'Týždenný aj mesačný plánovač jedálneho lístka.' },
              { icon: '🛒', title: 'Nákupné zoznamy', desc: 'Automatické generovanie objednávok pre dodávateľov.' },
              { icon: '📊', title: 'Food cost analýza', desc: 'Kalkulácia nákladov v reálnom čase.' },
              { icon: '👥', title: 'Až 3 používatelia', desc: 'Zdieľajte prístup s celým tímom.' },
              { icon: '📞', title: 'Podpora zdarma', desc: 'Onboarding call a email podpora počas demo periódy.' },
            ].map(f => (
              <div key={f.title} className="pillar-card">
                <div className="pillar-card__icon">{f.icon}</div>
                <h3 className="pillar-card__title">{f.title}</h3>
                <p className="pillar-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Ukážky obrazoviek</p>
            <h2 className="section-heading">Pohľad do aplikácie</h2>
          </div>
          <div className="demo-screens">
            {screens.map((s, i) => (
              <div key={i} className="demo-screen">
                <PlaceholderImg width={s.w} height={s.h} label={s.label} color={s.color} />
                <p className="demo-screen__label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="section section--cream">
        <div className="container split">
          <div className="split__text">
            <p className="eyebrow">Mobilná verzia</p>
            <h2 className="section-heading">Funguje aj na mobile</h2>
            <p className="body-text">
              Fudoma je plne responzívna webová aplikácia. Prehľadne na tablete,
              plnohodnotne na počítači — vždy po ruke.
            </p>
          </div>
          <div className="split__image" style={{ display: 'flex', gap: '1rem' }}>
            <PlaceholderImg width={390} height={844} label="Mobile — Dashboard" color="#faebd7" />
            <PlaceholderImg width={390} height={844} label="Mobile — Recepty" color="#f0dfc8" />
          </div>
        </div>
      </section>
    </>
  );
}
