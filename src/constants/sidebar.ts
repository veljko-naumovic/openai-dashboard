import {
	LayoutDashboard,
	BarChart3,
	MessagesSquare,
	ChartColumn,
	Settings,
} from "lucide-react";

export const SIDEBAR_ITEMS = [
	{
		label: "Dashboard",
		href: "/dashboard",
		icon: LayoutDashboard,
	},
	{
		label: "Analytics",
		href: "/dashboard/analytics",
		icon: BarChart3,
	},
	{
		label: "Conversations",
		href: "/dashboard/conversations",
		icon: MessagesSquare,
	},
	{
		label: "Usage",
		href: "/dashboard/usage",
		icon: ChartColumn,
	},
	{
		label: "Settings",
		href: "/dashboard/settings",
		icon: Settings,
	},
];
