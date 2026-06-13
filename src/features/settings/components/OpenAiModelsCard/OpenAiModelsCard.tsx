"use client";

import { useOpenAiModels } from "../../hooks/useOpenAiModels";

import styles from "./OpenAiModelsCard.module.scss";

export default function OpenAiModelsCard() {
	const { data } = useOpenAiModels();

	const models = data.filter((model) => model.id.includes("gpt"));

	return (
		<div className="dashboard-card">
			<h2 className={styles.title}>OpenAI Models ({models.length})</h2>

			<ul className={styles.list}>
				{models.map((model) => (
					<li key={model.id} className={styles.item}>
						<span className={styles.modelName}>{model.id}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
