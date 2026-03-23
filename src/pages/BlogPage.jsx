import { Link } from 'react-router-dom';
import PlaceholderImg from '../components/PlaceholderImg';

const featured = {
  title: 'Ako ušetriť 30% nákladov na suroviny v reštaurácii: Kompletný sprievodca',
  excerpt: 'Food cost je jedným z najdôležitejších ukazovateľov rentability každej gastronomickej prevádzky. V tomto článku vám ukážeme konkrétne kroky, ako dostať náklady pod kontrolu.',
  date: '15. marca 2026',
  cat: 'Gastronómia',
  w: 1536, h: 768,
};

const posts = [
  { title: 'Food cost: Čo to je a prečo ho musíte sledovať každý deň', date: '28. februára 2026', cat: 'Financie', w: 800, h: 500, color: '#faebd7' },
  { title: 'Digitalizácia reštaurácie — kde začať a čoho sa vyvarovať', date: '20. februára 2026', cat: 'Technológie', w: 800, h: 500, color: '#f0dfc8' },
  { title: 'Sezónne menu: Ako plánovať efektívne a zaujímavo', date: '10. februára 2026', cat: 'Menu plánovanie', w: 800, h: 500, color: '#e8d5c0' },
  { title: 'Alergény v reštaurácii: Povinnosti a praktické tipy', date: '5. februára 2026', cat: 'Legislatíva', w: 800, h: 500, color: '#f5e8d8' },
  { title: 'Ako správne nastaviť ceny na jedálnom lístku', date: '28. januára 2026', cat: 'Financie', w: 800, h: 500, color: '#ead5bb' },
  { title: 'Správa dodávateľov: Tipy pre lepšiu spoluprácu', date: '20. januára 2026', cat: 'Prevádzka', w: 800, h: 500, color: '#f0e0cc' },
  { title: 'Plytvanie potravinami v gastronómii — ako na to', date: '12. januára 2026', cat: 'Udržateľnosť', w: 800, h: 500, color: '#eadcc8' },
  { title: 'Onboarding nových zamestnancov v kuchyni', date: '5. januára 2026', cat: 'HR', w: 800, h: 500, color: '#f5e5d5' },
  { title: '5 trendov v gastronómii pre rok 2026', date: '2. januára 2026', cat: 'Trendy', w: 800, h: 500, color: '#f0d8c0' },
];

const cats = ['Všetky', 'Gastronómia', 'Financie', 'Technológie', 'Menu plánovanie', 'Prevádzka', 'Udržateľnosť'];

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">Blog</p>
          <h1 className="page-hero__heading">Novinky a tipy pre gastronómov</h1>
          <p className="page-hero__sub">
            Praktické rady, trendy a inšpirácia pre efektívnu správu gastronomickej prevádzky.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section">
        <div className="container">
          <div className="blog-featured">
            <div className="blog-featured__image">
              <PlaceholderImg width={featured.w} height={featured.h} label="Featured — Hlavný článok" color="#faebd7" />
            </div>
            <div className="blog-featured__body">
              <span className="blog-card__cat">{featured.cat}</span>
              <h2 className="blog-featured__title">{featured.title}</h2>
              <p className="blog-featured__excerpt">{featured.excerpt}</p>
              <p className="blog-card__date">{featured.date}</p>
              <Link to="/blog" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
                Čítať článok
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section section--cream" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <div className="container">
          <div className="blog-cats">
            {cats.map(c => (
              <button key={c} className={`blog-cat-btn ${c === 'Všetky' ? 'blog-cat-btn--active' : ''}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {posts.map((post, i) => (
              <article key={i} className="blog-card">
                <PlaceholderImg width={post.w} height={post.h} label={`Blog — ${post.cat}`} color={post.color} />
                <div className="blog-card__body">
                  <span className="blog-card__cat">{post.cat}</span>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__date">{post.date}</p>
                  <Link to="/blog" className="blog-card__link">Čítať viac →</Link>
                </div>
              </article>
            ))}
          </div>

          {/* LOAD MORE */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn btn--outline">Načítať ďalšie články</button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <h2 className="cta-banner__heading">Odoberajte novinky z Fudoma blogu</h2>
          <p className="cta-banner__sub">Každý týždeň praktické tipy priamo do vášho emailu.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Váš email..." className="newsletter-input" />
            <button className="btn btn--white">Prihlásiť sa</button>
          </div>
        </div>
      </section>
    </>
  );
}
