/**
 * Blogs Page - With actual images from data
 */

import { Link } from 'react-router-dom';
import { siteData } from '../data/data';
import PageBanner from '../components/PageBanner';

const Blogs = () => {
  return (
    <>
      <PageBanner title="Global Bus Charter Blog" />

      <section className="blogs-section pt-60 pb-60">
        <div className="container-fluid">
          <div className="text-center mb-40">
            <span className="section-tag">Our Blog</span>
            <h2 className="section-title">Latest News & Travel Tips</h2>
            <p className="section-subtitle">
              Stay informed with our latest articles on group travel, bus charter tips, and industry insights.
            </p>
          </div>
          <div className="blogs-grid">
            {siteData.blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  {post.image ? (
                    <img src={post.image} alt={post.title} loading="lazy" />
                  ) : (
                    <div className="placeholder-img blog-image-placeholder">
                      <span>{post.category}</span>
                    </div>
                  )}
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><CalendarIcon /> {new Date(post.date).toLocaleDateString()}</span>
                    <span><UserIcon /> {post.author}</span>
                  </div>
                  <h5 className="blog-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h5>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="read-more">
                    Read More <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="newsletter-section pt-60 pb-60 bg-light">
        <div className="container-fluid">
          <div className="newsletter-box">
            <div className="newsletter-content">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get the latest travel tips, special offers, and news delivered to your inbox.</p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button type="button" className="cus-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

// Icon Components
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default Blogs;