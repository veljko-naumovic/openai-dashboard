import { getModelsUsage } from "../../api/models.api";

import styles from "./ModelsUsageServer.module.scss";

export default async function ModelsUsageServer() {
	const models = await getModelsUsage();

	return (
		<div className={styles.card}>
			<h2 className={styles.title}>AI Models Usage</h2>

			<div className={styles.list}>
				{models.map((model) => (
					<div key={model.model} className={styles.item}>
						<span>{model.model}</span>

						<strong>{model.requests}</strong>
					</div>
				))}
			</div>
		</div>
	);
}
