import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full mt-section-gap bg-surface-container-low border-t border-secondary/20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        <div className="md:col-span-4 space-y-8">
          <h2 className="font-display-lg text-display-lg text-primary">ELURE</h2>
          <p className="font-body-md text-on-surface-variant max-w-sm">
            Redefining luxury through the intersection of artisanal mastery and algorithmic precision.
          </p>
          <div className="flex gap-4">
            {['public', 'shopping_bag', 'mail'].map((icon) => (
              <a key={icon} href="#" className="w-10 h-10 flex items-center justify-center border border-secondary/20 text-on-surface hover:text-secondary hover:border-secondary transition-all">
                <span className="material-symbols-outlined text-[20px]">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="font-label-caps text-label-caps text-primary">NAVIGATE</h4>
          <ul className="space-y-3">
            <li><Link to="/collection" className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors">COLLECTIONS</Link></li>
            <li><Link to="/stylist" className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors">AI TECHNOLOGY</Link></li>
            <li><Link to="/fitcheck" className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors">FIT CHECK</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="font-label-caps text-label-caps text-primary">SUPPORT</h4>
          <ul className="space-y-3">
            {['SHIPPING', 'RETURNS', 'CONCIERGE', 'CONTACT'].map((label) => (
              <li key={label}>
                <a href="#" className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 space-y-6">
          <h4 className="font-label-caps text-label-caps text-primary">ELURE JOURNAL</h4>
          <p className="font-body-md text-on-surface-variant">Sign up for exclusive previews and AI-curated trend reports.</p>
          <form className="relative group" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              placeholder="ENTER EMAIL ADDRESS"
              className="w-full bg-transparent border-b border-on-surface/30 focus:border-secondary outline-none py-3 font-label-caps text-[10px] tracking-widest placeholder:text-on-surface-variant/50 transition-all duration-500"
            />
            <button type="submit" className="absolute right-0 bottom-3 font-label-caps text-label-caps text-secondary group-hover:translate-x-2 transition-transform duration-500">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="px-margin-mobile md:px-margin-desktop py-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-4 max-w-container-max mx-auto">
        <span className="font-label-caps text-[10px] text-on-tertiary-fixed-variant">© 2026 ELURE. THE ART OF CURATION.</span>
        <div className="flex gap-8">
          <a href="#" className="font-label-caps text-[10px] text-on-tertiary-fixed-variant hover:text-secondary transition-colors">PRIVACY POLICY</a>
          <a href="#" className="font-label-caps text-[10px] text-on-tertiary-fixed-variant hover:text-secondary transition-colors">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
}
