type DashboardLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<div
			style={{
				display: "flex",
				minHeight: "100vh",
			}}
		>
			<aside
				style={{
					width: "240px",
					background: "#111827",
					padding: "20px",
				}}
			>
				Sidebar
			</aside>

			<div
				style={{
					flex: 1,
				}}
			>
				<header
					style={{
						height: "70px",
						borderBottom: "1px solid #1f2937",
						display: "flex",
						alignItems: "center",
						padding: "0 20px",
					}}
				>
					Topbar
				</header>

				<main
					style={{
						padding: "20px",
					}}
				>
					{children}
				</main>
			</div>
		</div>
	);
}
