"use client";

import { RotateCw } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import styles from "./RefreshButton.module.scss";

export default function RefreshButton() {
	const queryClient = useQueryClient();

	const handleRefresh = async () => {
		await queryClient.invalidateQueries();
	};

	return (
		<button type="button" className={styles.button} onClick={handleRefresh}>
			<RotateCw size={16} />

			<span>Refresh</span>
		</button>
	);
}
