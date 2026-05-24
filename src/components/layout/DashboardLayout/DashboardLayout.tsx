"use client";

import { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

import styles from "./DashboardLayout.module.scss";

type DashboardLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className={styles.layout}>
			<Sidebar
				isOpen={isSidebarOpen}
				onClose={() => setIsSidebarOpen(false)}
			/>

			<div className={styles.content}>
				<Header onMenuClick={() => setIsSidebarOpen(true)} />

				<main className={styles.main}>{children}</main>
			</div>
		</div>
	);
}
