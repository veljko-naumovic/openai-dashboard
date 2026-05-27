"use client";

import {
	DashboardRange,
	useDashboardContext,
} from "../../context/DashboardContext";

import styles from "./DashboardFilters.module.scss";

const FILTERS: {
	label: string;
	value: DashboardRange;
}[] = [
	{
		label: "7 Days",
		value: "7d",
	},
	{
		label: "30 Days",
		value: "30d",
	},
	{
		label: "90 Days",
		value: "90d",
	},
];

export default function DashboardFilters() {
	const { range, setRange } = useDashboardContext();

	return (
		<div className={styles.filters}>
			{FILTERS.map((filter) => (
				<button
					key={filter.value}
					className={`${styles.button} ${
						range === filter.value ? styles.active : ""
					}`}
					onClick={() => setRange(filter.value)}
				>
					{filter.label}
				</button>
			))}
		</div>
	);
}
