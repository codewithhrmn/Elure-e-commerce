import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const bgCanvasRef = useRef(null);
  const navigate = useNavigate();

  // Floating particles background
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 30 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1 + 0.5,
        speed: Math.random() * 0.2 + 0.1,
        opacity: Math.random() * 0.3,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#a38b5d';
      particles.forEach(p => {
        ctx.globalAlpha = p.opacity;
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

  const togglePass = (inputId) => {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
  };

  const handleAuth = (e) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'AUTHENTICATING...';
      btn.style.opacity = '0.7';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'SUCCESS';
        btn.style.background = '#a38b5d';
        setTimeout(() => navigate('/'), 800);
      }, 1500);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Particle canvas background */}
      <canvas
        ref={bgCanvasRef}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
      />

      <div className={`auth-container${isSignUp ? ' right-panel-active' : ''}`} style={{ position: 'relative', zIndex: 1 }}>

        {/* Sign Up Form */}
        <div className="form-container sign-up-container flex items-center justify-center p-12">
          <form className="w-full max-w-sm" onSubmit={handleAuth}>
            <h1 className="font-display-lg text-4xl mb-2 text-primary font-medium" style={{ fontFamily: 'Bodoni Moda, serif' }}>Create Account</h1>
            <p className="font-body-md text-xs tracking-widest text-gray-400 mb-10 uppercase">Experience the art of curation</p>
            <div className="input-group">
              <input id="signup-name" type="text" placeholder=" " required />
              <label htmlFor="signup-name">Full Name</label>
            </div>
            <div className="input-group">
              <input id="signup-email" type="email" placeholder=" " required />
              <label htmlFor="signup-email">Email Address</label>
            </div>
            <div className="input-group">
              <input id="signup-password" type="password" placeholder=" " required />
              <label htmlFor="signup-password">Password</label>
              <span
                className="material-symbols-outlined password-toggle text-sm"
                onClick={() => togglePass('signup-password')}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && togglePass('signup-password')}
              >visibility</span>
            </div>
            <div className="mt-8">
              <button type="submit" className="btn-luxury">Sign Up</button>
            </div>
            <div className="mt-6 md:hidden text-center">
              <p className="text-[10px] tracking-widest text-gray-400 uppercase">
                Already have an account?{' '}
                <span className="cursor-pointer" style={{ color: '#a38b5d' }} onClick={() => setIsSignUp(false)}>Login</span>
              </p>
            </div>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container flex items-center justify-center p-12">
          <form className="w-full max-w-sm" onSubmit={handleAuth}>
            <h1 className="font-display-lg text-4xl mb-2 text-primary font-medium" style={{ fontFamily: 'Bodoni Moda, serif' }}>Welcome Back</h1>
            <p className="font-body-md text-xs tracking-widest text-gray-400 mb-10 uppercase">Continue your aesthetic journey</p>
            <div className="input-group">
              <input id="login-email" type="email" placeholder=" " required />
              <label htmlFor="login-email">Email Address</label>
            </div>
            <div className="input-group">
              <input id="login-password" type="password" placeholder=" " required />
              <label htmlFor="login-password">Password</label>
              <span
                className="material-symbols-outlined password-toggle text-sm"
                onClick={() => togglePass('login-password')}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && togglePass('login-password')}
              >visibility</span>
            </div>
            <div className="text-right -mt-4 mb-8">
              <a href="#" className="text-[10px] tracking-widest text-gray-400 uppercase" style={{ transition: 'color 0.3s' }}>Forgot Password?</a>
            </div>
            <button type="submit" className="btn-luxury">Sign In</button>
            <div className="mt-6 md:hidden text-center">
              <p className="text-[10px] tracking-widest text-gray-400 uppercase">
                New to Elure?{' '}
                <span className="cursor-pointer" style={{ color: '#a38b5d' }} onClick={() => setIsSignUp(true)}>Create Account</span>
              </p>
            </div>
          </form>
        </div>

        {/* Sliding Overlay */}
        <div className="overlay-container hidden md:block">
          <div className="overlay">
            {/* Dark gradient background */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }} />
            <div className="overlay-panel overlay-left">
              <h2 className="text-4xl mb-6 font-light italic text-white" style={{ fontFamily: 'Bodoni Moda, serif' }}>Member?</h2>
              <p className="text-sm tracking-widest leading-relaxed opacity-70 mb-10 text-white font-body-md">
                Access your curated collection and personal stylist settings.
              </p>
              <button className="btn-outline" onClick={() => setIsSignUp(false)}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h2 className="text-4xl mb-6 font-light italic text-white" style={{ fontFamily: 'Bodoni Moda, serif' }}>New Here?</h2>
              <p className="text-sm tracking-widest leading-relaxed opacity-70 mb-10 text-white font-body-md">
                Join our exclusive community of high-end design enthusiasts.
              </p>
              <button className="btn-outline" onClick={() => setIsSignUp(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
