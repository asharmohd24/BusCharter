/**
 * ContactForm Component
 * ======================
 * Secure contact form with reCAPTCHA v3 protection
 */

import { useCallback } from 'react';
import useForm from '../hooks/useForm';
import { siteData } from '../data/data';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const validationRules = {
    name: { required: true, minLength: 2, maxLength: 100 },
    email: { required: true, email: true },
    phone: { phone: true },
    message: { required: true, minLength: 10, maxLength: 1000 },
  };

  const {
    values,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleHoneypotChange,
    handleSubmit,
  } = useForm(initialValues, validationRules);

  const onSubmit = useCallback(async (formData) => {
    // In a real application, you would send this to your API
    const apiUrl = import.meta.env.VITE_API_URL || '';
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '/api/contact';

    // For demo purposes, simulate an API call
    console.log('Form data submitted:', formData);
    
    // Simulate API response
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In production, make actual API call:
    // const response = await fetch(`${apiUrl}${endpoint}`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    // if (!response.ok) throw new Error('Failed to submit');
    // return await response.json();

    return { success: true, message: 'Thank you! Your message has been sent.' };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(onSubmit, { action: 'contact_form' });
  };

  return (
    <form className="contact-form" onSubmit={handleFormSubmit} noValidate>
      <div className="row row-gap-4">
        {/* Honeypot field - hidden from users, visible to bots */}
        <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            onChange={handleHoneypotChange}
          />
        </div>

        <div className="col-md-6">
          <div className="input-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path
                d="M10.0002 10.917C12.5316 10.917 14.5835 8.86507 14.5835 6.33366C14.5835 3.80224 12.5316 1.75033 10.0002 1.75033C7.46878 1.75033 5.41687 3.80224 5.41687 6.33366C5.41687 8.86507 7.46878 10.917 10.0002 10.917Z"
                fill="#F59E0B"
              />
              <path
                d="M10.0001 13.0003C5.94673 13.0003 2.63672 16.0179 2.63672 19.7503H17.3634C17.3634 16.0179 14.0534 13.0003 10.0001 13.0003Z"
                fill="#F59E0B"
              />
            </svg>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              value={values.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path
                d="M18.2422 3.38574H1.75781C0.786602 3.38574 0 4.17723 0 5.14355V15.6904C0 16.6625 0.792383 17.4482 1.75781 17.4482H18.2422C19.2053 17.4482 20 16.6658 20 15.6904V5.14355C20 4.17895 19.2165 3.38574 18.2422 3.38574ZM17.996 4.55762C17.6369 4.91484 11.4564 11.0628 11.243 11.2751C10.9109 11.6071 10.4695 11.7899 10 11.7899C9.53047 11.7899 9.08906 11.6071 8.75594 11.274C8.61242 11.1312 2.50012 5.05113 2.00398 4.55762H17.996ZM1.17188 15.4519V5.38281L6.23586 10.4201L1.17188 15.4519ZM2.00473 16.2764L7.06672 11.2466L7.9284 12.1037C8.48176 12.6571 9.21746 12.9618 10 12.9618C10.7825 12.9618 11.5182 12.6571 12.0705 12.1048L12.9333 11.2466L17.9953 16.2764H2.00473ZM18.8281 15.4519L13.7641 10.4201L18.8281 5.38281V15.4519Z"
                fill="#F59E0B"
              />
            </svg>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              value={values.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path
                d="M18.308 15.2587L15.808 12.7587C15.067 12.0177 13.817 12.0837 13.167 12.9007L12.3 14.0587C12.167 14.2587 11.892 14.3337 11.667 14.2337C10.683 13.7337 9.583 13.0337 8.533 11.9837C7.483 10.9337 6.783 9.83371 6.283 8.84971C6.183 8.62471 6.258 8.34971 6.458 8.21671L7.617 7.34971C8.433 6.69971 8.5 5.44971 7.758 4.70871L5.258 2.20871C4.517 1.46771 3.267 1.5337 2.617 2.3507L1.183 4.1587C0.483 5.0337 0.167 6.15071 0.333 7.24271C0.733 9.80971 2.267 12.7507 5.017 15.4997C7.767 18.2497 10.708 19.7837 13.275 20.1837C14.367 20.3497 15.483 20.0337 16.358 19.3337L18.167 17.8997C18.983 17.2497 19.05 15.9997 18.308 15.2587Z"
                fill="#F59E0B"
              />
            </svg>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone (optional)"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              value={values.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>
        </div>

        <div className="col-lg-12">
          <div className="input-block">
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              value={values.message}
              onChange={handleChange}
              required
              rows={5}
            />
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button type="submit" className="cus-btn border-0" disabled={isSubmitting}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="16" viewBox="0 0 36 16" fill="none">
            <path
              d="M6.7534 9.57432L5.95634 10.384C5.75039 10.5932 5.75039 10.9325 5.95634 11.1416C6.05928 11.2462 6.19428 11.2985 6.32921 11.2985C6.46414 11.2985 6.59914 11.2462 6.70207 11.1416L7.49914 10.3319C7.70508 10.1227 7.70508 9.78346 7.49914 9.57432C7.29326 9.3651 6.95935 9.3651 6.7534 9.57432Z"
              fill="white"
            />
            <path
              d="M28.6835 9.57432C28.4776 9.3651 28.1437 9.3651 27.9378 9.57432C27.7318 9.78353 27.7318 10.1227 27.9378 10.3319L28.7348 11.1416C28.8378 11.2462 28.9728 11.2985 29.1077 11.2985C29.2426 11.2985 29.3776 11.2462 29.4806 11.1416C29.6865 10.9324 29.6865 10.5932 29.4806 10.384L28.6835 9.57432Z"
              fill="white"
            />
            <path
              d="M35.0993 7.22752C33.8212 6.27224 31.2915 4.66974 28.7091 4.66974C28.1318 4.66974 27.556 4.73759 27.0032 4.84652L23.1609 3.34467C20.5619 2.32909 17.7313 2.00602 14.9753 2.41045L0.451969 4.54102C0.192516 4.57909 0 4.80495 0 5.07124V8.54802C0 9.51952 0.609539 10.3786 1.51678 10.6858L3.5325 11.3684C3.95677 12.7509 5.22851 13.7572 6.72729 13.7572C7.97034 13.7572 9.05639 13.0645 9.63316 12.0395H25.8031C26.3799 13.0645 27.466 13.7572 28.709 13.7572C29.9521 13.7572 31.0381 13.0645 31.6149 12.0395H34.3453C35.2577 12.0395 35.9999 11.2854 35.9999 10.3587V9.04131C36 8.32702 35.6633 7.64902 35.0993 7.22752Z"
              fill="white"
            />
          </svg>
          <span className="text">{isSubmitting ? 'Sending...' : 'Submit'}</span>
        </button>

        {submitStatus && (
          <div
            className={`alert mt-3 ${
              submitStatus.success ? 'alert-success' : 'alert-danger'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <p className="mt-3 text-muted small">
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>{' '}
          apply.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
