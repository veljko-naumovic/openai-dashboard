"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/providers/ThemeProvider";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button onClick={toggleTheme} suppressHydrationWarning>
			{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
		</button>
	);
}
