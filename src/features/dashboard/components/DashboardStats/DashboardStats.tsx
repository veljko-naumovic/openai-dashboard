"use client";

import { useQuery } from "@tanstack/react-query";

import { getDashboardStats } from "../../api/dashboard.api";

import StatsCard from "@/components/ui/StatsCard/StatsCard";

import StatsCardSkeleton from "../StatsCardSkeleton/StatsCardSkeleton";

import styles from "./DashboardStats.module.scss";

export default function DashboardStats() {
	const { data, isLoading } = useQuery({
		queryKey: ["dashboard-stats"],
		queryFn: getDashboardStats,
	});

	if (isLoading) {
		return (
			<div className={styles.grid}>
				{Array.from({ length: 4 }).map((_, index) => (
					<StatsCardSkeleton key={index} />
				))}
			</div>
		);
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
