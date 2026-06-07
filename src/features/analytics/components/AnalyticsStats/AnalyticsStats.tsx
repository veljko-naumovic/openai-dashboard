import StatsCard from "@/components/ui/StatsCard/StatsCard";

import styles from "./AnalyticsStats.module.scss";

export default function AnalyticsStats() {
	return (
		<div className={styles.grid}>
			<StatsCard title="Total Cost" value="$142.82" />

			<StatsCard title="Avg Latency" value="1.4s" />

			<StatsCard title="Error Rate" value="0.6%" />

			<StatsCard title="Active Users" value="124" />
		</div>
	);
}
