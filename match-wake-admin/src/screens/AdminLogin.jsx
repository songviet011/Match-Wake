import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowLeft, AlertCircle, Shield } from 'lucide-react';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Mock API delay for premium feel
    setTimeout(() => {
      if (email === 'admin@matchwake.vn' && password === 'admin123') {
        localStorage.setItem('match_wake_admin_auth', 'true');
        if (rememberMe) {
          // Could save email to localStorage or flag
          localStorage.setItem('match_wake_admin_remember', 'true');
        }
        navigate('/admin');
      } else {
        setError('Email hoặc mật khẩu không đúng');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="relative min-h-screen bg-[#0d112c] text-[#dfe0ff] flex items-center justify-center p-5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[140px] bg-purple-600/10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[140px] bg-cyan-600/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[120px] bg-amber-500/5 pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }}/>

      <div className="relative w-full max-w-md z-10">
        
        {/* Back Link */}
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors mb-6 cursor-pointer group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Quay lại Landing Page
        </button>

        {/* Login Card */}
        <div className="rounded-3xl bg-white/5 border border-white/8 backdrop-blur-md p-8 shadow-2xl">
          
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-sky-500 items-center justify-center text-white font-black text-xl mb-4 shadow-lg shadow-purple-500/20">
              M
            </div>
            <h2 className="text-2xl font-black tracking-tight text-on-surface">Đăng nhập Admin</h2>
            <p className="text-xs text-on-surface-variant/80 mt-1.5">Truy cập bảng điều khiển quản trị hệ thống</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-5 flex items-start gap-2.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold animate-in fade-in duration-200">
              <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Admin</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
                <input
                  type="email"
                  required
                  placeholder="admin@matchwake.vn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-on-surface placeholder-on-surface-variant/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Mật khẩu</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-on-surface placeholder-on-surface-variant/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none text-on-surface-variant hover:text-on-surface transition-colors">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-white/5 border-white/10 text-purple-600 focus:ring-purple-500/50 focus:ring-offset-0 focus:outline-none cursor-pointer"
                />
                Ghi nhớ đăng nhập
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-sky-600 hover:opacity-95 text-white font-bold text-sm rounded-xl active:scale-98 transition-all shadow-lg shadow-purple-500/10 cursor-pointer flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Đang đăng nhập...
                </>
              ) : (
                'Đăng nhập'
              )}
            </button>
          </form>

        </div>

        {/* Footer info */}
        <div className="text-center mt-8 space-y-1">
          <p className="text-[10px] text-on-surface-variant/40 flex items-center justify-center gap-1">
            <Shield size={10} />
            Admin Console • Match & Wake
          </p>
          <p className="text-[10px] text-on-surface-variant/30">
            © 2026. Bảo mật cao cấp.
          </p>
        </div>

      </div>
    </div>
  );
}
