"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/providers/ThemeProvider";

import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button className={styles.button} onClick={toggleTheme}>
			{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
		</button>
	);
}
