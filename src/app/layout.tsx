import type { Metadata } from "next";
import "./globals.scss";
import QueryProvider from "@/providers/QueryProvider";

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
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
