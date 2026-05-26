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
import { analyticsData } from "@/features/mock/analytics.data";

export default function RequestsChart() {
	return (
		<ChartCard title="Weekly Requests">
			<ResponsiveContainer width="100%" height={320}>
				<LineChart data={analyticsData}>
					<XAxis dataKey="day" />

					<YAxis />

					<Tooltip />

					<Line
						type="monotone"
						dataKey="requests"
						stroke="#3b82f6"
						strokeWidth={3}
					/>
				</LineChart>
			</ResponsiveContainer>
		</ChartCard>
	);
}
