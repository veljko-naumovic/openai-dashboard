"use client";

import { RotateCw } from "lucide-react";

import { useQueryClient } from "@tanstack/react-query";

import styles from "./RefreshButton.module.scss";

export default function RefreshButton() {
	const queryClient = useQueryClient();

	async function handleRefresh() {
		await queryClient.invalidateQueries({
			queryKey: ["dashboard-stats"],
		});
	}

	return (
		<button className={styles.button} onClick={handleRefresh}>
			<RotateCw size={16} />
			Refresh
		</button>
	);
}
