import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const measurements = [
  { label: 'Shoulder Width', value: '38.5 CM' },
  { label: 'Sleeve Length', value: '59.0 CM' },
  { label: 'Chest Circumference', value: '88.5 CM' },
  { label: 'Waist', value: '66.0 CM' },
];

const stylePrefs = [
  { icon: 'palette', title: 'PALETTE', desc: 'Monochrome, Camel, Obsidian', dark: false },
  { icon: 'architecture', title: 'SILHOUETTE', desc: 'Structured, Oversized, Masculine Taper', dark: true },
  { icon: 'temp_preferences_custom', title: 'TEXTILES', desc: 'Cashmere, Raw Silk, Virgin Wool', dark: false },
];

const orders = [
  {
    id: 'ELR-2024-8812',
    name: 'CASHMERE OVERCOAT - NOIR',
    date: 'NOV 14, 2024',
    total: '$3,450.00',
    status: 'SHIPPED',
    statusClass: 'bg-secondary-container/30 text-on-secondary-container',
    action: 'TRACK',
    actionClass: 'text-secondary border border-secondary hover:bg-secondary hover:text-white',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNj_rLeyb14Xim8Pn680NEYdvZvESezDNjy5j9u35GphVjj-n6VV9Ii6gsHWmNxfbx2HB4MaSGmcbycvG_q3-zSDwxC4yvIWbIBicm8clqJGgBVQHqGFb-0Fo7OjWECWVcfW-21DgYXzW4M0XvND9EnLoUztnk9PE_O2Y3FItfs_KlyxOZu2-Ekqj9UN_9DjNYZeHzhl8bf_1k_Na6QJ5VM3VFH5lQsD_nMJvX3GHPFGSENUh5wa9EcFGbUooI2JvYgoCEfrOyS31s',
  },
  {
    id: 'ELR-2024-7741',
    name: 'POPLIN SHIRT - ALABASTER',
    date: 'OCT 02, 2024',
    total: '$890.00',
    status: 'DELIVERED',
    statusClass: 'bg-surface-container-high text-on-surface-variant',
    action: 'INVOICE',
    actionClass: 'text-on-surface-variant border border-outline-variant hover:bg-primary hover:text-white',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1JtPf8mcuYtNbO8gVW9wuaHW8BbxH98DGs-Q22bT-QhGEWxjEEG6MJhFpqUERj28ZrBtg8X8wAhaOabSk4BeDGPTy0C0IsZrWzYEkG91q8FpPIalrq_BctqYeBFdEN5fI8cHkg_d1owE6-0R043h0phZAOXvDqV8BFrzVjTmPZxNFCIu793dGYBHCC5QNuksgxuGLpHuURu9lKr0HXhaOizoTxxSKwc5u5rLeAxVjjQ_BQygLQdXEkVquA4TCmuzvqY2ILjeeROVj',
  },
];

