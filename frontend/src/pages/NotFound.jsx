import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-on-background px-6">
      <div className="text-center">
        <p className="font-display-lg text-6xl md:text-8xl tracking-tighter text-primary mb-6">ELURE</p>
        <p className="font-label-caps text-label-caps text-secondary mb-4">404 / PAGE NOT FOUND</p>
        <p className="font-body-lg text-on-surface-variant mb-8">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-white px-8 py-4 font-label-caps text-label-caps tracking-widest hover:bg-secondary transition-colors"
        >
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}
