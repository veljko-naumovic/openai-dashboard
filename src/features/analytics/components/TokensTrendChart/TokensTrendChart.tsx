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

import { tokensTrend } from "../../mock/analytics.data";

export default function TokensTrendChart() {
	return (
		<ChartCard title="Tokens Trend">
			<ResponsiveContainer width="100%" height={320}>
				<AreaChart data={tokensTrend}>
					<XAxis dataKey="day" />

					<YAxis />

					<Tooltip />

					<Area
						dataKey="value"
						fill="#10b981"
						stroke="#10b981"
						fillOpacity={0.2}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</ChartCard>
	);
}
