import React, { useEffect, useRef } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


export default function Home() {
  const trendingRef = useRef(null);

  const scrollTrending = (direction) => {
    trendingRef.current?.scrollBy({ left: direction * 500, behavior: 'smooth' });
  };
  const navRef = useRef(null);

  useEffect(() => {
    // Scroll reveal for collection blocks
    const reveals = document.querySelectorAll('[data-aos]');
    const revealOnScroll = () => {
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    };
    reveals.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      el.style.transition = 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
    });
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Header shrink on scroll
    const handleScroll = () => {
      const nav = navRef.current;
      if (!nav) return;
      if (window.scrollY > 50) {
        nav.classList.add('py-2', 'shadow-sm');
        nav.classList.remove('py-4');
      } else {
        nav.classList.add('py-4');
        nav.classList.remove('py-2', 'shadow-sm');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-background text-on-surface font-body-md">
      {/* Top Navigation Bar */}
      

      {/* Hero Section */}
      <header className="relative w-full h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-80"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6mAlr_hsLwLPUtq-KaIZJJNPgrex0oXQg-7zympLppFRPMLYGsCzUM4PyS7J4DTjfzLcTzbHxMtvV0SbnbNXSuIofehCGMBUeOdkdU9YM7NAyCDj0F0x-UfHWmfWrp-ER061iTzRQWLEEUbqQY-uu1PPyMJEKBqIOVLpvbapZyKYqiM5ZK-o1jqKbOGYAKimZxkd8md2AvaiKzEg-AAyvZgvanmp1jCyLpu9xdkEXD3YeiRn4igSksTvAqlQWFSm16DvT_0-xpOSJ")' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <div className="relative z-20 h-full flex flex-col justify-end px-margin-mobile md:px-margin-desktop pb-section-gap max-w-container-max mx-auto">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white max-w-4xl editorial-shadow leading-[1] mb-6">
            THE ART OF <br /><span className="italic font-normal">PERSONAL</span> CURATION.
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-xl mb-8">
            A luxury fashion brand that combines premium craftsmanship with AI-powered personalization.
          </p>
          <div className="flex gap-4">
            <Link
              to="/collection"
              className="bg-white text-black px-12 py-4 font-label-caps text-label-caps tracking-[0.2em] transition-all duration-500 hover:bg-secondary-fixed hover:text-on-secondary-fixed"
            >
              SHOP NEW ARRIVALS
            </Link>
          </div>
        </div>
      </header>

      {/* Featured Trends Carousel */}
      <section className="mt-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label-caps text-label-caps text-secondary block mb-2">TRENDING NOW</span>
            <h2 className="font-headline-md text-headline-md">The Season's Editorial</h2>
          </div>
          <div className="flex gap-4 mb-1">
            <button type="button" onClick={() => scrollTrending(-1)} aria-label="Previous trends" className="w-10 h-10 border border-secondary/30 flex items-center justify-center material-symbols-outlined hover:bg-secondary hover:text-white transition-colors">arrow_back</button>
            <button type="button" onClick={() => scrollTrending(1)} aria-label="Next trends" className="w-10 h-10 border border-secondary/30 flex items-center justify-center material-symbols-outlined hover:bg-secondary hover:text-white transition-colors">arrow_forward</button>
          </div>
        </div>
        <div ref={trendingRef} className="flex overflow-x-auto hide-scrollbar gap-gutter pb-4">
          {[
            { n: '01 / TEXTURAL DIALOGUE', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE9bZVd8k7LJPyg2eD_ODWyCzXi3ORYUTrnA-RJRZMS75jH0tjEOku5m5QqESKAKl4Ytl82U2EtLs6Hb97lTj-aadzXcSc76TvGlmEwnQ8o126t6dVBcThOYll6JE8AFMcMpnv4-lhAVQlOdyMIjiqXTL8nQnpQsvCnFNGZ57k78fwMyqvVUtWXJ_cLzV8mLC3d8dR-SKVZvZ226j6Rn6ZDcJ307AgpqUR_HEwrtcsWnnBAM6sF9pk8tlLflbgho09r8Hcl672ywpQ', offset: '' },
            { n: '02 / ARCHITECTURAL SILHOUETTE', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSDWK7OyqyQRN1F1rAElagYxB_tidCWSXd8Qv1rol_UumdPplUa58G_Sfyt2fTJ08mUK3QV2ByaKQADdkCO7uV3SU0flrS-cx3XLuUnIgWAxL3HmVMc-wJk9ycIHAvGrLW5-nzwPYbdfGyuRGK5Uw3SOiwCj12vEmRE9keutmzyt9pQ_61o61XOzWQDyZU9EaR67pokL-RfhNJYSe07G38ULRaEhUIqC8wpgO8DiJgKEwKAODuKW9ezIckopVgp182-95IYsn3X0Kn', offset: 'pt-12' },
            { n: '03 / CURATED OBJECTS', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfz2GyMrUMiuzSpErihCwueK3zfHtbzmcKi-ktYnhrGKo0B6pWfu7h2OY829C-0Ah3i6hAa2lH8HCoeOdUf8S2Bf8kMJsoZIOxOEJablCXyRtuF7-2Du-1V14hoP8Z8MhEb7xAUqSMMBO8v_uo2Brx36gAf5bElCGJDnoKPquzfp6eq1yWGBuShUmbKNTB0e_ytyAZ6biKu5qxqrEnVkjbeiAqWEXRLaMpnPiazYF5d7Xm6qbcX-9HrPXMqXEHZAWmBH9Ta8SCTOlH', offset: '' },
          ].map((item) => (
            <div key={item.n} className={`min-w-[85vw] md:min-w-[45%] group cursor-pointer ${item.offset}`}>
              <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                <img
                  src={item.src}
                  alt={item.n}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <h3 className="font-label-caps text-label-caps tracking-widest">{item.n}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Asymmetric Collections */}
      <section className="mt-section-gap py-section-gap bg-surface-container-low overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-16 items-center">
          {/* Women's */}
          <div className="md:col-span-7 md:pr-gutter" data-aos="fade-right">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border border-secondary/10">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfKNMBjO3wdpKU496LyFZwiuBLJ5uBHSkeFfih6vW6f6w7eM4csIH8NBnYjU3a-PN4e8V9y5wn6D-ZyXCyjpjfa2iLBrfkomiAtaWwpMclDgBYvHrYNpc5AqqdTBiSPE1kmcoYxngRqW7CJJSK9UIsRZvA3paFwJijV4omdU0qiExg3qAPly7hgC27H69WWrsXfsbNUzo-o7jGaG1PA4HYUcrXCzN3-E4nSIqMcO4IOjY_3OtTU8tRVw3o9dHkhvXSYhYWDsJCbRVX"
                  alt="Women's Collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white p-8 md:p-12 border border-secondary/10 max-w-xs">
                <span className="font-label-caps text-label-caps text-secondary mb-2 block">AUTUMN '24</span>
                <h3 className="font-headline-md text-headline-md mb-4">WOMEN</h3>
                <Link to="/collection" className="font-label-caps text-label-caps gold-underline inline-block pb-1">EXPLORE COLLECTION</Link>
              </div>
            </div>
          </div>
          {/* Men's */}
          <div className="md:col-span-4 md:col-start-9" data-aos="fade-left">
            <div className="relative">
              <div className="aspect-[3/5] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL24rBdJ3N0j12mtEfG_t1MtUo4nzbGMxpUmAOD7ESkqEqwn82gVfRWOWTGBJmpdGFZ3TWUcqe3L6AcvxJRBobpArDg8bsD2MgGXFmLBvQgcc6EyHZ1Y4tjQhcOiFkCnSeyK6qEzXxC4K22u2DH-GyqeH0rfFNaScjKZK4fnCsRYYGIkibBAbb9jf7EstjoD4xQ5SVad4RvsVjbMLOF78wdQUxOzF84JLI35o9wlzpdQeTIoJhxoHnO6wYTnr5Dm9SMY6Jsg4rToRU"
                  alt="Men's Collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-8">
                <span className="font-label-caps text-label-caps text-secondary mb-2 block">CRAFTED FOR HIM</span>
                <h3 className="font-headline-md text-headline-md mb-4">MEN</h3>
                <Link to="/collection" className="font-label-caps text-label-caps gold-underline inline-block pb-1">VIEW LOOKBOOK</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Stylist Callout */}
      <section className="mt-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center max-w-2xl px-6">
          <div className="inline-flex items-center gap-3 mb-6 bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20 backdrop-blur-sm">
            <span className="material-symbols-outlined text-secondary text-[18px]">auto_awesome</span>
            <span className="font-label-caps text-[10px] tracking-widest text-secondary uppercase">The AI Intelligent Atelier</span>
          </div>
          <h2 className="font-headline-md text-display-lg-mobile md:text-[48px] mb-8 leading-tight">
            Your wardrobe, <br /><span className="italic font-normal">evolved</span> by intelligence.
          </h2>
          <p className="font-body-md text-body-lg text-on-surface-variant mb-10">
            Experience ELURE's proprietary AI Stylist—a digital curator that learns your aesthetic nuances to suggest pieces that transcend seasonal trends.
          </p>
          <Link
            to="/stylist"
            className="border border-secondary text-secondary px-10 py-4 font-label-caps text-label-caps tracking-[0.2em] transition-all duration-700 hover:bg-secondary hover:text-white inline-block"
          >
            DISCOVER YOUR STYLE
          </Link>
        </div>
      </section>

      {/* Editorial Quote */}
      <section className="mt-section-gap mb-section-gap text-center px-margin-mobile">
        <div className="max-w-4xl mx-auto border-t border-b border-secondary/20 py-24">
          <p className="font-headline-md italic text-headline-md md:text-4xl text-on-surface leading-relaxed">
            "Fashion is the armor to survive the reality of everyday life, but at ELURE, we believe it should be the soul's most intimate expression."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-secondary/40" />
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.3em]">The Editorial Team</span>
            <div className="h-[1px] w-12 bg-secondary/40" />
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
      <Footer />
    </>
  );
}
