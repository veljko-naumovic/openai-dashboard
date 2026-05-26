import { Suspense } from "react";

import DashboardStats from "@/features/dashboard/components/DashboardStats/DashboardStats";

import DashboardStatsFallback from "@/features/dashboard/components/DashboardStatsFallback/DashboardStatsFallback";

import AnalyticsChart from "@/features/dashboard/components/AnalyticsChart/AnalyticsChart";

import ModelsUsageServer from "@/features/dashboard/components/ModelsUsageServer/ModelsUsageServer";
import ModelsUsageFallback from "@/features/dashboard/components/ModelsUsageFallback/ModelsUsageFallback";

export default function DashboardPage() {
	return (
		<div>
			<h1>Dashboard Overview</h1>

			<Suspense fallback={<DashboardStatsFallback />}>
				<DashboardStats />
			</Suspense>

			<AnalyticsChart />

			<Suspense fallback={<ModelsUsageFallback />}>
				<ModelsUsageServer />
			</Suspense>
		</div>
	);
}
