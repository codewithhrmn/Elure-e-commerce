import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    span: 'sm:col-span-2 lg:col-span-2',
    aspect: 'aspect-[16/9]',
    category: 'APPAREL',
    name: 'Liquid Silk Column Dress',
    price: '$2,450',
    badge: 'LIMITED',
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515829/product-1_fftlmq.jpg',
  },
  {
    id: 2,
    span: '',
    aspect: 'aspect-[3/4]',
    category: 'WATCHES',
    name: 'Nocturnal Horizon 40mm',
    price: '$8,900',
    badge: null,
    action: 'EXPLORE',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515822/product-31_wdkaom.jpg',
  },
  {
    id: 3,
    span: '',
    aspect: 'aspect-[3/4]',
    category: 'WOMEN',
    name: 'Liquid Silk Column Dress',
    price: '$1,800',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD7HiwRckXrsEq-1TExM8iXRysJOpzmN41hbvAAU55XeRiNdGNPNr5MpmTfyTLFRAchHfTImnyeZpAVy1nnsKv5tU5MH4XOPPaqpy4676jW5r3tusjAGZMzz18fQdgkXd_rJB8cHFqgnL4ZGt4expvFPxpQRtG7Sp4OQ0hLQQcLqCM3docK55tg8RFS-CGP4Zn_GzFyBzobNzjtxPqKkKabEsWToKTBhNmV_watSe8LeYD8E176-OVhr5FxhaV-T6TPHLWnUo3OAVm',
  },
  {
    id: 4,
    span: '',
    aspect: 'aspect-[3/4]',
    category: 'ACCESSORIES',
    name: 'Broderie Anglaise Tiered Sundress',
    price: '$3,200',
    badge: null,
    action: 'DETAILS',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515836/product-13_iu7q7n.jpg',
  },
  {
    id: 5,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$450',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515803/product-4_zdqcmg.jpg',
  },
  {
    id: 6,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$852',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515808/product-5_oqojha.jpg',
  
  },
  {
    id: 7,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$4508',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515806/product-6_j9sbpu.jpg',
  
  
  },
  {
    id: 8,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'Ivory White & Brushed Gold',
    price: '$4504',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515807/product-9_pemgsk.jpg',
  
  
  },
  {
    id: 9,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'Ivory White & Brushed Gold',
    price: '$412',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515833/product-12_izl7rw.jpg',
  
  
  },
  {
    id: 10,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'Ruched One-Shoulder Ivory Sculpt Gown',
    price: '$499',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515832/product-14_vgb8uw.jpg',
  
  
  },
  {
    id: 11,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$599',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515823/product-33_xaif1b.jpg',
  
  
  },
  {
    id: 12,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'Mid-Night Black Tailored Tuxedo Suit & Silk Tie Ensemble',
    price: '$699',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515814/product-22_gjyfte.jpg',
  
  
  },
  {
    id: 13,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$299',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515822/product-29_epna3s.jpg',
  
  
  },
  {
    id: 14,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$520',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515819/product-25_xofkla.jpg',
  
  
  },{
    id: 15,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$962',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515817/product-24_ifeito.jpg',
  
  
  },
  {
    id: 16,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'Nocturnal Horizon 40mm watch',
    price: '$850',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515838/product-16_dsqlyp.jpg',
  
  
  },
  {
    id: 17,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Royal Crown Architect Poplin Shirt',
    price: '$560',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515804/product-7_vsvgqh.jpg',
  
  
  },
  {
    id: 18,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'Draped Satin Tie-Waist Top & Tailored Trousers',
    price: '$356',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515836/product-15_wwhd8p.jpg',
  
  
  },
  {
id: 19,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'Monogram Sculpt Bowling Bag',
    price: '$526',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515804/product-8_nguapz.jpg',
  
  
  },
  {
    id: 20,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'Tailored Black Two-Piece Suit & Classic White Dress Shirt',
    price: '$652',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515814/product-20_px4r5x.jpg',
  
  
  },
  {
    id: 21,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$458',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515829/product-34_mnvdvt.jpg',
  
  
  },
  {
    id: 22,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$459',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515829/product-28_n3qex9.jpg',
  
  
  },
  {
    id: 23,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$421',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515816/product-23_oxd2md.jpg',
  
  
  },
  {
    id: 24,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$632',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515839/product-17_wkwcev.jpg',
  
  
  },
  {
  id: 25,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$958',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515491/cld-sample-5.jpg',
  
  
  },
  {
    id: 26,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$985',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515477/samples/ecommerce/analog-classic.jpg',
  
  
  },
  {
    id: 27,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$999',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515833/product-32_socn8o.jpg',
  
  
  },
  {
    id: 28,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$899',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515831/product-11_op1t8x.jpg',
  
  
  },
  {
    id: 29,
    span: 'sm:mt-12',
    aspect: 'aspect-[3/4]',
    category: 'APPAREL',
    name: 'The Architect Poplin Shirt',
    price: '$2588',
    badge: null,
    action: 'QUICK VIEW',
    src: 'https://res.cloudinary.com/e8wyohlx/image/upload/v1785515815/product-26_xkmjhq.jpg',
  
  }
];

