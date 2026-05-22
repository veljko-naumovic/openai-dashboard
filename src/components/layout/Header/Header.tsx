import styles from "./Header.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<div>Dashboard</div>

			<div>User</div>
		</header>
	);
}
