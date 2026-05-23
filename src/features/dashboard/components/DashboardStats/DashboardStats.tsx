"use client";

import { useQuery } from "@tanstack/react-query";

import StatsCard from "@/components/ui/StatsCard/StatsCard";

import styles from "./DashboardStats.module.scss";
import { getDashboardStats } from "../../api/dashboard.api";

export default function DashboardStats() {
	const { data, isLoading } = useQuery({
		queryKey: ["dashboard-stats"],
		queryFn: getDashboardStats,
	});

	if (isLoading) {
		return <div>Loading stats...</div>;
	}

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
