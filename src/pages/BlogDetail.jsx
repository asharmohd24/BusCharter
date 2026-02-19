/**
 * Blog Detail Page - With actual images from data
 */

import { Link, useParams, Navigate } from 'react-router-dom';
import { siteData, getBlogBySlug } from '../data/data';
import PageBanner from '../components/PageBanner';

const BlogDetail = () => {
  const { slug } = useParams();
  
  // Find the blog post by slug, or default to first post if no slug
  const post = slug ? getBlogBySlug(slug) : siteData.blogPosts[0];
  
  // If post not found, redirect to blog listing
  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  // Get related posts
  const relatedPosts = post.relatedPosts 
    ? siteData.blogPosts.filter(p => post.relatedPosts.includes(p.id))
    : siteData.blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <>
      <PageBanner 
        title={post.title}
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blogs' },
          { name: post.title, path: null },
        ]}
      />

      <section className="blog-detail-section pt-80 pb-80">
        <div className="container-fluid">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <article className="blog-detail">
                {/* Featured Image */}
                <div className="blog-image mb-32">
                  {post.image ? (
                    <img src={post.image} alt={post.title} loading="lazy" />
                  ) : (
                    <div className="placeholder-img blog-detail-placeholder">
                      <span>{post.category}</span>
                    </div>
                  )}
                </div>

                {/* Meta Information */}
                <div className="blog-meta mb-24">
                  <span className="meta-item">
                    <CalendarIcon />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="meta-item">
                    <UserIcon />
                    {post.author}
                  </span>
                  <span className="meta-item">
                    <FolderIcon />
                    {post.category}
                  </span>
                </div>

                {/* Article Content */}
                <div className="blog-content">
                  {post.content ? (
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  ) : (
                    <>
                      <p className="lead">{post.excerpt}</p>
                      <p>
                        Whether you're organizing a corporate retreat or a family reunion, choosing the right transportation is key. 
                        At Global Bus Charter, we prioritize safety, comfort, and reliability. Our fleet undergoes daily inspections, 
                        and our drivers are trained to handle any road condition.
                      </p>
                      <h4>Key Points to Consider</h4>
                      <ul>
                        <li>Plan ahead and book early for the best vehicle selection</li>
                        <li>Consider your group size and luggage requirements</li>
                        <li>Ask about amenities like WiFi, restrooms, and entertainment</li>
                        <li>Verify the company's safety record and insurance coverage</li>
                      </ul>
                      <p>
                        By following these guidelines, you can ensure a smooth and enjoyable group travel experience.
                        Contact us today to learn more about our charter services.
                      </p>
                    </>
                  )}
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="blog-tags mt-32">
                    <span className="tag-label">
                      <TagIcon /> Tags:
                    </span>
                    {post.tags.map((tag, index) => (
                      <Link key={index} to="/blogs" className="tag">{tag}</Link>
                    ))}
                  </div>
                )}

                {/* Share Buttons */}
                {/* <div className="blog-share mt-32">
                  <span className="share-label">Share this article:</span>
                  <div className="share-buttons">
                    <a href="#" className="share-btn facebook" aria-label="Share on Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="share-btn twitter" aria-label="Share on Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="share-btn linkedin" aria-label="Share on LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="share-btn email" aria-label="Share via Email">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </div>
                </div> */}

                {/* Author Box */}
                <div className="author-box mt-40">
                  <div className="author-avatar">
                    <span>{post.author.charAt(0)}</span>
                  </div>
                  <div className="author-info">
                    <h5>{post.author}</h5>
                    <p>Our team of transportation experts shares insights and tips to help you plan the perfect group trip.</p>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar">
                {/* Search Widget */}
                <div className="sidebar-widget search-widget">
                  <h5 className="widget-title">Search</h5>
                  <div className="search-form">
                    <input type="text" placeholder="Search articles..." />
                    <button type="button"><i className="fa fa-search"></i></button>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="sidebar-widget">
                  <h5 className="widget-title">Recent Posts</h5>
                  <ul className="recent-posts">
                    {siteData.blogPosts.map((p) => (
                      <li key={p.id}>
                        <Link to={`/blog/${p.slug}`}>
                          <div className="recent-post-thumb">
                            {p.image ? (
                              <img src={p.image} alt={p.title} loading="lazy" />
                            ) : (
                              <span>{p.category.charAt(0)}</span>
                            )}
                          </div>
                          <div className="recent-post-info">
                            <h6>{p.title}</h6>
                            <span>{new Date(p.date).toLocaleDateString()}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Categories */}
                <div className="sidebar-widget">
                  <h5 className="widget-title">Categories</h5>
                  <ul className="categories">
                    {[...new Set(siteData.blogPosts.map(p => p.category))].map((category, index) => (
                      <li key={index}>
                        <Link to="/blogs">
                          {category}
                          <span>({siteData.blogPosts.filter(p => p.category === category).length})</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Widget */}
                <div className="sidebar-widget cta-widget">
                  <h5>Ready to Book?</h5>
                  <p>Get a free quote for your next group trip.</p>
                  <Link to="/booking" className="cus-btn">Get a Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="related-posts pt-60 pb-60 bg-light">
          <div className="container-fluid">
            <div className="text-center mb-40">
              <span className="section-tag">Keep Reading</span>
              <h2 className="section-title">Related Articles</h2>
            </div>
            <div className="blogs-grid">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="blog-card">
                  <div className="blog-image">
                    {relatedPost.image ? (
                      <img src={relatedPost.image} alt={relatedPost.title} loading="lazy" />
                    ) : (
                      <div className="placeholder-img blog-image-placeholder">
                        <span>{relatedPost.category}</span>
                      </div>
                    )}
                    <span className="blog-category">{relatedPost.category}</span>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span><i className="fa fa-calendar"></i> {new Date(relatedPost.date).toLocaleDateString()}</span>
                      <span><i className="fa fa-user"></i> {relatedPost.author}</span>
                    </div>
                    <h5 className="blog-title">
                      <Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h5>
                    <p className="blog-excerpt">{relatedPost.excerpt}</p>
                    <Link to={`/blog/${relatedPost.slug}`} className="read-more">
                      Read More <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

// Icon Components
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);

const TagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);

export default BlogDetail;