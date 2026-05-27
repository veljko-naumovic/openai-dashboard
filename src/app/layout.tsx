import type { Metadata } from "next";

import "./globals.scss";

import QueryProvider from "@/providers/QueryProvider";

import ThemeProvider from "@/providers/ThemeProvider";

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

export const metadata: Metadata = {
	title: "OpenAI Dashboard",
	description: "AI analytics dashboard",
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider>
					<QueryProvider>{children}</QueryProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
