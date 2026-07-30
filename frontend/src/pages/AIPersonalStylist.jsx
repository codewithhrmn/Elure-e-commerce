import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const archetypes = [
  {
    title: 'THE MODERNIST',
    desc: 'Focusing on silhouette, form, and the reduction of clutter. Precision in every seam.',
    offset: 'transform translate-y-12',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvM53UkmCe4A1oE4LlUMwIFXRSsriOca2nHm7g1RdCQIQFp-DyB4R2KevlT8LkpWGPJg8Lhttahaui6zq03uHmJ3pn4T-Dw8lf9IDK0HT4XKm6I6-sLISHG7GtHSW8s9RSzKyByErLKZUO4t9o6DNN0YCARTqpmnWlyuSpDs3jXwUzvfrfrB6wW4DU7sBsIFb52QId9MGuJLHMZHKlS_9EY08l7wIGlF6hdREO3jUjjGQnDJe30m7wvuq1UqTRvMw2OoLX_8F589lh',
  },
  {
    title: 'THE ETHEREAL',
    desc: 'Soft textures, fluid movements, and a palette inspired by the Mediterranean coast.',
    offset: '',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABwaoTZ2v4NWTfF0NNwlyuXlU_BZSSGVp3e3ULxdrLURflkSkU_Va7QWG60JgCtp_aidrXNxHmjsNzFfh3N91eMXwFa1zeGafvZZkpnE0t9PGTNLt-Fom7q_ygTVz8cxxt8C5-PX7MMA8qkCl95VvX0UGcH3s5taheukYSBhFd-B2bphPW3nW8_QgCNKL45JTy8OLC3VS32wIA54Vgv_OcSYCmGx_t8goHVGrnwtABLgY_L4hr4f8vmc4vhv75MNrzBay2y8I98feu',
  },
  {
    title: 'THE HERITAGE',
    desc: 'Reimagining classic codes for the modern era. Timeless elegance meets AI-driven insight.',
    offset: 'transform translate-y-24',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKwpLcO9WZsH1yaEHyJUtE21KRbpYfJk0Q8Y0JXiCQ1P2FY8h3i7rb7qgAFlAfeIFOum5Vj2QxHuf8syhXkJgM2WxczLa8BUlskiTAi3pb21bmcTctEb7NhrzZrk9o4Y9JeI5YMyBpcJ8_eT9pgBItK-Uu-6xtCLwiamz0MX8OS0UfkpUzpBWYm1Ek4IabKRXYOcovLzAltqRwUKVOo-pqEXS8V6aFSmVcbhr4V3UjVE9vOgEspjtn_AWJwfPHxt0ntR-EZsVashzX',
  },
];

