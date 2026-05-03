import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

// SVG Icons
const SeaweedIcon = () => (
  <svg className="logo-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12,2C12,2 8,6 8,10C8,13 10,14 10,17C10,20 8,22 8,22M12,22V12M12,12C12,12 16,10 16,6C16,3 12,2 12,2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <SeaweedIcon />
          <span>SeaGrow</span>
        </div>
        <div className="nav-links">
          <a href="#problem">Problem</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
          <button className="btn btn-primary">Get Early Access</button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-left">
          <div className="hero-badge">
            <div className="pulse-dot"></div>
            Project ID: 25-26J-311
          </div>
          <h1 className="hero-title">Smart Seaweed Farming for Sri Lanka</h1>
          <p className="hero-desc">
            Empowering coastal communities with an advanced AI, IoT, and ML driven ecosystem for optimized seaweed cultivation and harvest management.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Explore Platform</button>
            <button className="btn btn-outline">Watch Demo</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h4>90%+</h4>
              <p>System Complete</p>
            </div>
            <div className="stat-item">
              <h4>4</h4>
              <p>Core Modules</p>
            </div>
            <div className="stat-item">
              <h4>2</h4>
              <p>Species Tracked</p>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="dashboard-card">
            <div className="ai-result">
              <span className="tag-pill" style={{ marginBottom: '8px', display: 'inline-block' }}>AI Vision Detection</span>
              <p>Gracilaria edulis — Healthy, 97.4% confidence</p>
            </div>
            <div className="sensor-grid">
              <div className="sensor-item">
                <span>Temperature</span>
                <strong>26.4°C</strong>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="sensor-item">
                <span>pH Level</span>
                <strong>8.2</strong>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="sensor-item">
                <span>TDS / Salinity</span>
                <strong>32 ppt</strong>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="sensor-item">
                <span>Harvest Countdown</span>
                <strong>12 Days</strong>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  return (
    <section className="problem" id="problem">
      <div className="container">
        <div className="problem-left">
          <span className="section-tag">The Challenge</span>
          <h2 className="section-title">Why SeaGrow is Needed</h2>
          <div className="problem-grid">
            <div className="problem-card card-hover">
              <div className="problem-icon">🔍</div>
              <h4>Manual Identification</h4>
              <p>Lack of expertise leads to misidentification of seaweed species and diseases.</p>
            </div>
            <div className="problem-card card-hover">
              <div className="problem-icon">🌡️</div>
              <h4>No Monitoring</h4>
              <p>Invisible environmental changes cause sudden crop loss without warning.</p>
            </div>
            <div className="problem-card card-hover">
              <div className="problem-icon">⚖️</div>
              <h4>Guess-based Harvest</h4>
              <p>Farmers rely on intuition, often harvesting too early or too late, reducing yield.</p>
            </div>
            <div className="problem-card card-hover">
              <div className="problem-icon">📉</div>
              <h4>Income Loss</h4>
              <p>Poor post-harvest handling and lack of value-added products keep profits low.</p>
            </div>
          </div>
        </div>
        <div className="problem-right">
          <div className="solution-box card-hover">
            <h3>The SeaGrow Solution</h3>
            <p>An integrated smart system replacing guesswork with data-driven precision for Sri Lankan seaweed farmers.</p>
            <div className="solution-tags">
              <span className="tag-pill">AI/CNN Model</span>
              <span className="tag-pill">IoT Sensors</span>
              <span className="tag-pill">Machine Learning</span>
              <span className="tag-pill">Web Platform</span>
              <span className="tag-pill">QR Labeling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">System Modules</span>
          <h2 className="section-title">Core Features</h2>
        </div>
        <div className="grid">
          <div className="feature-card card-hover">
            <span className="feature-number">01</span>
            <div className="feature-content">
              <div className="feature-icon">📸</div>
              <h3>AI Species Identification</h3>
              <p>Upload images of seaweed for instant identification of species (Gracilaria edulis, Kappaphycus alvarezii) and detection of diseases or epiphytes using custom CNN models.</p>
              <div className="feature-tags">
                <span className="tag-pill">CNN/OpenCV</span>
                <span className="tag-pill">Health Detection</span>
              </div>
            </div>
          </div>
          
          <div className="feature-card dark card-hover">
            <span className="feature-number">02</span>
            <div className="feature-content">
              <div className="feature-icon">🌊</div>
              <h3>IoT Environmental Monitoring</h3>
              <p>Real-time tracking of critical water parameters including Temperature, pH, Salinity, and Light intensity. Get alerts when conditions deviate from optimal ranges.</p>
              <div className="feature-tags">
                <span className="tag-pill">IoT NodeMCU</span>
                <span className="tag-pill">Real-time Alerts</span>
              </div>
            </div>
          </div>

          <div className="feature-card card-hover">
            <span className="feature-number">03</span>
            <div className="feature-content">
              <div className="feature-icon">📈</div>
              <h3>Growth Tracking & Prediction</h3>
              <p>Machine learning models predict the optimal harvest time and estimate potential yield based on historical data and current IoT sensor readings.</p>
              <div className="feature-tags">
                <span className="tag-pill">ML Prediction</span>
                <span className="tag-pill">Yield Optimization</span>
              </div>
            </div>
          </div>

          <div className="feature-card card-hover">
            <span className="feature-number">04</span>
            <div className="feature-content">
              <div className="feature-icon">📦</div>
              <h3>Packaging & Recommendations</h3>
              <p>Generate smart QR labels for traceability. The AI system also suggests value-added recipes and medicinal uses based on the harvested species.</p>
              <div className="feature-tags">
                <span className="tag-pill">QR Labels</span>
                <span className="tag-pill">Value Addition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-left">
          <span className="section-tag">Process Flow</span>
          <h2 className="section-title">How It Works</h2>
          <div className="steps-list">
            <div className="step-item">
              <div className="step-dot">1</div>
              <h4>Image Upload & Scan</h4>
              <p>Farmer captures an image of the seaweed via the web platform.</p>
            </div>
            <div className="step-item">
              <div className="step-dot">2</div>
              <h4>AI Identification</h4>
              <p>System identifies species and health status instantly.</p>
            </div>
            <div className="step-item">
              <div className="step-dot">3</div>
              <h4>IoT Continuous Monitoring</h4>
              <p>Sensors track water quality in the cultivation area 24/7.</p>
            </div>
            <div className="step-item">
              <div className="step-dot">4</div>
              <h4>ML Harvest Prediction</h4>
              <p>Algorithms process data to predict the best harvest date.</p>
            </div>
            <div className="step-item">
              <div className="step-dot">5</div>
              <h4>Smart Packaging</h4>
              <p>Generate traceability QR codes for final harvested product.</p>
            </div>
          </div>
        </div>
        <div className="how-right">
          <div className="system-card">
            <h3 style={{ marginBottom: '24px' }}>Central Architecture</h3>
            <div className="system-components">
              <div className="component-box card-hover">Web App (React)</div>
              <div className="component-box card-hover">AI/ML Engine (Python)</div>
              <div className="component-box card-hover">IoT Processor (NodeMCU)</div>
              <div className="component-box card-hover">Cloud Database</div>
            </div>
            <div className="completion-card">
              <h4>System Completion Status</h4>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginTop: '8px' }}>
                <span>Phase 3 Integration</span>
                <span>92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  return (
    <section className="impact">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Benefits</span>
          <h2 className="section-title">Project Impact</h2>
        </div>
        <div className="grid">
          <div className="impact-card card-hover">
            <div className="impact-icon">🌾</div>
            <h4>Yield Increase</h4>
            <p>Optimized harvest timing leads to significantly higher biomass yield per cycle.</p>
          </div>
          <div className="impact-card card-hover">
            <div className="impact-icon">💰</div>
            <h4>Income Boost</h4>
            <p>Value-added recommendations open new revenue streams for local farmers.</p>
          </div>
          <div className="impact-card card-hover">
            <div className="impact-icon">💪</div>
            <h4>Protein Source</h4>
            <p>Promoting seaweed as a sustainable, alternative nutritional source.</p>
          </div>
          <div className="impact-card card-hover">
            <div className="impact-icon">🇱🇰</div>
            <h4>Pioneering Platform</h4>
            <p>The first dedicated AI-driven seaweed cultivation platform in Sri Lanka.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const members = [
    { name: "Kulasinghe I.D", id: "IT22586452", initials: "IK", photo: "/member1.jpeg" },
    { name: "Marasinghe M.A.S.S", id: "IT22579454", initials: "MM", photo: "/member2.jpeg" },
    { name: "Peiris G.S.", id: "IT2250292", initials: "GP", photo: "/member3.jpeg" },
    { name: "Dissanayake V.D.G.", id: "IT22113368", initials: "VD", photo: "/member4.jpeg" }
  ];

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Research Group</span>
          <h2 className="section-title">Meet the Team</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '32px' }}>Project ID: 25-26J-311 | SLIIT Faculty of Computing</p>
        </div>
        <div className="grid">
          {members.map((member, index) => (
            <div className="team-card card-hover" key={index}>
              <div className="team-avatar" style={{ width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = member.initials;
                  }}
                />
              </div>
              <h4>{member.name}</h4>
              <p>{member.id}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    title: '',
    email: ''
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.subject || !formData.name || !formData.title || !formData.email) {
      alert('Please fill in all fields.');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        'service_ua9y5dg',
        'template_8zoc46i',
        {
          subject: formData.subject,
          name: formData.name,
          title: formData.title,
          email: formData.email,
          to_email: formData.email
        },
        'al06NgL5ruD5Ie2i3'
      );

      setStatus('success');
      setFormData({
        subject: '',
        name: '',
        title: '',
        email: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert(error.text || 'Email sending failed');
      setStatus('error');
    }
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    height: '52px',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.15)',
    backgroundColor: 'rgba(255,255,255,0.08)',
    color: '#fff',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    backgroundClip: 'padding-box'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.6)',
    fontWeight: '500'
  };

  return (
    <section
      className="contact"
      id="contact"
      style={{ padding: '80px 0', background: 'var(--bg-dark, #0a2e24)' }}
    >
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '48px' }}>
            Have questions about SeaGrow? We'd love to hear from you.
          </p>
        </div>

        <div
          style={{
            padding: '36px',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <h3 style={{ margin: '0 0 24px', fontSize: '20px', color: '#fff' }}>
            Send a Message
          </h3>

          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h4 style={{ color: '#4ecda4', margin: '0 0 8px' }}>
                Message Sent!
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                Thank you! We'll get back to you soon.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="btn btn-primary"
                style={{ marginTop: '24px' }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '100%' }}>
                <label style={labelStyle}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={inputStyle}
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>

              <div style={{ width: '100%' }}>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>

              <div style={{ width: '100%' }}>
                <label style={labelStyle}>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  style={inputStyle}
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>

              <div style={{ width: '100%' }}>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                  autoComplete="new-password"
                  spellCheck="false"
                />
              </div>

              {status === 'error' && (
                <p style={{ color: '#ff6b6b', margin: 0, fontSize: '14px' }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '14px',
                  fontSize: '16px',
                  marginTop: '4px',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer'
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Email'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to grow smarter?</h2>
        <p>Join our pilot program and experience the future of sustainable seaweed cultivation in Sri Lanka.</p>
        <button className="btn btn-white">Join Pilot Program</button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h3 style={{ color: 'var(--white)', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>SeaGrow</h3>
        <p>Smart System for Seaweed Cultivation and Harvest Management</p>
        <p style={{ marginTop: '16px' }}>© {new Date().getFullYear()} SLIIT Faculty of Computing. All rights reserved.</p>
      </div>
    </footer>
  );
};

const Presentations = () => {
  const presentations = [
    { title: "Proposal Presentation", phase: "PHASE 1", url: "https://canva.link/2mufl8myklpv7ey" },
    { title: "Progress Presentation 1", phase: "PHASE 2", url: "https://canva.link/23lcjjpczol2vee" },
    { title: "Progress Presentation 2", phase: "PHASE 3", url: "https://canva.link/fqxv7iiqtcm5pe8" },
    { title: "Final Presentation", phase: "PHASE 4", url: "https://canva.link/2mufl8myklpv7ey" }
  ];

  return (
    <section className="dark-section presentations" id="presentations">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">SHOWCASE</span>
          <h2 className="section-title">Presentations</h2>
        </div>
        <div className="grid">
          {presentations.map((pres, i) => (
            <div className="presentation-card" key={i}>
              <div className="presentation-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <span className="phase-tag">{pres.phase}</span>
              <div>
                <h4>{pres.title}</h4>
                <a href={pres.url} target="_blank" rel="noopener noreferrer">
                  Open slides <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Documents = () => {
  const docs = [
    {
      title: "Project Proposal",
      meta: "PDF · 2.4 MB",
      desc: "Initial proposal outlining objectives, scope, and methodology.",
      file: "/my_part_Proposal V2.pdf"
    },
    {
      title: "Main Thesis",
      meta: "PDF · 8.1 MB",
      desc: "Complete documentation of the implemented system and evaluation.",
      file: "/SeaGrow_Main_Thesis_Final.pdf"
    },
    {
      title: "TAF Document",
      meta: "PDF · MULTIPLE",
      desc: "Progress reports submitted at each evaluation milestone.",
      file: "/Seaweeds-TAF-doc.pdf"
    },
    {
      title: "Literature Review",
      meta: "PDF · 5 PAPERS",
      desc: "Curated references on seaweed CV, EfficientNet & marine ML.",
      file: "/literature review.pdf"
    }
  ];

  return (
    <section className="dark-section documents" id="documents">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">LIBRARY</span>
          <h2 className="section-title">Project Documents</h2>
        </div>
        <div className="grid">
          {docs.map((doc, i) => (
            <div className="document-card" key={i}>
              <div className="doc-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h4>{doc.title}</h4>
              <p className="doc-meta">{doc.meta}</p>
              <p>{doc.desc}</p>
              <div className="doc-actions">
                <a href={doc.file} target="_blank" rel="noopener noreferrer" className="btn btn-doc btn-view">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> View
                </a>
                <a href={doc.file} download className="btn btn-doc btn-download">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Impact />
        <Presentations />
        <Documents />
        <Team />
        <ContactUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;