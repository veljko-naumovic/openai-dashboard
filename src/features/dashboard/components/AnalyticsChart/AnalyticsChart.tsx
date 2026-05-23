"use client";

import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";

import styles from "./AnalyticsChart.module.scss";
import { analyticsData } from "@/features/mock/analytics.data";

export default function AnalyticsChart() {
	return (
		<div className={styles.chartCard}>
			<div className={styles.header}>Weekly Requests</div>

			<div className={styles.chartWrapper}>
				<ResponsiveContainer width="100%" height={350}>
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
			</div>
		</div>
	);
}
