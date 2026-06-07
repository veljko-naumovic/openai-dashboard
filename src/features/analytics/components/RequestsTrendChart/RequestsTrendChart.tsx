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

import { requestsTrend } from "../../mock/analytics.data";

export default function RequestsTrendChart() {
	return (
		<ChartCard title="Requests Trend">
			<ResponsiveContainer width="100%" height={320}>
				<LineChart data={requestsTrend}>
					<XAxis dataKey="day" />

					<YAxis />

					<Tooltip />

					<Line dataKey="value" strokeWidth={3} stroke="#3b82f6" />
				</LineChart>
			</ResponsiveContainer>
		</ChartCard>
	);
}