export default function MyAccount() {
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bg-background text-on-surface font-body-md">
      {/* Nav */}
      

      <main className="pt-24 min-h-screen">
        <div className="max-w-container-max mx-auto px-margin-desktop pb-section-gap">
          {/* Dashboard Header */}
          <header className="py-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h1 className="font-headline-md text-headline-md italic mb-2">Welcome back, Alexandra</h1>
              <p className="font-body-md text-on-surface-variant">Your winter curation is ready for review.</p>
            </div>
            <button className="px-8 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-all duration-700">
              REQUEST STYLIST CALL
            </button>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Sidebar */}
            <aside className="md:col-span-3 lg:col-span-2 space-y-8">
              <nav className="flex flex-col gap-6">
                <a href="#" className="font-label-caps text-label-caps sidebar-link-active">DASHBOARD</a>
                {['ORDER HISTORY', 'SAVED MEASUREMENTS', 'STYLE PREFERENCES', 'MY WARDROBE', 'ADDRESS BOOK'].map(l => (
                  <a key={l} href="#" className="font-label-caps text-label-caps sidebar-link-inactive">{l}</a>
                ))}
                <div className="pt-4 border-t border-outline-variant/30">
                  <Link to="/auth" className="font-label-caps text-label-caps text-error opacity-70 hover:opacity-100 transition-opacity">SIGN OUT</Link>
                </div>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="md:col-span-9 lg:col-span-10 space-y-section-gap">
              {/* Section 1: Wardrobe + Measurements */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
                <div className="relative group aspect-[4/5] bg-surface-container overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5SPhsI0ojs493FSI267dn44yk2wBOC8i0u_uHfFdPX5WNlMKbBvsHYtYJNBJDoFN5kM_fD3Jp-z8xcRbAQDKd3_ADJXLQctaXQiA2SuGuQeLNM5HK6X0uLeCP5NbT_l3MAL5rKPOiajlBh-rkiHiXgI5K7Os2-3dC5cMNKwrjDORPYFHe89TiMzWdVpjG8Q22gfmrWqaPeGNTfDr4VfzfY_srnIOY9a3zrWFhuz3a9zIzQrujOgtnksR1ci6F_DcEGiDeiHycI2kk')" }}
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent">
                    <span className="font-label-caps text-[10px] text-on-primary tracking-[0.3em] block mb-2">MY WARDROBE</span>
                    <h2 className="font-headline-md text-on-primary mb-4">View Your Digital Closet</h2>
                    <Link to="/wardrobe" className="font-label-caps text-label-caps text-on-primary border-b border-on-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
                      EXPLORE COLLECTION
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col justify-between py-4">
                  <div>
                    <h3 className="font-label-caps text-label-caps text-secondary mb-4">SAVED MEASUREMENTS (AI-SYNCED)</h3>
                    <div className="space-y-6">
                      {measurements.map(m => (
                        <div key={m.label} className="flex justify-between items-center thin-gold-divider pb-3">
                          <span className="font-body-md">{m.label}</span>
                          <span className="font-body-md font-semibold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 font-body-md text-on-surface-variant italic">
                      Last synced via ELURE Vision AI: Dec 12, 2023.
                    </p>
                  </div>
                  <div className="mt-8 bg-surface-container-low p-8 border-l border-secondary">
                    <h4 className="font-label-caps text-label-caps mb-2">AI STYLIST INSIGHT</h4>
                    <p className="font-body-md text-on-surface-variant">
                      "Based on your recent measurements, the 'Iconic Trench' in Size 38 will provide the exact architectural silhouette you prefer."
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Style Preferences */}
              <section>
                <h3 className="font-label-caps text-label-caps text-on-surface mb-8">STYLE PREFERENCES</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                  {stylePrefs.map(pref => (
                    <div
                      key={pref.title}
                      className={`p-10 flex flex-col justify-center items-center text-center aspect-square border ${pref.dark ? 'bg-primary text-on-primary' : 'bg-surface-container border-secondary/10'}`}
                    >
                      <span
                        className={`material-symbols-outlined text-4xl mb-4 ${pref.dark ? 'text-secondary-fixed-dim' : 'text-secondary'}`}
                      >
                        {pref.icon}
                      </span>
                      <h4 className="font-label-caps text-label-caps mb-2">{pref.title}</h4>
                      <p className="font-body-md">{pref.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Order History */}
              <section>
                <div className="flex justify-between items-end mb-8">
                  <h3 className="font-label-caps text-label-caps text-on-surface">ORDER HISTORY</h3>
                  <a href="#" className="font-label-caps text-[10px] text-on-surface-variant border-b border-on-surface-variant">VIEW ALL</a>
                </div>
                <div className="space-y-4">
                  {orders.map(order => (
                    <div key={order.id} className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-secondary/10 items-center">
                      <div className="w-24 h-32 flex-shrink-0 bg-surface-container">
                        <img src={order.src} alt={order.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-body-md font-semibold uppercase tracking-tight">{order.name}</h4>
                          <span className={`font-label-caps text-[10px] px-3 py-1 ${order.statusClass}`}>{order.status}</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <span className="block font-label-caps text-[9px] text-on-surface-variant">ORDER #</span>
                            <span className="font-body-md text-sm">{order.id}</span>
                          </div>
                          <div>
                            <span className="block font-label-caps text-[9px] text-on-surface-variant">DATE</span>
                            <span className="font-body-md text-sm">{order.date}</span>
                          </div>
                          <div>
                            <span className="block font-label-caps text-[9px] text-on-surface-variant">TOTAL</span>
                            <span className="font-body-md text-sm">{order.total}</span>
                          </div>
                          <div className="text-right">
                            <button className={`font-label-caps text-[10px] px-4 py-2 transition-all ${order.actionClass}`}>
                              {order.action}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      

      {/* AI Stylist Floating Bubble */}
      <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
        <div
          className={`w-80 bg-surface-container-low shadow-2xl border border-secondary/20 overflow-hidden flex flex-col transition-all duration-300 ${aiDrawerOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        >
          <div className="p-6 bg-primary text-on-primary flex justify-between items-center">
            <span className="font-label-caps text-label-caps tracking-widest">AI STYLIST</span>
            <button className="material-symbols-outlined" onClick={() => setAiDrawerOpen(false)}>close</button>
          </div>
          <div className="p-6 flex-grow overflow-y-auto space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-body-md text-sm italic text-secondary">
                "Alexandra, I've noticed you've been browsing silk blazers. Would you like to see how they pair with your 'Saved Measurements' for a bespoke fit?"
              </p>
            </div>
          </div>
          <div className="p-4 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="ASK AI STYLIST..."
                className="w-full border-0 border-b border-primary focus:ring-0 font-label-caps text-[10px] py-2 outline-none"
              />
              <button className="material-symbols-outlined text-primary">send</button>
            </div>
          </div>
        </div>
        <button
          onClick={() => setAiDrawerOpen(!aiDrawerOpen)}
          className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-xl hover:bg-secondary transition-all duration-500 group"
        >
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">auto_awesome</span>
        </button>
      </div>
    </div>
      <Footer />
    </>
  );
}
