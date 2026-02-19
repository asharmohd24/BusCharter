/**
 * About Page
 * ===========
 * Company information, team, and history
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/data';
import PageBanner from '../components/PageBanner';

const About = () => {
  return (
    <>
      <PageBanner title="About Us" />

      {/* About Section */}
      <section className="about-section pt-80 pb-80">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image wow fadeInLeft">
                <img src="/assets/images/abtus1.png" alt="About Us" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <span className="section-tag wow fadeInUp">Who We Are</span>
                <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                  {siteData.about.subtitle}
                </h2>
                <p className="about-text wow fadeInUp" data-wow-delay="0.3s">
                  {siteData.about.description}
                </p>
                <p className="about-text wow fadeInUp" data-wow-delay="0.4s">
                  We pride ourselves on delivering exceptional customer service and maintaining a fleet of well-maintained, reliable vehicles. Whether you need a car for business, pleasure, or everyday use, we have the perfect solution for you.
                </p>
                <Link to="/contact" className="cus-btn wow fadeInUp" data-wow-delay="0.5s">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section pt-80 pb-80 bg-dark">
        <div className="container-fluid">
          <div className="row">
            {siteData.about.stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="stat-block text-center wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                  <span className="stat-number text-primary">{stat.number}</span>
                  <span className="stat-label text-white">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section pt-80 pb-80">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center mb-48">
              <span className="section-tag wow fadeInUp">How It Works</span>
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Our Simple Process
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {siteData.whyChooseUs.map((item, index) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="whychoose-block wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className="icon">
                    <span className="step-number">{index + 1}</span>
                  </div>
                  <div className="text-content">
                    <h5 className="title fw-600 mb-12">{item.title}</h5>
                    <p className="subtitle">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="team-section pt-80 pb-80 bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center mb-48">
              <span className="section-tag wow fadeInUp">Our Team</span>
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Meet The Experts
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {siteData.about.team.map((member, index) => (
              <div key={member.id} className="col-lg-4 col-md-6">
                <div className="team-card wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-info">
                    <h5 className="name">{member.name}</h5>
                    <span className="role">{member.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="faq-section pt-80 pb-80">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center mb-48">
              <span className="section-tag wow fadeInUp">FAQ</span>
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {siteData.faqs.map((faq, index) => (
                <FAQItem key={faq.id} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section as a box */}
<section className="pt-80 pb-80">
  <div className="container-fluid">
    <div 
      className="cta-box-wrapper bg-primary"
      style={{
        borderRadius: '16px',
        padding: '40px',
        maxWidth: '66.666%',
        margin: '0 auto'
      }}
    >
      {/* Row with no gutters (override default negative margins) */}
      <div className="row align-items-center" style={{ margin: 0 }}>
        {/* Left column - text */}
        <div className="col-lg-8" style={{ padding: '0 12px 0 0' }}>
          <h2 className="cta-title text-white wow fadeInUp">
            Ready to Experience Our Services?
          </h2>
          <p className="cta-text text-white wow fadeInUp" data-wow-delay="0.2s">
            Contact us today to learn more about how we can help you.
          </p>
        </div>

        {/* Right column - button */}
        <div 
          className="col-lg-4 text-end" 
          style={{ 
            padding: '0 0 0 12px'   /* keep left padding for spacing between columns */
          }}
        >
          <Link 
            to="/booking" 
            className="cus-btn btn-dark-cta wow fadeInUp" 
            data-wow-delay="0.3s"
            style={{ 
              marginRight: '0',      /* remove any right margin */
              display: 'inline-block' 
            }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

// FAQ Item Component with Accordion
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-block wow fadeInUp ${isOpen ? 'active' : ''}`} data-wow-delay={`${index * 0.1}s`}>
      <div className="faq-title" onClick={() => setIsOpen(!isOpen)}>
        <h6>{faq.question}</h6>
        <span className="icon">
          <i className={`fa fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </span>
      </div>
      <div className="faq-desc" style={{ display: isOpen ? 'block' : 'none' }}>
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default About;
