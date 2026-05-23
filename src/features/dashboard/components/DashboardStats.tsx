"use client";

import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "../api/dashboard.api";

export default function DashboardStats() {
	const { data, isLoading } = useQuery({
		queryKey: ["dashboard-stats"],
		queryFn: getDashboardStats,
	});

	if (isLoading) {
		return <div>Loading stats...</div>;
	}

	return (
		<div>
			<h2>Total Requests: {data?.totalRequests}</h2>

			<h2>Total Tokens: {data?.totalTokens}</h2>

			<h2>Total Cost: ${data?.totalCost}</h2>

			<h2>Avg Response Time: {data?.averageResponseTime}s</h2>
		</div>
	);
}
