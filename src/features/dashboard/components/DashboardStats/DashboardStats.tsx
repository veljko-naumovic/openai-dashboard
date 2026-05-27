"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getDashboardStats } from "@/services/dashboard.service";

import { useDashboardContext } from "../../context/DashboardContext";

import StatsCard from "@/components/ui/StatsCard/StatsCard";

import styles from "./DashboardStats.module.scss";

export default function DashboardStats() {
	const { range } = useDashboardContext();

	const { data } = useSuspenseQuery({
		queryKey: ["dashboard-stats", range],

		queryFn: () => getDashboardStats(),

		refetchInterval: 10000,
	});
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
