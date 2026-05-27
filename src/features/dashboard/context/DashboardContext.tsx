"use client";

import { createContext, useContext, useState } from "react";

export type DashboardRange = "7d" | "30d" | "90d";

type DashboardContextType = {
	range: DashboardRange;

	setRange: (range: DashboardRange) => void;
};

const DashboardContext = createContext<DashboardContextType | undefined>(
	undefined,
);

type DashboardProviderProps = Readonly<{
	children: React.ReactNode;
}>;

export function DashboardProvider({ children }: DashboardProviderProps) {
	const [range, setRange] = useState<DashboardRange>("7d");

	return (
		<DashboardContext.Provider
			value={{
				range,
				setRange,
			}}
		>
			{children}
		</DashboardContext.Provider>
	);
}

export function useDashboardContext() {
	const context = useContext(DashboardContext);

	if (!context) {
		throw new Error(
			"useDashboardContext must be used inside DashboardProvider",
		);
	}

	return context;
}
