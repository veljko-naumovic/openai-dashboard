import Skeleton from "@/components/ui/Skeleton/Skeleton";

import styles from "./StatsCardSkeleton.module.scss";

export default function StatsCardSkeleton() {
	return (
		<div className={styles.card}>
			<Skeleton width="120px" height="16px" />

			<Skeleton width="100px" height="36px" />
		</div>
	);
}
