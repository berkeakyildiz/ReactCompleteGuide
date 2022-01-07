import "./ChartBar.css";

export default function ChartBar(props) {
  let barFillRate = "0%";

  if (props.maxValue > 0) {
    barFillRate = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillRate }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
