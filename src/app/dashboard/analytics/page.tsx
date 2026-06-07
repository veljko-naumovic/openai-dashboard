import PageHeader from "@/components/ui/PageHeader/PageHeader";
import DashboardSection from "@/components/ui/DashboardSection/DashboardSection";
import AnalyticsStats from "@/features/analytics/components/AnalyticsStats/AnalyticsStats";
import RequestsTrendChart from "@/features/analytics/components/RequestsTrendChart/RequestsTrendChart";
import TokensTrendChart from "@/features/analytics/components/TokensTrendChart/TokensTrendChart";
import TopModelsTable from "@/features/analytics/components/TopModelsTable/TopModelsTable";

export default function AnalyticsPage() {
	return (
		<>
			<PageHeader
				title="Analytics"
				description="Analyze OpenAI usage and performance metrics."
			/>

			<DashboardSection>
				<AnalyticsStats />
			</DashboardSection>

			<DashboardSection title="Requests">
				<RequestsTrendChart />
			</DashboardSection>

			<DashboardSection title="Tokens">
				<TokensTrendChart />
			</DashboardSection>

			<DashboardSection title="Top Models">
				<TopModelsTable />
			</DashboardSection>
		</>
	);
}
