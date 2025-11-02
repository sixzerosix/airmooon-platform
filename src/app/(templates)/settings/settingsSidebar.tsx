"use client";

import {
	Calendar,
	Home,
	Inbox,
	Search,
	IdCard,
	BookUser,
	Drama,
	Orbit,
	Building2,
	Blocks,
	ListCheck,
	ScrollText,
	ListTodo,
	Bot,
	Combine,
	BotMessageSquare,
	Users,
	Footprints,
	Puzzle,
	Gem,
	Settings,
} from "lucide-react";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import { usePathname } from "next/navigation";
import Link from "next/link";

// Menu items.
const items = [
	{
		title: "Аккаунт",
		url: "/settings/account",
		icon: Building2,
	},
	{
		title: "Профиль",
		url: "#",
		icon: IdCard,
	},
	{
		title: "Уведомления",
		url: "#",
		icon: Gem,
	},
	{
		title: "Безопасность",
		url: "#",
		icon: Users,
	},
	{
		title: "Роли",
		url: "#",
		icon: Drama,
	},
	{
		title: "Агенты",
		url: "#",
		icon: Bot,
	},
	{
		title: "Ассистенты",
		url: "#",
		icon: BotMessageSquare,
	},
];

export function SettingsSidebar() {
	const pathname = usePathname(); // Получаем текущий путь
	console.log(pathname);

	return (
		<nav className="w-full border border-border rounded-xl">
			<SidebarGroup>
				<SidebarGroupContent>
					<SidebarMenu>
						{items.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild>
									<Link
										href={item.url}
										className={
											pathname === item.url
												? "bg-sidebar-accent text-sidebar-accent-foreground"
												: ""
										}
									>
										<item.icon />
										<span>{item.title}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</nav>
	);
}
