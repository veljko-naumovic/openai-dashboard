export type ModelUsage = {
	model: string;
	requests: number;
};

export async function getModelsUsage(): Promise<ModelUsage[]> {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return [
		{
			model: "gpt-4o",
			requests: 8200,
		},
		{
			model: "gpt-4.1",
			requests: 4300,
		},
		{
			model: "gpt-4o-mini",
			requests: 12500,
		},
	];
}
