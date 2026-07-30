import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const closetItems = [
  {
    id: 'coat',
    brand: 'STUDIO NICHOLSON',
    name: 'Laminar Overcoat',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz_we7wQ_NPVJe2jvYJusgzlJuDHvBDBl6VhB7hbjjQ2EbDb52Rf1ly-Q9dvi_8__90yhr8rQseVBOabS_fj2jFHgqb6v3eVP3PdnlIzOo2dFbO-dp3GEOMVnNWm_y8dRUCLhBAJn_5tU2Mn8mPPz1NSWoODRbvhDor41Ky1sQDj6x6sDREhsDOfPR_GFY0heQ28d58ahqdt3fj3HdjUo6mBwKej5xspPBfQyxBAZeH0LPYDoGRuhhuljAV95hMYX9DjdARezLVkqF',
  },
  {
    id: 'turtleneck',
    brand: 'ELURE ESSENTIALS',
    name: 'Cashmere Mock-Neck',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOsAOLeOQD_5GfPsN7Jgg5cTzY7FWjWuXgehJkRVHjp14snYhaBrLKmOHUOydvfzav1oHQFPfdYgzQTafAUhNr4r_i9DmvyyezzdnfjTctLIpVyfB0oyX3_j1ypiNmMJFECw0nuhUCWjAzV5omHuWKuI0r56JiKto2zFQpX9Kw5NRHRgY-9Rq9XJQeAU0uUvhcZ2PceiKc_MvuX0hnNBIDdxhLD3lhTJsz2fbdeD_3fNWSHjNt6IYwNIFR2-HXr472BxltPxnM5KGf',
  },
  {
    id: 'trousers',
    brand: 'THE ROW',
    name: 'Silk Crepe Trousers',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZysjcmmnLKYxpKam_LMxPRmZKXhxhRM4Ro3Ezrw4ymbSR38tEtau-JZRktta3I6Pnm1dmSrk1kSgX2wP6crDDl2-nD65CeciTOk58O8h-EzqQfxakdxG399fwmwtX308vfcfBYmqekD-oRRpoF7G62JLTXVBvKlKIay5b9wQ8sdafW1bxxdgh7ajUB7J4v-WCFB17wkwVyeyOvyADBb2QOlwxBWfYHzxif8yCe9RK-yxYKyA1tqk3-6lIPV_j_bJVoo7qVer1uDhI',
  },
  {
    id: 'tote',
    brand: 'ACNE STUDIOS',
    name: 'Cognac Leather Tote',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBs0VaQ1rIYyjfEnqG-F33NTQmRDniAeJCKHqehkvULSQdK5-Bn4iVs5V1sgRYvRB9Sl_p3QqziDfKl5CV_JRp_LsW5Cz66esZxlVOMPf5j88au-0nGAlTmPvXmxJYxcObL48RKnTihIzN7uKVFGqIhQfJgEYLGiOQW779TRHfRXgRbk2qz4SCO8BkVz2o5JZFixGqltGHgUEmuWFrjTjLa31NWpJbogacIq4_bs_3-mWTRfMzQ0tTpG7KXMuRipOgAVDrSLvcRpVT',
  },
];

