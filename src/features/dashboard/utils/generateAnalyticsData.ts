import { DashboardRange } from "../context/DashboardContext";

type AnalyticsItem = {
	label: string;
	value: number;
};

export function generateAnalyticsData(range: DashboardRange): AnalyticsItem[] {
	const lengthMap = {
		"7d": 7,
		"30d": 30,
		"90d": 90,
	};

	const length = lengthMap[range];

	return Array.from({
		length,
	}).map((_, index) => ({
		label: `${index + 1}`,
		value: Math.floor(Math.random() * 5000) + 500,
	}));
}
