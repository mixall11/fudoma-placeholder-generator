import { Link } from 'react-router-dom';
import PlaceholderImg from '../components/PlaceholderImg';

const benefits = [
  { icon: '📚', title: 'Exkluzívny obsah', desc: 'Prístup k prémiovým receptom, videotutoriálom a odborným článkom.' },
  { icon: '👥', title: 'Komunita odborníkov', desc: 'Zdieľajte skúsenosti s tisíckami gastronómov zo Slovenska a Česka.' },
  { icon: '🎓', title: 'Vzdelávanie', desc: 'Webináre, online kurzy a workshopy vedené odborníkmi z praxe.' },
  { icon: '💎', title: 'Prémiové funkcie', desc: 'Rozšírená analytika, export dát a pokročilé kalkulačné nástroje.' },
  { icon: '🏷', title: 'Zľavy na partnery', desc: 'Špeciálne cenové podmienky u vybraných dodávateľov a partnerov.' },
  { icon: '🔔', title: 'Skorý prístup', desc: 'Ako prvý vyskúšajte nové funkcie pred ich verejným spustením.' },
];

export default function ClubPage() {
  return (
    <>
      <section className="page-hero page-hero--orange">
        <div className="container page-hero__inner">
          <p className="eyebrow eyebrow--light">Prémiové členstvo</p>
          <h1 className="page-hero__heading page-hero__heading--light">FUDOMA CLUB</h1>
          <p className="page-hero__sub page-hero__sub--light">
            Staňte sa členom exkluzívnej komunity gastronómov a získajte prístup
            k prémiovému obsahu, vzdelávaniu a výhodám.
          </p>
          <Link to="/kontakt" className="btn btn--white" style={{ marginTop: '2rem' }}>
            Stať sa členom
          </Link>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Výhody</p>
            <h2 className="section-heading">Čo získate členstvom</h2>
          </div>
          <div className="grid-3">
            {benefits.map(b => (
              <div key={b.title} className="feature-card">
                <div className="pillar-card__icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}>{b.icon}</div>
                <h3 className="feature-card__title">{b.title}</h3>
                <p className="feature-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY PHOTO */}
      <section className="section section--cream">
        <div className="container split">
          <div className="split__image">
            <PlaceholderImg width={1200} height={800} label="Club — Komunita gastronómov" color="#faebd7" />
          </div>
          <div className="split__text">
            <p className="eyebrow">Komunita</p>
            <h2 className="section-heading">Viac ako 1 200 členov</h2>
            <p className="body-text">
              Fudoma Club je miesto, kde sa stretávajú šéfkuchári, manažéri prevádzok
              a majitelia reštaurácií. Zdieľame know-how, riešime problémy a pomáhame
              si navzájom rásť.
            </p>
            <ul className="check-list" style={{ marginTop: '1.5rem' }}>
              <li>Súkromná online komunita</li>
              <li>Mesačné online stretnutia</li>
              <li>Ročné živé podujatie</li>
              <li>Mentoring od skúsených odborníkov</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Podujatia</p>
            <h2 className="section-heading">Nadchádzajúce akcie pre členov</h2>
          </div>
          <div className="events-list">
            {[
              { date: '15. apríl 2026', title: 'Webinár: Food cost pod kontrolou', type: 'Online' },
              { date: '28. apríl 2026', title: 'Workshop: Sezónne menu plánovanie', type: 'Online' },
              { date: '10. máj 2026', title: 'Fudoma Club Meetup Bratislava', type: 'Živé' },
              { date: '22. máj 2026', title: 'Masterclass: Kalkulácie receptov', type: 'Online' },
            ].map(event => (
              <div key={event.title} className="event-row">
                <div className="event-row__date">{event.date}</div>
                <div className="event-row__title">{event.title}</div>
                <div className={`event-row__type ${event.type === 'Živé' ? 'event-row__type--live' : ''}`}>{event.type}</div>
                <Link to="/kontakt" className="btn btn--outline btn--sm">Registrovať</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <h2 className="cta-banner__heading">Pridajte sa do Fudoma Clubu</h2>
          <p className="cta-banner__sub">Prvých 100 členov získa doživotný prístup za zvýhodnenú cenu.</p>
          <Link to="/kontakt" className="btn btn--white">Stať sa členom</Link>
        </div>
      </section>
    </>
  );
}
