// ProgressCircle.jsx - Biểu đồ vòng tròn SVG thuần
export default function ProgressCircle({ value, label, color = '#c084fc', size = 160 }) {
  const r = 60;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background ring */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="12"
        />
        {/* Progress ring */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${cx} ${cy})`}
          style={{
            filter: `drop-shadow(0 0 8px ${color}80)`,
            transition: 'stroke-dashoffset 1s ease-in-out',
          }}
        />
        {/* Center text */}
        <text x={cx} y={cy - 6} textAnchor="middle" fill="#dfe0ff" fontSize="24" fontWeight="800">
          {value}%
        </text>
        <text x={cx} y={cy + 16} textAnchor="middle" fill="#cbc3d7" fontSize="11" fontWeight="600">
          {label}
        </text>
      </svg>
    </div>
  );
}
