import styles from "./styles";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "January", Total: 4000 },
  { name: "February", Total: 1200 },
  { name: "March", Total: 3100 },
  { name: "April", Total: 5070 },
  { name: "May", Total: 2300 },
  { name: "June", Total: 1600 },
];
const Chart = () => {
  return (
    <div className={`${styles.boxShadow} flex flex-[2] flex-col p-[10px]`}>
      <div className="flex font-semibold text-textColor text-[18px] mb-5">
        Last 6 Months revenue
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
              <stop offset="5%" stopColor="darkGreen" stopOpacity={0.8} />
              <stop offset="95%" stopColor="green" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="textColor" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
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

export default Chart;
