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

import { useDashboardContext } from "../../context/DashboardContext";

import { generateAnalyticsData } from "../../utils/generateAnalyticsData";

export default function TokensChart() {
	const { range } = useDashboardContext();

	const data = generateAnalyticsData(range);

	return (
		<ChartCard title={`Token Usage (${range})`}>
			<ResponsiveContainer width="100%" height={320}>
				<AreaChart data={data}>
					<XAxis dataKey="label" />

					<YAxis />

					<Tooltip />

					<Area
						type="monotone"
						dataKey="value"
						stroke="#10b981"
						fill="#10b981"
						fillOpacity={0.2}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</ChartCard>
	);
}
