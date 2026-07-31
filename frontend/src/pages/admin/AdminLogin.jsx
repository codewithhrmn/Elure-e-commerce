import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Redirect if already logged in as admin
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) navigate('/admin/dashboard');
  }, [navigate]);

  // Subtle floating particles background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 40 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.15 + 0.05,
        opacity: Math.random() * 0.25 + 0.05,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = '#775a19';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.y -= p.speed;
        if (p.y < -10) p.y = canvas.height + 10;
      });
      animId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', init);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', init);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Invalid credentials');
        setLoading(false);
        return;
      }

      // Check if user is admin
      if (data.user?.role !== 'admin') {
        setError('Access denied — admin credentials required');
        setLoading(false);
        return;
      }

      // Store admin token separately
      localStorage.setItem('admin_token', data.access_token);
      localStorage.setItem('admin_user', JSON.stringify(data.user));

      navigate('/admin/dashboard');
    } catch {
      setError('Connection failed. Is the server running?');
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Glow orbs */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      {/* Corner accents */}
      <div className="fixed top-16 left-16 w-12 h-12 border-t border-l border-secondary/20 hidden md:block" style={{ zIndex: 1 }} />
      <div className="fixed top-16 right-16 w-12 h-12 border-t border-r border-secondary/20 hidden md:block" style={{ zIndex: 1 }} />
      <div className="fixed bottom-16 left-16 w-12 h-12 border-b border-l border-secondary/20 hidden md:block" style={{ zIndex: 1 }} />
      <div className="fixed bottom-16 right-16 w-12 h-12 border-b border-r border-secondary/20 hidden md:block" style={{ zIndex: 1 }} />

      {/* Login card */}
      <main
        className="relative w-full max-w-[450px] px-5 md:px-0 flex flex-col items-center"
        style={{ zIndex: 2, animation: 'fadeInUp 1s ease-out forwards' }}
      >
        {/* Brand */}
        <div className="mb-12 text-center">
          <h1
            className="text-white mb-2 tracking-tighter"
            style={{ fontFamily: 'Bodoni Moda, serif', fontSize: '56px', fontWeight: 600, lineHeight: 1.1 }}
          >
            ELURE
          </h1>
          <div className="flex items-center justify-center space-x-3">
            <span className="h-px w-8 bg-secondary/50" />
            <span
              className="text-secondary-fixed tracking-[0.3em] uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.3em' }}
            >
              Executive Portal
            </span>
            <span className="h-px w-8 bg-secondary/50" />
          </div>
        </div>

        {/* Security badge */}
        <div className="mb-8 px-4 py-1.5 border border-secondary rounded-full flex items-center gap-2 bg-secondary/5">
          <span className="material-symbols-outlined text-secondary" style={{ fontSize: '14px' }}>verified_user</span>
          <span
            className="text-secondary uppercase tracking-widest"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', fontWeight: 600 }}
          >
            Secure Executive Session
          </span>
        </div>

        {/* Error */}
        {error && (
          <div className="w-full mb-6 px-4 py-3 border border-error/40 bg-error/10 text-center">
            <span
              className="text-error"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.1em' }}
            >
              {error}
            </span>
          </div>
        )}

        {/* Form */}
        <form className="w-full space-y-10" onSubmit={handleSubmit}>
          {/* Admin ID / Email */}
          <div className="group relative">
            <label
              className="block uppercase mb-2 tracking-widest"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '10px',
                fontWeight: 600,
                color: 'rgba(119,90,25,0.7)',
                letterSpacing: '0.15em',
              }}
            >
              Admin ID
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@elure.com"
              required
              className="w-full bg-transparent border-b py-3 transition-all duration-500"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '15px',
                color: '#ffffff',
                borderBottom: '1px solid rgba(119,90,25,0.3)',
                outline: 'none',
              }}
              onFocus={e => { e.target.style.borderBottom = '1px solid #775a19'; }}
              onBlur={e => { e.target.style.borderBottom = '1px solid rgba(119,90,25,0.3)'; }}
            />
          </div>

          {/* Access Key / Password */}
          <div className="group relative">
            <label
              className="block uppercase mb-2 tracking-widest"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '10px',
                fontWeight: 600,
                color: 'rgba(119,90,25,0.7)',
                letterSpacing: '0.15em',
              }}
            >
              Access Key
            </label>
            <input
              type={showPass ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••••••"
              required
              className="w-full bg-transparent border-b py-3 pr-10 transition-all duration-500"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '15px',
                color: '#ffffff',
                borderBottom: '1px solid rgba(119,90,25,0.3)',
                outline: 'none',
              }}
              onFocus={e => { e.target.style.borderBottom = '1px solid #775a19'; }}
              onBlur={e => { e.target.style.borderBottom = '1px solid rgba(119,90,25,0.3)'; }}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-0 bottom-3 transition-colors"
              style={{ color: 'rgba(119,90,25,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#775a19'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(119,90,25,0.4)'}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                {showPass ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>

          {/* CTA */}
          <div className="pt-4 flex flex-col items-center gap-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-transparent text-white uppercase relative overflow-hidden group transition-all duration-500"
              style={{
                border: '1px solid #775a19',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
              }}
            >
              <span className="relative z-10">
                {loading ? 'Authenticating...' : 'Authorize Access'}
              </span>
              {/* Shimmer on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(119,90,25,0.2), transparent)',
                }}
              />
            </button>
          </div>
        </form>

        {/* Footer quote */}
        <div className="mt-24 opacity-30">
          <p
            className="text-center italic font-light leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', color: '#ffffff' }}
          >
            "Curation is the ultimate luxury."
          </p>
        </div>
      </main>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
