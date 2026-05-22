// BarChart.jsx - Biểu đồ cột SVG thuần, không dùng thư viện chart
export default function BarChart({ data }) {
  const maxVal = Math.max(...data.map(d => d.value));

  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-2 h-48">
        {data.map((item, i) => {
          const heightPercent = (item.value / maxVal) * 100;
          const isToday = i === data.length - 1;
          return (
            <div key={item.day} className="flex-1 flex flex-col items-center gap-1 group">
              {/* Tooltip */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-surface-container-high border border-white/10 text-on-surface text-[10px] font-bold rounded-lg px-2 py-1 whitespace-nowrap pointer-events-none">
                {item.value.toLocaleString()}
              </div>
              {/* Bar */}
              <div className="relative w-full flex items-end" style={{ height: '168px' }}>
                <div
                  className={`w-full rounded-t-lg transition-all duration-700 cursor-pointer
                    ${isToday
                      ? 'bg-purple-400 shadow-[0_0_20px_rgba(192,132,252,0.5)]'
                      : 'bg-purple-500/25 hover:bg-purple-400/60'
                    }`}
                  style={{ height: `${heightPercent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* X-axis labels */}
      <div className="flex justify-between mt-3 px-0.5">
        {data.map((item) => (
          <div key={item.day} className="flex-1 text-center text-[11px] font-bold text-on-surface-variant tracking-widest">
            {item.day}
          </div>
        ))}
      </div>
    </div>
  );
}
