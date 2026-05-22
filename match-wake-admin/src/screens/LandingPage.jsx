// LandingPage.jsx - Landing Page giới thiệu Match & Wake
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu, X, Download, Play, ChevronRight, ChevronDown,
  Zap, Users, Flame, Shield, Music2, Trophy,
  Star, ArrowRight, Check,
} from 'lucide-react';

// ── Styles helpers ────────────────────────────────────────────
const GRAD_TEXT  = 'bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent';
const GLASS_CARD = 'bg-white/5 border border-white/8 backdrop-blur-sm';
const BTN_PRIMARY = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-container to-inverse-primary text-white font-bold text-sm hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-purple-500/20';
const BTN_GHOST   = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-on-surface font-bold text-sm hover:bg-white/8 active:scale-95 transition-all duration-200';

// ── NAVBAR ────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { label: 'Tính năng', href: '#features' },
    { label: 'Cách hoạt động', href: '#how-it-works' },
    { label: 'Xếp hạng', href: '#stats' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollTo = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/6"
         style={{ background: 'rgba(13,17,44,0.85)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('#hero')}
          className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-container to-inverse-primary flex items-center justify-center text-white font-black text-sm shadow-lg">
            M
          </div>
          <span className="font-extrabold text-lg text-on-surface tracking-tight">Match &amp; Wake</span>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className="px-4 py-2 text-sm text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-lg transition-all">
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button className={BTN_GHOST} onClick={() => scrollTo('#cta')}>
            <Download size={15}/> Tải app
          </button>
          <button
            className="px-4 py-2 text-sm font-bold text-secondary border border-secondary/30 rounded-xl hover:bg-secondary/10 transition-all"
            onClick={() => navigate('/admin')}>
            Admin →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 rounded-lg hover:bg-white/8" onClick={() => setOpen(!open)}>
          {open ? <X size={20} className="text-on-surface"/> : <Menu size={20} className="text-on-surface"/>}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/6 px-5 py-4 space-y-1"
             style={{ background: 'rgba(13,17,44,0.97)' }}>
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className="w-full text-left px-4 py-3 text-sm text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-lg transition-all">
              {l.label}
            </button>
          ))}
          <div className="flex gap-3 pt-3 border-t border-white/6">
            <button className={BTN_PRIMARY + ' flex-1 justify-center'} onClick={() => { setOpen(false); scrollTo('#cta'); }}>
              <Download size={15}/> Tải app
            </button>
            <button className="px-4 py-2 text-sm font-bold text-secondary border border-secondary/30 rounded-xl hover:bg-secondary/10 transition-all"
              onClick={() => { setOpen(false); navigate('/admin'); }}>
              Admin
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ── HERO ─────────────────────────────────────────────────────
function HeroSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const badges = [
    { text: 'Streak 8 ngày 🔥', color: 'from-orange-500/20 to-amber-500/20', border: 'border-amber-500/30', pos: 'top-6 -left-6 md:-left-12' },
    { text: 'Đã ghép cặp 🎉', color: 'from-purple-500/20 to-purple-700/20', border: 'border-purple-500/30', pos: 'top-24 -right-6 md:-right-14' },
    { text: '06:30 AM ⏰', color: 'from-sky-500/20 to-cyan-500/20', border: 'border-sky-500/30', pos: 'bottom-24 -left-6 md:-left-14' },
    { text: 'Gửi meme 📣', color: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/30', pos: 'bottom-6 -right-6 md:-right-12' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[140px]"
             style={{ background: 'rgba(160,120,255,0.18)' }}/>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-[120px]"
             style={{ background: 'rgba(76,215,246,0.12)' }}/>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full blur-[100px]"
             style={{ background: 'rgba(255,183,131,0.1)' }}/>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
               style={{ background: 'rgba(76,215,246,0.12)', border: '1px solid rgba(76,215,246,0.25)', color: '#4cd7f6' }}>
            ⚡ Ứng dụng báo thức xã hội #1 Gen Z
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-on-surface">Dậy sớm</span>
            <br/>
            <span className={GRAD_TEXT}>không còn cô đơn</span>
          </h1>

          <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Match & Wake giúp bạn ghép cặp với người có cùng giờ thức dậy, cùng chiến đấu với buồn ngủ, gửi meme gọi nhau dậy và tích lũy streak mỗi ngày.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button className={BTN_PRIMARY + ' text-base px-8 py-4'} onClick={() => scrollTo('#cta')}>
              <Download size={18}/> Tải app ngay
            </button>
            <button className={BTN_GHOST + ' text-base px-8 py-4'} onClick={() => scrollTo('#how-it-works')}>
              <Play size={18}/> Xem demo
            </button>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
            {['12,480+ người dùng', 'iOS & Android', 'Miễn phí'].map(t => (
              <div key={t} className="flex items-center gap-1.5 text-sm text-on-surface-variant">
                <Check size={14} className="text-emerald-400 flex-shrink-0"/>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Phone mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-64 md:w-72">
            {/* Floating badges */}
            {badges.map(b => (
              <div key={b.text}
                className={`absolute ${b.pos} z-20 px-3 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md whitespace-nowrap bg-gradient-to-r ${b.color} border ${b.border} text-on-surface shadow-lg`}>
                {b.text}
              </div>
            ))}

            {/* Phone frame */}
            <div className="relative mx-auto w-64 rounded-[2.5rem] p-2 shadow-2xl"
                 style={{ background: 'linear-gradient(135deg, rgba(160,120,255,0.3), rgba(76,215,246,0.2))', border: '2px solid rgba(255,255,255,0.15)' }}>
              <div className="w-full rounded-[2rem] overflow-hidden"
                   style={{ background: '#0d112c', minHeight: '500px' }}>
                {/* Status bar */}
                <div className="flex justify-between items-center px-5 py-3 text-[10px] text-on-surface-variant">
                  <span>06:30</span>
                  <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
                </div>

                {/* Content */}
                <div className="px-4 pb-6 space-y-4">
                  {/* Alarm card */}
                  <div className="rounded-2xl p-4 text-center"
                       style={{ background: 'linear-gradient(135deg, rgba(208,188,255,0.15), rgba(76,215,246,0.1))', border: '1px solid rgba(208,188,255,0.2)' }}>
                    <p className="text-6xl font-black text-on-surface mb-1">06:30</p>
                    <p className="text-xs text-on-surface-variant">Giờ dậy của bạn</p>
                  </div>

                  {/* Partner card */}
                  <div className="rounded-2xl p-3 flex items-center gap-3"
                       style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                      M
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-on-surface">Ẩn danh DTU</p>
                      <p className="text-[10px] text-emerald-400">Đã dậy ✅</p>
                    </div>
                    <span className="text-[10px] text-secondary font-bold">VS</span>
                  </div>

                  {/* Status */}
                  <div className="rounded-xl px-3 py-2 text-center"
                       style={{ background: 'rgba(76,215,246,0.1)', border: '1px solid rgba(76,215,246,0.2)' }}>
                    <p className="text-xs font-bold text-secondary">⚡ BẠN ĐÃ DẬY TRƯỚC!</p>
                  </div>

                  {/* Meme buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    {['📣 Gọi dậy', '🦁 Gầm rú', '🚨 Cấp cứu', '🏫 Đi học'].map(m => (
                      <div key={m} className="rounded-xl p-2 text-center text-[10px] font-bold text-on-surface"
                           style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        {m}
                      </div>
                    ))}
                  </div>

                  {/* CTA button */}
                  <button className="w-full py-3 rounded-xl text-sm font-extrabold text-white"
                          style={{ background: 'linear-gradient(135deg, #a078ff, #4cd7f6)' }}>
                    TÔI ĐÃ DẬY 🚀
                  </button>
                </div>
              </div>
            </div>

            {/* Glow under phone */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-20 rounded-full blur-2xl -z-10"
                 style={{ background: 'rgba(160,120,255,0.35)' }}/>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── PROBLEM SECTION ───────────────────────────────────────────
function ProblemSection() {
  const pains = [
    { emoji: '⏰', title: 'Đặt 5 cái báo thức', desc: 'Tắt hết rồi lại ngủ tiếp, cứ như vòng lặp vô tận mỗi sáng.' },
    { emoji: '😰', title: 'Trễ ca học, đi làm muộn', desc: 'Thức dậy muộn khiến cả ngày trở nên căng thẳng và mất kiểm soát.' },
    { emoji: '🥺', title: 'Tự hứa, không ai nhắc', desc: 'Hứa với bản thân mỗi tối nhưng buổi sáng chẳng ai đốc thúc.' },
    { emoji: '😴', title: 'Báo thức quá nhàm chán', desc: 'Tiếng beep-beep quen thuộc đã không còn hiệu quả từ lâu rồi.' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-3">Vấn đề quen thuộc</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">
            Bạn có đang gặp cảnh này<br/>
            <span className={GRAD_TEXT}>mỗi sáng không?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pains.map(p => (
            <div key={p.title}
                 className={`${GLASS_CARD} rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-200`}>
              <div className="text-4xl mb-4">{p.emoji}</div>
              <h3 className="font-bold text-on-surface mb-2">{p.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SOLUTION SECTION ──────────────────────────────────────────
function SolutionSection() {
  const features = [
    'Ghép cặp ẩn danh cùng giờ dậy',
    'Báo thức đồng bộ hai người',
    'Gửi meme/âm thanh gọi đồng đội',
    'Tích lũy streak và điểm uy tín',
    'Bảng xếp hạng chiến thần dậy sớm',
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full blur-[120px]"
             style={{ background: 'rgba(76,215,246,0.1)' }}/>
      </div>

      <div className="relative max-w-5xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <p className="text-tertiary text-sm font-bold uppercase tracking-widest mb-3">Giải pháp</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-5">
              Biến việc thức dậy thành
              <span className={' ' + GRAD_TEXT}> một kèo vui</span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Match & Wake không chỉ báo thức, mà còn biến buổi sáng thành một mini game xã hội.
              Bạn được ghép cặp với người cùng giờ dậy, cùng xác nhận và cổ vũ nhau bằng meme.
            </p>

            <ul className="space-y-3">
              {features.map(f => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                       style={{ background: 'rgba(76,215,246,0.2)' }}>
                    <Check size={13} className="text-secondary"/>
                  </div>
                  <span className="text-on-surface font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual card */}
          <div className="flex justify-center">
            <div className={`${GLASS_CARD} rounded-3xl p-8 max-w-sm w-full`}
                 style={{ background: 'linear-gradient(135deg, rgba(160,120,255,0.1), rgba(76,215,246,0.06))' }}>
              <div className="space-y-4">
                {/* Match info */}
                <div className="rounded-2xl p-4"
                     style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-xs text-on-surface-variant mb-2">Kèo hôm nay</p>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-black border-2 border-surface-container-high">B</div>
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-xs font-black border-2 border-surface-container-high">M</div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Bạn & Minh Anh</p>
                      <p className="text-xs text-on-surface-variant">Dậy lúc 06:30</p>
                    </div>
                  </div>
                </div>

                {/* Streak */}
                <div className="flex gap-3">
                  <div className="flex-1 rounded-xl p-3 text-center"
                       style={{ background: 'rgba(255,183,131,0.12)', border: '1px solid rgba(255,183,131,0.25)' }}>
                    <p className="text-2xl font-extrabold text-tertiary">8</p>
                    <p className="text-[10px] text-on-surface-variant">Ngày streak 🔥</p>
                  </div>
                  <div className="flex-1 rounded-xl p-3 text-center"
                       style={{ background: 'rgba(76,215,246,0.12)', border: '1px solid rgba(76,215,246,0.25)' }}>
                    <p className="text-2xl font-extrabold text-secondary">97</p>
                    <p className="text-[10px] text-on-surface-variant">Điểm uy tín</p>
                  </div>
                  <div className="flex-1 rounded-xl p-3 text-center"
                       style={{ background: 'rgba(208,188,255,0.12)', border: '1px solid rgba(208,188,255,0.25)' }}>
                    <p className="text-2xl font-extrabold text-primary">#5</p>
                    <p className="text-[10px] text-on-surface-variant">Xếp hạng</p>
                  </div>
                </div>

                {/* Badge */}
                <div className="rounded-xl px-4 py-2 text-center"
                     style={{ background: 'rgba(208,188,255,0.1)', border: '1px solid rgba(208,188,255,0.2)' }}>
                  <p className="text-xs font-bold text-primary">✨ Chiến thần kỷ luật 🏆</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── HOW IT WORKS ──────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    { num: '01', emoji: '⏰', title: 'Đặt kèo thức dậy', desc: 'Chọn giờ dậy, ngày lặp lại và chế độ ghép cặp mong muốn.' },
    { num: '02', emoji: '🤝', title: 'Ghép đồng đội', desc: 'Hệ thống tìm người có cùng giờ thức dậy trong cùng khu vực/trường.' },
    { num: '03', emoji: '🚀', title: 'Cùng thức dậy', desc: 'Đến giờ, cả hai nhận báo thức và bấm "TÔI ĐÃ DẬY" để xác nhận.' },
    { num: '04', emoji: '📣', title: 'Gửi meme & streak', desc: 'Người dậy trước gửi meme gọi người còn lại, cả hai nhận điểm và streak.' },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Cách hoạt động</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">
            Match & Wake hoạt động
            <span className={' ' + GRAD_TEXT}> như thế nào?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
               style={{ background: 'linear-gradient(90deg, transparent, rgba(208,188,255,0.4), rgba(76,215,246,0.4), transparent)' }}/>

          {steps.map((s, i) => (
            <div key={s.num} className={`${GLASS_CARD} rounded-2xl p-6 text-center relative hover:-translate-y-1 transition-transform duration-200`}>
              {/* Step number */}
              <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center text-xs font-black"
                   style={{ background: 'linear-gradient(135deg, rgba(160,120,255,0.3), rgba(76,215,246,0.2))', border: '1px solid rgba(208,188,255,0.3)', color: '#d0bcff' }}>
                {s.num}
              </div>
              <div className="text-3xl mb-3">{s.emoji}</div>
              <h3 className="font-bold text-on-surface mb-2">{s.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FEATURES SECTION ──────────────────────────────────────────
function FeaturesSection() {
  const features = [
    { icon: Users, color: '#d0bcff', bg: 'rgba(208,188,255,0.12)', border: 'rgba(208,188,255,0.2)', title: 'Match & Wake', desc: 'Ghép cặp ẩn danh với người có cùng giờ dậy trong cùng môi trường học/làm.' },
    { icon: Zap, color: '#4cd7f6', bg: 'rgba(76,215,246,0.12)', border: 'rgba(76,215,246,0.2)', title: 'Wake Battle', desc: 'Gửi meme và âm thanh siêu hài để gọi đồng đội dậy khi họ đang ngủ quên.' },
    { icon: Flame, color: '#ffb783', bg: 'rgba(255,183,131,0.12)', border: 'rgba(255,183,131,0.2)', title: 'Streak System', desc: 'Duy trì chuỗi ngày dậy đúng giờ liên tiếp để mở khóa badge và đặc quyền.' },
    { icon: Shield, color: '#4ade80', bg: 'rgba(74,222,128,0.12)', border: 'rgba(74,222,128,0.2)', title: 'Reputation Score', desc: 'Điểm uy tín phản ánh độ kỷ luật của bạn — đừng để nó về 0!' },
    { icon: Music2, color: '#f472b6', bg: 'rgba(244,114,182,0.12)', border: 'rgba(244,114,182,0.2)', title: 'Meme Sound Library', desc: 'Kho âm thanh meme độc đáo được mở khóa theo streak. Hơn 20+ âm thanh.' },
    { icon: Trophy, color: '#fbbf24', bg: 'rgba(251,191,36,0.12)', border: 'rgba(251,191,36,0.2)', title: 'Ranking', desc: 'Bảng xếp hạng chiến thần dậy sớm — bạn đứng ở đâu trong trường?' },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-[130px]"
             style={{ background: 'rgba(160,120,255,0.1)' }}/>
      </div>

      <div className="relative max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-tertiary text-sm font-bold uppercase tracking-widest mb-3">Tính năng</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">
            Tất cả những gì bạn cần để
            <span className={' ' + GRAD_TEXT}> dậy đúng giờ</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(f => {
            const Icon = f.icon;
            return (
              <div key={f.title}
                   className="rounded-2xl p-6 hover:-translate-y-1 transition-all duration-200 group"
                   style={{ background: f.bg, border: `1px solid ${f.border}` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                     style={{ background: `${f.bg}`, border: `1px solid ${f.border}` }}>
                  <Icon size={20} style={{ color: f.color }}/>
                </div>
                <h3 className="font-bold text-on-surface mb-2 group-hover:text-white transition-colors">{f.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── APP DEMO SECTION ──────────────────────────────────────────
function AppDemoSection() {
  const screens = [
    {
      title: 'Home Dashboard',
      color: '#d0bcff',
      content: (
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[10px] text-on-surface-variant">Chào buổi sáng!</p>
              <p className="text-sm font-bold text-on-surface">Sẵn sàng chiến chưa?</p>
            </div>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500"/>
          </div>
          <div className="rounded-xl p-3 text-center" style={{ background: 'rgba(208,188,255,0.1)', border: '1px solid rgba(208,188,255,0.2)' }}>
            <p className="text-2xl font-black text-on-surface">06:30</p>
            <p className="text-[9px] text-on-surface-variant">Kèo hôm nay</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {['🔥 8 ngày', '🛡️ 97 điểm', '#5 xếp hạng', '📣 18 meme'].map(s => (
              <div key={s} className="rounded-lg p-2 text-center text-[9px] font-bold text-on-surface" style={{ background: 'rgba(255,255,255,0.05)' }}>{s}</div>
            ))}
          </div>
          <button className="w-full py-2 rounded-xl text-[10px] font-bold text-white" style={{ background: 'linear-gradient(135deg, #a078ff, #4cd7f6)' }}>
            Đặt kèo mới ⚡
          </button>
        </div>
      )
    },
    {
      title: 'Alarm Ringing',
      color: '#ffb4ab',
      content: (
        <div className="p-4 space-y-3">
          <div className="text-center">
            <p className="text-3xl font-black text-on-surface">06:30</p>
            <p className="text-[10px] text-on-surface-variant">⏰ Báo thức đang rung...</p>
          </div>
          <div className="rounded-xl p-3 flex items-center gap-2" style={{ background: 'rgba(255,180,171,0.1)', border: '1px solid rgba(255,180,171,0.25)' }}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex-shrink-0"/>
            <div>
              <p className="text-[10px] font-bold text-on-surface">Kèo với Minh Anh</p>
              <p className="text-[9px] text-emerald-400">Đối thủ đang đợi bạn!</p>
            </div>
          </div>
          <div className="space-y-2">
            <button className="w-full py-2.5 rounded-xl text-[11px] font-extrabold text-white" style={{ background: 'linear-gradient(135deg, #4ade80, #22d3ee)' }}>
              TÔI ĐÃ DẬY 🚀
            </button>
            <button className="w-full py-2 rounded-xl text-[10px] text-on-surface-variant" style={{ background: 'rgba(255,255,255,0.05)' }}>
              Báo lại 5 phút
            </button>
          </div>
        </div>
      )
    },
    {
      title: 'Wake Battle',
      color: '#4cd7f6',
      content: (
        <div className="p-4 space-y-3">
          <div className="text-center">
            <div className="inline-flex px-3 py-1 rounded-full text-[9px] font-bold" style={{ background: 'rgba(76,215,246,0.15)', border: '1px solid rgba(76,215,246,0.25)', color: '#4cd7f6' }}>
              ⚡ BẠN ĐÃ DẬY TRƯỚC!
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mx-auto mb-1 flex items-center justify-center text-white font-black">B</div>
              <p className="text-[9px] text-emerald-400">Đã dậy ✅</p>
            </div>
            <span className="text-xs font-bold text-on-surface-variant">VS</span>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 mx-auto mb-1 flex items-center justify-center text-white font-black">M</div>
              <p className="text-[9px] text-red-400">Đang ngủ 💤</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {['📣 Gọi dậy', '🦁 Gầm rú', '🚨 Cấp cứu', '🏫 Đi học'].map(m => (
              <div key={m} className="rounded-lg p-2 text-center text-[9px] font-bold text-on-surface" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>{m}</div>
            ))}
          </div>
          <p className="text-center text-[9px] text-secondary font-bold">Còn 3 lượt gọi đồng đội</p>
        </div>
      )
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-3">App Demo</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">
            Trải nghiệm
            <span className={' ' + GRAD_TEXT}> app mobile</span>
          </h2>
          <p className="text-on-surface-variant mt-3 max-w-xl mx-auto">Giao diện đẹp, mượt mà, và thân thiện với người dùng Gen Z.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-end">
          {screens.map((screen, i) => (
            <div key={screen.title}
                 className={`flex-1 max-w-[200px] mx-auto ${i === 1 ? 'md:-translate-y-4' : ''}`}>
              <p className="text-center text-xs font-bold text-on-surface-variant mb-3">{screen.title}</p>
              <div className="rounded-[2rem] p-1.5 shadow-2xl relative"
                   style={{ background: `linear-gradient(135deg, ${screen.color}50, rgba(13,17,44,0.5))`, border: `1px solid ${screen.color}40` }}>
                <div className="rounded-[1.7rem] overflow-hidden" style={{ background: '#111527', minHeight: '360px' }}>
                  {/* Notch */}
                  <div className="h-5 flex justify-center items-end pb-1">
                    <div className="w-16 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}/>
                  </div>
                  {screen.content}
                </div>
              </div>
              {/* Reflection */}
              <div className="h-8 mx-4 rounded-b-full blur-xl mt-1" style={{ background: `${screen.color}25` }}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── VIRAL / TIKTOK SECTION ────────────────────────────────────
function ViralSection() {
  const cards = [
    { emoji: '😂', title: 'Khi tôi gặp đúng đứa ngủ nướng', desc: 'Gửi 3 lần meme Báo thức cấp cứu mà vẫn không thấy phản hồi...', tag: '24K views' },
    { emoji: '💪', title: 'Thử thách 7 ngày dậy sớm cùng người lạ', desc: 'Ngày 1 khó nhất. Đến ngày 7 thì không cần ai gọi nữa luôn.', tag: '58K views' },
    { emoji: '🌅', title: 'Gửi meme gọi dậy lúc 6 giờ sáng', desc: 'Tiếng Gầm rú lúc 6h sáng nghe như đang ở trong rừng nhiệt đới.', tag: '31K views' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[140px]"
             style={{ background: 'rgba(255,183,131,0.1)' }}/>
      </div>

      <div className="relative max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-tertiary text-sm font-bold uppercase tracking-widest mb-3">Viral Content</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">
            Sinh ra để
            <span className={' ' + GRAD_TEXT}> viral</span>
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto leading-relaxed">
            Những khoảnh khắc gọi bạn dậy bằng meme, bị đồng đội bỏ rơi, hay giữ streak 7 ngày liên tiếp đều có thể trở thành content vui nhộn trên TikTok.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map(c => (
            <div key={c.title}
                 className={`${GLASS_CARD} rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-200`}>
              <div className="text-3xl mb-4">{c.emoji}</div>
              <h3 className="font-bold text-on-surface mb-2">{c.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{c.desc}</p>
              <span className="text-xs font-bold text-tertiary">📱 TikTok · {c.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── STATS SECTION ─────────────────────────────────────────────
function StatsSection() {
  const stats = [
    { value: '12,480+', label: 'Người dùng', emoji: '👤' },
    { value: '84.6%', label: 'Tỷ lệ dậy đúng giờ', emoji: '⏰' },
    { value: '8,942', label: 'Meme đã gửi', emoji: '📣' },
    { value: '1,238', label: 'Kèo hôm nay', emoji: '🤝' },
  ];

  return (
    <section id="stats" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-5">
        <div className="rounded-3xl p-10 text-center"
             style={{ background: 'linear-gradient(135deg, rgba(160,120,255,0.1), rgba(76,215,246,0.08), rgba(255,183,131,0.06))', border: '1px solid rgba(208,188,255,0.15)' }}>
          <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest mb-8">Số liệu thực tế</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.label}>
                <div className="text-2xl mb-2">{s.emoji}</div>
                <p className={`text-3xl md:text-4xl font-extrabold ${GRAD_TEXT} mb-1`}>{s.value}</p>
                <p className="text-sm text-on-surface-variant">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── TESTIMONIALS ──────────────────────────────────────────────
function TestimonialsSection() {
  const reviews = [
    { quote: 'Nhờ app này mình không trễ ca 1 nữa. Biết có người đang đợi nên không dám tắt báo thức nữa.', name: 'Chiến thần ca 1', school: 'Duy Tân University', stars: 5 },
    { quote: 'Gửi meme gọi bạn dậy vui thật sự! Sáng nào cũng cười trước khi rửa mặt. Recommend 10/10.', name: 'Sinh viên DTU', school: 'FPT Polytechnic', stars: 5 },
    { quote: 'Có người cùng dậy nên bớt lười hơn hẳn. Streak 14 ngày rồi mà chưa muốn dừng.', name: 'Người từng ngủ nướng', school: 'Đại học Đà Nẵng', stars: 5 },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Người dùng nói gì</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">
            Họ đã
            <span className={' ' + GRAD_TEXT}> thay đổi thói quen</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map(r => (
            <div key={r.name} className={`${GLASS_CARD} rounded-2xl p-6`}>
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400"/>
                ))}
              </div>
              <p className="text-on-surface leading-relaxed mb-5 text-sm">"{r.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">{r.name}</p>
                  <p className="text-xs text-on-surface-variant">{r.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ SECTION ───────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: 'Match & Wake có miễn phí không?', a: 'Hoàn toàn miễn phí! Bạn có thể dùng đầy đủ tính năng ghép cặp, báo thức, và gửi meme cơ bản. Một số âm thanh Premium cần đạt streak nhất định để mở khóa.' },
    { q: 'Tôi có thể ghép với bạn bè không?', a: 'Hiện tại hệ thống ghép ngẫu nhiên ẩn danh, ưu tiên cùng trường. Tính năng ghép với bạn bè sẽ được cập nhật trong phiên bản tới.' },
    { q: 'Nếu đối phương ngủ quên thì sao?', a: 'Bạn sẽ nhận được thông báo và có thể gửi meme để gọi họ dậy. Nếu họ vẫn không dậy, bạn vẫn nhận điểm thưởng vì đã giữ đúng kèo.' },
    { q: 'App có chạy trên Android và iOS không?', a: 'Có! Match & Wake hỗ trợ cả Android và iOS. Bạn có thể tải trực tiếp từ Google Play Store hoặc Apple App Store.' },
    { q: 'Âm thanh meme có tùy chỉnh được không?', a: 'Bạn có thể mở khóa thêm nhiều âm thanh meme bằng cách duy trì streak. Hiện tại có hơn 20 âm thanh, bao gồm cả các âm thanh Premium độc quyền.' },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-2xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">
            Câu hỏi
            <span className={' ' + GRAD_TEXT}> thường gặp</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className={`${GLASS_CARD} rounded-2xl overflow-hidden transition-all duration-200`}>
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-semibold text-on-surface pr-4">{f.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-on-surface-variant flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}/>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-on-surface-variant leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FINAL CTA ─────────────────────────────────────────────────
function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[160px]"
             style={{ background: 'linear-gradient(135deg, rgba(160,120,255,0.15), rgba(76,215,246,0.12))' }}/>
      </div>

      <div className="relative max-w-3xl mx-auto px-5 text-center">
        <div className="rounded-3xl p-12"
             style={{ background: 'linear-gradient(135deg, rgba(160,120,255,0.12), rgba(76,215,246,0.08))', border: '1px solid rgba(208,188,255,0.2)' }}>
          <p className="text-5xl mb-6">🚀</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4">
            Sẵn sàng thắng
            <br/>
            <span className={GRAD_TEXT}>cơn buồn ngủ chưa?</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Tham gia Match & Wake và biến mỗi buổi sáng thành một kèo vui cùng đồng đội.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={BTN_PRIMARY + ' text-base px-8 py-4'}>
              <Download size={18}/> Tải app ngay
            </button>
            <button className={BTN_GHOST + ' text-base px-8 py-4'} onClick={() => navigate('/admin')}>
              <ArrowRight size={18}/> Xem Admin Demo
            </button>
          </div>
          <p className="text-on-surface-variant text-xs mt-6">Miễn phí · iOS & Android · Không cần thẻ tín dụng</p>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────
function Footer() {
  const navigate = useNavigate();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/6 py-12">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-container to-inverse-primary flex items-center justify-center text-white font-black text-sm">
                M
              </div>
              <span className="font-extrabold text-lg text-on-surface">Match &amp; Wake</span>
            </div>
            <p className="text-sm text-on-surface-variant max-w-xs">Dậy sớm không còn cô đơn</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: 'Tính năng', action: () => scrollTo('#features') },
              { label: 'Cách hoạt động', action: () => scrollTo('#how-it-works') },
              { label: 'Chính sách riêng tư', action: () => {} },
              { label: 'Liên hệ', action: () => {} },
              { label: 'Admin', action: () => navigate('/admin') },
            ].map(l => (
              <button key={l.label} onClick={l.action}
                className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-on-surface-variant">© 2026 Match &amp; Wake. All rights reserved.</p>
          <div className="flex gap-4">
            {['🎵 TikTok', '📸 Instagram', '💬 Discord'].map(s => (
              <button key={s} className="text-xs text-on-surface-variant hover:text-on-surface transition-colors">{s}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── MAIN LANDING PAGE ─────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="relative bg-background text-on-background min-h-screen overflow-x-hidden">
      {/* Subtle grid overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] -z-10"
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }}/>

      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <AppDemoSection />
      <ViralSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
