"use client";

import dynamic from "next/dynamic";

import { Menu } from "lucide-react";

import styles from "./Header.module.scss";

const ThemeToggle = dynamic(
	() => import("@/components/ui/ThemeToggle/ThemeToggle"),
	{
		ssr: false,
	},
);

type HeaderProps = {
	onMenuClick: () => void;
};

export default function Header({ onMenuClick }: HeaderProps) {
	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<button className={styles.menuButton} onClick={onMenuClick}>
					<Menu size={20} />
				</button>

				<div>Dashboard</div>
			</div>

			<ThemeToggle />
		</header>
	);
}
