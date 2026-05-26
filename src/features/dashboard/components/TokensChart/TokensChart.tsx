"use client";

import {
	ResponsiveContainer,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";

import ChartCard from "@/components/ui/ChartCard/ChartCard";

const data = [
	{
		day: "Mon",
		tokens: 120000,
	},
	{
		day: "Tue",
		tokens: 180000,
	},
	{
		day: "Wed",
		tokens: 90000,
	},
	{
		day: "Thu",
		tokens: 240000,
	},
	{
		day: "Fri",
		tokens: 160000,
	},
];

export default function TokensChart() {
	return (
		<ChartCard title="Token Usage">
			<ResponsiveContainer width="100%" height={320}>
				<AreaChart data={data}>
					<XAxis dataKey="day" />

					<YAxis />

					<Tooltip />

					<Area
						type="monotone"
						dataKey="tokens"
						stroke="#10b981"
						fill="#10b981"
						fillOpacity={0.2}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</ChartCard>
	);
}
