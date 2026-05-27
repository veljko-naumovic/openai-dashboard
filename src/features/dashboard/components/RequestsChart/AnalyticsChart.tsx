"use client";

import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";

import ChartCard from "@/components/ui/ChartCard/ChartCard";

import { useDashboardContext } from "../../context/DashboardContext";

import { generateAnalyticsData } from "../../utils/generateAnalyticsData";

export default function RequestsChart() {
	const { range } = useDashboardContext();

	const data = generateAnalyticsData(range);

	return (
		<ChartCard title={`Requests (${range})`}>
			<ResponsiveContainer width="100%" height={320}>
				<LineChart data={data}>
					<XAxis dataKey="label" />

					<YAxis />

					<Tooltip />

					<Line
						type="monotone"
						dataKey="value"
						stroke="#3b82f6"
						strokeWidth={3}
					/>
				</LineChart>
			</ResponsiveContainer>
		</ChartCard>
	);
}
