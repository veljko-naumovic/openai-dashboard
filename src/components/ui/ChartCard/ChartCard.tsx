import styles from "./ChartCard.module.scss";

type ChartCardProps = Readonly<{
	title: string;
	children: React.ReactNode;
}>;

export default function ChartCard({ title, children }: ChartCardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.header}>{title}</div>

			<div className={styles.content}>{children}</div>
		</div>
	);
}
