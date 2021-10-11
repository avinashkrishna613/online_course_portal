import Chart from "react-google-charts";
const GraphPlot = (props) => {
  return (
    <Chart
      width={600}
      height={400}
      loader={<div>Loading Chart</div>}
      chartType="ScatterChart"
      data={[
        ["day", "hours"],
        ["mon", 0],
        ["tue", 1.5],
        ["wed", 2.5],
        ["thurs", 1],
        ["fri", 4],
        ["sat", 3],
        ["sun", 2],
      ]}
      options={{
        title: "Day vs hours of study",
        hAxis: { title: "Day" },
        vAxis: { title: "Hours", minValue: 0, maxValue: 5, ticks: 1 },
        legend: "none",
      }}
    />
  );
};
export default GraphPlot;
