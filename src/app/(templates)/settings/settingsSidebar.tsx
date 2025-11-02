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

// Menu items.
const items = [
	{
		title: "Аккаунт",
		url: "#",
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
	return (
		<nav className="w-full border border-border rounded-xl">
			<SidebarGroup>
				<SidebarGroupContent>
					<SidebarMenu>
						{items.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild>
									<a href={item.url}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</nav>
	);
}
