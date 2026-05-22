// DashboardScreen.jsx - Màn hình Admin Dashboard chính với 6 tabs
import { useState, useMemo } from 'react';
import {
  Search, Bell, Calendar, Download, Plus, Play, Edit3,
  ToggleLeft, ToggleRight, Eye, AlertTriangle, Lock, Unlock,
  CheckCircle, XCircle, Filter, Save, RotateCcw,
} from 'lucide-react';
import AdminSidebar from '../components/admin/AdminSidebar';
import StatCard from '../components/admin/StatCard';
import StatusBadge from '../components/admin/StatusBadge';
import BarChart from '../components/admin/BarChart';
import ProgressCircle from '../components/admin/ProgressCircle';
import {
  stats, weeklyAlarmActivity, wakeRate, systemLogs, recentMatches,
  users, matches, memeSounds, reports, reportStats, settings as defaultSettings,
} from '../data/adminMockData';

const tabTitles = {
  dashboard: 'Tổng quan hệ thống',
  users: 'Quản lý người dùng',
  matches: 'Quản lý kèo ghép cặp',
  sounds: 'Quản lý âm thanh meme',
  reports: 'Báo cáo & Kiểm duyệt',
  settings: 'Cài đặt hệ thống',
};

const tabSubtitles = {
  dashboard: 'Chào buổi sáng, Admin. Đây là những gì đang diễn ra hôm nay.',
  users: 'Theo dõi tài khoản, streak và trạng thái hoạt động.',
  matches: 'Theo dõi các phiên Match & Wake mỗi ngày.',
  sounds: 'Quản lý kho âm thanh gọi đồng đội dậy.',
  reports: 'Xử lý report từ người dùng và kiểm duyệt nội dung.',
  settings: 'Cấu hình thông số hoạt động của hệ thống.',
};