export default function AIPersonalStylist() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedTaste, setSelectedTaste] = useState(null);

  const progressWidth = { 1: '33.33%', 2: '66.66%', 3: '100%' };

  const generateLook = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(1);
    }, 3500);
  };

  return (
    <>
      <Navbar />
      <div className="font-body-md text-body-md overflow-x-hidden bg-surface">
      {/* Nav */}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-secondary/30">
        
      </header>

      <main className="pt-32 pb-section-gap">
        <section className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Left Editorial */}
            <div className="md:col-span-4 flex flex-col justify-center">
              <span className="font-label-caps text-label-caps text-secondary mb-4">THE CURATED EXPERIENCE</span>
              <h1 className="font-display-lg text-display-lg mb-8 leading-tight">
                AI Personal<br /><span className="italic font-light">Stylist</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md">
                Leveraging advanced neural aesthetics to curate a wardrobe that transcends trends. Your digital atelier is ready.
              </p>
              <div className="relative w-full h-[400px] mt-8 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmNPTzlFFmD8rQrNx_cRtrwbtBRVjph3wnJWYRa_eYQcSiumRpAyVMAg5tX0ODlOfkudPPM3F4gi3kG2EPPD3R2k45DzQue6HoqyY_s6bpsDNEUZUSa0ylIEKfjzjTiDj5vzHOmwUUAZHYspTgfTiRLPMf9LOgQermJhS-7ef-9NILixAH2LgssPMNSCdKdPfR25RlqSyqGPuWVB3D7OHhcXknra0QzvlEz98tRkX2e3kAnNUndcAh6v3gpeCmar0e26AsAf5aY5kk"
                  alt="Stylist editorial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/5" />
              </div>
            </div>

            {/* Right Stylist Interface */}
            <div className="md:col-span-8 bg-surface-container-low p-8 md:p-16 relative">
              {/* Progress bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-surface-container-high">
                <div
                  className="stylist-progress-bar h-full bg-secondary"
                  style={{ width: loading ? '100%' : progressWidth[step] }}
                />
              </div>

              <div className="min-h-[500px] flex flex-col justify-between">
                {/* Step 1 */}
                {step === 1 && !loading && (
                  <div className="step-transition animate-fade-in">
                    <div className="mb-12">
                      <h2 className="font-headline-md text-headline-md mb-2">The Occasion</h2>
                      <p className="font-body-md text-on-surface-variant italic font-serif">"Tell us where the evening takes you."</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { icon: 'diamond', label: 'GALA' },
                        { icon: 'work', label: 'BUSINESS' },
                        { icon: 'sailing', label: 'RESORT' },
                      ].map(item => (
                        <button
                          key={item.label}
                          onClick={() => setStep(2)}
                          className="group flex flex-col items-center p-8 border border-secondary/20 hover:border-secondary transition-all duration-500 bg-white shadow-sm hover:shadow-md"
                        >
                          <span className="material-symbols-outlined text-[48px] text-secondary group-hover:scale-110 transition-transform mb-4">{item.icon}</span>
                          <span className="font-label-caps text-label-caps">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && !loading && (
                  <div className="step-transition animate-fade-in">
                    <div className="mb-12">
                      <button onClick={() => setStep(1)} className="flex items-center gap-2 text-secondary mb-4 hover:opacity-70">
                        <span className="material-symbols-outlined">arrow_back</span>
                        <span className="font-label-caps text-[10px]">BACK</span>
                      </button>
                      <h2 className="font-headline-md text-headline-md mb-2">Taste Profile</h2>
                      <p className="font-body-md text-on-surface-variant italic font-serif">"Select your visual language."</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'ARCHITECTURAL', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTSq0so8g8wxdOHcwmoSi38IGEsme4AzpazO3OXgLVd__Sb6Z2x3ycIP6QrMeX2Es9uW4sahARpt9PAgEfSVNidD5z2cwL5KeEMxwXy8vZtzPABtlYgQZnsmRzrM_dy81ffjxKubEhCqlw0eHxr4wm-a20nPICUecsXxjS9gjrBlc5CdTBZRccVgTimjPYxSHh-A-sBGF-z8eJzlswpFgIygkfYAAJ0te3ebLW5N-iwmEXYem16eVjDWM9HW4zWJy8Nl-_Q-2V5qqa' },
                        { label: 'TIMELESS LUXE', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw-2G7czhFmE76u1L3XUe72yERwlZHDjGdzvvWOX7VHfaeYhRfvoprpMsG3ZO8p6_UtNjL1u0yFqlGFrlziwu7hNto33AB5gcPvhZ1c5rXWr6ohT_wEoJ05n3SBcwzoYj-R8uluwx4DdMW7IO4gzQFNCGhpqkNM1L_Nl3XLNBR6J1V5GfQMIWmRbh0dQNZ_lBHCcLsd3DwVcHQwVVKpzoVL2_gaGYtbARvlPb5v6Dh_soQjR6ZL6HUCpBBNGmIhst_MEm-G0C2pHVp' },
                      ].map(item => (
                        <div
                          key={item.label}
                          onClick={() => setSelectedTaste(item.label)}
                          className="relative group cursor-pointer overflow-hidden aspect-[4/5]"
                        >
                          <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                          <div className="absolute bottom-4 left-4">
                            <span className="font-label-caps text-white bg-primary px-3 py-1">{item.label}</span>
                          </div>
                          {selectedTaste === item.label && (
                            <div className="absolute top-4 right-4 text-white">
                              <span className="material-symbols-outlined">check_circle</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setStep(3)}
                      className="mt-8 w-full py-5 bg-primary text-white font-label-caps hover:bg-secondary transition-colors duration-500 sharp-edge"
                    >
                      CONTINUE
                    </button>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && !loading && (
                  <div className="step-transition animate-fade-in">
                    <div className="mb-12">
                      <button onClick={() => setStep(2)} className="flex items-center gap-2 text-secondary mb-4 hover:opacity-70">
                        <span className="material-symbols-outlined">arrow_back</span>
                        <span className="font-label-caps text-[10px]">BACK</span>
                      </button>
                      <h2 className="font-headline-md text-headline-md mb-2">Final Specifications</h2>
                      <p className="font-body-md text-on-surface-variant italic font-serif">"The technical precision behind the art."</p>
                    </div>
                    <div className="space-y-8">
                      <div className="border-b border-primary/10 pb-4">
                        <label className="font-label-caps text-[10px] text-secondary">BODY TYPE REFERENCE</label>
                        <select className="w-full bg-transparent border-none focus:ring-0 font-body-lg text-body-lg p-0 mt-2 cursor-pointer">
                          <option>ATHLETIC / SLIM</option>
                          <option>CURVED / PROPORTIONAL</option>
                          <option>BROAD / TAILORED</option>
                          <option>PETITE / FINE</option>
                        </select>
                      </div>
                      <div className="border-b border-primary/10 pb-4">
                        <label className="font-label-caps text-[10px] text-secondary">PRIMARY COLOR PALETTE</label>
                        <div className="flex gap-4 mt-4">
                          {['#000000', '#D4AF37', '#ffffff', '#4A4A4A'].map((c, i) => (
                            <button
                              key={c}
                              className={`w-8 h-8 rounded-full border border-secondary/20 ring-offset-2 ${i === 0 ? 'ring-2 ring-secondary' : ''}`}
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={generateLook}
                      className="mt-12 w-full py-6 bg-secondary text-white font-label-caps text-[14px] hover:bg-primary transition-all duration-700 sharp-edge tracking-[0.2em] flex justify-center items-center gap-3 group"
                    >
                      GENERATE MY CURATED LOOK
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">auto_awesome</span>
                    </button>
                  </div>
                )}

                {/* Loading */}
                {loading && (
                  <div className="flex flex-col items-center justify-center text-center py-20">
                    <div className="w-24 h-24 relative mb-8">
                      <div className="absolute inset-0 border-t-2 border-secondary rounded-full animate-spin" />
                      <div className="absolute inset-2 border-r-2 border-primary rounded-full animate-spin" style={{ animationDuration: '1s' }} />
                    </div>
                    <p className="font-headline-md italic text-primary">AI is Curating...</p>
                    <p className="font-body-md text-on-surface-variant mt-4">Synthesizing heritage patterns with contemporary silhouettes.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Style Archetypes */}
        <section className="mt-section-gap max-w-container-max mx-auto px-margin-desktop overflow-hidden">
          <div className="flex items-end justify-between mb-12">
            <h3 className="font-display-lg text-[40px] leading-none">The<br />Archetypes</h3>
            <div className="h-[1px] bg-secondary/30 flex-grow mx-12 hidden md:block" />
            <p className="font-label-caps text-secondary">01 — 03</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {archetypes.map(a => (
              <div key={a.title} className={`space-y-6 ${a.offset}`}>
                <div className="h-[500px] overflow-hidden">
                  <img src={a.src} alt={a.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-label-caps text-primary mb-2">{a.title}</h4>
                  <p className="text-sm text-on-surface-variant">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      
    </div>
      <Footer />
    </>
  );
}
