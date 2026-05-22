import Link from "next/link";
import styles from "./Sidebar.module.scss";

import { SIDEBAR_ITEMS } from "@/constants/sidebar";

export default function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<div className={styles.logo}>OpenAI Dashboard</div>

			<nav className={styles.navigation}>
				{SIDEBAR_ITEMS.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={styles.link}
					>
						{item.label}
					</Link>
				))}
			</nav>
		</aside>
	);
}
