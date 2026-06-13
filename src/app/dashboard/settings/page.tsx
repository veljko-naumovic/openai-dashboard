import { Suspense } from "react";

import PageHeader from "@/components/ui/PageHeader/PageHeader";

import OpenAiModelsCard from "@/features/settings/components/OpenAiModelsCard/OpenAiModelsCard";

export default function SettingsPage() {
	return (
		<div>
			<PageHeader
				title="Settings"
				description="Manage dashboard settings and OpenAI configuration."
			/>

			<Suspense fallback={<div>Loading...</div>}>
				<OpenAiModelsCard />
			</Suspense>
		</div>
	);
}
