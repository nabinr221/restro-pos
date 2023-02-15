import React from "react";
import './barChart.css'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
const BarCharts = () => {
    const data = [
        {
            name: "Sun",
            Amount: 2400,
            amt: 2400,
        },
        {
            name: "Mon",
            Amount: 1398,
            amt: 1398,
        },
        {
            name: "Tues",
            Amount: 9800,
            amt: 9800,
        },
        {
            name: "Wed",
            Amount: 3908,
            amt: 3908,
        },
        {
            name: "Thurs",
            Amount: 4800,
            amt: 4800,
        },
        {
            name: "Fri",
            Amount: 3800,
            amt: 3800,
        },
        {
            name: "Sat",
            Amount: 4300,
            amt: 4300,
        },
    ];

    return (
        <>
          <div className="barchart-box">
                <BarChart
                    width={850}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Amount" fill="#8884d8" />
                </BarChart>
          </div>
        </>
    );
};
export default BarCharts;