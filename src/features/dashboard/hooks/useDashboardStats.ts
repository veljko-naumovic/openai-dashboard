"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getDashboardStats } from "@/services/dashboard.service";

import { useDashboardContext } from "../context/DashboardContext";

export function useDashboardStats() {
	const { range } = useDashboardContext();

	return useSuspenseQuery({
		queryKey: ["dashboard-stats", range],

		queryFn: () => getDashboardStats(),

		refetchInterval: 10000,
	});
}