export default function Collection() {
  const [stylistOpen, setStylistOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('article[data-observe]').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-background text-on-background font-body-md">
      {/* Nav */}
      

      <main className="pt-32 pb-section-gap">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          {/* Page Header */}
          <header className="mb-16">
            <h1 className="font-display-lg text-display-lg mb-2">The Collection</h1>
            <div className="hairline-divider w-24 mb-4" />
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl italic font-serif">
              Curated essentials for the modern aesthetic. Where precision craftsmanship meets artificial intelligence.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            {/* Sidebar */}
            <aside className="md:col-span-3 sticky top-32 h-[calc(100vh-160px)] overflow-y-auto sidebar-scroll pr-4">
              <div className="space-y-10">
                {/* Category */}
                <section>
                  <h3 className="font-label-caps text-label-caps mb-6 text-on-background">CATEGORY</h3>
                  <ul className="space-y-3">
                    {['MEN', 'WOMEN'].map(c => (
                      <li key={c}><a href="#" className="text-on-surface-variant hover:text-secondary transition-colors">{c}</a></li>
                    ))}
                  </ul>
                </section>
                <div className="hairline-divider opacity-10" />
                {/* AI Curation */}
                <section className="bg-surface-container-low p-6 border-l-2 border-secondary">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
                    <h3 className="font-label-caps text-label-caps text-secondary">AI CURATION</h3>
                  </div>
                  <p className="text-[13px] text-on-surface-variant leading-relaxed mb-4">Based on your recent aesthetic profile, we recommend tailoring your view.</p>
                  <button
                    onClick={() => setStylistOpen(true)}
                    className="w-full bg-primary text-on-primary py-2 font-label-caps text-[10px] tracking-[0.2em] transition-all hover:bg-secondary"
                  >
                    ACTIVATE STYLIST
                  </button>
                </section>
                {/* Size */}
                <section>
                  <h3 className="font-label-caps text-label-caps mb-6 text-on-background">SIZE</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {['XS', 'S', 'M', 'L', 'XL'].map((s, i) => (
                      <button
                        key={s}
                        className={`border py-2 font-label-caps text-[10px] hover:border-secondary transition-colors ${i === 1 ? 'border-secondary bg-secondary text-white' : 'border-outline-variant'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </section>
                {/* Color */}
                <section>
                  <h3 className="font-label-caps text-label-caps mb-6 text-on-background">TONALITY</h3>
                  <div className="flex flex-wrap gap-3">
                    {['#000000', '#ffffff', '#D4AF37', '#4A4A4A'].map((c, i) => (
                      <button
                        key={c}
                        className={`w-6 h-6 rounded-full border border-outline ring-offset-2 ring-1 ring-transparent hover:ring-secondary ${i === 1 ? 'ring-secondary' : ''}`}
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </section>
                {/* Occasion */}
                <section>
                  <h3 className="font-label-caps text-label-caps mb-6 text-on-background">OCCASION / INTENT</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'GALA & SOIRÉE', checked: false },
                      { label: 'ARCHITECTURAL DAILY', checked: true },
                      { label: 'RESORT ELEGANCE', checked: false },
                    ].map(item => (
                      <label key={item.label} className="flex items-center gap-3 cursor-pointer group">
                        <input defaultChecked={item.checked} type="checkbox" className="h-4 w-4 border-outline-variant" style={{ accentColor: '#775a19' }} />
                        <span className="font-label-caps text-[11px] text-on-surface-variant group-hover:text-secondary">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </section>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="md:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-20">
                {products.map(p => (
                  <article key={p.id} data-observe className={`group transition-all duration-1000 ease-out ${p.span}`}>
                    <div className={`product-image-container relative ${p.aspect} overflow-hidden bg-surface-container mb-6 cursor-pointer`}>
                      <Link to={`/product/${p.id}`}>
                        <img
                          src={p.src}
                          alt={p.name}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="hover-overlay opacity-0 absolute inset-0 bg-black/5 flex items-center justify-center transition-opacity duration-500">
                          <button className="bg-white text-black px-8 py-3 font-label-caps text-[10px] tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            {p.action}
                          </button>
                        </div>
                      </Link>
                      {p.badge && (
                        <span className="absolute top-6 left-6 bg-secondary text-white font-label-caps text-[10px] px-3 py-1">{p.badge}</span>
                      )}
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-label-caps text-label-caps mb-1 tracking-widest text-secondary">{p.category}</h4>
                        <h3 className="font-headline-md text-[20px] mb-2">{p.name}</h3>
                        <p className="font-body-md text-on-surface-variant">{p.price}</p>
                      </div>
                      <button className="text-on-surface-variant hover:text-secondary transition-colors">
                        <span className="material-symbols-outlined">favorite</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-section-gap flex flex-col items-center">
                <div className="hairline-divider max-w-[200px] mb-8" />
                <button className="group flex flex-col items-center gap-4">
                  <span className="font-label-caps text-label-caps tracking-[0.4em] text-on-surface-variant group-hover:text-secondary transition-colors">LOAD MORE PIECES</span>
                  <span className="material-symbols-outlined text-secondary animate-bounce">expand_more</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      

      {/* AI Stylist Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full md:w-96 bg-surface z-[100] transition-transform duration-700 ease-in-out border-l border-secondary/20 shadow-2xl ${stylistOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-label-caps text-label-caps text-secondary">AI STYLIST</h2>
            <button className="text-on-surface-variant hover:text-primary transition-colors" onClick={() => setStylistOpen(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="flex-grow">
            <div className="bg-surface-container-low p-6 mb-8 italic font-serif text-lg leading-relaxed">
              "I am analyzing your preference for structured silhouettes and monochrome palettes..."
            </div>
            <div className="space-y-6">
              <p className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">CURRENT RECOMMENDATIONS</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-surface-container">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7PwOGPclNpNotS8s3HEhbIq-fGy2TPAn80m68Vg3td5ytZxVj-nGPVMHTBGgnYiyHl2IplSzJl-ExXqTAPbkw9zaFZRM2N31TZx36jvrnKrHcl3uCFzOUcP2tFjeh7atKwnZcftjMMr1QYY003hajMGUSIr0oCSytRUQN_QZLKpneK60TjbtZu4PPhaU7B3SEqW5ojXYRX7guYgqQJUGoapVFHjSut6NyZrb_Ufl1i758Bx0T0FZ1vgrQT5O83LWtkNq8CBwlVc7" alt="recommendation" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] bg-surface-container">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAregCLfmOM2faC8TPUULFFiuCXbu0Fy1LQdHWNiXVIY-rI_4HiUvDIMF8vOKpqdNGzrGFsB9MD6TCcOsuJzN3TJpTxPWQ3tzk-RkBlBj32SwqAFDMgwOK46S2cvtYMjpygMkg2_bDTundCN-DFG7IAOhC9Dru7wTqiRtAsm6wSN8BeAcTv8NEWl2mrrlryBhAJxUD4etbiQ0Cx7Gm1QN4nJoqHIPoTBdCamQ3TaT65Wnt4LYAvQCAFXQJLyxA8z4ScrZtFbhYlChAt" alt="recommendation" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          <button className="w-full bg-primary text-on-primary py-4 font-label-caps text-[12px] tracking-[0.2em] transition-all hover:bg-secondary">
            REQUEST CUSTOM EDIT
          </button>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
