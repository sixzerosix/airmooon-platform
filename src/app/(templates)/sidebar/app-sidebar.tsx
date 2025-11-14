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
	Hamburger,
	GalleryVerticalEnd,
	AudioWaveform,
	Command,
	Landmark,
	MessageSquare,
	MessagesSquare,
	Dna,
	Cpu,
	SquareChartGantt,
	History,
	Bell,
} from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import { CompanySwitcher } from "./company-switcher";

// Menu items.
const items = [
	{
		title: "Главная",
		url: "#",
		icon: Home,
	},
	{
		title: "Астивность",
		url: "/activity",
		icon: History,
	},
	{
		title: "Комментарии",
		url: "/comments",
		icon: MessagesSquare,
	},
	{
		title: "Компания",
		url: "/company",
		icon: Building2,
	},
	{
		title: "Отчёты",
		url: "#",
		icon: SquareChartGantt,
	},
	{
		title: "Уведомления",
		url: "#",
		icon: Bell,
	},
	{
		title: "Продукты",
		url: "#",
		icon: Hamburger,
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
		url: "/projects",
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
		url: "/settings",
		icon: Settings,
	},
];

const companies = [
	{
		name: "SOW Capital",
		logo: Landmark,
		plan: "Активная",
	},
	{
		name: "БиоТех",
		logo: Dna,
		plan: "Ростущая",
	},
	{
		name: "AI Технологии",
		logo: Cpu,
		plan: "Формирование",
	},
	{
		name: "Evil Corp.",
		logo: Command,
		plan: "Приостановленная",
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<CompanySwitcher companies={companies} />
			</SidebarHeader>
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
