import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

const links = [
  { label: 'COLLECTIONS', path: '/collection' },
  { label: 'FIT CHECK', path: '/fitcheck' },
  { label: 'AI STYLIST', path: '/stylist' },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Subscribe directly to items
  const items = useCartStore((state) => state.items);

  // Calculate total cart quantity
  const itemCount = items.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const isActive = (path) => {
    if (path === '/collection') {
      return (
        location.pathname.startsWith('/collection') ||
        location.pathname.startsWith('/product')
      );
    }

    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-secondary/30">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 gap-8">
          {links.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`font-label-caps text-label-caps transition-colors duration-500 ${
                isActive(path)
                  ? 'text-secondary border-b border-secondary font-semibold'
                  : 'text-on-surface-variant hover:text-secondary'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0 font-display-lg text-headline-md md:text-display-lg tracking-tighter text-primary"
        >
          ELURE
        </Link>

        {/* Right Icons */}
        <div className="flex-1 flex justify-end items-center gap-5 md:gap-6">

          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="material-symbols-outlined text-on-surface-variant hover:text-secondary transition-all duration-300"
          >
            search
          </button>

          {/* Account */}
          <Link
            to="/auth"
            aria-label="Account"
            className="material-symbols-outlined text-on-surface-variant hover:text-secondary transition-all duration-300"
          >
            person
          </Link>

          {/* Shopping Bag */}
          <Link
            to="/checkout"
            aria-label="Shopping bag"
            className="relative material-symbols-outlined text-on-surface-variant hover:text-secondary transition-all duration-300"
          >
            shopping_bag

            {/* Cart Badge */}
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden material-symbols-outlined text-on-surface-variant hover:text-secondary transition-colors"
          >
            {menuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden border-t border-secondary/20 bg-surface/95 backdrop-blur-md px-margin-mobile py-5">
          <div className="flex flex-col gap-5">
            {links.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`font-label-caps text-label-caps ${
                  isActive(path)
                    ? 'text-secondary font-semibold'
                    : 'text-on-surface-variant'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}