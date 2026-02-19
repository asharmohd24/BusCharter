import { useState, useEffect, useRef } from 'react';
import PageBanner from '../components/PageBanner';
import { getRecaptchaToken } from '../utils/recaptcha';

// Complete country list
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

// Searchable country code dropdown component
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
        <span>
          <span style={{ marginRight: '8px' }}>{selectedCountry.dial}</span>
          <span style={{ color: 'var(--color-text-light)' }}>{selectedCountry.code}</span>
        </span>
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

const Booking = () => {
  const [activeTab, setActiveTab] = useState('one-way');
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: '',
    passengers: '',
    name: '',
    email: '',
    phoneCountry: 'US',
    phoneNumber: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);
  const [detectedCountry, setDetectedCountry] = useState('US');
  const [countryDetected, setCountryDetected] = useState(false);

  const pickupRef = useRef(null);
  const dropoffRef = useRef(null);
  const autocompletePickup = useRef(null);
  const autocompleteDropoff = useRef(null);

  const today = new Date().toISOString().split('T')[0];

  // Detect user's country
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_code) {
          setDetectedCountry(data.country_code);
          setFormData(prev => ({ ...prev, phoneCountry: data.country_code }));
          setCountryDetected(true);
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
            setDetectedCountry(countryCode);
            setFormData(prev => ({ ...prev, phoneCountry: countryCode }));
            setCountryDetected(true);
            return;
          }
        }
      }
      setDetectedCountry('US');
      setFormData(prev => ({ ...prev, phoneCountry: 'US' }));
      setCountryDetected(true);
    };

    detectCountry();
  }, []);

  // Load Google Maps and setup autocomplete
  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      console.error('Google Maps API key is missing.');
      setApiKeyMissing(true);
      return;
    }

    if (!countryDetected) return;

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initAutocomplete;
      script.onerror = () => {
        console.error('Failed to load Google Maps API');
        setApiKeyMissing(true);
      };
      document.head.appendChild(script);
    } else {
      initAutocomplete();
    }

    function initAutocomplete() {
      const options = {
        types: ['geocode'],
        componentRestrictions: { country: detectedCountry.toLowerCase() },
        fields: ['formatted_address', 'geometry', 'name']
      };

      if (pickupRef.current && !autocompletePickup.current) {
        autocompletePickup.current = new window.google.maps.places.Autocomplete(pickupRef.current, options);
        autocompletePickup.current.addListener('place_changed', () => {
          const place = autocompletePickup.current.getPlace();
          if (place.formatted_address) {
            setFormData(prev => ({ ...prev, pickupLocation: place.formatted_address }));
          }
        });
      }

      if (dropoffRef.current && !autocompleteDropoff.current) {
        autocompleteDropoff.current = new window.google.maps.places.Autocomplete(dropoffRef.current, options);
        autocompleteDropoff.current.addListener('place_changed', () => {
          const place = autocompleteDropoff.current.getPlace();
          if (place.formatted_address) {
            setFormData(prev => ({ ...prev, dropoffLocation: place.formatted_address }));
          }
        });
      }
    }

    return () => {
      document.querySelectorAll('.pac-container').forEach(el => el.remove());

      if (autocompletePickup.current) {
        window.google.maps.event.clearInstanceListeners(autocompletePickup.current);
        autocompletePickup.current = null;
      }
      if (autocompleteDropoff.current) {
        window.google.maps.event.clearInstanceListeners(autocompleteDropoff.current);
        autocompleteDropoff.current = null;
      }
    };
  }, [countryDetected]);

  useEffect(() => {
    if (formData.pickupDate && formData.returnDate && formData.returnDate < formData.pickupDate) {
      setFormData(prev => ({ ...prev, returnDate: '' }));
    }
  }, [formData.pickupDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'pickupDate') {
      if (value && value < today) {
        setFormData(prev => ({ ...prev, pickupDate: today }));
        return;
      }
    }
    if (name === 'returnDate') {
      if (value && formData.pickupDate && value < formData.pickupDate) {
        setFormData(prev => ({ ...prev, returnDate: '' }));
        return;
      }
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneNumberChange = (e) => {
    setFormData(prev => ({ ...prev, phoneNumber: e.target.value }));
  };

  const handleCountryChange = (code) => {
    setFormData(prev => ({ ...prev, phoneCountry: code }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    let token = '';
    try {
      token = await getRecaptchaToken('booking_form');
    } catch (error) {
      setSubmitStatus({ success: false, message: 'reCAPTCHA verification failed. Please refresh and try again.' });
      setIsSubmitting(false);
      return;
    }

    const selectedCountry = countries.find(c => c.code === formData.phoneCountry) || countries[0];
    const fullPhone = `${selectedCountry.dial} ${formData.phoneNumber}`;

    const payload = {
      form_type: 'booking',
      recaptcha_token: token,
      name: formData.name,
      email: formData.email,
      fullPhone,
      pickupLocation: formData.pickupLocation,
      dropoffLocation: formData.dropoffLocation,
      pickupDate: formData.pickupDate,
      pickupTime: formData.pickupTime,
      returnDate: formData.returnDate,
      returnTime: formData.returnTime,
      passengers: formData.passengers,
      tripType: activeTab,
      notes: formData.notes,
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
        // Reset form
        setFormData({
          pickupLocation: '',
          dropoffLocation: '',
          pickupDate: '',
          pickupTime: '',
          returnDate: '',
          returnTime: '',
          passengers: '',
          name: '',
          email: '',
          phoneCountry: formData.phoneCountry,
          phoneNumber: '',
          notes: '',
        });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageBanner title="Book Your Ride" />

      <section className="booking-form-section pt-60 pb-60">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="booking-form-wrapper">
                <div className="booking-form-header">
                  <h3>Book Your Transportation</h3>
                  <p>Fill in the details below to request a booking</p>
                </div>

                {apiKeyMissing && import.meta.env.DEV && (
                  <div className="alert alert-danger" style={{ marginBottom: '20px' }}>
                    <strong>Configuration Error:</strong> Google Maps API key is missing.
                  </div>
                )}

                <div className="booking-tabs">
                  <button
                    type="button"
                    className={`booking-tab ${activeTab === 'one-way' ? 'active' : ''}`}
                    onClick={() => setActiveTab('one-way')}
                  >
                    One Way
                  </button>
                  <button
                    type="button"
                    className={`booking-tab ${activeTab === 'round-trip' ? 'active' : ''}`}
                    onClick={() => setActiveTab('round-trip')}
                  >
                    Round Trip
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="booking-form-grid">
                    {/* Pickup Location */}
                    <div className="form-group">
                      <label>Pickup Location *</label>
                      <div className="input-icon"><i className="fa fa-map-marker-alt"></i></div>
                      <input
                        type="text"
                        name="pickupLocation"
                        ref={pickupRef}
                        className="form-control"
                        placeholder="Enter pickup address"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                      />
                    </div>

                    {/* Dropoff Location */}
                    <div className="form-group">
                      <label>Drop-off Location *</label>
                      <div className="input-icon"><i className="fa fa-map-marker"></i></div>
                      <input
                        type="text"
                        name="dropoffLocation"
                        ref={dropoffRef}
                        className="form-control"
                        placeholder="Enter drop-off address"
                        value={formData.dropoffLocation}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                      />
                    </div>

                    {/* Pickup Date */}
                    <div className="form-group">
                      <label>Pickup Date *</label>
                      <div className="date-time-wrapper">
                        <input
                          type="date"
                          name="pickupDate"
                          className="form-control"
                          value={formData.pickupDate}
                          onChange={handleChange}
                          min={today}
                          required
                        />
                        <span className="date-time-icon">
                          <i className="fa fa-calendar"></i>
                        </span>
                      </div>
                    </div>

                    {/* Pickup Time */}
                    <div className="form-group">
                      <label>Pickup Time *</label>
                      <div className="date-time-wrapper">
                        <input
                          type="time"
                          name="pickupTime"
                          className="form-control"
                          value={formData.pickupTime}
                          onChange={handleChange}
                          required
                        />
                        <span className="date-time-icon">
                          <i className="fa fa-clock"></i>
                        </span>
                      </div>
                    </div>

                    {/* Return fields for round trip */}
                    {activeTab === 'round-trip' && (
                      <>
                        <div className="form-group">
                          <label>Return Date *</label>
                          <div className="date-time-wrapper">
                            <input
                              type="date"
                              name="returnDate"
                              className="form-control"
                              value={formData.returnDate}
                              onChange={handleChange}
                              min={formData.pickupDate || today}
                              required
                            />
                            <span className="date-time-icon">
                              <i className="fa fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Return Time *</label>
                          <div className="date-time-wrapper">
                            <input
                              type="time"
                              name="returnTime"
                              className="form-control"
                              value={formData.returnTime}
                              onChange={handleChange}
                              required
                            />
                            <span className="date-time-icon">
                              <i className="fa fa-clock"></i>
                            </span>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Passengers */}
                    <div className="form-group full-width">
                      <label>Number of Passengers</label>
                      <input
                        type="number"
                        name="passengers"
                        className="form-control"
                        placeholder="Enter number (e.g., 4)"
                        value={formData.passengers}
                        onChange={handleChange}
                        min="1"
                      />
                    </div>

                    {/* Name */}
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Phone with country code dropdown */}
                    <div className="form-group full-width">
                      <label>Phone Number *</label>
                      <div className="phone-input-row">
                        <div className="country-select-wrapper">
                          <CountryCodeSelect
                            value={formData.phoneCountry}
                            onChange={handleCountryChange}
                          />
                        </div>
                        <div className="phone-number-wrapper">
                          <input
                            type="tel"
                            name="phoneNumber"
                            className="form-control"
                            placeholder="Phone number"
                            value={formData.phoneNumber}
                            onChange={handlePhoneNumberChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Special requests */}
                    <div className="form-group full-width">
                      <label>Special Requests</label>
                      <textarea
                        name="notes"
                        className="form-control"
                        placeholder="Any special requirements..."
                        value={formData.notes}
                        onChange={handleChange}
                        rows="3"
                      />
                    </div>

                    {/* Submit button */}
                    <div className="full-width">
                      <button
                        type="submit"
                        className="cus-btn booking-submit-btn"
                        disabled={isSubmitting}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M8 6v6"/><path d="M16 6v6"/><path d="M2 12h20"/>
                          <path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6"/>
                          <path d="M4 12v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5"/>
                          <circle cx="7.5" cy="18.5" r="1.5"/><circle cx="16.5" cy="18.5" r="1.5"/>
                        </svg>
                        {isSubmitting ? 'Submitting...' : 'Request Booking'}
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
    </>
  );
};

export default Booking;