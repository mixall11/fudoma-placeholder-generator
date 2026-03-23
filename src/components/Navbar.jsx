import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'DOMOV' },
  { to: '/o-nas', label: 'O NÁS' },
  { to: '/club', label: 'CLUB' },
  { to: '/demo', label: 'DEMO' },
  { to: '/faq', label: 'FAQ' },
  { to: '/blog', label: 'Blog' },
  { to: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-mark">F</div>
          <span className="navbar__logo-text">FUDOMA</span>
        </Link>

        <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>

        <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`navbar__link ${pathname === link.to ? 'navbar__link--active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__socials">
          <a href="#" aria-label="Facebook" className="social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" aria-label="YouTube" className="social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/></svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
