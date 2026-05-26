import { apiFetch } from "./api";

export type DashboardStatsResponse = {
	totalRequests: number;
	totalTokens: number;
	totalCost: number;
	averageResponseTime: number;
};

export async function getDashboardStats() {
	return apiFetch<DashboardStatsResponse>("/dashboard/stats");
}
