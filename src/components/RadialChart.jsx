import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    fill: "#d0ed57",
  },
  {
    name: "unknown",
    uv: 6.67,
    fill: "#ffc658",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const RadialChart = ({ title }) => {
  return (
    <div className={`flex h-[400px] flex-[2] flex-col`}>
      <div className="mb-5 flex text-[18px] font-semibold text-textColor">
        {title}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          // startAngle={0}
          // endAngle={-360}
          barSize={50}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            // clockWise
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};
RadialChart.propTypes = {
  title: PropTypes.any.isRequired, // Update 'any' with the actual type you expect
};
export default RadialChart;
