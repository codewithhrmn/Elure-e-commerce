import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCartStore } from '../store/cartStore';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const crossSells = [
  {
    id: 1,
    category: 'ELURE FINE JEWELRY',
    name: 'Sculptural Gold Orbitals',
    price: '$890',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnmC_YBVoGgyVpWJkXvHscwBKq5O2pEChUmMG_d4z-U-Hoj5GlKAccF2bNtUsEGe-XnRKD2A47Z42byHp5S48ZuHwBf0scwVdBsUe9KF_pJU__G8-J0Gn9_RNyc2nd0gFojltCiE4ageuYvs3_-qULxMXuoqjf9xD1uZ8djHVuce-ff5AtP6-7925SYIDpBZTPNBUSfyYY_dwpIAQgRC1BTbxqbgI0GPtFjISjpxk8AFSuEUNhYl82puu2KPGL7w_NFarzNi1g0Amk',
  },
  {
    id: 2,
    category: 'ELURE ACCESSORIES',
    name: 'Satin Night Clutch',
    price: '$1,200',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPNDUTv3-j40HLQkIzr_5MjYaaHWtHIZlMEKKk-9nEqO27XCRt4ZSjOEn8vZ5-jPcY7T8MMPjER6Fd0LuvUgHVtDVSItusY9RjNxyIKJGvtEA_sBR7T8MMPjER6Fd0LuvUgHVtDVSItusY9RjNxyIKJGvtEy43WP3JERqwNB0G3p8LMFaZn2YkyQDQywvx4FNQ21ECsYMEYXvCd4b2K9lvM4dj83F1-FXOr2pxmRbbt1rwTuIsAU_6N5-Ws0iLTCuKp2jz23Y9MicV9jE0M8NPSw3kEO5Mi1v5aBE9CvKQQFqsymhTelzkSDuY6Jwm',
  },
  {
    id: 3,
    category: 'ELURE FOOTWEAR',
    name: 'Verge Pointed Stiletto',
    price: '$950',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDze1qlP_UR2KAKy5-IWhfAQo8_agT3OyjuAmpTuh_k7TmsLcMKjpxI1eHJvVezOLzVGMRno1Bu_UpEiC6TCQzF239i4rJXkIPwHbdbNDqfJJyMEbDz-BGFLu23TyQrRm9kjqEOUjtUgBccYwC7q8zcE8MEZ4t_GVj7zXTuo7y_B_q-RspjB2OrheI44YMqlWW58W9a7RqW2SCov5knK27-YVe-K-3P4L4_VbjCRxsNWxtaqbMpaUQ9mQX7BGJsBzCDci-2UUuRo82',
  },
];

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState('40');
  const [aiOpen, setAiOpen] = useState(false);
  const crossSellRef = useRef(null);

  const scrollCrossSell = (direction) => {
    crossSellRef.current?.scrollBy({ left: direction * 500, behavior: 'smooth' });
  };
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    document.querySelectorAll('.stagger-in').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-background text-on-background font-body-md">
      {/* Nav */}
      

      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="px-margin-desktop py-6 max-w-container-max mx-auto">
          <nav className="flex gap-4 font-label-caps text-[10px] text-on-surface-variant tracking-widest">
            <Link to="/collection" className="hover:text-primary transition-colors">WOMEN</Link>
            <span>/</span>
            <Link to="/collection" className="hover:text-primary transition-colors">EVENING WEAR</Link>
            <span>/</span>
            <span className="text-primary font-bold">THE OBSIDIAN GOWN</span>
          </nav>
        </div>

        {/* Product Hero */}
        <section className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
          {/* Images */}
          <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 stagger-in">
            <div className="col-span-2 overflow-hidden aspect-[3/4] bg-surface-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjvHVHaR4Dmr5w6Qc2VEJoGVMssBX6L5iWAdKFio7AIxv0WLtmaRGRCW5vS-0ez6PwHnhy5lnYM0Dc957zQFoN849uTKTndBhPGlzxHXOvvJIHfH5sQU2lfKNXENO5Mc6IPilBVaqIv_qLJtxt6afDyZoqEwBHIlVLija5fD6YoAL7QWrfVGuo_umvr73OOne4qc4JnR-VmVWWOdmrVt4RRa0wCx0YHV-ZzLYoYjgl2qQLwP2DJ4hVQgTOAcBxLEcOpRQo9du8F4o3"
                alt="The Obsidian Gown - Front"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms] ease-out"
              />
            </div>
            <div className="overflow-hidden aspect-[3/4] bg-surface-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfpZG6gZ9U7dpqolwEggwM2eOYWDy-nF2ou4ziIkaBjDap4C7eNkZjH5FWqrw-gpVKqAyJXxr5D1aDDgAcS3IG-KDKUGz0MQJT69-HHe_vq1qe5tq9SUgxmiSsd6ZmheX0kIioAu6pwb494EtANkZJcKIqjsHjiOJ20LARRZMfZzRGq46Gvx1_MNw_0xMTl6tsEmVvSp_wGZAZ3nB3IQbRVQaq1hH2NX12XSYym_vRqDR5F-b6N8SeMth9X7TXC76JsjUaggeQURSf"
                alt="The Obsidian Gown - Detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden aspect-[3/4] bg-surface-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHMfe_tJAtV-OI-MLhBndFYLHv1MktIM5-cNKBpEFl8lqrL2rWyjiemVT7Jh8co4eojYWZDZ9j2b5VF2axsZMikLtkWJcCE5iHFCUrr-R5UwvP-dLIrvCK6UquAUFWNparlcoXv0U_MjbWsycOWpPWZeystPliCrYwMluB5jO5WsWcxnqrE8hYGLZ8a-8aIX7ZUX3r_gpxvEzKEKHh0Is6jykdRDdGpuYN0wbT0bIHOWz5Z8s0WlNPy5OxMtbsb0yOSk3yBspLB3eu"
                alt="The Obsidian Gown - Back"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="md:col-span-5 flex flex-col pt-8 md:sticky md:top-32 h-fit stagger-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8">
              <h1 className="font-headline-md text-[48px] leading-tight mb-2">The Obsidian Gown</h1>
              <p className="font-label-caps text-secondary text-lg font-semibold tracking-widest">$3,450.00</p>
            </div>
            <div className="space-y-6 mb-10">
              <p className="font-body-lg text-on-surface-variant">
                A masterclass in restraint. This floor-length silhouette features architectural shoulders and a hand-draped waist, crafted from Italian bonded silk. Designed for the woman who speaks without saying a word.
              </p>
              <div className="flex gap-4">
                <span className="font-label-caps text-label-caps py-2 border-b border-primary">SILK BONDED</span>
                <span className="font-label-caps text-label-caps py-2 border-b border-outline-variant text-on-surface-variant">HAND-FINISHED</span>
                <span className="font-label-caps text-label-caps py-2 border-b border-outline-variant text-on-surface-variant">MADE IN ITALY</span>
              </div>
            </div>

            {/* AI Module */}
            <div className="bg-surface-container-low p-8 border border-outline-variant/30 mb-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2">
                <span className="material-symbols-outlined text-secondary opacity-50 text-sm">auto_awesome</span>
              </div>
              <h3 className="font-label-caps text-[11px] tracking-widest text-secondary mb-4">ELURE AI ASSISTANT</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-body-md text-sm mb-1">Your AI Recommended Size:</p>
                    <p className="font-headline-md text-2xl">40 (EU)</p>
                  </div>
                  <button className="font-label-caps text-[10px] text-secondary underline underline-offset-4 hover:text-primary transition-colors">UPDATE PROFILE</button>
                </div>
                <p className="font-body-md text-[13px] text-on-surface-variant italic">
                  "Based on your preference for a 'Tailored' fit and your recent acquisition of the Ivory Blazer, size 40 will provide the perfect architectural drape across the shoulders."
                </p>
              </div>
              <div className="mt-8">
                <button className="w-full py-4 border border-secondary text-secondary font-label-caps tracking-widest hover:bg-secondary hover:text-white transition-all duration-500 flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined text-lg">view_in_ar</span>
                  VIRTUAL TRY-ON
                </button>
              </div>
            </div>

            {/* Size + CTA */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-4 gap-2 mb-2">
                {['36', '38', '40', '42'].map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`h-12 border flex items-center justify-center font-label-caps hover:border-primary transition-colors ${selectedSize === s ? 'border-primary bg-primary text-white' : 'border-outline-variant'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => addItem({
                  id: 'obsidian-gown',
                  name: 'The Obsidian Gown',
                  price: 3450,
                  size: selectedSize,
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjvHVHaR4Dmr5w6Qc2VEJoGVMssBX6L5iWAdKFio7AIxv0WLtmaRGRCW5vS-0ez6PwHnhy5lnYM0Dc957zQFoN849uTKTndBhPGlzxHXOvvJIHfH5sQU2lfKNXENO5Mc6IPilBVaqIv_qLJtxt6afDyZoqEwBHIlVLija5fD6YoAL7QWrfVGuo_umvr73OOne4qc4JnR-VmVWWOdmrVt4RRa0wCx0YHV-ZzLYoYjgl2qQLwP2DJ4hVQgTOAcBxLEcOpRQo9du8F4o3',
                })}
                className="w-full bg-primary text-white py-5 font-label-caps tracking-[0.2em] text-[14px] hover:bg-secondary transition-colors duration-500 text-center block"
              >
                ADD TO BAG
              </button>
              <button className="w-full border border-outline text-primary py-4 font-label-caps tracking-[0.2em] text-[12px] flex items-center justify-center gap-2 hover:bg-surface transition-colors">
                <span className="material-symbols-outlined">favorite</span>
                WISHLIST
              </button>
            </div>
          </div>
        </section>

        {/* Cross-sell Carousel */}
        <section className="bg-surface-container-low py-section-gap overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex justify-between items-end mb-16 stagger-in">
              <div>
                <span className="font-label-caps text-secondary tracking-[0.3em] mb-4 block">CURATED ENSEMBLE</span>
                <h2 className="font-headline-md text-[40px]">Pairs Perfectly With</h2>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => scrollCrossSell(-1)} aria-label="Previous recommendations" className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:border-primary transition-all">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button type="button" onClick={() => scrollCrossSell(1)} aria-label="Next recommendations" className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:border-primary transition-all">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
            <div ref={crossSellRef} className="flex gap-gutter overflow-x-auto hide-scrollbar stagger-in" style={{ animationDelay: '0.3s' }}>
              {crossSells.map(item => (
                <div key={item.id} className="min-w-[300px] md:min-w-[400px] flex-shrink-0 group">
                  <div className="aspect-[3/4] overflow-hidden mb-6 bg-surface">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="font-label-caps text-[10px] text-on-surface-variant">{item.category}</p>
                    <h4 className="font-body-lg text-lg">{item.name}</h4>
                    <p className="font-label-caps text-secondary">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detail Grid */}
        <section className="max-w-container-max mx-auto px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-2 gap-section-gap items-center">
          <div className="stagger-in">
            <h3 className="font-label-caps text-xs tracking-[0.4em] text-secondary mb-6">THE ART OF CURATION</h3>
            <h2 className="font-headline-md text-[52px] leading-tight mb-8">Architectural Elegance meets AI Precision.</h2>
            <p className="font-body-lg text-xl mb-12 max-w-md">
              Every seam is calculated. Every thread is selected. Our AI Stylist analyzes millions of data points to ensure that when you wear ELURE, the fit is as intentional as the design.
            </p>
            <div className="flex gap-12">
              {[['100%', 'VIRGIN SILK'], ['0.1mm', 'SEAM PRECISION'], ['24h', 'AI TAILORING']].map(([val, label]) => (
                <div key={label}>
                  <p className="font-headline-md text-3xl mb-1">{val}</p>
                  <p className="font-label-caps text-[10px] text-on-surface-variant">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden stagger-in" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCk366mldbsONvg0CaJ8YlXPTq9N1wHkZT_7CtweT26RuUjUPMhivCuY-vjZl9WKUe6j4kYqhdrHqYYXZAS49M8WvNz9xnHDdC5tWU5TsllB9DZrK_pfnRvfFSEblydzH6va-sIkpnaxNKMzkV7i5mxJHAiC7HY_LtF784xZUKW6LLR3ntzSCl9mf8MgbuXgWefSe3R8dAsEp7LWf7tRa71lltHYqC1QUJMOwOXhuLB1diWiF-ksCGfXKBcEpYGCKSxxSm960_69P6"
              alt="Craft detail"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms]"
            />
            <div className="absolute inset-0 border-[40px] border-background pointer-events-none" />
          </div>
        </section>
      </main>

      {/* Footer */}
      

      {/* AI Floating Button */}
      <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
        <div className={`transition-all duration-700 bg-white/95 backdrop-blur-xl border border-secondary/20 p-6 w-80 shadow-2xl ${aiOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
            <span className="font-label-caps text-xs tracking-widest text-secondary">AI STYLIST</span>
          </div>
          <p className="font-body-md text-sm text-on-background mb-4">
            "I noticed you're looking at <span className="italic font-headline-md text-base">The Obsidian Gown</span>. Would you like to see how it pairs with your existing wardrobe?"
          </p>
          <div className="space-y-2">
            <Link to="/wardrobe" className="w-full py-2 bg-primary text-white font-label-caps text-[10px] tracking-widest hover:bg-secondary transition-colors block text-center">ANALYZE WARDROBE</Link>
            <button className="w-full py-2 border border-outline-variant font-label-caps text-[10px] tracking-widest hover:bg-surface transition-colors">REQUEST FABRIC SAMPLE</button>
          </div>
        </div>
        <button
          onClick={() => setAiOpen(!aiOpen)}
          className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-secondary transition-all duration-500"
        >
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
        </button>
      </div>
    </div>
      <Footer />
    </>
  );
}
