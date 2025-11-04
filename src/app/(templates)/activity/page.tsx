import { Badge } from "@/components/ui/badge";

import { Main, Section, Container } from "@/components/layouts";

import { ListTodo, AppWindow, Bot } from "lucide-react";

const activityData = [
	{
		id: 1,
		entity_type: "Компания",
		entity_id: "c1",
		actor_type: "user",
		actor_id: "u1",
		action_type: "update",
		source_type: "frontend",
		details: { name: "Космос" },
		created_at: "2025-11-05T08:30:00Z",
	},
	{
		id: 2,
		entity_type: "Отчёты",
		entity_id: "r1",
		actor_type: "user",
		actor_id: "u2",
		action_type: "update",
		source_type: "backend",
		details: { status: "approved" },
		created_at: "2025-11-05T09:00:00Z",
	},
	{
		id: 3,
		entity_type: "Уведомления",
		entity_id: "n1",
		actor_type: "system",
		actor_id: null,
		action_type: "send",
		source_type: "cron",
		details: { to: "u3", type: "email" },
		created_at: "2025-11-05T09:15:00Z",
	},
	{
		id: 4,
		entity_type: "Продукты",
		entity_id: "p1",
		actor_type: "user",
		actor_id: "u4",
		action_type: "create",
		source_type: "frontend",
		details: { name: "Продукт А", price: 1200 },
		created_at: "2025-11-05T09:30:00Z",
	},
	{
		id: 5,
		entity_type: "Пространства",
		entity_id: "s1",
		actor_type: "agent",
		actor_id: "a1",
		action_type: "update",
		source_type: "AI",
		details: { name: "Общий офис", capacity: 50 },
		created_at: "2025-11-05T09:45:00Z",
	},
	{
		id: 6,
		entity_type: "Команды",
		entity_id: "t1",
		actor_type: "user",
		actor_id: "u1",
		action_type: "create",
		source_type: "frontend",
		details: { name: "Команда разработки" },
		created_at: "2025-11-05T10:00:00Z",
	},
	{
		id: 7,
		entity_type: "Сотрудники",
		entity_id: "e1",
		actor_type: "user",
		actor_id: "u2",
		action_type: "hire",
		source_type: "backend",
		details: { name: "Иван Иванов", position: "Разработчик" },
		created_at: "2025-11-05T10:15:00Z",
	},
	{
		id: 8,
		entity_type: "Роли",
		entity_id: "r2",
		actor_type: "user",
		actor_id: "u3",
		action_type: "assign",
		source_type: "frontend",
		details: { role: "Администратор", user_id: "u4" },
		created_at: "2025-11-05T10:30:00Z",
	},
	{
		id: 9,
		entity_type: "Должности",
		entity_id: "j1",
		actor_type: "user",
		actor_id: "u1",
		action_type: "create",
		source_type: "frontend",
		details: { name: "Менеджер проектов" },
		created_at: "2025-11-05T10:45:00Z",
	},
	{
		id: 10,
		entity_type: "Профиль",
		entity_id: "u1",
		actor_type: "user",
		actor_id: "u1",
		action_type: "update",
		source_type: "frontend",
		details: { email: "user1@example.com" },
		created_at: "2025-11-05T11:00:00Z",
	},
	{
		id: 11,
		entity_type: "Проекты",
		entity_id: "pr1",
		actor_type: "user",
		actor_id: "u2",
		action_type: "create",
		source_type: "frontend",
		details: { name: "Проект X", deadline: "2025-12-15" },
		created_at: "2025-11-05T11:15:00Z",
	},
	{
		id: 12,
		entity_type: "Процессы",
		entity_id: "prc1",
		actor_type: "user",
		actor_id: "u3",
		action_type: "update",
		source_type: "AI",
		details: { step: "Сбор требований" },
		created_at: "2025-11-05T11:30:00Z",
	},
	{
		id: 13,
		entity_type: "Задачи",
		entity_id: "task1",
		actor_type: "user",
		actor_id: "u4",
		action_type: "create",
		source_type: "frontend",
		details: { title: "Сделать дизайн", priority: "high" },
		created_at: "2025-11-05T11:45:00Z",
	},
	{
		id: 14,
		entity_type: "Чек-листы",
		entity_id: "cl1",
		actor_type: "agent",
		actor_id: "a1",
		action_type: "update",
		source_type: "AI",
		details: { completed: 3, total: 5 },
		created_at: "2025-11-05T12:00:00Z",
	},
	{
		id: 15,
		entity_type: "Этапы",
		entity_id: "st1",
		actor_type: "user",
		actor_id: "u1",
		action_type: "complete",
		source_type: "frontend",
		details: { name: "Разработка" },
		created_at: "2025-11-05T12:15:00Z",
	},
	{
		id: 16,
		entity_type: "Истории",
		entity_id: "h1",
		actor_type: "user",
		actor_id: "u2",
		action_type: "update",
		source_type: "backend",
		details: { text: "Изменения в задаче #12" },
		created_at: "2025-11-05T12:30:00Z",
	},
	{
		id: 17,
		entity_type: "Агенты",
		entity_id: "ag1",
		actor_type: "system",
		actor_id: null,
		action_type: "execute",
		source_type: "AI",
		details: { task: "Автоматическая проверка" },
		created_at: "2025-11-05T12:45:00Z",
	},
	{
		id: 18,
		entity_type: "Ассистенты",
		entity_id: "as1",
		actor_type: "agent",
		actor_id: "a2",
		action_type: "remind",
		source_type: "AI",
		details: { user_id: "u3", text: "Не забудь встречу" },
		created_at: "2025-11-05T13:00:00Z",
	},
	{
		id: 19,
		entity_type: "Эпики",
		entity_id: "ep1",
		actor_type: "user",
		actor_id: "u1",
		action_type: "create",
		source_type: "frontend",
		details: { name: "Epic Feature A" },
		created_at: "2025-11-05T13:15:00Z",
	},
	{
		id: 20,
		entity_type: "Настройки",
		entity_id: "set1",
		actor_type: "user",
		actor_id: "u1",
		action_type: "update",
		source_type: "frontend",
		details: { notifications: "enabled", timezone: "Europe/Moscow" },
		created_at: "2025-11-05T13:30:00Z",
	},
];

export default function ActivityPage() {
	return (
		<>
			<Section>
				<Container>
					<h1 className="">История активности</h1>
				</Container>
			</Section>
			<Section>
				<Container>
					<div className="grid gap-2">
						<Badge variant={"outline"} className="">
							24 ноября
						</Badge>
						<div className="flex items-center justify-between gap-3">
							<ListTodo className="size-4" />
							<span className="flex-1">
								Пользователь <strong>Иван Иванов</strong> создал
								новую задачу: <em>Сделать дизайн</em>
							</span>
							<span className="text-muted-foreground text-sm">
								5 минут назад
							</span>
						</div>
						<div className="flex items-center justify-between gap-3">
							<AppWindow className="size-4" />
							<span className="flex-1">
								Система <strong>Мониторинг</strong> завершила
								анализ: <em>Документации</em>
							</span>
							<span className="text-muted-foreground text-sm">
								15 минут назад
							</span>
						</div>
						<div className="flex items-center justify-between gap-3">
							<Bot className="size-4" />
							<span className="flex-1">
								Агент <strong>Маркетолог</strong> завершил
								формирование требований для постов в{" "}
								<em>Социальных сетях</em>
							</span>
							<span className="text-muted-foreground text-sm">
								15 минут назад
							</span>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
