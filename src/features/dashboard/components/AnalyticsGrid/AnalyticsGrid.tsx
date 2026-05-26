import RequestsChart from "../RequestsChart/AnalyticsChart";
import TokensChart from "../TokensChart/TokensChart";
import styles from "./AnalyticsGrid.module.scss";

export default function AnalyticsGrid() {
	return (
		<div className={styles.grid}>
			<RequestsChart />

			<TokensChart />
		</div>
	);
}
