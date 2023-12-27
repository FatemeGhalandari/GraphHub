import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const data = [
  { name: "January", Total: 4000 },
  { name: "February", Total: 1200 },
  { name: "March", Total: 3100 },
  { name: "April", Total: 5070 },
  { name: "May", Total: 2300 },
  { name: "June", Total: 1600 },
];
const Chart = ({ title }) => {
  return (
    <div className={` flex flex-[2] flex-col p-[10px] `}>
      <div className="flex font-semibold text-textColor text-[18px] mb-5">
        {title}
      </div>
      <ResponsiveContainer width="100%" height="100%" className="p-3">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="green" stopOpacity={0.8} />
              <stop offset="95%" stopColor="green" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="darkGreen" />
          <CartesianGrid strokeDasharray="3 3" stroke="lightGreen" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="darkGreen"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
Chart.propTypes = {
  title: PropTypes.any.isRequired, // Update 'any' with the actual type you expect
};
export default Chart;
