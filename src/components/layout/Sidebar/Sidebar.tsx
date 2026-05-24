"use client";

import Link from "next/link";

import { X } from "lucide-react";

import { usePathname } from "next/navigation";

import styles from "./Sidebar.module.scss";

import { SIDEBAR_ITEMS } from "@/constants/sidebar";

type SidebarProps = {
	isOpen: boolean;
	onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
	const pathname = usePathname();

	return (
		<>
			{isOpen && <div className={styles.overlay} onClick={onClose} />}

			<aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
				<div className={styles.top}>
					<div className={styles.logo}>OpenAI Dashboard</div>

					<button className={styles.closeButton} onClick={onClose}>
						<X size={20} />
					</button>
				</div>

				<nav className={styles.navigation}>
					{SIDEBAR_ITEMS.map((item) => {
						const isActive = pathname === item.href;

						const Icon = item.icon;

						return (
							<Link
								key={item.href}
								href={item.href}
								className={`${styles.link} ${
									isActive ? styles.active : ""
								}`}
							>
								<Icon size={18} />

								<span>{item.label}</span>
							</Link>
						);
					})}
				</nav>
			</aside>
		</>
	);
}
