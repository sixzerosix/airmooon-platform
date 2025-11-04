"use client";

import { useIsMobile } from "@/hooks/use-mobile";

import {
	IdCard,
	Drama,
	Building2,
	Bot,
	BotMessageSquare,
	Users,
	Gem,
	Menu,
	ShieldCheck,
	Bell,
	UserRound,
} from "lucide-react";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";

import { usePathname } from "next/navigation";
import Link from "next/link";

// Menu items.
const items = [
	{
		title: "Аккаунт",
		url: "/settings/account",
		icon: UserRound,
	},
	{
		title: "Профиль",
		url: "#",
		icon: IdCard,
	},
	{
		title: "Уведомления",
		url: "/settings/notifications",
		icon: Bell,
	},
	{
		title: "Безопасность",
		url: "/settings/security",
		icon: ShieldCheck,
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
	const isMobile = useIsMobile();
	const pathname = usePathname(); // Получаем текущий путь

	return (
		(isMobile && (
			<Drawer>
				<DrawerTrigger asChild>
					<Button
						variant="outline"
						size={"icon-sm"}
						className="fixed bottom-10 right-10"
					>
						<Menu />
					</Button>
				</DrawerTrigger>
				<DrawerContent>
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
				</DrawerContent>
			</Drawer>
		)) || (
			<nav className="w-full border border-border rounded-xl sticky top-24">
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
		)
	);
}
