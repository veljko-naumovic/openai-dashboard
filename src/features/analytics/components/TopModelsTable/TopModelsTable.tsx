import { topModels } from "../../mock/analytics.data";

import styles from "./TopModelsTable.module.scss";

export default function TopModelsTable() {
	return (
		<div className="dashboard-card">
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Model</th>
						<th>Requests</th>
						<th>Cost</th>
					</tr>
				</thead>

				<tbody>
					{topModels.map((model) => (
						<tr key={model.model}>
							<td>{model.model}</td>

							<td>{model.requests}</td>

							<td>${model.cost}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
