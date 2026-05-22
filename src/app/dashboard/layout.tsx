import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";

type DashboardLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

export default function Layout({ children }: DashboardLayoutProps) {
	return <DashboardLayout>{children}</DashboardLayout>;
}
