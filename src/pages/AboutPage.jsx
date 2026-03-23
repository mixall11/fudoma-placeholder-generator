import { Link } from 'react-router-dom';
import PlaceholderImg from '../components/PlaceholderImg';

const values = [
  { icon: '🎯', title: 'Odbornosť', desc: 'Náš tím tvorí ľudí z praxe — šéfkuchári, manažéri prevádzok a IT špecialisti.' },
  { icon: '🤝', title: 'Partnerstvo', desc: 'Budujeme dlhodobé vzťahy so zákazníkmi. Váš úspech je náš úspech.' },
  { icon: '🚀', title: 'Inovácia', desc: 'Neustále vylepšujeme produkt na základe spätnej väzby od používateľov.' },
];

const team = [
  { name: 'Michal Novák', role: 'Zakladateľ & CEO', w: 400, h: 400 },
  { name: 'Jana Kováčová', role: 'Head of Product', w: 400, h: 400 },
  { name: 'Peter Horváth', role: 'Lead Developer', w: 400, h: 400 },
  { name: 'Lucia Balážová', role: 'Customer Success', w: 400, h: 400 },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">O nás</p>
          <h1 className="page-hero__heading">Kto je za projektom FUDOMA?</h1>
          <p className="page-hero__sub">
            Za projektom Fudoma stojí človek, ktorý prešiel celou gastronómickou cestou —
            od prvých krokov v kuchyni až po riadenie reštaurácie.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container split">
          <div className="split__text">
            <p className="eyebrow">Náš príbeh</p>
            <h2 className="section-heading">Vznikli sme z praxe, nie z teórie</h2>
            <p className="body-text">
              Fudoma vznikla z frustrácie z každodennej práce v gastronómii. Hodiny strávené
              výpočtami food costu v Exceli, zabudnuté objednávky surovín, plytvanie —
              to sme zažili na vlastnej koži.
            </p>
            <p className="body-text" style={{ marginTop: '1rem' }}>
              V roku 2022 sme sa rozhodli vytvoriť nástroj, ktorý by tento chaos vyriešil
              raz a navždy. Dnes Fudoma pomáha stovkám prevádzok po celom Slovensku a Česku
              šetriť čas, peniaze a potraviny.
            </p>
            <p className="body-text" style={{ marginTop: '1rem' }}>
              Náš tím tvoria ľudia s reálnymi skúsenosťami z gastronomického priemyslu
              v kombinácii s technologickými expertmi. Každá funkcia v aplikácii vychádza
              z reálnych potrieb prevádzok.
            </p>
          </div>
          <div className="split__image">
            <PlaceholderImg width={1536} height={911} label="Príbeh — Tím Fudoma" color="#faebd7" />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Naše hodnoty</p>
            <h2 className="section-heading">Čím sa riadime</h2>
          </div>
          <div className="grid-3">
            {values.map(v => (
              <div key={v.title} className="pillar-card">
                <div className="pillar-card__icon">{v.icon}</div>
                <h3 className="pillar-card__title">{v.title}</h3>
                <p className="pillar-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Tím</p>
            <h2 className="section-heading">Ľudia za Fudoma</h2>
          </div>
          <div className="team-grid">
            {team.map(member => (
              <div key={member.name} className="team-card">
                <div className="team-card__photo">
                  <PlaceholderImg width={member.w} height={member.h} label="Portrét" color="#f0dfc8" />
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="section section--dark">
        <div className="container">
          <div className="grid-4">
            {[
              { num: '500+', label: 'Aktívnych prevádzok' },
              { num: '3 000+', label: 'Receptov v databáze' },
              { num: '30%', label: 'Priemerná úspora nákladov' },
              { num: '2022', label: 'Rok vzniku' },
            ].map(stat => (
              <div key={stat.label} className="stat-card">
                <div className="stat-card__num">{stat.num}</div>
                <div className="stat-card__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <h2 className="cta-banner__heading">Vyskúšajte Fudoma zadarmo</h2>
          <p className="cta-banner__sub">30-dňová bezplatná skúšobná verzia. Bez záväzkov.</p>
          <Link to="/demo" className="btn btn--white">BEZPLATNÁ DEMO VERZIA</Link>
        </div>
      </section>
    </>
  );
}
