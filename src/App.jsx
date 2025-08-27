import React from "react";

/**
 * RepairLink Landing Page (No Tailwind) — Single-file React component
 *
 * How to use:
 * 1) Replace your `src/App.jsx` with this file's contents.
 * 2) Run `npm run dev` to preview. No Tailwind needed.
 * 3) Replace the YouTube IDs below with your real demo videos.
 */

// --- Replace these with your real demo video IDs (YouTube) or use MP4s in /public ---
const CUSTOMER_VIDEO_ID = "REPLACE_WITH_CUSTOMER_YOUTUBE_ID";
const GARAGE_VIDEO_ID = "REPLACE_WITH_GARAGE_YOUTUBE_ID";
// -----------------------------------------------------------------------------------

// Minimal inline SVG icon set (so we don't need any icon libraries)
const Icon = {
  Wrench: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.66 5.66l7.07 7.07a2 2 0 1 0 2.83-2.83L11.88 9.13a2 2 0 0 1 2.83-2.83z" />
    </svg>
  ),
  MapPin: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 21s-6.5-5.2-6.5-10.5A6.5 6.5 0 1 1 18.5 10.5C18.5 15.8 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  ),
  Car: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 13l2-5a3 3 0 0 1 2.82-2h8.36A3 3 0 0 1 19 8l2 5" />
      <path d="M3 13h18v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1H8v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5z" />
      <circle cx="7.5" cy="16.5" r="1.5" />
      <circle cx="16.5" cy="16.5" r="1.5" />
    </svg>
  ),
  Shield: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  Star: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
      <path d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z" />
    </svg>
  ),
  Building: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="7" width="7" height="13" rx="1" />
      <rect x="14" y="3" width="7" height="17" rx="1" />
      <path d="M6.5 10h0m0 3h0m0 3h0m11 0h0m0-3h0m0-3h0" />
    </svg>
  ),
  Login: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
    </svg>
  ),
  Github: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12.2c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.7 2.8 1.2.1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.8.2 3.1.1 3.4.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.8-5.5 6.1.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.8-1.6 8.2-6 8.2-11.2A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  ),
  Mail: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  ),
  Users: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Cloud: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 10a4 4 0 0 0-7.8-1.2A3.5 3.5 0 1 0 7 16h11a4 4 0 0 0 0-8z" />
    </svg>
  ),
  Database: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  Zap: (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  ),
};