// ============================================================
// TAB: DASHBOARD
// ============================================================
function DashboardTab() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        {stats.map(stat => <StatCard key={stat.id} stat={stat} />)}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/8 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-base font-extrabold text-on-surface">Hoạt động báo thức 7 ngày</h3>
              <p className="text-xs text-on-surface-variant mt-1">Số lượt báo thức mỗi ngày trong tuần</p>
            </div>
            <span className="text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1.5 rounded-lg">
              Tuần này
            </span>
          </div>
          <BarChart data={weeklyAlarmActivity} />
        </div>

        {/* Progress Circles */}
        <div className="rounded-2xl bg-white/5 border border-white/8 p-6 flex flex-col">
          <div className="mb-6">
            <h3 className="text-base font-extrabold text-on-surface">Tỷ lệ thức dậy</h3>
            <p className="text-xs text-on-surface-variant mt-1">Dậy đúng giờ vs Ngủ quên</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            <ProgressCircle value={wakeRate.onTime} label="Dậy đúng giờ" color="#4ade80" size={160} />
            <div className="flex gap-6 text-center">
              <div>
                <p className="text-2xl font-extrabold text-emerald-400">{wakeRate.onTime}%</p>
                <p className="text-xs text-on-surface-variant">Đúng giờ</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-2xl font-extrabold text-red-400">{wakeRate.missed}%</p>
                <p className="text-xs text-on-surface-variant">Ngủ quên</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Logs */}
        <div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/8 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/6">
            <h3 className="text-base font-extrabold text-on-surface">Hoạt động hệ thống</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-xs font-bold text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-colors">
                Lọc log
              </button>
              <button className="px-3 py-1.5 text-xs font-bold text-on-surface-variant bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                Xuất CSV
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/3 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                  <th className="text-left px-6 py-3">Thời gian</th>
                  <th className="text-left px-6 py-3">Sự kiện</th>
                  <th className="text-left px-6 py-3">Đối tượng</th>
                  <th className="text-left px-6 py-3">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/4">
                {systemLogs.map(log => (
                  <tr key={log.id} className="hover:bg-white/3 transition-colors">
                    <td className="px-6 py-3 text-on-surface-variant font-mono text-xs">{log.time}</td>
                    <td className="px-6 py-3 font-semibold text-on-surface">{log.event}</td>
                    <td className="px-6 py-3 text-on-surface-variant text-xs">{log.user}</td>
                    <td className="px-6 py-3"><StatusBadge status={log.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Matches */}
        <div className="rounded-2xl bg-white/5 border border-white/8 overflow-hidden">
          <div className="px-6 py-4 border-b border-white/6">
            <h3 className="text-base font-extrabold text-on-surface">Match gần đây</h3>
          </div>
          <div className="divide-y divide-white/4">
            {recentMatches.map(match => (
              <div key={match.id} className="px-5 py-3 hover:bg-white/3 transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-sm font-bold text-on-surface">{match.userA} & {match.userB}</p>
                  <StatusBadge status={match.result} />
                </div>
                <p className="text-xs text-on-surface-variant">⏰ {match.wakeTime} · {match.date}</p>
              </div>
            ))}
          </div>
          <div className="p-4">
            <button className="w-full py-2.5 bg-white/5 border border-white/10 text-on-surface-variant text-xs font-bold rounded-xl hover:bg-white/10 transition-colors">
              Xem tất cả
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// TAB: NGƯỜI DÙNG
// ============================================================
function UsersTab({ onShowToast }) {
  const [search, setSearch] = useState('');
  const [schoolFilter, setSchoolFilter] = useState('all');
  const [userList, setUserList] = useState(users);

  const schools = ['all', 'Duy Tân University', 'Đại học Đà Nẵng', 'FPT Polytechnic', 'Khác'];

  const filtered = useMemo(() => {
    return userList.filter(u => {
      const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase());
      const matchSchool = schoolFilter === 'all' || u.school === schoolFilter;
      return matchSearch && matchSchool;
    });
  }, [search, schoolFilter, userList]);

  const handleAction = (userId, action) => {
    if (action === 'lock') {
      setUserList(prev => prev.map(u => {
        if (u.id === userId) {
          const newStatus = u.status === 'locked' ? 'active' : 'locked';
          onShowToast(newStatus === 'locked' ? `Đã khóa tài khoản của ${u.name}` : `Đã mở khóa tài khoản của ${u.name}`, 'warning');
          return { ...u, status: newStatus };
        }
        return u;
      }));
    } else if (action === 'warn') {
      setUserList(prev => prev.map(u => {
        if (u.id === userId) {
          onShowToast(`Đã gửi cảnh báo tới người dùng ${u.name}`, 'warning');
          return { ...u, status: 'warning' };
        }
        return u;
      }));
    } else if (action === 'view') {
      const targetUser = userList.find(u => u.id === userId);
      onShowToast(`Xem chi tiết người dùng: ${targetUser ? targetUser.name : userId}`, 'info');
    }
  };

  return (
    <div className="space-y-5">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên hoặc email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-sky-500/50 transition-colors"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {schools.map(s => (
            <button
              key={s}
              onClick={() => setSchoolFilter(s)}
              className={`px-3 py-2.5 text-xs font-bold rounded-xl border transition-all whitespace-nowrap
                ${schoolFilter === s
                  ? 'bg-sky-500/15 text-sky-300 border-sky-500/30'
                  : 'bg-white/5 text-on-surface-variant border-white/10 hover:bg-white/10'
                }`}
            >
              {s === 'all' ? 'Tất cả' : s}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-on-surface-variant hover:bg-white/10 transition-colors whitespace-nowrap">
          <Download size={14} /> Xuất danh sách
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white/5 border border-white/8 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/3 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                <th className="text-left px-4 py-3">ID</th>
                <th className="text-left px-4 py-3">Tên</th>
                <th className="text-left px-4 py-3">Email</th>
                <th className="text-left px-4 py-3">Trường</th>
                <th className="text-center px-4 py-3">Streak</th>
                <th className="text-center px-4 py-3">Đúng giờ</th>
                <th className="text-center px-4 py-3">Uy tín</th>
                <th className="text-center px-4 py-3">Trạng thái</th>
                <th className="text-center px-4 py-3">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/4">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center py-12 text-on-surface-variant">
                    Không tìm thấy người dùng phù hợp
                  </td>
                </tr>
              ) : filtered.map(u => (
                <tr key={u.id} className="hover:bg-white/3 transition-colors">
                  <td className="px-4 py-3 text-on-surface-variant font-mono text-xs">{u.id}</td>
                  <td className="px-4 py-3 font-semibold text-on-surface">{u.name}</td>
                  <td className="px-4 py-3 text-on-surface-variant text-xs">{u.email}</td>
                  <td className="px-4 py-3 text-on-surface-variant text-xs">{u.school}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-amber-400 font-bold">🔥 {u.streak}</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <div className="w-14 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${u.wakeRate}%` }} />
                      </div>
                      <span className="text-xs text-on-surface-variant">{u.wakeRate}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center font-bold text-purple-300">{u.reputation}</td>
                  <td className="px-4 py-3 text-center"><StatusBadge status={u.status} /></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-1">
                      <button onClick={() => handleAction(u.id, 'view')}
                        className="p-1.5 rounded-lg text-on-surface-variant hover:text-sky-400 hover:bg-sky-500/10 transition-all" title="Xem">
                        <Eye size={14} />
                      </button>
                      <button onClick={() => handleAction(u.id, 'warn')}
                        className="p-1.5 rounded-lg text-on-surface-variant hover:text-amber-400 hover:bg-amber-500/10 transition-all" title="Cảnh cáo">
                        <AlertTriangle size={14} />
                      </button>
                      <button onClick={() => handleAction(u.id, 'lock')}
                        className={`p-1.5 rounded-lg transition-all ${u.status === 'locked'
                          ? 'text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20'
                          : 'text-on-surface-variant hover:text-red-400 hover:bg-red-500/10'}`}
                        title={u.status === 'locked' ? 'Mở khóa' : 'Khóa'}>
                        {u.status === 'locked' ? <Unlock size={14} /> : <Lock size={14} />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// TAB: KÈO GHÉP CẶP
// ============================================================
function MatchesTab() {
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'both_awake', label: 'Cả hai cùng dậy' },
    { id: 'one_awake', label: 'Chỉ một người dậy' },
    { id: 'both_failed', label: 'Cả hai ngủ quên' },
    { id: 'pending', label: 'Đang chờ' },
  ];

  const filtered = filter === 'all' ? matches : matches.filter(m => m.result === filter);

  return (
    <div className="space-y-5">
      {/* Filter pills */}
      <div className="flex gap-2 flex-wrap">
        {filters.map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 text-xs font-bold rounded-full border transition-all
              ${filter === f.id
                ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                : 'bg-white/5 text-on-surface-variant border-white/10 hover:bg-white/10'
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/8 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/3 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                <th className="text-left px-5 py-3">Mã kèo</th>
                <th className="text-left px-5 py-3">Người A</th>
                <th className="text-left px-5 py-3">Người B</th>
                <th className="text-center px-5 py-3">Giờ hẹn</th>
                <th className="text-center px-5 py-3">Chế độ</th>
                <th className="text-center px-5 py-3">Kết quả</th>
                <th className="text-center px-5 py-3">Ngày ghép</th>
                <th className="text-center px-5 py-3">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/4">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-12 text-on-surface-variant">
                    Không có kèo phù hợp với bộ lọc này
                  </td>
                </tr>
              ) : filtered.map(m => (
                <tr key={m.id} className="hover:bg-white/3 transition-colors">
                  <td className="px-5 py-3 font-mono text-xs text-on-surface-variant">{m.id}</td>
                  <td className="px-5 py-3 font-semibold text-on-surface">{m.userA}</td>
                  <td className="px-5 py-3 font-semibold text-on-surface">{m.userB}</td>
                  <td className="px-5 py-3 text-center text-sky-300 font-bold">{m.alarmTime}</td>
                  <td className="px-5 py-3 text-center text-on-surface-variant text-xs">{m.mode}</td>
                  <td className="px-5 py-3 text-center"><StatusBadge status={m.result} /></td>
                  <td className="px-5 py-3 text-center text-on-surface-variant text-xs">{m.date}</td>
                  <td className="px-5 py-3 text-center"><StatusBadge status={m.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// TAB: ÂM THANH MEME
// ============================================================
function SoundsTab({ onShowToast }) {
  const [soundList, setSoundList] = useState(memeSounds);

  const toggleActive = (id) => {
    setSoundList(prev => prev.map(s => {
      if (s.id === id) {
        const newActive = !s.isActive;
        onShowToast(newActive ? `Đã kích hoạt âm thanh: ${s.title}` : `Đã tắt âm thanh: ${s.title}`, 'success');
        return { ...s, isActive: newActive };
      }
      return s;
    }));
  };

  const playDemo = (title) => {
    onShowToast(`🔊 Đang phát thử âm thanh: "${title}"`, 'info');
  };

  const editSound = (id) => {
    onShowToast(`Mở trình chỉnh sửa âm thanh: ID ${id}`, 'info');
  };

  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-sky-600 text-white text-xs font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all">
          <Plus size={14} /> Thêm âm thanh mới
        </button>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/8 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/3 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                <th className="text-left px-5 py-3">Âm thanh</th>
                <th className="text-center px-5 py-3">Tag</th>
                <th className="text-right px-5 py-3">Lượt dùng</th>
                <th className="text-center px-5 py-3">Streak cần</th>
                <th className="text-center px-5 py-3">Premium</th>
                <th className="text-center px-5 py-3">Kích hoạt</th>
                <th className="text-center px-5 py-3">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/4">
              {soundList.map(s => (
                <tr key={s.id} className={`hover:bg-white/3 transition-colors ${!s.isActive ? 'opacity-50' : ''}`}>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{s.emoji}</span>
                      <span className="font-semibold text-on-surface">{s.title}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-center"><StatusBadge status={s.tag} /></td>
                  <td className="px-5 py-3 text-right font-bold text-on-surface">{s.usage.toLocaleString()}</td>
                  <td className="px-5 py-3 text-center text-on-surface-variant text-xs">
                    {s.streakRequired === 0 ? '—' : `${s.streakRequired} ngày`}
                  </td>
                  <td className="px-5 py-3 text-center">
                    {s.isPremium
                      ? <span className="text-amber-400 font-bold text-xs">✦ Premium</span>
                      : <span className="text-on-surface-variant text-xs">—</span>}
                  </td>
                  <td className="px-5 py-3 text-center">
                    <button onClick={() => toggleActive(s.id)} className="transition-all">
                      {s.isActive
                        ? <ToggleRight size={24} className="text-emerald-400" />
                        : <ToggleLeft size={24} className="text-on-surface-variant" />}
                    </button>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-center gap-1">
                      <button onClick={() => playDemo(s.title)}
                        className="p-1.5 rounded-lg text-on-surface-variant hover:text-sky-400 hover:bg-sky-500/10 transition-all" title="Phát thử">
                        <Play size={14} />
                      </button>
                      <button onClick={() => editSound(s.id)}
                        className="p-1.5 rounded-lg text-on-surface-variant hover:text-purple-400 hover:bg-purple-500/10 transition-all" title="Sửa">
                        <Edit3 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// TAB: BÁO CÁO
// ============================================================
function ReportsTab({ onShowToast }) {
  const [reportList, setReportList] = useState(reports);

  const handleResolve = (id) => {
    setReportList(prev => prev.map(r => {
      if (r.id === id) {
        onShowToast(`Đã xử lý và đóng báo cáo từ ${r.sender}`, 'success');
        return { ...r, status: 'resolved' };
      }
      return r;
    }));
  };

  const handleDismiss = (id) => {
    setReportList(prev => prev.map(r => {
      if (r.id === id) {
        onShowToast(`Đã bỏ qua báo cáo từ ${r.sender}`, 'info');
        return { ...r, status: 'dismissed' };
      }
      return r;
    }));
  };

  return (
    <div className="space-y-6">
      {/* Mini stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Report mới', value: reportStats.new, color: 'text-purple-300', bg: 'bg-purple-500/10' },
          { label: 'Đang xử lý', value: reportStats.processing, color: 'text-amber-300', bg: 'bg-amber-500/10' },
          { label: 'Đã xử lý', value: reportStats.resolved, color: 'text-emerald-300', bg: 'bg-emerald-500/10' },
          { label: 'Bỏ qua', value: reportStats.dismissed, color: 'text-gray-400', bg: 'bg-gray-500/10' },
        ].map(s => (
          <div key={s.label} className={`${s.bg} border border-white/8 rounded-2xl p-4 text-center`}>
            <p className={`text-2xl font-extrabold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-on-surface-variant mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white/5 border border-white/8 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/3 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                <th className="text-left px-5 py-3">ID</th>
                <th className="text-left px-5 py-3">Người gửi</th>
                <th className="text-left px-5 py-3">Đối tượng</th>
                <th className="text-left px-5 py-3">Lý do</th>
                <th className="text-center px-5 py-3">Thời gian</th>
                <th className="text-center px-5 py-3">Mức độ</th>
                <th className="text-center px-5 py-3">Trạng thái</th>
                <th className="text-center px-5 py-3">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/4">
              {reportList.map(r => (
                <tr key={r.id} className="hover:bg-white/3 transition-colors">
                  <td className="px-5 py-3 font-mono text-xs text-on-surface-variant">{r.id}</td>
                  <td className="px-5 py-3 text-on-surface font-semibold">{r.sender}</td>
                  <td className="px-5 py-3 text-on-surface-variant text-xs">{r.target}</td>
                  <td className="px-5 py-3 text-on-surface-variant text-xs max-w-[180px] truncate">{r.reason}</td>
                  <td className="px-5 py-3 text-center font-mono text-xs text-on-surface-variant">{r.time}</td>
                  <td className="px-5 py-3 text-center"><StatusBadge status={r.severity} /></td>
                  <td className="px-5 py-3 text-center"><StatusBadge status={r.status} /></td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-center gap-1">
                      {r.status === 'pending' && (
                        <>
                          <button onClick={() => handleResolve(r.id)}
                            className="p-1.5 rounded-lg text-on-surface-variant hover:text-emerald-400 hover:bg-emerald-500/10 transition-all" title="Xử lý">
                            <CheckCircle size={14} />
                          </button>
                          <button onClick={() => handleDismiss(r.id)}
                            className="p-1.5 rounded-lg text-on-surface-variant hover:text-gray-400 hover:bg-gray-500/10 transition-all" title="Bỏ qua">
                            <XCircle size={14} />
                          </button>
                        </>
                      )}
                      {r.status !== 'pending' && (
                        <span className="text-xs text-on-surface-variant/50">—</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// TAB: CÀI ĐẶT
// ============================================================
function SettingsTab() {
  const [cfg, setCfg] = useState(defaultSettings);
  const [saved, setSaved] = useState(false);

  const update = (section, key, value) => {
    setCfg(prev => ({ ...prev, [section]: { ...prev[section], [key]: value } }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setCfg(defaultSettings);
    setSaved(false);
  };

  const SectionCard = ({ title, children }) => (
    <div className="rounded-2xl bg-white/5 border border-white/8 p-6">
      <h3 className="text-base font-extrabold text-on-surface mb-5">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );

  const FieldRow = ({ label, children }) => (
    <div className="flex items-center justify-between gap-4">
      <label className="text-sm text-on-surface-variant flex-1">{label}</label>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );

  const NumberInput = ({ value, onChange }) => (
    <input
      type="number"
      value={value}
      onChange={e => onChange(Number(e.target.value))}
      className="w-24 px-3 py-1.5 bg-white/8 border border-white/15 rounded-lg text-sm text-on-surface text-center focus:outline-none focus:border-sky-500/50 transition-colors"
    />
  );

  const Toggle = ({ value, onChange }) => (
    <button onClick={() => onChange(!value)} className="transition-all">
      {value
        ? <ToggleRight size={28} className="text-sky-400" />
        : <ToggleLeft size={28} className="text-on-surface-variant/40" />}
    </button>
  );

  const TextInput = ({ value, onChange }) => (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-56 px-3 py-1.5 bg-white/8 border border-white/15 rounded-lg text-sm text-on-surface focus:outline-none focus:border-sky-500/50 transition-colors"
    />
  );

  return (
    <div className="space-y-5 max-w-3xl">
      <SectionCard title="⚙️ Cài đặt ghép cặp">
        <FieldRow label="Thời gian chờ ghép cặp tối đa (phút)">
          <NumberInput value={cfg.matching.maxWaitMinutes} onChange={v => update('matching', 'maxWaitMinutes', v)} />
        </FieldRow>
        <FieldRow label="Số người tối đa trong hàng đợi mỗi giờ">
          <NumberInput value={cfg.matching.maxQueuePerHour} onChange={v => update('matching', 'maxQueuePerHour', v)} />
        </FieldRow>
        <FieldRow label="Ưu tiên ghép cùng trường">
          <Toggle value={cfg.matching.prioritizeSameSchool} onChange={v => update('matching', 'prioritizeSameSchool', v)} />
        </FieldRow>
        <FieldRow label="Cho phép ghép ẩn danh">
          <Toggle value={cfg.matching.allowAnonymous} onChange={v => update('matching', 'allowAnonymous', v)} />
        </FieldRow>
      </SectionCard>

      <SectionCard title="🛡️ Cài đặt điểm uy tín">
        <FieldRow label="Điểm trừ khi bùng kèo">
          <NumberInput value={cfg.reputation.penaltySkip} onChange={v => update('reputation', 'penaltySkip', v)} />
        </FieldRow>
        <FieldRow label="Điểm thưởng khi dậy đúng giờ">
          <NumberInput value={cfg.reputation.rewardOnTime} onChange={v => update('reputation', 'rewardOnTime', v)} />
        </FieldRow>
        <FieldRow label="Điểm thưởng streak 7 ngày">
          <NumberInput value={cfg.reputation.rewardStreak7} onChange={v => update('reputation', 'rewardStreak7', v)} />
        </FieldRow>
      </SectionCard>

      <SectionCard title="🎵 Cài đặt âm thanh meme">
        <FieldRow label="Số lượt gửi meme tối đa mỗi trận">
          <NumberInput value={cfg.meme.maxSendsPerMatch} onChange={v => update('meme', 'maxSendsPerMatch', v)} />
        </FieldRow>
        <FieldRow label="Cho phép âm thanh premium">
          <Toggle value={cfg.meme.allowPremium} onChange={v => update('meme', 'allowPremium', v)} />
        </FieldRow>
        <FieldRow label="Âm thanh mặc định (ID)">
          <TextInput value={cfg.meme.defaultSound} onChange={v => update('meme', 'defaultSound', v)} />
        </FieldRow>
      </SectionCard>

      <SectionCard title="🔒 Cài đặt Admin">
        <FieldRow label="Bật xác thực 2 lớp (2FA)">
          <Toggle value={cfg.admin.twoFactorAuth} onChange={v => update('admin', 'twoFactorAuth', v)} />
        </FieldRow>
        <FieldRow label="Email nhận báo cáo">
          <TextInput value={cfg.admin.reportEmail} onChange={v => update('admin', 'reportEmail', v)} />
        </FieldRow>
        <FieldRow label="Mức cảnh báo report tối thiểu">
          <select
            value={cfg.admin.reportAlertLevel}
            onChange={e => update('admin', 'reportAlertLevel', e.target.value)}
            className="px-3 py-1.5 bg-white/8 border border-white/15 rounded-lg text-sm text-on-surface focus:outline-none focus:border-sky-500/50 transition-colors"
          >
            <option value="low">Thấp</option>
            <option value="medium">Trung bình</option>
            <option value="high">Cao</option>
          </select>
        </FieldRow>
      </SectionCard>

      {/* Action buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-sky-600 text-white text-sm font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all"
        >
          <Save size={15} /> Lưu cấu hình
        </button>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-on-surface-variant text-sm font-bold rounded-xl hover:bg-white/10 transition-all"
        >
          <RotateCcw size={15} /> Khôi phục mặc định
        </button>
        {saved && (
          <span className="flex items-center gap-1.5 text-sm font-bold text-emerald-400">
            <CheckCircle size={15} /> Đã lưu cấu hình thành công
          </span>
        )}
      </div>
    </div>
  );
}

// ============================================================
// MAIN DASHBOARD SCREEN
// ============================================================
export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    // Auto-hide after 3 seconds
    const timer = setTimeout(() => {
      setToast(prev => prev && prev.message === message ? null : prev);
    }, 3000);
    return () => clearTimeout(timer);
  };

  const today = new Date().toLocaleDateString('vi-VN', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardTab />;
      case 'users': return <UsersTab onShowToast={showToast} />;
      case 'matches': return <MatchesTab />;
      case 'sounds': return <SoundsTab onShowToast={showToast} />;
      case 'reports': return <ReportsTab onShowToast={showToast} />;
      case 'settings': return <SettingsTab />;
      default: return <DashboardTab />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background text-on-background">
      {/* Background orbs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-purple-500/8 blur-[120px] -z-10 rounded-full pointer-events-none" />
      <div className="fixed bottom-0 left-64 w-72 h-72 bg-sky-500/8 blur-[100px] -z-10 rounded-full pointer-events-none" />

      {/* Sidebar */}
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main content area */}
      <main className="ml-64 flex-1 min-h-screen flex flex-col">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/6 px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-extrabold text-on-surface">{tabTitles[activeTab]}</h2>
              <p className="text-xs text-on-surface-variant mt-0.5">{tabSubtitles[activeTab]}</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-8 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-sky-500/40 w-52 transition-all"
                />
              </div>
              {/* Date */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-on-surface-variant">
                <Calendar size={13} />
                {today}
              </div>
              {/* Notification bell */}
              <button className="relative w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-white/10 transition-all">
                <Bell size={16} />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-400 rounded-full" />
              </button>
              {/* Admin avatar */}
              <div className="w-9 h-9 rounded-xl overflow-hidden border-2 border-purple-500/40 cursor-pointer hover:border-purple-400 transition-all">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAW8EXl__RY-WfSqyxh5TXNt8jJSDNER08-SyCjr9fa_hAOXFuqu5KPyZixhlhFfFeou9cGwuEMDpTLz203dftlVHmljC96MPCrfPIWzItPiO5SHNdR8IJDUGGNTXSlmZzjUa0UJYsocjaxYrTNUdkspwUPHZV9id4jVEgvSJXrCoSGph0R7qLUktapTa1WW-X-QFMDHlb74GdbcxCvIrGdecNvMGV20-XqLFD6U_3wHt685LfR6X5supwmBowAAqQsL0GoWvk5cU"
                  alt="Admin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </main>

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#1e2238]/90 border border-white/10 backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-300">
          {toast.type === 'success' && <CheckCircle size={16} className="text-emerald-400" />}
          {toast.type === 'warning' && <AlertTriangle size={16} className="text-amber-400" />}
          {toast.type === 'info' && <Eye size={16} className="text-sky-400" />}
          <span className="text-xs font-bold text-on-surface">{toast.message}</span>
          <button 
            onClick={() => setToast(null)} 
            className="text-on-surface-variant hover:text-on-surface font-bold text-sm ml-2 cursor-pointer transition-colors"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
