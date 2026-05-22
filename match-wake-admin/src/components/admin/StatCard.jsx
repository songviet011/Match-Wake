// StatCard.jsx - Component thẻ thống kê Dashboard
import { Users, AlarmClock, TrendingUp, Music, Flag } from 'lucide-react';

const iconMap = {
  users: Users,
  alarm: AlarmClock,
  'trending-up': TrendingUp,
  music: Music,
  flag: Flag,
};

const colorMap = {
  primary: {
    icon: 'text-purple-300',
    iconBg: 'bg-purple-500/15',
    bar: 'bg-purple-400',
    barGlow: 'shadow-[0_0_8px_rgba(192,132,252,0.6)]',
    accent: 'from-purple-500/40',
    positive: 'text-emerald-400',
    negative: 'text-red-400',
  },
  secondary: {
    icon: 'text-sky-300',
    iconBg: 'bg-sky-500/15',
    bar: 'bg-sky-400',
    barGlow: 'shadow-[0_0_8px_rgba(56,189,248,0.6)]',
    accent: 'from-sky-500/40',
    positive: 'text-emerald-400',
    negative: 'text-red-400',
  },
  success: {
    icon: 'text-emerald-300',
    iconBg: 'bg-emerald-500/15',
    bar: 'bg-emerald-400',
    barGlow: 'shadow-[0_0_8px_rgba(52,211,153,0.6)]',
    accent: 'from-emerald-500/40',
    positive: 'text-emerald-400',
    negative: 'text-red-400',
  },
  tertiary: {
    icon: 'text-amber-300',
    iconBg: 'bg-amber-500/15',
    bar: 'bg-amber-400',
    barGlow: 'shadow-[0_0_8px_rgba(251,191,36,0.6)]',
    accent: 'from-amber-500/40',
    positive: 'text-emerald-400',
    negative: 'text-red-400',
  },
  error: {
    icon: 'text-red-300',
    iconBg: 'bg-red-500/15',
    bar: 'bg-red-400',
    barGlow: 'shadow-[0_0_8px_rgba(248,113,113,0.6)]',
    accent: 'from-red-500/40',
    positive: 'text-emerald-400',
    negative: 'text-red-400',
  },
};

export default function StatCard({ stat }) {
  const IconComp = iconMap[stat.icon] || Users;
  const c = colorMap[stat.color] || colorMap.primary;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/8 transition-all duration-200 group">
      {/* Top accent gradient bar */}
      <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${c.accent} to-transparent`} />

      <div className="flex justify-between items-start mb-4">
        <div className={`w-11 h-11 ${c.iconBg} rounded-xl flex items-center justify-center`}>
          <IconComp size={20} className={c.icon} />
        </div>
        <span className={`text-xs font-bold ${stat.changePositive ? c.positive : c.negative}`}>
          {stat.change}
        </span>
      </div>

      <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">
        {stat.label}
      </p>
      <div className="text-3xl font-extrabold text-on-surface">{stat.value}</div>

      <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full ${c.bar} ${c.barGlow} rounded-full transition-all duration-700`}
          style={{ width: `${stat.progress}%` }}
        />
      </div>
    </div>
  );
}
