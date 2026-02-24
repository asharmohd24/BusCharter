/**
 * Home Page - Exact Match to Design Images
 * Hero like Image 1, FAQ like Image 2, CTA like Image 3
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/data';
import { useSEO } from '../hooks/useSEO';
import ctaImage from '/assets/images/cta.png';
import faqImage from '/assets/images/faq.png';
import aboutImage from '/assets/images/abtus.png'
const Home = () => {
  useSEO({
    title: 'Premium Group Transportation & Bus Rentals',
    description: siteData.siteDescription,
    keywords: siteData.seo.keywords,
  });
  const [activeTab, setActiveTab] = useState('transfers');
  const [activeFaq, setActiveFaq] = useState(1);

  const faqs = [
    { id: 1, question: "How do I book a bus charter?", answer: "You can book a bus through our website by selecting your trip details, dates, group size, and preferred vehicle type." },
    { id: 2, question: "What types of buses do you offer?", answer: "We offer a range of vehicles including luxury coaches, minibuses, party buses, and school buses to accommodate groups of all sizes." },
    { id: 3, question: "How far in advance should I book?", answer: "We recommend booking 2-4 weeks in advance for most trips, and 3-6 months for weddings and large events." },
  ];

  return (
    <>
      {/* ============================================
          HERO SECTION - Image 1 Style
      ============================================ */}
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__content">
            <div className="hero__tag">
              <span className="line"></span>
              <span className="text">CHARTER THE BEST</span>
              <span className="line"></span>
            </div>

            <h1 className="hero__title">
              <span className="highlight">Travel</span> Together.<br />
              <span className="underline">Arrive</span> in Style.
            </h1>

            <p className="hero__text">
              Whether you're planning a corporate retreat, wedding celebration, or school trip, we've got you covered. From luxury coaches to reliable minibuses, our charter service is built for comfort, safety, and convenience. Book your group transportation in just a few clicks — no hassle, no worries.
            </p>

            <div className="hero__buttons">
              <Link to="/booking" className="btn btn--primary">
                <BusIcon />
                <span>Book Now</span>
              </Link>
              <Link to="/our-fleet" className="btn btn--outline">
                <BusIcon />
                <span>View Our Fleets</span>
              </Link>
            </div>
          </div>

          <div className="hero__image">
            <div className="hero__image-bg"></div>
            <div className="hero__image-wrapper">
              <img src="/assets/images/herobus.png" alt="Hero Vehicle" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <div className="section__tag"><span className="line"></span><span>WHAT WE OFFER</span><span className="line"></span></div>
            <h2 className="section__title">Our Premium Services</h2>
          </div>
          <div className="services-grid">
            {siteData.services.map((service) => (
              <Link to={service.link} key={service.id} className="service-card">
                <div className="service-card__top">
                  <div className="service-card__icon"><ServiceIcon type={service.icon} /></div>
                  <div className="service-card__arrow"><i className="fa fa-arrow-right"></i></div>
                </div>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section section--gray">
        <div className="section__container">
          <div className="about-grid">
            <div className="about-image"> <img src={aboutImage} alt="About Us" /></div>
            <div className="about-content">
              <div className="section__tag section__tag--left"><span className="line"></span><span>ABOUT US</span><span className="line"></span></div>
              <h2 className="section__title">{siteData.about.title}</h2>
              <p>{siteData.about.description}</p>
              <div className="stats-grid">
                {siteData.about.stats.map((stat, i) => (
                  <div key={i} className="stat"><span className="stat__number">{stat.number}</span><span className="stat__label">{stat.label}</span></div>
                ))}
              </div>
              <Link to="/about" className="btn btn--primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <div className="section__tag"><span className="line"></span><span>WHY CHOOSE US</span><span className="line"></span></div>
            <h2 className="section__title">How It Works</h2>
          </div>
          <div className="steps-grid">
            {siteData.whyChooseUs.map((item, i) => (
              <div key={item.id} className="step-card">
                <div className="step-card__number">{i + 1}</div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION - Image 2 Style (Full Width)
      ============================================ */}
      <section className="faq">
        <div className="faq__content">
          <div className="section__tag section__tag--left"><span className="line"></span><span>NEED HELP?</span><span className="line"></span></div>
          <h2 className="section__title">Frequently Asked <span className="highlight">Questions</span></h2>
          <p className="faq__subtitle">Find answers to common questions about our rental process, repair services, payments, and more.</p>

          <div className="faq__list">
            {faqs.map((faq) => (
              <div key={faq.id} className={`faq__item ${activeFaq === faq.id ? 'active' : ''}`}>
                <div className="faq__question" onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}>
                  <h5>{faq.question}</h5>
                  <i className={`fa fa-chevron-${activeFaq === faq.id ? 'up' : 'down'}`}></i>
                </div>
                <div className={`faq__answer ${activeFaq === faq.id ? 'faq__answer--active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="faq__image">
          <img src={faqImage} alt="FAQ illustration" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--gray">
        <div className="section__container">
          <div className="section__header">
            <div className="section__tag"><span className="line"></span><span>TESTIMONIALS</span><span className="line"></span></div>
            <h2 className="section__title">What Our Customers Say</h2>
          </div>
          <div className="testimonials-grid">
            {siteData.testimonials.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div className="stars">{[...Array(t.rating)].map((_, i) => <i key={i} className="fa fa-star"></i>)}</div>
                <p>"{t.text}"</p>
                <div className="author"><h6>{t.name}</h6><span>{t.role}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA BANNER - Image 3 Style (Full Width Rounded)
      ============================================ */}
      <section className="cta-wrapper">
        <div className="cta">
          <div className="cta__image">
            <img
              src={ctaImage}
              alt="Luxury coach bus ready for your group"
              className="cta__img"
            />
          </div>

          <div className="cta__content">
            <h2><span className="highlight">Book</span> Your Bus or Get a<br /><span className="highlight">Quote</span> in Minutes</h2>
            <p>Quick bookings, reliable service, and a fleet you can trust.</p>
            <div className="cta__buttons">
              <Link to="/booking" className="btn btn--primary"><BusIcon /><span>Get a Quote</span></Link>
              <Link to="/our-fleet" className="btn btn--outline-light"><BusIcon /><span>View Our Fleet</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <div className="section__tag"><span className="line"></span><span>OUR PARTNERS</span><span className="line"></span></div>
            <h2 className="section__title">Trusted By Leading Brands</h2>
          </div>
          <div className="brands-grid">
            {siteData.brands.map((b) => (
              <div key={b.id} className="brand-item">
                <img src={b.logo} alt={b.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const BusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 6v6" /><path d="M16 6v6" /><path d="M2 12h20" />
    <path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
    <path d="M4 12v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5" />
    <circle cx="7.5" cy="18.5" r="1.5" /><circle cx="16.5" cy="18.5" r="1.5" />
  </svg>
);

// Service icons that match the service type
const ServiceIcon = ({ type }) => {
  const icons = {
    // Corporate: Briefcase icon
    'corporate': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <line x1="6" y1="11" x2="6" y2="11" />
        <line x1="18" y1="11" x2="18" y2="11" />
      </svg>
    ),
    // Airport: Airplane icon
    'airport': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
    // Wedding: Heart with rings icon
    'wedding': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <circle cx="12" cy="13" r="2" />
        <path d="M12 11v-1" />
      </svg>
    ),
    // School: Graduation cap icon
    'school': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
    // Tour: Map/compass icon
    'tour': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
      </svg>
    ),
    // Event: Calendar icon
    'event': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
      </svg>
    ),
    // Sports: Trophy icon
    'sports': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
    // Shuttle: Bus icon (default)
    'shuttle': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6v6" /><path d="M16 6v6" /><path d="M2 12h20" />
        <path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
        <path d="M4 12v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5" />
        <circle cx="7.5" cy="18.5" r="1.5" /><circle cx="16.5" cy="18.5" r="1.5" />
      </svg>
    ),
    // Legacy icons mapping (for backwards compatibility with old data)
    'car-rental': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    'car-repair': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
    'maintenance': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    'emergency': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  };
  return icons[type] || icons['shuttle'];
};

export default Home;
