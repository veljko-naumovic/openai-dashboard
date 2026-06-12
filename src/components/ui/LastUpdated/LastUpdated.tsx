"use client";

import { useEffect, useState } from "react";

import styles from "./LastUpdated.module.scss";

export default function LastUpdated() {
	const [time, setTime] = useState("");

	useEffect(() => {
		setTime(new Date().toLocaleTimeString());
	}, []);

	if (!time) {
		return null;
	}

	return (
		<div className={styles.container}>
			<span className={styles.label}>Last Updated</span>

			<span className={styles.time}>{time}</span>
		</div>
	);
}

// const [time, setTime] = useState(
//   () => new Date().toLocaleTimeString()
// );

// useEffect(() => {
//   const interval = setInterval(() => {
//     setTime(new Date().toLocaleTimeString());
//   }, 1000);

//   return () => clearInterval(interval);
// }, []);
