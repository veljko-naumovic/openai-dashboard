"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getOpenAiModels } from "@/services/openai.service";

export function useOpenAiModels() {
	return useSuspenseQuery({
		queryKey: ["openai-models"],

		queryFn: getOpenAiModels,

		staleTime: 1000 * 60 * 60,
	});
}
