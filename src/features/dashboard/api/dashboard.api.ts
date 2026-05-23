export type DashboardStats = {
	totalRequests: number;
	totalTokens: number;
	totalCost: number;
	averageResponseTime: number;
};

export async function getDashboardStats(): Promise<DashboardStats> {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return {
		totalRequests: 12450,
		totalTokens: 845000,
		totalCost: 142.82,
		averageResponseTime: 1.4,
	};
}
