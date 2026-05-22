// AdminSidebar.jsx - Sidebar điều hướng Admin Dashboard
import {
  LayoutDashboard,
  Users,
  Handshake,
  Music2,
  Flag,
  Settings,
  LogOut,
  ChevronRight,
} from 'lucide-react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'users', label: 'Người dùng', icon: Users },
  { id: 'matches', label: 'Kèo ghép cặp', icon: Handshake },
  { id: 'sounds', label: 'Âm thanh meme', icon: Music2 },
  { id: 'reports', label: 'Báo cáo', icon: Flag },
  { id: 'settings', label: 'Cài đặt', icon: Settings },
];

export default function AdminSidebar({ activeTab, onTabChange }) {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 flex flex-col bg-surface-container-high border-r border-white/8 z-50">
      {/* Brand */}
      <div className="px-6 pt-8 pb-8">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-sky-500 flex items-center justify-center text-sm font-black text-white shadow-lg">
            M
          </div>
          <h1 className="font-extrabold text-lg text-on-surface tracking-tight">Match &amp; Wake</h1>
        </div>
        <p className="text-[10px] font-bold text-on-surface-variant/50 tracking-[0.2em] uppercase pl-11">
          Admin Console
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group text-left
                ${isActive
                  ? 'bg-sky-500/15 text-sky-300 border border-sky-500/25'
                  : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface border border-transparent'
                }`}
            >
              <Icon
                size={18}
                className={`transition-colors ${isActive ? 'text-sky-400' : 'text-on-surface-variant group-hover:text-on-surface'}`}
              />
              <span className="flex-1">{label}</span>
              {isActive && <ChevronRight size={14} className="text-sky-400 opacity-70" />}
            </button>
          );
        })}
      </nav>

      {/* Admin Profile */}
      <div className="px-4 pb-6 pt-4 border-t border-white/6 mt-auto">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-all group cursor-pointer">
          <div className="relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAW8EXl__RY-WfSqyxh5TXNt8jJSDNER08-SyCjr9fa_hAOXFuqu5KPyZixhlhFfFeou9cGwuEMDpTLz203dftlVHmljC96MPCrfPIWzItPiO5SHNdR8IJDUGGNTXSlmZzjUa0UJYsocjaxYrTNUdkspwUPHZV9id4jVEgvSJXrCoSGph0R7qLUktapTa1WW-X-QFMDHlb74GdbcxCvIrGdecNvMGV20-XqLFD6U_3wHt685LfR6X5supwmBowAAqQsL0GoWvk5cU"
              alt="Admin"
              className="w-9 h-9 rounded-full border-2 border-sky-500/50 object-cover"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-surface-container-high rounded-full" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-on-surface truncate">Admin Nhân</p>
            <p className="text-[11px] text-on-surface-variant truncate">admin@matchwake.vn</p>
          </div>
          <LogOut size={15} className="text-on-surface-variant opacity-50 group-hover:opacity-100 group-hover:text-red-400 transition-all flex-shrink-0" />
        </div>
        <p className="text-center text-[9px] text-on-surface-variant/30 tracking-[0.2em] uppercase mt-3">
          Version 1.0.2
        </p>
      </div>
    </aside>
  );
}
