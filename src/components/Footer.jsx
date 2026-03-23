import { Link } from 'react-router-dom';

const footerLinks = [
  { to: '/', label: 'Domov' },
  { to: '/o-nas', label: 'O nás' },
  { to: '/blog', label: 'Blog' },
  { to: '/kontakt', label: 'Kontakt' },
  { to: '/faq', label: 'FAQ' },
  { to: '/club', label: 'Club' },
  { to: '/demo', label: 'Demo' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="navbar__logo-mark">F</div>
            <span className="navbar__logo-text">FUDOMA</span>
          </div>
          <p className="footer__tagline">Effective time saving and cashflow control</p>
          <p className="footer__email">info@fudoma.com</p>
          <p className="footer__phone">+421 948 762 105</p>
        </div>

        <nav className="footer__nav">
          <h4 className="footer__nav-title">Navigácia</h4>
          <ul>
            {footerLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} className="footer__link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__socials-col">
          <h4 className="footer__nav-title">Sledujte nás</h4>
          <div className="footer__socials">
            <a href="#" className="footer__social-btn">Facebook</a>
            <a href="#" className="footer__social-btn">Instagram</a>
            <a href="#" className="footer__social-btn">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© FUDOMA.COM 2026 — Všetky práva vyhradené</p>
      </div>
    </footer>
  );
}
