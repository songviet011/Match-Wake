// ============================================================
// adminMockData.js - Dữ liệu mock cho Admin Dashboard
// Match & Wake - Chưa kết nối API thật
// ============================================================

export const stats = [
  {
    id: 'total_users',
    label: 'Tổng người dùng',
    value: '12,480',
    rawValue: 12480,
    change: '+12%',
    changePositive: true,
    icon: 'users',
    color: 'primary',
    progress: 75,
  },
  {
    id: 'daily_matches',
    label: 'Kèo báo thức hôm nay',
    value: '1,238',
    rawValue: 1238,
    change: '+5.2k',
    changePositive: true,
    icon: 'alarm',
    color: 'secondary',
    progress: 85,
  },
  {
    id: 'wake_rate',
    label: 'Tỷ lệ dậy đúng giờ',
    value: '84.6%',
    rawValue: 84.6,
    change: '+2.1%',
    changePositive: true,
    icon: 'trending-up',
    color: 'success',
    progress: 84.6,
  },
  {
    id: 'meme_sends',
    label: 'Lượt gửi meme',
    value: '8,942',
    rawValue: 8942,
    change: '+18%',
    changePositive: true,
    icon: 'music',
    color: 'tertiary',
    progress: 60,
  },
  {
    id: 'pending_reports',
    label: 'Báo cáo đang chờ',
    value: '17',
    rawValue: 17,
    change: '-3%',
    changePositive: false,
    icon: 'flag',
    color: 'error',
    progress: 15,
  },
];

export const weeklyAlarmActivity = [
  { day: 'T2', value: 420, max: 900 },
  { day: 'T3', value: 530, max: 900 },
  { day: 'T4', value: 610, max: 900 },
  { day: 'T5', value: 740, max: 900 },
  { day: 'T6', value: 680, max: 900 },
  { day: 'T7', value: 810, max: 900 },
  { day: 'CN', value: 760, max: 900 },
];

export const wakeRate = {
  onTime: 84.6,
  missed: 15.4,
};

export const systemLogs = [
  { id: 1, time: '06:00', event: 'Match thành công', user: 'Ẩn danh DTU #4821', status: 'success' },
  { id: 2, time: '06:05', event: 'Gửi meme báo thức', user: 'Chiến thần Kỷ Luật', status: 'sent' },
  { id: 3, time: '06:10', event: 'User ngủ quên', user: 'User #1021', status: 'warning' },
  { id: 4, time: '06:15', event: 'Backup dữ liệu', user: 'Database Node A', status: 'success' },
  { id: 5, time: '06:20', event: 'Báo cáo nội dung', user: 'User #9934', status: 'pending' },
  { id: 6, time: '06:25', event: 'Cập nhật meme mới', user: 'Kho Meme / Trending', status: 'success' },
  { id: 7, time: '06:30', event: 'Match thất bại', user: 'Cặp #7721', status: 'error' },
];

export const recentMatches = [
  { id: 1, userA: 'Tuấn M.', userB: 'Lan A.', wakeTime: '06:15', result: 'both_awake', date: '23/05/2026' },
  { id: 2, userA: 'Minh T.', userB: 'Thảo N.', wakeTime: '06:05', result: 'both_awake', date: '23/05/2026' },
  { id: 3, userA: 'Huy B.', userB: 'Ngân L.', wakeTime: '05:45', result: 'one_awake', date: '23/05/2026' },
  { id: 4, userA: 'Quốc P.', userB: 'Duyên V.', wakeTime: '07:00', result: 'both_failed', date: '23/05/2026' },
  { id: 5, userA: 'Linh C.', userB: 'Bảo T.', wakeTime: '06:30', result: 'both_awake', date: '22/05/2026' },
];

export const users = [
  { id: 'U001', name: 'Nguyễn Văn Tuấn', email: 'tuan.nguyen@dtu.edu.vn', school: 'Duy Tân University', streak: 15, wakeRate: 92, reputation: 98, status: 'active' },
  { id: 'U002', name: 'Trần Thị Lan', email: 'lan.tran@ud.edu.vn', school: 'Đại học Đà Nẵng', streak: 8, wakeRate: 84, reputation: 95, status: 'active' },
  { id: 'U003', name: 'Lê Minh Hiếu', email: 'hieu.le@fpt.edu.vn', school: 'FPT Polytechnic', streak: 3, wakeRate: 62, reputation: 70, status: 'warning' },
  { id: 'U004', name: 'Phạm Thị Thảo', email: 'thao.pham@dtu.edu.vn', school: 'Duy Tân University', streak: 21, wakeRate: 96, reputation: 100, status: 'active' },
  { id: 'U005', name: 'Hoàng Bảo Khoa', email: 'khoa.hoang@ud.edu.vn', school: 'Đại học Đà Nẵng', streak: 0, wakeRate: 30, reputation: 40, status: 'locked' },
  { id: 'U006', name: 'Vũ Ngân Hà', email: 'ha.vu@fpt.edu.vn', school: 'FPT Polytechnic', streak: 12, wakeRate: 88, reputation: 93, status: 'active' },
  { id: 'U007', name: 'Đỗ Quốc Bảo', email: 'bao.do@other.edu.vn', school: 'Khác', streak: 5, wakeRate: 72, reputation: 78, status: 'active' },
  { id: 'U008', name: 'Ngô Thùy Dương', email: 'duong.ngo@dtu.edu.vn', school: 'Duy Tân University', streak: 7, wakeRate: 80, reputation: 85, status: 'warning' },
];

