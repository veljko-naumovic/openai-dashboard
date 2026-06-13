import { apiFetch } from "./api";

export type OpenAiModel = {
	id: string;
};

export async function getOpenAiModels() {
	return apiFetch<OpenAiModel[]>("/openai/models");
}
