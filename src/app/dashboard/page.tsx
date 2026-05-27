import { Suspense } from "react";

import PageHeader from "@/components/ui/PageHeader/PageHeader";

import DashboardSection from "@/components/ui/DashboardSection/DashboardSection";

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
				<PageHeader
					title="Dashboard Overview"
					description="Monitor OpenAI usage, requests, tokens, and AI analytics."
					actions={<DashboardFilters />}
				/>

				<DashboardSection>
					<Suspense fallback={<DashboardStatsFallback />}>
						<DashboardStats />
					</Suspense>
				</DashboardSection>

				<DashboardSection title="Analytics">
					<AnalyticsGrid />
				</DashboardSection>

				<DashboardSection title="AI Models">
					<Suspense fallback={<ModelsUsageFallback />}>
						<ModelsUsageServer />
					</Suspense>
				</DashboardSection>
			</div>
		</DashboardProvider>
	);
}
