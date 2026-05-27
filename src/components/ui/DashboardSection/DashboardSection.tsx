import styles from "./DashboardSection.module.scss";

type DashboardSectionProps = Readonly<{
	title?: string;
	children: React.ReactNode;
}>;

export default function DashboardSection({
	title,
	children,
}: DashboardSectionProps) {
	return (
		<section className={styles.section}>
			{title && <h2 className={styles.title}>{title}</h2>}

			{children}
		</section>
	);
}
