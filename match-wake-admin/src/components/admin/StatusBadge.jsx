// StatusBadge.jsx - Component hiển thị badge trạng thái
export default function StatusBadge({ status, type = 'user' }) {
  const configs = {
    // User status
    active: { label: 'Hoạt động', className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    warning: { label: 'Cảnh báo', className: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
    locked: { label: 'Đã khóa', className: 'bg-red-500/20 text-red-400 border-red-500/30' },
    // Match result
    both_awake: { label: 'Cả hai dậy', className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    one_awake: { label: 'Một người dậy', className: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
    both_failed: { label: 'Cả hai ngủ quên', className: 'bg-red-500/20 text-red-400 border-red-500/30' },
    pending: { label: 'Đang chờ', className: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
    completed: { label: 'Hoàn thành', className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    // Report status
    resolved: { label: 'Đã xử lý', className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    dismissed: { label: 'Bỏ qua', className: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
    // System log
    success: { label: 'THÀNH CÔNG', className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    sent: { label: 'ĐÃ GỬI', className: 'bg-sky-500/20 text-sky-400 border-sky-500/30' },
    error: { label: 'LỖI', className: 'bg-red-500/20 text-red-400 border-red-500/30' },
    // Severity
    low: { label: 'Thấp', className: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
    medium: { label: 'Trung bình', className: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
    high: { label: 'Cao', className: 'bg-red-500/20 text-red-400 border-red-500/30' },
    // Meme tag
    Funny: { label: 'Funny', className: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
    Trending: { label: 'Trending', className: 'bg-sky-500/20 text-sky-400 border-sky-500/30' },
    Loud: { label: 'Loud', className: 'bg-red-500/20 text-red-400 border-red-500/30' },
    Premium: { label: 'Premium', className: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  };

  const config = configs[status] || { label: status, className: 'bg-gray-500/20 text-gray-400 border-gray-500/30' };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${config.className}`}>
      {config.label}
    </span>
  );
}
