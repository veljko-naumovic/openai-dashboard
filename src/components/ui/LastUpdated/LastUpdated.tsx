"use client";

import { useState } from "react";
import styles from "./LastUpdated.module.scss";

export default function LastUpdated() {
	const [time] = useState(() => new Date().toLocaleTimeString());

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
