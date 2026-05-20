import type { Metadata } from "next";
import "./globals.scss";

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

export const metadata: Metadata = {
	title: "OpenAI Dashboard",
	description: "AI analytics dashboard built with Next.js 15 and React 19",
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