const pairings = [
  { category: 'FOOTWEAR', name: 'Sleek Chelsea Boot', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGmQ-mqAEI1ViWWKs6cFMncH8S1CGnLGU-Pa_Wi6LqP-BR8TR0eRgQRieUvZ3rwcLJdGd-uFIyGzeXy_wAZ0lPlHw14InG8vUaC_LuQnVZ42OFqbCix_s-3b3nW8VdZaWn1WjBntW30IrUuqCYa_fJ89Tsf7-mke225I4VC93xEBs_owqTLmWvclN9cxIOZEzYC_LqR0MfqkFnVLxwEg3oT22XQyEEqI1h5tq9NE9eW3GQdHLZLLmP9pUrOwSPHxIqKMTV4Kyn15OD' },
  { category: 'ACCESSORIES', name: 'Raw Wool Scarf', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcRTz172gN1-y6RexWlY3CvVocmZZ91l_xKvWDSBXt2VoMt_2uTH9zvyI4tGFqma3ApQbAyDXBAT6UuRCmtO_QEKGRikh1NqkX_9rRqro3DrTWvQtlZFqDrTWvQtlZFqDrTWvQtlZF_GY0heQ28d58ahqdt3fj3HdjUo6mBwKej5xspPBfQyxBAZeH0LPYDoGRuhhuljAV95hMYX9DjdARezLVkqF-BYUdIRCb5INSqHrUg2h-hzppaRFPu_g4rrVmF4IhnXVDtO5cz2qwTyCpJo3E_19bDmv1sJKcjEBJpeWfZOzd8a--' },
  { category: 'TIMEPIECES', name: 'Metropolitan Dial', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaTuhwi5KTW3ijAbO8XXbAg0FsraPfd8lrQ_OVJUtX5A9kCHTXLaV_QaQzDAR7ihUiM6gYNzrK1TOf8CjJtmFSbBNhL8t6gY7lm7Kpo0X67LUROTeFX5tmmDjpQ5HcyyitqlwXosGhQh8e3QC621R_MkbIsdtZO43KcwM5uYqNx00csnP5rGPd512K1e5nnmfv_mkh7BFBS1tB62lzjB2y9PKhNCH2QeLJOIu8YyAiLSV_PmoHSeSb4EXrgs5oIpZKtqh10hRR062v' },
  { category: 'SHIRTS', name: 'Hidden Placket Silk', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRaKHM3yIC2ndSPwtHb1Pd_YaNYMu-C2XrzZ9hzV4Z8ybv33LjSm6yCVIPCSDo9GZurVMAvtMjyYe438bUZN6QcJtVHx6DHOdq6ea9Dh-G3mM-_YEbbxYZxUy6o1MLWgFhau25RvRJVIpVHISMW9Agcjye_8_vyiTM9zvJz1MoCjKeOETQmi9shnxjkFkjxK37Hi_csEpIXE79p3BfMaOZAmm34ncP25lZgiqJGrS8i6U6_UzQDsXMQeG3SGGHCVmXIqKLtYtyYpFa' },
];

export default function VirtualWardrobe() {
  const [selected, setSelected] = useState(new Set());

  const toggleItem = (id) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-secondary/30">
        <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-8">
            <Link to="/" className="font-display-lg text-[32px] tracking-tighter text-primary">ELURE</Link>
            
          </div>
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined cursor-pointer hover:text-secondary transition-all">search</button>
            <Link to="/account" className="material-symbols-outlined cursor-pointer text-secondary">person</Link>
            <Link to="/checkout" className="material-symbols-outlined cursor-pointer hover:text-secondary transition-all">shopping_bag</Link>
          </div>
        </div>
      </header>

      <main className="pt-[88px] min-h-screen">
        {/* Dashboard Header */}
        <section className="px-margin-desktop py-8 max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-secondary/20 pb-8">
            <div>
              <span className="font-label-caps text-label-caps text-secondary tracking-[0.3em]">MEMBER EXCLUSIVE</span>
              <h2 className="font-headline-md text-headline-md mt-2">Virtual Wardrobe</h2>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 border border-primary font-label-caps text-label-caps hover:bg-primary hover:text-white transition-all duration-500">
                UPLOAD PHOTO
              </button>
              <button className="px-6 py-2 bg-primary text-white font-label-caps text-label-caps hover:bg-secondary transition-all duration-500">
                SHARE OUTFIT
              </button>
            </div>
          </div>
        </section>

        {/* Main Workspace */}
        <section className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter pb-section-gap">
          {/* Left: Digital Closet */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-28 space-y-8">
              <div className="flex items-center justify-between border-b border-secondary/10 pb-4">
                <h3 className="font-label-caps text-label-caps">COLLECTIONS</h3>
                <span className="font-label-caps text-[10px] text-on-surface-variant">42 ITEMS</span>
              </div>
              {/* Filters */}
              <div className="flex gap-4 scrolling-hide overflow-x-auto whitespace-nowrap">
                {['ALL', 'OUTERWEAR', 'KNITWEAR', 'ACCESSORIES'].map((f, i) => (
                  <span
                    key={f}
                    className={`font-label-caps text-[11px] cursor-pointer transition-colors ${i === 0 ? 'text-secondary border-b border-secondary' : 'text-on-surface-variant hover:text-secondary'}`}
                  >
                    {f}
                  </span>
                ))}
              </div>
              {/* Grid */}
              <div className="grid grid-cols-2 gap-4">
                {closetItems.map(item => (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className="group cursor-pointer relative overflow-hidden bg-surface-container-low p-2 transition-all duration-700 hover:bg-white border border-transparent hover:border-secondary/20"
                  >
                    <div className="aspect-[3/4] bg-surface relative overflow-hidden">
                      <img src={item.src} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-secondary text-[18px]">add_circle</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="font-label-caps text-[10px] text-on-surface-variant">{item.brand}</p>
                      <p className="font-body-md text-[13px] leading-tight mt-1">{item.name}</p>
                    </div>
                    {selected.has(item.id) && (
                      <div className="absolute inset-0 border-2 border-secondary pointer-events-none" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center: Virtual Try-On Stage */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] md:aspect-[16/9] bg-surface-container overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[90%] aspect-[2/3] fade-in-up">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2lWUJBEMsoEmpAx4CxPRKHhaA4C6_AO7Z9hhy7hsyZ6NXQB9PEOmbc9VUDw3EZKnghpi7QBX_y2X8RfYzm21lHh11cNuBRTcieXGXNGKVz-I7xA9oSr56kr7_9xPB1mPW303w3ZbyAEtzT3ljgpQX6BoghiyaFLOLHv3uXv9ayrJpRJNe0v1X9dga6lC3rMIqN4KhAm0UWa7aqz4Lkqnxhldq6PRN3X1tdpttXHu_1J1EDLowv9x0g2Km1-NlwNlnSXL8uAj9nsyV"
                    alt="Digital avatar"
                    className="w-full h-full object-contain"
                  />
                  {selected.has('coat') && (
                    <div className="absolute inset-0 transition-opacity duration-700">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc5xxtn0r9axDiIjSc1d3IphW_9CyCyk5GKgzMfBYuD3TftwTmn7dHvGr5lP9H2-THa03yCoGvWcW9ezatWy_P3rityCDktUj2_WtRr1S42Kgrw8rcOZq3qJRQpfAUUjBmixdE2qs25WkUC1PXbpb3YTCHUhpYAf5Ptih0IdUNPBw2gUTCB54A6XkxwNSOYsdBIuVyK-u5KarFaJECfXAGasoeHf0Halc-X7h_Ihq6f0UapzRIwbkj-lB7F0j81ClojujMth2qspiC"
                        alt="Coat overlay"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* AI Insight */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="bg-white/80 blur-backdrop p-6 max-w-sm border border-secondary/10">
                  <span className="font-label-caps text-[10px] text-secondary block mb-1">AI INSIGHT</span>
                  <p className="font-body-md text-[14px] italic text-on-surface leading-relaxed">
                    "This silhouette balances the structured overcoat with fluid trousers, creating a confident, curated presence."
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: 'visibility', bg: 'bg-white', color: 'group-hover/btn:text-white' },
                    { icon: 'auto_awesome', bg: 'bg-white', color: 'group-hover/btn:text-white' },
                    { icon: 'favorite', bg: 'bg-primary text-white', color: '', filled: true },
                  ].map((btn, i) => (
                    <button
                      key={i}
                      className={`w-12 h-12 ${btn.bg} flex items-center justify-center hover:bg-secondary transition-all group/btn border border-secondary/10`}
                    >
                      <span
                        className={`material-symbols-outlined text-[20px] ${btn.color}`}
                        style={btn.filled ? { fontVariationSettings: '"FILL" 1' } : {}}
                      >
                        {btn.icon}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Layer Stack indicator */}
              <div className="absolute top-8 left-8 flex gap-6">
                <div className="flex flex-col gap-2">
                  <span className="font-label-caps text-[9px] tracking-widest text-on-surface-variant">LAYER STACK</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-secondary" />
                    <div className="w-8 h-1 bg-on-surface-variant/30" />
                    <div className="w-8 h-1 bg-on-surface-variant/30" />
                  </div>
                </div>
              </div>
            </div>

            {/* Styling Tools */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="p-6 bg-surface-container-lowest border border-secondary/10">
                <h4 className="font-label-caps text-label-caps mb-4">COLOR PALETTE</h4>
                <div className="flex gap-3">
                  {[
                    { bg: '#1A1A1A', ring: true },
                    { bg: '#E5E5E5', ring: false },
                    { bg: '#775a19', ring: false },
                    { bg: '#F5F3F3', ring: false },
                  ].map((c, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border border-secondary/30 ${c.ring ? 'ring-2 ring-secondary ring-offset-2' : ''}`}
                      style={{ backgroundColor: c.bg }}
                    />
                  ))}
                </div>
              </div>
              <div className="p-6 bg-surface-container-lowest border border-secondary/10">
                <h4 className="font-label-caps text-label-caps mb-4">FABRIC ANALYTICS</h4>
                <div className="space-y-3">
                  {[['Structure', '85%'], ['Breathability', '40%']].map(([label, pct]) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="font-body-md text-[12px]">{label}</span>
                      <div className="w-24 h-1 bg-surface-container">
                        <div className="h-full bg-secondary" style={{ width: pct }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-surface-container-lowest border border-secondary/10 flex flex-col justify-between">
                <h4 className="font-label-caps text-label-caps mb-4">TOTAL LOOK</h4>
                <p className="font-headline-md text-[24px]">$3,420</p>
                <Link
                  to="/checkout"
                  className="w-full mt-4 py-3 bg-primary text-white font-label-caps text-[11px] hover:bg-secondary transition-all text-center block"
                >
                  ADD ALL TO BAG
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Pairings */}
        <section className="px-margin-desktop py-section-gap max-w-container-max mx-auto bg-white">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-label-caps text-label-caps text-secondary tracking-widest">CURATED FOR YOU</span>
              <h3 className="font-headline-md text-headline-md mt-2">Recommended Pairings</h3>
            </div>
            <a href="#" className="font-label-caps text-label-caps border-b border-primary pb-1">VIEW ALL COMPLEMENTS</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {pairings.map(item => (
              <div key={item.name} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-surface relative overflow-hidden mb-4">
                  <img src={item.src} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <p className="font-label-caps text-[11px] text-on-surface-variant">{item.category}</p>
                <p className="font-body-md text-[15px] mt-1">{item.name}</p>
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
