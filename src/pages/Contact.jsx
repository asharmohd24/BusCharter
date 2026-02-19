import { useState, useEffect, useRef } from 'react';
import { siteData } from '../data/data';
import PageBanner from '../components/PageBanner';
import useForm from '../hooks/useForm';
import { getRecaptchaToken } from '../utils/recaptcha';

// Complete country list (same as above)
const countries = [
  { code: 'US', dial: '+1', name: 'United States' },
  { code: 'GB', dial: '+44', name: 'United Kingdom' },
  { code: 'CA', dial: '+1', name: 'Canada' },
  { code: 'AU', dial: '+61', name: 'Australia' },
  { code: 'DE', dial: '+49', name: 'Germany' },
  { code: 'FR', dial: '+33', name: 'France' },
  { code: 'ES', dial: '+34', name: 'Spain' },
  { code: 'IT', dial: '+39', name: 'Italy' },
  { code: 'NL', dial: '+31', name: 'Netherlands' },
  { code: 'BE', dial: '+32', name: 'Belgium' },
  { code: 'SE', dial: '+46', name: 'Sweden' },
  { code: 'NO', dial: '+47', name: 'Norway' },
  { code: 'DK', dial: '+45', name: 'Denmark' },
  { code: 'FI', dial: '+358', name: 'Finland' },
  { code: 'CH', dial: '+41', name: 'Switzerland' },
  { code: 'AT', dial: '+43', name: 'Austria' },
  { code: 'IE', dial: '+353', name: 'Ireland' },
  { code: 'NZ', dial: '+64', name: 'New Zealand' },
  { code: 'SG', dial: '+65', name: 'Singapore' },
  { code: 'AE', dial: '+971', name: 'United Arab Emirates' },
  { code: 'SA', dial: '+966', name: 'Saudi Arabia' },
  { code: 'QA', dial: '+974', name: 'Qatar' },
  { code: 'KW', dial: '+965', name: 'Kuwait' },
  { code: 'IN', dial: '+91', name: 'India' },
  { code: 'PK', dial: '+92', name: 'Pakistan' },
  { code: 'BD', dial: '+880', name: 'Bangladesh' },
  { code: 'LK', dial: '+94', name: 'Sri Lanka' },
  { code: 'NP', dial: '+977', name: 'Nepal' },
  { code: 'CN', dial: '+86', name: 'China' },
  { code: 'JP', dial: '+81', name: 'Japan' },
  { code: 'KR', dial: '+82', name: 'South Korea' },
  { code: 'MY', dial: '+60', name: 'Malaysia' },
  { code: 'TH', dial: '+66', name: 'Thailand' },
  { code: 'VN', dial: '+84', name: 'Vietnam' },
  { code: 'PH', dial: '+63', name: 'Philippines' },
  { code: 'ID', dial: '+62', name: 'Indonesia' },
  { code: 'TR', dial: '+90', name: 'Turkey' },
  { code: 'EG', dial: '+20', name: 'Egypt' },
  { code: 'ZA', dial: '+27', name: 'South Africa' },
  { code: 'NG', dial: '+234', name: 'Nigeria' },
  { code: 'KE', dial: '+254', name: 'Kenya' },
  { code: 'MA', dial: '+212', name: 'Morocco' },
  { code: 'BR', dial: '+55', name: 'Brazil' },
  { code: 'AR', dial: '+54', name: 'Argentina' },
  { code: 'MX', dial: '+52', name: 'Mexico' },
  { code: 'CO', dial: '+57', name: 'Colombia' },
  { code: 'CL', dial: '+56', name: 'Chile' },
  { code: 'PE', dial: '+51', name: 'Peru' },
  { code: 'RU', dial: '+7', name: 'Russia' },
  { code: 'UA', dial: '+380', name: 'Ukraine' },
  { code: 'PL', dial: '+48', name: 'Poland' },
  { code: 'CZ', dial: '+420', name: 'Czech Republic' },
  { code: 'HU', dial: '+36', name: 'Hungary' },
  { code: 'RO', dial: '+40', name: 'Romania' },
  { code: 'BG', dial: '+359', name: 'Bulgaria' },
  { code: 'GR', dial: '+30', name: 'Greece' },
  { code: 'PT', dial: '+351', name: 'Portugal' },
  { code: 'IL', dial: '+972', name: 'Israel' },
  { code: 'JO', dial: '+962', name: 'Jordan' },
  { code: 'LB', dial: '+961', name: 'Lebanon' },
];

