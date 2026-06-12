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
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
		options,
	);

	if (!response.ok) {
		throw new Error(`API Error: ${response.status}`);
	}

	return response.json();
}