// Global styles injected once (no Tailwind)
const styles = `
  /* Import font */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  html {
  scroll-behavior: smooth;
  }
  
  :root{
    --bg: #f8fafc;
    --surface: #ffffff;
    --text: #0f172a;
    --muted: #475569;
    --primary: #14b8a6; /* teal-600 */
    --primary-600:#0f9e8e;
    --accent: #0ea5e9;  /* sky-600 */
    --ring: rgba(20,184,166,.25);
    --radius: 16px;
    --shadow: 0 10px 25px rgba(2,8,23,.08);
  }
  *{box-sizing:border-box}
  html,body,#root{height:100%}
  body{
    margin:0;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
    color:var(--text);
    background: radial-gradient(1000px 500px at 50% -30%, #ecfeff 0%, transparent 70%),
                radial-gradient(800px 500px at 50% 130%, #e0f2fe 0%, transparent 70%),
                var(--bg);
  }
  a{color:inherit;text-decoration:none}
  .container{max-width:1120px;margin:0 auto;padding:0 20px}
  .stack-16{display:flex;gap:16px;align-items:center}
  .stack-24{display:flex;gap:24px;align-items:center}
  .grid{display:grid;gap:24px}
  .grid-2{grid-template-columns:1fr}
  @media(min-width:980px){.grid-2{grid-template-columns:1fr 1fr}}

  /* Header */
  .nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.7);backdrop-filter: blur(8px);border-bottom:1px solid rgba(15,23,42,.08)}
  .nav-inner{height:64px;display:flex;align-items:center;justify-content:space-between}
  .brand{display:flex;align-items:center;gap:12px;font-weight:700}
  .brand .logo{width:28px;height:28px;color:var(--primary)}
  .nav-links{display:none;gap:20px;color:#0f172a}
  .nav-links a{opacity:.8}
  .nav-links a:hover{opacity:1;color:var(--primary)}
  @media(min-width:768px){.nav-links{display:flex}}

  /* Buttons */
  .btn{display:inline-flex;align-items:center;gap:10px;padding:10px 14px;border-radius:999px;border:1px solid transparent;font-weight:600;cursor:pointer;transition:.2s box-shadow,.2s transform,.2s background,.2s color}
  .btn:focus{outline:2px solid var(--ring);outline-offset:2px}
  .btn-primary{background:var(--primary);color:#fff;box-shadow:var(--shadow)}
  .btn-primary:hover{transform:translateY(-1px);background:var(--primary-600)}
  .btn-secondary{background:#fff;border-color:#e2e8f0;color:var(--primary)}
  .btn-secondary:hover{background:#f8fafc}
  .btn-ghost{background:transparent;color:var(--primary)}
  .btn-ghost:hover{background:rgba(20,184,166,.1)}

  /* Sections */
  section{padding:64px 0}
  .hero{padding-top:80px}
  h1{font-size:40px;line-height:1.1;margin:0 0 12px}
  @media(min-width:640px){h1{font-size:52px}}
  h2{font-size:28px;margin:0 0 16px}
  h3{font-size:18px;margin:0 0 10px}
  p.lead{font-size:18px;color:var(--muted);max-width:60ch}

  /* Card */
  .card{background:rgba(255,255,255,.8);backdrop-filter: blur(6px);border:1px solid rgba(15,23,42,.06);border-radius:var(--radius);padding:16px;box-shadow:var(--shadow)}

  /* Map preview */
  .map{position:relative;aspect-ratio:16/9;border-radius:20px;border:1px solid #e2e8f0;background:rgba(255,255,255,.7);overflow:hidden;}
  .map-grid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(6,1fr);grid-template-rows:repeat(4,1fr)}
  .map-grid div{border:1px dashed rgba(148,163,184,.5)}
  .pin{position:absolute;display:flex;align-items:center;gap:6px;background:rgba(20,184,166,.12);color:var(--primary);padding:4px 8px;border-radius:999px;box-shadow:0 2px 8px rgba(2,8,23,.08);font-size:12px}
  .pin-customer{background:rgba(14,165,233,.12);color:var(--accent)}

  /* Lists */
  .list{display:grid;gap:8px;color:#0f172a}
  .muted{color:var(--muted)}

  /* Services grid */
  .services{display:grid;gap:20px;grid-template-columns:1fr}
  @media(min-width:700px){.services{grid-template-columns:repeat(2,1fr)}}
  @media(min-width:1000px){.services{grid-template-columns:repeat(3,1fr)}}

  /* How-it-works */
  .steps{display:grid;gap:14px}
  .steps li{background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:12px 14px;box-shadow:var(--shadow)}
  .steps .title{font-weight:700}
  .steps .desc{color:var(--muted);font-size:14px}

  /* CTA */
  .cta{background:linear-gradient(135deg, var(--primary), var(--accent));color:#fff;border-radius:24px;padding:28px;box-shadow:var(--shadow)}

  /* FAQ */
  details{background:rgba(255,255,255,.75);border:1px solid #e2e8f0;border-radius:16px;padding:12px}
  details[open]{box-shadow:var(--shadow)}
  summary{cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-weight:600}
  summary::-webkit-details-marker{display:none}
  .footer{border-top:1px solid rgba(15,23,42,.08);background:rgba(255,255,255,.7)}

`;

// Reusable UI bits
const Button = ({ children, variant = "primary", ...props }) => (
  <button
    {...props}
    className={
      "btn " + (variant === "primary" ? "btn-primary" : variant === "secondary" ? "btn-secondary" : "btn-ghost")
    }
  >
    {children}
  </button>
);

const Card = ({ children, className = "" }) => (
  <div className={"card " + className}>{children}</div>
);

const MapPreview = () => (
  <div className="map">
    <div className="map-grid">
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} />
      ))}
    </div>
    {[{ x: 18, y: 28 }, { x: 53, y: 42 }, { x: 75, y: 66 }, { x: 34, y: 70 }].map((p, i) => (
      <div key={i} className="pin" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
        <Icon.MapPin style={{ width: 16, height: 16 }} /> <span>Garage</span>
      </div>
    ))}
    <div className="pin pin-customer" style={{ left: "48%", top: "42%" }}>
      <Icon.Car style={{ width: 16, height: 16 }} /> <span>Your report</span>
    </div>
  </div>
);

