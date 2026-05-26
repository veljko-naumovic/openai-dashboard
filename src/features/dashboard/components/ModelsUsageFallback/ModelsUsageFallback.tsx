import Skeleton from "@/components/ui/Skeleton/Skeleton";

import styles from "./ModelsUsageFallback.module.scss";

export default function ModelsUsageFallback() {
	return (
		<div className={styles.card}>
			<Skeleton width="180px" height="24px" />

			<div className={styles.list}>
				{Array.from({ length: 3 }).map((_, index) => (
					<Skeleton key={index} height="20px" />
				))}
			</div>
		</div>
	);
}
