"use client";

import StatsCard from "@/components/ui/StatsCard/StatsCard";

import { useDashboardStats } from "../../hooks/useDashboardStats";

import styles from "./DashboardStats.module.scss";

export default function DashboardStats() {
	const { data } = useDashboardStats();

	return (
		<div className={styles.grid}>
			<StatsCard
				title="Total Requests"
				value={data?.totalRequests ?? 0}
			/>

			<StatsCard title="Total Tokens" value={data?.totalTokens ?? 0} />

			<StatsCard title="Total Cost" value={`$${data?.totalCost}`} />

			<StatsCard
				title="Avg Response Time"
				value={`${data?.averageResponseTime}s`}
			/>
		</div>
	);
}
