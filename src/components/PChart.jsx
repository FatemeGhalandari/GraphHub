import { PieChart, Pie, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

const PChart = ({title}) => {
  return (
    <div className={`flex flex-[2] flex-col p-[10px]`}>
      <div className="mb-5 flex text-[18px] font-semibold text-textColor">
        {title}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="lightGreen"
            isAnimationActive={false}
          />
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="darkGreen"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
PChart.propTypes = {
  title: PropTypes.any.isRequired, // Update 'any' with the actual type you expect
};
export default PChart;
