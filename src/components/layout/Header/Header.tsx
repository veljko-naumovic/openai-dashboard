"use client";

import { Menu } from "lucide-react";

import styles from "./Header.module.scss";

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

			<div>User</div>
		</header>
	);
}
