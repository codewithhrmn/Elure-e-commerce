import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const recommendedItems = [
  {
    name: 'AURORA HEEL / GOLD',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkws5PCoG2V7lPhjy3TPUDVpHjOjegu4llNAlL-eBgQoq69Ik441czJ5CR8TgVsnf2i5LHyyFqx7dvixNXqQybJ9iYJEScANJ_yLvLSXj_90tRMpIRRRNj80BQ-8tq9yrEy9ELCOs2mM-imRh_mqLLB4BJzZtHoFfYlrBD6_ioUYR5DcbpL0nyFSljwQ5IdmavjQQpnwspCKSSJLXKth_3sDJLE78OlwaiSLzl2PAED2UTxAPybTbtHcq8N9RMX3TvomS1c_j5epT4',
  },
  {
    name: 'OSIRIS CUFF / 18K',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDc2GJhxsBYE8l2ULql3s6V4NRvDlZe7uRyHhfhPekcLFV2L7dne_yrCwxTGkbpldIq6PiubAtK4LXAKGoDzxo24CD3DSPrcVFfOSdEwRNo-JVG61kGtcRRRtvUj5O_itPw8EJpFG9fHeo8AAjhoR1r6b4tKHWkvCqHCrAY2jdCx-EySjokAlUlZmu8SmXnL5Zj8OvPJtyrIORJbxljmJ30DC-pX4WocxNMkuqPZ5R0TZ2qYjs0zBhyI4FSQtf2T1aPiY3ytHlQCcG',
  },
];

