import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <div className="section-label">// CONTACT</div>
        <h2 className="section-title">
          CONTACT <span className="accent">INFORMATION</span>
        </h2>
        <div className="panel contact-panel fade-in">
          <div className="contact-info">
            <div className="contact-row contact-row-email">
              <span className="contact-icon" aria-label="email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="5" width="18" height="14" rx="3" fill="#00ffd0" fillOpacity="0.13"/>
                  <path d="M4 7l8 6 8-6" stroke="#00ffd0" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="contact-label">Email</span>
              <span className="contact-sep">|</span>
              <span className="contact-link contact-link-static">paoloperalta246@gmail.com</span>
            </div>
            <div className="contact-row contact-row-phone">
              <span className="contact-icon" aria-label="phone">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="3" fill="#00ffd0" fillOpacity="0.13"/>
                  <rect x="8" y="5" width="8" height="10" rx="2" fill="#00ffd0" fillOpacity="0.18"/>
                  <circle cx="12" cy="18" r="1.2" fill="#00ffd0"/>
                </svg>
              </span>
              <span className="contact-label">Contact Number</span>
              <span className="contact-sep">|</span>
              <span className="contact-link contact-link-static">0960 202 2065</span>
            </div>
            <div className="contact-note">
              Testers are welcome to send suggestions and recommendations!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
