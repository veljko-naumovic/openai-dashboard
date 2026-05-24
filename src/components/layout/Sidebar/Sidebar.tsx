"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import styles from "./Sidebar.module.scss";

import { SIDEBAR_ITEMS } from "@/constants/sidebar";

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className={styles.sidebar}>
			<div className={styles.logo}>OpenAI Dashboard</div>

			<nav className={styles.navigation}>
				{SIDEBAR_ITEMS.map((item) => {
					const isActive = pathname === item.href;

					return (
						<Link
							key={item.href}
							href={item.href}
							className={`${styles.link} ${
								isActive ? styles.active : ""
							}`}
						>
							{item.label}
						</Link>
					);
				})}
			</nav>
		</aside>
	);
}