// CountryCodeSelect component (same as above)
const CountryCodeSelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);

  const selectedCountry = countries.find(c => c.code === value) || countries[0];

  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.dial.includes(search) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="country-code-select" ref={dropdownRef} style={{ position: 'relative' }}>
      <div
        className="form-control country-select-trigger"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          paddingRight: '30px',
          background: 'var(--color-white)'
        }}
      >
        <span>{selectedCountry.dial}</span>
        <i className="fa fa-chevron-down" style={{ fontSize: '12px', color: 'var(--color-text-light)' }} />
      </div>

      {isOpen && (
        <div
          className="country-dropdown"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--color-white)',
            border: '1px solid var(--color-gray)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 10,
            marginTop: '4px',
            maxHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            minWidth: '200px',
            width: 'auto'
          }}
        >
          <div style={{ padding: '8px', borderBottom: '1px solid var(--color-gray)' }}>
            <input
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control"
              style={{ padding: '8px 12px', fontSize: '14px' }}
              autoFocus
            />
          </div>
          <div style={{ overflowY: 'auto', maxHeight: '250px' }}>
            {filteredCountries.map(country => (
              <div
                key={country.code}
                className={`country-option ${value === country.code ? 'active' : ''}`}
                onClick={() => {
                  onChange(country.code);
                  setIsOpen(false);
                  setSearch('');
                }}
                style={{
                  padding: '10px 12px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: value === country.code ? 'var(--color-light)' : 'transparent',
                  borderBottom: '1px solid var(--color-gray)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-light)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = value === country.code ? 'var(--color-light)' : 'transparent'}
              >
                <span>
                  <span style={{ marginRight: '8px' }}>{country.name}</span>
                  <span style={{ color: 'var(--color-text-light)' }}>{country.code}</span>
                </span>
                <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{country.dial}</span>
              </div>
            ))}
            {filteredCountries.length === 0 && (
              <div style={{ padding: '12px', textAlign: 'center', color: 'var(--color-text-light)' }}>
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  const [phoneCountry, setPhoneCountry] = useState('US');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const validationRules = {
    name: { required: true, minLength: 2 },
    email: { required: true, email: true },
    message: { required: true, minLength: 10 },
  };

  const {
    values,
    errors,
    handleChange,
    handleHoneypotChange,
    resetForm,
  } = useForm(initialValues, validationRules);

  // Detect user's country
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_code && countries.some(c => c.code === data.country_code)) {
          setPhoneCountry(data.country_code);
          return;
        }
      } catch (error) {
        console.log('ipapi failed, using fallback');
      }

      const lang = navigator.language || navigator.userLanguage;
      if (lang) {
        const parts = lang.split('-');
        if (parts.length > 1) {
          const countryCode = parts[1].toUpperCase();
          if (countries.some(c => c.code === countryCode)) {
            setPhoneCountry(countryCode);
            return;
          }
        }
      }
      setPhoneCountry('US');
    };

    detectCountry();
  }, []);

  const handleCountryChange = (code) => {
    setPhoneCountry(code);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if there are validation errors from useForm
    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    let token = '';
    try {
      token = await getRecaptchaToken('contact_form');
    } catch (error) {
      setSubmitStatus({ success: false, message: 'reCAPTCHA verification failed. Please refresh and try again.' });
      setIsSubmitting(false);
      return;
    }

    const selectedCountry = countries.find(c => c.code === phoneCountry) || countries[0];
    const fullPhone = `${selectedCountry.dial} ${phoneNumber}`;

    const payload = {
      form_type: 'contact',
      recaptcha_token: token,
      name: values.name,
      email: values.email,
      fullPhone,
      subject: values.subject,
      message: values.message,
      website: '', // honeypot
    };

    try {
      const response = await fetch(import.meta.env.VITE_FORM_HANDLER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      setSubmitStatus(result);
      if (result.success) {
        resetForm();
        setPhoneNumber('');
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageBanner title="Contact Us" />

      {/* Contact Info Section */}
      <section className="contact-section pt-60 pb-60">
        <div className="container-fluid">
          <div className="contact-info-grid">
            <div className="contact-block">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                  <path d="M20 0C11.7157 0 5 6.71573 5 15C5 25.5 20 40 20 40C20 40 35 25.5 35 15C35 6.71573 28.2843 0 20 0ZM20 22C16.134 22 13 18.866 13 15C13 11.134 16.134 8 20 8C23.866 8 27 11.134 27 15C27 18.866 23.866 22 20 22Z" fill="white"/>
                </svg>
              </div>
              <h6>Our Location</h6>
              <p>{siteData.contact.address.full}</p>
            </div>

            <div className="contact-block">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                  <path d="M36.616 29.5174L31.616 24.5174C30.134 23.0354 27.634 23.1674 26.334 24.8014L24.6 27.1174C24.334 27.5174 23.784 27.6674 23.334 27.4674C21.366 26.4674 19.166 25.0674 17.066 22.9674C14.966 20.8674 13.566 18.6674 12.566 16.6994C12.366 16.2494 12.516 15.6994 12.916 15.4334L15.234 14.6994C16.866 13.3994 17 10.8994 15.516 9.41744L10.516 4.41744C9.03401 2.93544 6.53401 3.0674 5.23401 4.7014L2.36601 8.3174C0.966006 10.0674 0.334006 12.3014 0.666006 14.4854C1.46601 19.6194 4.53401 25.5014 10.034 30.9994C15.534 36.4994 21.416 39.5674 26.55 40.3674C28.734 40.6994 30.966 40.0674 32.716 38.6674L36.334 35.7994C37.966 34.4994 38.1 31.9994 36.616 29.5174Z" fill="white"/>
                </svg>
              </div>
              <h6>Contact</h6>
              <a href={`tel:${siteData.contact.phoneFormatted}`}>{siteData.contact.phone}</a>
              <a href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a>
            </div>

            <div className="contact-block">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                  <path d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM20 36C11.178 36 4 28.822 4 20C4 11.178 11.178 4 20 4C28.822 4 36 11.178 36 20C36 28.822 28.822 36 20 36Z" fill="white"/>
                  <path d="M22 10H18V22H30V18H22V10Z" fill="white"/>
                </svg>
              </div>
              <h6>Working Hours</h6>
              <p>{siteData.contact.workingHours.weekdays}</p>
              <p>{siteData.contact.workingHours.weekend}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section pb-60">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-32">
                <span className="section-tag">Get In Touch</span>
                <h2 className="section-title">Send Us A Message</h2>
                <p className="section-subtitle">
                  Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="form-section">
                <form onSubmit={handleFormSubmit} noValidate>
                  {/* Honeypot */}
                  <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      onChange={handleHoneypotChange}
                    />
                  </div>

                  <div className="row row-gap-4">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          value={values.name}
                          onChange={handleChange}
                          placeholder="Your name"
                        />
                        {errors.name && <span className="invalid-feedback">{errors.name}</span>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          value={values.email}
                          onChange={handleChange}
                          placeholder="Your email"
                        />
                        {errors.email && <span className="invalid-feedback">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Phone with country code dropdown */}
                    <div className="col-md-6">
                      <div className="input-block">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'stretch' }}>
                          <div style={{ flexShrink: 0, width: '110px' }}>
                            <CountryCodeSelect
                              value={phoneCountry}
                              onChange={handleCountryChange}
                            />
                          </div>
                          <div style={{ flex: 1 }}>
                            <input
                              type="tel"
                              id="phoneNumber"
                              name="phoneNumber"
                              className="form-control"
                              value={phoneNumber}
                              onChange={handlePhoneNumberChange}
                              placeholder="Phone number"
                              style={{ height: '100%' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="input-block">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          value={values.subject}
                          onChange={handleChange}
                          placeholder="Message subject"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-block">
                        <label htmlFor="message">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                          value={values.message}
                          onChange={handleChange}
                          placeholder="Your message..."
                          rows="5"
                        />
                        {errors.message && <span className="invalid-feedback">{errors.message}</span>}
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="cus-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>

                  {submitStatus && (
                    <div className={`alert ${submitStatus.success ? 'alert-success' : 'alert-danger'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container-fluid">
          <div className="map-wrapper">
            <iframe
              src={siteData.maps.embedUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;