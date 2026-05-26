// type RequestOptions = RequestInit & {
// 	body?: unknown;
// };

// export async function apiFetch<T>(
// 	endpoint: string,
// 	options: RequestOptions = {},
// ): Promise<T> {
// 	const { body, headers, ...restOptions } = options;

// 	const response = await fetch(
// 		`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
// 		{
// 			...restOptions,

// 			headers: {
// 				"Content-Type": "application/json",

// 				...headers,
// 			},

// 			body: body ? JSON.stringify(body) : undefined,
// 		},
// 	);

// 	if (!response.ok) {
// 		throw new Error(`API Error: ${response.status}`);
// 	}

// 	return response.json();
// }

type RequestOptions = RequestInit & {
	body?: unknown;
};

export async function apiFetch<T>(
	endpoint: string,
	options: RequestOptions = {},
): Promise<T> {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	if (endpoint === "/dashboard/stats") {
		return {
			totalRequests: 12450,
			totalTokens: 845000,
			totalCost: 142.82,
			averageResponseTime: 1.4,
		} as T;
	}

	throw new Error("Endpoint not found");
}
