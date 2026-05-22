import { useNavigate } from 'react-router-dom';
import StarryBackground from '../components/StarryBackground';

export default function Splash() {
  const navigate = useNavigate();

  const handleStart = () => {
    const container = document.getElementById('splash-container');
    if (container) {
      container.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
      container.style.transform = 'scale(1.05)';
      container.style.opacity = '0';
    }
    setTimeout(() => {
      navigate('/admin');
    }, 600);
  };

  const handleLogin = () => {
    navigate('/admin');
  };

  return (
    <div
      id="splash-container"
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden bg-background text-on-background"
    >
      {/* Atmospheric Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-tertiary-container rounded-full blur-[150px]"></div>
        <StarryBackground />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-md flex flex-col items-center text-center space-y-12">
        {/* Logo */}
        <div className="stagger-in flex flex-col items-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center float-animation">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl pulse-glow"></div>
            <div className="relative glass-card w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center overflow-hidden border-2 border-white/30">
              <img
                alt="Match & Wake Admin"
                className="w-32 h-32 md:w-44 md:h-44 z-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdrayz4wsOcBCrvhK_YoDw0bfRSyNhZpi_2TU3anpp6i7sAmkHiL5fgC_oaosrdZmbD1Mz5cekHWq91a9lO-fQ9rYakd0UvORVZ5k7i5VisFheA25rWwT-FaULRyDCn7RdK9Xq59smTADyScHjkM_AU80WM9pwrpT-kHxC1tujKx-jfp8x-YIdH_5ohAvORqWYrkZPP5RBT1yIokJZEQUbuBt0QpmsXj49av7Ui5-yk9kwFaZukw0e8U6XDwt6UNR4uy_i39cqBag"
              />
            </div>
          </div>
        </div>

        {/* Brand */}
        <div className="space-y-4">
          <h1 className="stagger-in delay-1 font-display-hero text-headline-lg-mobile md:text-display-hero bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent px-4">
            Match &amp; Wake
          </h1>
          <p className="stagger-in delay-2 font-body-xl text-body-xl text-on-surface-variant tracking-wide">
            Admin Dashboard · Quản trị hệ thống
          </p>
        </div>

        {/* CTA */}
        <div className="w-full space-y-4 pt-8 stagger-in delay-3">
          <button
            onClick={handleStart}
            className="w-full py-5 rounded-lg bg-gradient-to-r from-primary-container to-tertiary-container font-label-bold text-headline-lg-mobile text-white shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            Vào Admin Dashboard
          </button>
          <button
            onClick={handleLogin}
            className="w-full py-5 rounded-lg border border-outline/30 bg-white/5 backdrop-blur-md font-label-bold text-body-md text-on-surface hover:bg-white/10 transition-all cursor-pointer"
          >
            Đăng nhập Admin
          </button>
        </div>
      </main>
    </div>
  );
}