export default function App() {
  return (
    <div>
      {/* Inject global styles once */}
      <style>{styles}</style>

      {/* NAV */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="#" className="brand">
            <span className="logo"><Icon.Wrench /></span>
            <span>RepairLink</span>
          </a>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#demo">Demo</a>
            <a href="#features">Features</a>
            <a href="#services">Services</a>
          </nav>
          <div className="stack-16">
            <a href="#demo" className="muted">Watch demo</a>
            <Button variant="ghost"><Icon.Github /> GitHub</Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container grid grid-2" style={{alignItems:"center"}}>
          <div>
            <h1>
              RepairLink — connect customers with local garages instantly.
              <span style={{display:'block', color: 'var(--primary)'}}>Post a report, receive offers on a map, choose the best garage.</span>
            </h1>
            <p className="lead">
              Save time and money — RepairLink lets you describe the problem, upload photos and location, compare offers from nearby garages, and confirm the job all from your phone.
            </p>
            <ul className="grid" style={{marginTop:12,gridTemplateColumns:'1fr 1fr'}}>
              <li className="stack-16"><Icon.Shield style={{color:'var(--primary)'}} /> Verified garages</li>
              <li className="stack-16"><Icon.Star style={{color:'var(--primary)'}} /> Ratings & reviews</li>
              <li className="stack-16"><Icon.MapPin style={{color:'var(--primary)'}} /> Map-based offers</li>
              <li className="stack-16"><Icon.Car style={{color:'var(--primary)'}} /> Mobile-friendly</li>
            </ul>
          </div>
          <div>
            <MapPreview />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container" style={{maxWidth:900}}>
          <h2>What is RepairLink?</h2>
          <p className="muted">
            RepairLink is a simple marketplace that connects drivers who have car issues with professional local garages. A customer posts a short report (photos + location + description). Garages nearby see the request on a map, submit price/ETA offers, and the customer chooses and confirms an offer. After the repair, customers rate the garage to help others make informed choices.
          </p>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo">
        <div className="container">
          <h2>Demo videos</h2>
          <p className="muted" style={{maxWidth:'60ch'}}>Two short demos — watch from the customer's perspective and from a garage's perspective.</p>

          <div className="grid" style={{gridTemplateColumns:'1fr',gap:24}}>
            <div className="grid" style={{gridTemplateColumns:'1fr',gap:12}}>
              <Card>
                <h3>Customer POV</h3>
                <div style={{aspectRatio:'16/9',border:'1px solid #e2e8f0',borderRadius:12,overflow:'hidden'}}>
                  {CUSTOMER_VIDEO_ID === "REPLACE_WITH_CUSTOMER_YOUTUBE_ID" ? (
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%',fontSize:14,color:'#64748b'}}>
                      Replace CUSTOMER_VIDEO_ID in <code>src/App.jsx</code> with your YouTube ID
                    </div>
                  ) : (
                    <iframe title="Customer demo" style={{width:'100%',height:'100%'}} src={`https://www.youtube.com/embed/${CUSTOMER_VIDEO_ID}`} allowFullScreen />
                  )}
                </div>
              </Card>
            </div>

            <div className="grid" style={{gridTemplateColumns:'1fr',gap:12}}>
              <Card>
                <h3>Garage POV</h3>
                <div style={{aspectRatio:'16/9',border:'1px solid #e2e8f0',borderRadius:12,overflow:'hidden'}}>
                  {GARAGE_VIDEO_ID === "REPLACE_WITH_GARAGE_YOUTUBE_ID" ? (
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%',fontSize:14,color:'#64748b'}}>
                      Replace GARAGE_VIDEO_ID in <code>src/App.jsx</code> with your YouTube ID
                    </div>
                  ) : (
                    <iframe title="Garage demo" style={{width:'100%',height:'100%'}} src={`https://www.youtube.com/embed/${GARAGE_VIDEO_ID}`} allowFullScreen />
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="container">
          <h2>Features</h2>
          <p className="muted" style={{maxWidth:'65ch', marginBottom:32}}>
            RepairLink offers a comprehensive suite of features designed to enhance the experience for both customers and garages, making car repair requests, offers, and confirmations seamless, fast, and reliable.
          </p>

          {/* Customer Features */}
          <Card style={{marginBottom:32}}>
            <h3 className="stack-16"><Icon.Car style={{color:'var(--primary)'}} /> For Customers</h3>
            <p className="muted" style={{marginBottom:12}}>
              Everything a driver needs to quickly report a car issue and get offers from nearby garages.
            </p>
            <ul className="list" style={{marginTop:0}}>
              <li className="stack-16"><Icon.Login style={{color:'var(--primary)'}} /> <strong>Create a report:</strong> upload photos, write a description, and share your exact location.</li>
              <li className="stack-16"><Icon.Zap style={{color:'var(--primary)'}} /> <strong>Compare offers:</strong> instantly see price, ETA, and garage ratings.</li>
              <li className="stack-16"><Icon.Star style={{color:'var(--primary)'}} /> <strong>Choose the best garage:</strong> select and confirm the most suitable offer.</li>
              <li className="stack-16"><Icon.MapPin style={{color:'var(--primary)'}} /> <strong>Track your jobs:</strong> monitor your repair requests and confirmations in real time.</li>
              <li className="stack-16"><Icon.Shield style={{color:'var(--primary)'}} /> <strong>Leave feedback:</strong> rate and review garages after service completion.</li>
            </ul>
          </Card>

          {/* Garage Features */}
          <Card>
            <h3 className="stack-16"><Icon.Building style={{color:'var(--primary)'}} /> For Garages</h3>
            <p className="muted" style={{marginBottom:12}}>
              Tools and insights to manage customer requests, respond fast, and build a trustworthy reputation.
            </p>
            <ul className="list" style={{marginTop:0}}>
              <li className="stack-16"><Icon.MapPin style={{color:'var(--primary)'}} /> <strong>Live map feed:</strong> view nearby customer reports in real time.</li>
              <li className="stack-16"><Icon.Zap style={{color:'var(--primary)'}} /> <strong>Quick responses:</strong> send price and ETA offers with one tap.</li>
              <li className="stack-16"><Icon.Car style={{color:'var(--primary)'}} /> <strong>Job management:</strong> track confirmations, schedule work, and update statuses easily.</li>
              <li className="stack-16"><Icon.Star style={{color:'var(--primary)'}} /> <strong>Reputation building:</strong> verified profiles and customer ratings help grow trust.</li>
              <li className="stack-16"><Icon.Database style={{color:'var(--primary)'}} /> <strong>Analytics:</strong> see trends in requests, response times, and popular services.</li>
            </ul>
          </Card>

        </div>
      </section>


      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <h2>Services</h2>
          <p className="muted" style={{maxWidth:'65ch'}}>
            RepairLink is powered by reliable cloud technologies that keep the app fast, secure, and scalable.
          </p>
          <div className="services">
            <Card>
              <div className="stack-16" style={{alignItems:'flex-start'}}>
                <span style={{color:'var(--primary)'}}><Icon.Zap /></span>
                <div>
                  <div style={{fontWeight:600}}>Azure Functions</div>
                  <div className="muted" style={{fontSize:14}}>Serverless backend logic for processing reports and offers at scale.</div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="stack-16" style={{alignItems:'flex-start'}}>
                <span style={{color:'var(--primary)'}}><Icon.Database /></span>
                <div>
                  <div style={{fontWeight:600}}>Firebase Firestore & Storage</div>
                  <div className="muted" style={{fontSize:14}}>Realtime database for users, reports, offers — plus storage for images and files.</div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="stack-16" style={{alignItems:'flex-start'}}>
                <span style={{color:'var(--primary)'}}><Icon.Login /></span>
                <div>
                  <div style={{fontWeight:600}}>Firebase Authentication</div>
                  <div className="muted" style={{fontSize:14}}>Secure and simple sign-in for both customers and garages.</div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="stack-16" style={{alignItems:'flex-start'}}>
                <span style={{color:'var(--primary)'}}><Icon.MapPin /></span>
                <div>
                  <div style={{fontWeight:600}}>Google Maps</div>
                  <div className="muted" style={{fontSize:14}}>Accurate location services and map integration for reports and offers.</div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="stack-16" style={{alignItems:'flex-start'}}>
                <span style={{color:'var(--primary)'}}><Icon.Star /></span>
                <div>
                  <div style={{fontWeight:600}}>Geohash</div>
                  <div className="muted" style={{fontSize:14}}>Efficient nearby search and location-based filtering for garages.</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container" style={{padding:'32px 20px',display:'flex',gap:16,flexWrap:'wrap',alignItems:'center',justifyContent:'space-between'}}>
          <div className="stack-16" style={{fontWeight:700}}>
            <span style={{color:'var(--primary)'}}><Icon.Wrench /></span> RepairLink
          </div>
          <div className="stack-16">
            <a href="#" className="stack-16"><Icon.Github /> GitHub</a>
          </div>
          <p className="muted">© {new Date().getFullYear()} RepairLink. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
