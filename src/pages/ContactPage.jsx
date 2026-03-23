export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner" style={{ textAlign: 'center' }}>
          <p className="eyebrow">Kontakt</p>
          <h1 className="page-hero__heading">KONTAKTNÉ INFORMÁCIE</h1>
          <p className="page-hero__sub">
            Sme tu pre vás. Ozvite sa nám — odpovieme do 24 hodín.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="section">
        <div className="container">
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-method__icon">✉️</div>
              <h3 className="contact-method__title">Email</h3>
              <a href="mailto:info@fudoma.com" className="contact-method__val">info@fudoma.com</a>
              <p className="contact-method__note">Odpovieme do 24 hodín</p>
            </div>
            <div className="contact-method">
              <div className="contact-method__icon">📞</div>
              <h3 className="contact-method__title">Telefón</h3>
              <a href="tel:+421948762105" className="contact-method__val">+421 948 762 105</a>
              <p className="contact-method__note">Po–Pia 9:00 – 17:00</p>
            </div>
            <div className="contact-method">
              <div className="contact-method__icon">💬</div>
              <h3 className="contact-method__title">Online chat</h3>
              <span className="contact-method__val">Live chat</span>
              <p className="contact-method__note">Dostupný v aplikácii</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section section--cream">
        <div className="container" style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="section-header" style={{ textAlign: 'center' }}>
            <p className="eyebrow">Formulár</p>
            <h2 className="section-heading">Napíšte nám správu</h2>
          </div>
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Meno *</label>
                <input type="text" placeholder="Vaše meno" className="form-input" required />
              </div>
              <div className="form-group">
                <label>Priezvisko *</label>
                <input type="text" placeholder="Vaše priezvisko" className="form-input" required />
              </div>
            </div>
            <div className="form-group">
              <label>IČO (voliteľné)</label>
              <input type="text" placeholder="12345678" className="form-input" />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" placeholder="vas@email.sk" className="form-input" required />
            </div>
            <div className="form-group">
              <label>Správa *</label>
              <textarea
                placeholder="Napíšte vašu správu alebo otázku..."
                className="form-input form-textarea"
                rows={6}
                required
              />
            </div>
            <div className="form-group form-group--checkbox">
              <input type="checkbox" id="gdpr2" required />
              <label htmlFor="gdpr2">
                Súhlasím so spracovaním osobných údajov podľa GDPR *
              </label>
            </div>
            <div className="form-group">
              <div className="recaptcha-ph">
                <span>☑ Nie som robot</span>
                <small>reCAPTCHA — placeholder</small>
              </div>
            </div>
            <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
              POSLAŤ SPRÁVU
            </button>
          </form>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <p className="eyebrow">Lokalita</p>
            <h2 className="section-heading">Kde nás nájdete</h2>
          </div>
          <div className="map-ph">
            <div className="map-ph__inner">
              <div className="map-ph__pin">📍</div>
              <p className="map-ph__text">Mapa — Google Maps embed</p>
              <p className="map-ph__dims">1200 × 500 px</p>
              <p className="map-ph__addr">Bratislava, Slovenská republika</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
