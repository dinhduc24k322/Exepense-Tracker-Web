import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor,
}) => {
  const renderCenterText = ({ cx, cy }) => (
    <>
      <text
        x={cx}
        y={cy - 10}
        textAnchor="middle"
        fill="#666"
        fontSize="14px"
      >
        {label}
      </text>
      <text
        x={cx}
        y={cy + 20}
        textAnchor="middle"
        fill="#333"
        fontSize="24px"
        fontWeight="bold"
      >
        {totalAmount}
      </text>
    </>
  );

  return (
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
          label={showTextAnchor ? renderCenterText : false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
