import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Chart = ({ card }) => {
  const ratings = card.ratings;

  return (
    <div className="bg-base-100 border-t border-b shadow-lg m-2 md:m-0 border-blue-500 rounded-xl h-80 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ratings} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="count" />
          <YAxis type="category" dataKey="name" reversed={true} />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
