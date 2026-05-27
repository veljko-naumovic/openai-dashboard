import { Suspense } from "react";

import { DashboardProvider } from "@/features/dashboard/context/DashboardContext";

import DashboardFilters from "@/features/dashboard/components/DashboardFilters/DashboardFilters";

import DashboardStats from "@/features/dashboard/components/DashboardStats/DashboardStats";

import DashboardStatsFallback from "@/features/dashboard/components/DashboardStatsFallback/DashboardStatsFallback";

import AnalyticsGrid from "@/features/dashboard/components/AnalyticsGrid/AnalyticsGrid";

import ModelsUsageServer from "@/features/dashboard/components/ModelsUsageServer/ModelsUsageServer";

import ModelsUsageFallback from "@/features/dashboard/components/ModelsUsageFallback/ModelsUsageFallback";

export default function DashboardPage() {
	return (
		<DashboardProvider>
			<div>
				<h1>Dashboard Overview</h1>

				<DashboardFilters />

				<Suspense fallback={<DashboardStatsFallback />}>
					<DashboardStats />
				</Suspense>

				<AnalyticsGrid />

				<Suspense fallback={<ModelsUsageFallback />}>
					<ModelsUsageServer />
				</Suspense>
			</div>
		</DashboardProvider>
	);
}
