import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

import styles from "./DashboardLayout.module.scss";

type DashboardLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<div className={styles.layout}>
			<Sidebar />

			<div className={styles.content}>
				<Header />

				<main className={styles.main}>{children}</main>
			</div>
		</div>
	);
}
