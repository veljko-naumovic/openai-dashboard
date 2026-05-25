import StatsCardSkeleton from "../StatsCardSkeleton/StatsCardSkeleton";

import styles from "../DashboardStats/DashboardStats.module.scss";

export default function DashboardStatsFallback() {
	return (
		<div className={styles.grid}>
			{Array.from({ length: 4 }).map((_, index) => (
				<StatsCardSkeleton key={index} />
			))}
		</div>
	);
}