export const matches = [
  { id: 'M001', userA: 'Nguyễn Tuấn', userB: 'Trần Lan', alarmTime: '06:00', mode: 'Chuẩn', result: 'both_awake', date: '23/05/2026', status: 'completed' },
  { id: 'M002', userA: 'Lê Minh Hiếu', userB: 'Phạm Thảo', alarmTime: '06:30', mode: 'Chuẩn', result: 'one_awake', date: '23/05/2026', status: 'completed' },
  { id: 'M003', userA: 'Hoàng Khoa', userB: 'Vũ Hà', alarmTime: '07:00', mode: 'Ẩn danh', result: 'both_failed', date: '23/05/2026', status: 'completed' },
  { id: 'M004', userA: 'Đỗ Bảo', userB: 'Ngô Dương', alarmTime: '05:30', mode: 'Chuẩn', result: 'both_awake', date: '22/05/2026', status: 'completed' },
  { id: 'M005', userA: 'User #1291', userB: 'User #4421', alarmTime: '06:15', mode: 'Ẩn danh', result: 'pending', date: '23/05/2026', status: 'pending' },
  { id: 'M006', userA: 'Bùi Văn Nam', userB: 'Nguyễn Phương', alarmTime: '06:00', mode: 'Chuẩn', result: 'one_awake', date: '22/05/2026', status: 'completed' },
  { id: 'M007', userA: 'Trần Hùng', userB: 'Lê Mai', alarmTime: '07:30', mode: 'Chuẩn', result: 'both_awake', date: '21/05/2026', status: 'completed' },
  { id: 'M008', userA: 'User #7712', userB: 'User #3309', alarmTime: '06:45', mode: 'Ẩn danh', result: 'both_failed', date: '21/05/2026', status: 'completed' },
];

export const memeSounds = [
  { id: 'S001', emoji: '📣', title: 'Dậy đi ông cháu ơi', tag: 'Funny', usage: 12400, streakRequired: 0, isPremium: false, isActive: true },
  { id: 'S002', emoji: '🏫', title: 'Đi học đi nhà bao việc', tag: 'Trending', usage: 9200, streakRequired: 0, isPremium: false, isActive: true },
  { id: 'S003', emoji: '🚨', title: 'Báo thức cấp cứu', tag: 'Loud', usage: 15100, streakRequired: 0, isPremium: false, isActive: true },
  { id: 'S004', emoji: '🦁', title: 'Gầm rú', tag: 'Loud', usage: 5800, streakRequired: 0, isPremium: false, isActive: true },
  { id: 'S005', emoji: '💣', title: 'Chuông hủy diệt', tag: 'Premium', usage: 8400, streakRequired: 5, isPremium: true, isActive: true },
  { id: 'S006', emoji: '👨‍🏫', title: 'Mentor gọi dậy', tag: 'Premium', usage: 2100, streakRequired: 10, isPremium: true, isActive: false },
];

export const reports = [
  { id: 'R001', sender: 'User #4821', target: 'User #1021', reason: 'Spam meme quá nhiều', time: '08:42', severity: 'medium', status: 'pending' },
  { id: 'R002', sender: 'User #3309', target: 'User #7712', reason: 'Nội dung không phù hợp', time: '08:30', severity: 'high', status: 'pending' },
  { id: 'R003', sender: 'User #5512', target: 'User #6634', reason: 'Ghép cặp lỗi', time: '07:55', severity: 'low', status: 'resolved' },
  { id: 'R004', sender: 'User #8821', target: 'User #9934', reason: 'User không phản hồi', time: '07:12', severity: 'low', status: 'dismissed' },
  { id: 'R005', sender: 'User #1101', target: 'Meme #S005', reason: 'Nội dung không phù hợp', time: '06:50', severity: 'high', status: 'pending' },
  { id: 'R006', sender: 'User #2234', target: 'System', reason: 'Báo thức không reo', time: '06:15', severity: 'medium', status: 'pending' },
  { id: 'R007', sender: 'User #9001', target: 'User #5512', reason: 'Spam meme quá nhiều', time: '05:45', severity: 'low', status: 'resolved' },
];

export const reportStats = {
  new: 4,
  processing: 2,
  resolved: 8,
  dismissed: 3,
};

export const settings = {
  matching: {
    maxWaitMinutes: 30,
    maxQueuePerHour: 500,
    prioritizeSameSchool: true,
    allowAnonymous: true,
  },
  reputation: {
    penaltySkip: -10,
    rewardOnTime: 5,
    rewardStreak7: 20,
  },
  meme: {
    maxSendsPerMatch: 3,
    allowPremium: true,
    defaultSound: 'S003',
  },
  admin: {
    twoFactorAuth: false,
    reportEmail: 'admin@matchwake.vn',
    reportAlertLevel: 'medium',
  },
};
