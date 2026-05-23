import DashboardStats from "@/features/dashboard/components/DashboardStats/DashboardStats";

import AnalyticsChart from "@/features/dashboard/components/AnalyticsChart/AnalyticsChart";

export default function DashboardPage() {
	return (
		<div>
			<h1>Dashboard Overview</h1>

			<DashboardStats />

			<AnalyticsChart />
		</div>
	);
}
