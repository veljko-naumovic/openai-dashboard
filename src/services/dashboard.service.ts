import { apiFetch } from "./api";
import { DashboardRange } from "@/features/dashboard/context/DashboardContext";

export type DashboardStatsResponse = {
	totalRequests: number;
	totalTokens: number;
	totalCost: number;
	averageResponseTime: number;
};

export async function getDashboardStats(range: DashboardRange) {
	console.log("STATS");

	return apiFetch(`/dashboard/stats?range=${range}`);
}
export async function getModelsUsage() {
	console.log("MODELS");

	return apiFetch("/dashboard/models");
}
export async function getApiUsage() {
	console.log("USAGE");

	return apiFetch("/dashboard/usage");
}
