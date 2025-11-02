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
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { title } from "process";

// Menu items.
const items = [
	{
		title: "Главная",
		url: "#",
		icon: Home,
	},
	{
		title: "Компания",
		url: "#",
		icon: Building2,
	},
	{
		title: "Пространства",
		url: "#",
		icon: Blocks,
	},
	{
		title: "Команды",
		url: "#",
		icon: Gem,
	},
	{
		title: "Сотрудники",
		url: "#",
		icon: Users,
	},
	{
		title: "Роли",
		url: "#",
		icon: Drama,
	},
	{
		title: "Должности",
		url: "#",
		icon: BookUser,
	},
	{
		title: "Профиль",
		url: "#",
		icon: IdCard,
	},
	{
		title: "Проекты",
		url: "#",
		icon: Combine,
	},
	{
		title: "Процессы",
		url: "#",
		icon: Orbit,
	},
	{
		title: "Задачи",
		url: "#",
		icon: ListTodo,
	},
	{
		title: "Чек-листы",
		url: "#",
		icon: ListCheck,
	},
	{
		title: "Этапы",
		url: "#",
		icon: Footprints,
	},
	{
		title: "Истории",
		url: "#",
		icon: ScrollText,
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
	{
		title: "Эпики",
		url: "#",
		icon: Puzzle,
	},
	{
		title: "Настройки",
		url: "#",
		icon: Settings,
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
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
			</SidebarContent>
		</Sidebar>
	);
}