export default function FitCheck() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('idle');
  const [aiOpen, setAiOpen] = useState(false);

  const sectionsRef = useRef([]);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);
    setUploadStatus('analyzing');

    setTimeout(() => {
      setUploadStatus('complete');
    }, 2500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (element) => {
    if (element && !sectionsRef.current.includes(element)) {
      sectionsRef.current.push(element);
    }
  };

  return (
    <>
      <Navbar />

      <main className="pt-32 min-h-screen bg-background text-on-surface">

        {/* ================= HERO ================= */}
        <section
          ref={addToRefs}
          className="px-margin-desktop mb-16 opacity-0 translate-y-10 transition-all duration-1000"
        >
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">

            <div>
              <p className="font-label-caps text-label-caps text-secondary mb-4 uppercase tracking-[0.3em]">
                Advanced Diagnostics
              </p>

              <h1 className="font-display-lg text-display-lg leading-none">
                THE INTELLIGENT
                <br />
                <span className="italic font-normal">
                  FIT CHECK
                </span>
              </h1>
            </div>

            <div className="max-w-xs text-right hidden md:block">
              <p className="font-body-lg text-on-surface-variant italic">
                Elevate your aesthetic through neural-powered styling analysis.
              </p>
            </div>

          </div>
        </section>

        {/* ================= MAIN WORKSPACE ================= */}
        <section
          ref={addToRefs}
          className="px-margin-desktop mb-section-gap opacity-0 translate-y-10 transition-all duration-1000"
        >
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">

            {/* ================= UPLOAD AREA ================= */}
            <div className="lg:col-span-7 relative group">

              <div className="aspect-[4/5] bg-surface-container-low border border-secondary/30 relative flex flex-col items-center justify-center overflow-hidden transition-all duration-700 hover:border-secondary">

                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-secondary" />

                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-secondary" />

                {/* Upload Content */}
                <label
                  htmlFor="outfit-upload"
                  className="cursor-pointer group flex flex-col items-center gap-6 z-10 p-12 text-center"
                >

                  <input
                    id="outfit-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />

                  {uploadStatus === 'idle' && (
                    <>
                      <div className="w-24 h-24 rounded-full border border-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <span className="material-symbols-outlined text-4xl text-secondary">
                          add_a_photo
                        </span>
                      </div>

                      <div>
                        <h3 className="font-label-caps text-label-caps text-primary mb-2">
                          UPLOAD YOUR LOOK
                        </h3>

                        <p className="font-body-md text-on-surface-variant max-w-[200px]">
                          High-resolution portrait or full-body recommended
                        </p>
                      </div>
                    </>
                  )}

                  {uploadStatus === 'analyzing' && (
                    <div className="flex flex-col items-center gap-4">
                      <span className="material-symbols-outlined text-secondary animate-spin text-5xl">
                        progress_activity
                      </span>

                      <p className="font-label-caps text-label-caps text-secondary tracking-widest">
                        ANALYZING SILHOUETTE...
                      </p>
                    </div>
                  )}

                  {uploadStatus === 'complete' && (
                    <div className="flex flex-col items-center gap-4">
                      <span className="material-symbols-outlined text-secondary text-5xl">
                        check_circle
                      </span>

                      <p className="font-label-caps text-label-caps text-secondary tracking-widest">
                        CALIBRATION COMPLETE
                      </p>

                      <p className="text-xs text-on-surface-variant">
                        {selectedFile?.name}
                      </p>
                    </div>
                  )}

                </label>

                {/* Background Image */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-20"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuey02Cb2j-HYctmi6Au5LLh0sDwNwmyR-ZKEZtibDR3zHqj1M6q0_ewiLmIYfwAAJkgrdwx2dxDERte4MmjYLJYmQNoG5SFvnzuRiRMGZK4xftgNXBaFp45CXDTdSMrn84D9qC2Z63Vx514jYed_uQm6PtemG2A-FXkmcWQtRlKoizUIOk8LtXgDsLZy4ju6WPGmGJaEblP22LknOS01E8ZuO38eCRM0YwtKgt8pSJKqBmdC6O3qx1KXPQZqWIrO0l7Bj-tmONxJB')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

              </div>

              {/* Tech Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 text-on-primary hidden md:block editorial-shadow border border-secondary/20">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />

                  <span className="font-label-caps text-label-caps">
                    AI ENGINE ACTIVE / v2.4
                  </span>
                </div>
              </div>

            </div>

            {/* ================= ANALYSIS PANEL ================= */}
            <div className="lg:col-span-5 flex flex-col gap-8">

              <div className="bg-white p-10 border border-outline-variant/30 editorial-shadow flex flex-col gap-10">

                {/* Header */}
                <header className="flex justify-between items-start border-b border-outline-variant/30 pb-6">

                  <div>
                    <h2 className="font-headline-md text-headline-md text-primary leading-none">
                      ANALYSIS
                    </h2>

                    <p className="font-label-caps text-label-caps text-on-surface-variant mt-2">
                      SESSION ID: EL-9804
                    </p>
                  </div>

                  <span className="material-symbols-outlined text-secondary text-3xl">
                    auto_awesome
                  </span>

                </header>

                {/* Scores */}
                <div className="space-y-8">

                  {/* Color Harmony */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-label-caps text-label-caps">
                        COLOR HARMONY
                      </span>

                      <span className="font-label-caps text-label-caps text-secondary">
                        94%
                      </span>
                    </div>

                    <div className="h-[2px] w-full bg-surface-container-highest overflow-hidden">
                      <div
                        className="h-full bg-secondary transition-all duration-1000"
                        style={{ width: '94%' }}
                      />
                    </div>

                    <p className="font-body-md text-on-surface-variant text-sm italic">
                      Exceptional use of monochromatic obsidian tones with metallic accents.
                    </p>
                  </div>

                  {/* Silhouette */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-label-caps text-label-caps">
                        SILHOUETTE SCORE
                      </span>

                      <span className="font-label-caps text-label-caps text-secondary">
                        88%
                      </span>
                    </div>

                    <div className="h-[2px] w-full bg-surface-container-highest overflow-hidden">
                      <div
                        className="h-full bg-secondary transition-all duration-1000"
                        style={{ width: '88%' }}
                      />
                    </div>

                    <p className="font-body-md text-on-surface-variant text-sm italic">
                      Structured shoulders provide a commanding visual hierarchy.
                    </p>
                  </div>

                  {/* Style Coherence */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-label-caps text-label-caps">
                        STYLE COHERENCE
                      </span>

                      <span className="font-label-caps text-label-caps text-secondary">
                        91%
                      </span>
                    </div>

                    <div className="h-[2px] w-full bg-surface-container-highest overflow-hidden">
                      <div
                        className="h-full bg-secondary transition-all duration-1000"
                        style={{ width: '91%' }}
                      />
                    </div>
                  </div>

                </div>

                {/* Styling Suggestions */}
                <div className="pt-4">

                  <h3 className="font-label-caps text-label-caps text-primary border-b border-secondary pb-2 mb-6 inline-block">
                    STYLING SUGGESTIONS
                  </h3>

                  <ul className="space-y-6">

                    <li className="flex gap-4 items-start">
                      <span className="font-label-caps text-secondary text-[10px] mt-1">
                        01
                      </span>

                      <p className="font-body-md text-on-surface text-sm">
                        Swap the matte accessories for polished gold hardware to amplify the premium contrast.
                      </p>
                    </li>

                    <li className="flex gap-4 items-start">
                      <span className="font-label-caps text-secondary text-[10px] mt-1">
                        02
                      </span>

                      <p className="font-body-md text-on-surface text-sm">
                        Consider a structured blazer with peak lapels to sharpen the neckline silhouette.
                      </p>
                    </li>

                    <li className="flex gap-4 items-start">
                      <span className="font-label-caps text-secondary text-[10px] mt-1">
                        03
                      </span>

                      <p className="font-body-md text-on-surface text-sm">
                        Add the ELURE Aurora clutch in champagne for a sophisticated tonal break.
                      </p>
                    </li>

                  </ul>

                </div>

                {/* Recalibrate */}
                <button className="w-full bg-primary py-5 text-on-primary font-label-caps text-label-caps hover:bg-secondary transition-colors duration-500 group flex items-center justify-center gap-3">
                  RECALIBRATE LOOK

                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    refresh
                  </span>
                </button>

              </div>

              {/* Recommended Items */}
              <div className="space-y-4">

                <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
                  Recommended pairings
                </p>

                <div className="grid grid-cols-2 gap-4">

                  {recommendedItems.map((item) => (
                    <div
                      key={item.name}
                      className="group cursor-pointer"
                    >

                      <div className="aspect-square bg-surface-container overflow-hidden relative border border-transparent group-hover:border-secondary transition-colors">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                      </div>

                      <p className="font-label-caps text-[10px] mt-2 group-hover:text-secondary transition-colors">
                        {item.name}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= DIVIDER ================= */}
        <div className="w-full h-[1px] bg-outline-variant/30 flex justify-center items-center">
          <div className="px-8 bg-background">
            <span className="material-symbols-outlined text-secondary">
              diamond
            </span>
          </div>
        </div>

        {/* ================= SECONDARY SHOWCASE ================= */}
        <section
          ref={addToRefs}
          className="py-section-gap px-margin-desktop bg-surface-container-lowest opacity-0 translate-y-10 transition-all duration-1000"
        >

          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-section-gap items-center">

            <div className="md:w-1/2">

              <div className="relative">

                <div className="absolute -top-12 -left-12 w-64 h-64 border border-secondary/10 pointer-events-none" />

                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1BpLbM7CaqhSPE4vbTQArcCIJaB-_xOS_8fQfQ9zMvYQ6So0Be9eaaOsZ_A4UPOkMlBEtC_GtLMlZQl84GgGOLxZRP6My7VsFtFQS8558zfvVZtBO4sjKwkQwYQ95g6ZKONSVFR9ggAfj3-a0_6QgxhP3GR3iRUFdWU55Avc1pBm21zO_As_CZyf2OZIokn-KBbRDbleSeFnVc61Xs6JZFW9B6IlNqLtNKCwe77_wKnI_B6eliVV27JnvZvBcXU5hUqGfhfyE7V6k"
                  alt="High fashion model"
                  className="w-full relative z-10 editorial-shadow"
                />

                <div className="absolute -bottom-8 -right-8 p-12 bg-secondary text-on-secondary hidden lg:block">

                  <p className="font-headline-md text-3xl italic">
                    "Precision is the
                    <br />
                    ultimate luxury."
                  </p>

                </div>

              </div>

            </div>

            <div className="md:w-1/2 space-y-8">

              <h2 className="font-headline-md text-display-lg-mobile md:text-headline-md">
                HOW ELURE ANALYZES
                <br />
                YOUR STYLE
              </h2>

              <p className="font-body-lg text-on-surface-variant max-w-md">
                Our neural network has been trained on four decades of high-fashion archives, identifying patterns in texture, drape, and chromatic resonance that the human eye might overlook.
              </p>

              <div className="space-y-4">

                {[
                  'CHROMATIC BALANCING',
                  'SILHOUETTE ARCHITECTURE',
                  'TREND ALIGNMENT ANALYSIS',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 group cursor-default"
                  >

                    <div className="w-10 h-[1px] bg-secondary group-hover:w-16 transition-all duration-500" />

                    <span className="font-label-caps text-label-caps">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

      {/* ================= AI FLOATING BUTTON ================= */}
      <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">

        <div
          className={`transition-all duration-700 bg-white/95 backdrop-blur-xl border border-secondary/20 p-6 w-80 shadow-2xl ${
            aiOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        >

          <div className="flex items-center gap-3 mb-4">

            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              auto_awesome
            </span>

            <span className="font-label-caps text-xs tracking-widest text-secondary">
              AI STYLIST
            </span>

          </div>

          <p className="font-body-md text-sm text-on-background mb-4">
            "I noticed you're looking at{' '}
            <span className="italic font-headline-md text-base">
              The Obsidian Gown
            </span>
            . Would you like to see how it pairs with your existing wardrobe?"
          </p>

          <div className="space-y-2">

            <button className="w-full py-2 bg-primary text-white font-label-caps text-[10px] tracking-widest hover:bg-secondary transition-colors">
              ANALYZE WARDROBE
            </button>

            <button className="w-full py-2 border border-outline-variant font-label-caps text-[10px] tracking-widest hover:bg-surface transition-colors">
              REQUEST FABRIC SAMPLE
            </button>

          </div>

        </div>

        <button
          onClick={() => setAiOpen(!aiOpen)}
          className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-secondary transition-all duration-500"
        >

          <span
            className="material-symbols-outlined text-2xl"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            auto_awesome
          </span>

        </button>

      </div>
    </>
  );
}