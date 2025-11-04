"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
	Field,
	FieldContent,
	FieldDescription,
	FieldLabel,
} from "@/components/ui/field";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { Languages, SunMoon, ChevronDown, Check } from "lucide-react";

interface Timezone {
	value: string;
	label: string;
}

const appPages = [
	{
		label: "Главная",
		value: "home",
	},
	{
		label: "Астивность",
		value: "activity",
	},
	{
		label: "Компания",
		value: "company",
	},
	{
		label: "Отчёты",
		value: "reports",
	},
	{
		label: "Продукты",
		value: "products",
	},
	{
		label: "Пространства",
		value: "spaces",
	},
	{
		label: "Команды",
		value: "commands",
	},
];

const timezones = [
	{ value: "Pacific/Midway", label: "UTC−11:00 (Midway, Самоа)" },
	{
		value: "America/Los_Angeles",
		label: "UTC−08:00 (Лос-Анджелес, Ванкувер)",
	},
	{ value: "America/New_York", label: "UTC−05:00 (Нью-Йорк, Торонто)" },
	{ value: "Europe/London", label: "UTC±00:00 (Лондон, Лиссабон)" },
	{ value: "Europe/Berlin", label: "UTC+01:00 (Берлин, Париж)" },
	{ value: "Europe/Moscow", label: "UTC+03:00 (Москва, Минск)" },
	{ value: "Asia/Bangkok", label: "UTC+07:00 (Бангкок, Хошимин)" },
	{ value: "Asia/Tokyo", label: "UTC+09:00 (Токио, Сеул)" },
	{ value: "Australia/Sydney", label: "UTC+10:00 (Сидней, Владивосток)" },
	{ value: "Pacific/Auckland", label: "UTC+12:00 (Окленд, Фиджи)" },
];

export default function Security() {
	// Theme
	const { setTheme, theme } = useTheme();

	// Channels
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	// Timezone
	const [timezone, setTimezone] = useState<string>("");

	// Is Loaded
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		try {
			const current = Intl.DateTimeFormat().resolvedOptions().timeZone;
			setTimezone(current);
		} catch (error) {
			console.error("Failed to get timezone:", error);
			setTimezone("Europe/Moscow");
		} finally {
			setIsLoaded(true);
		}
	}, []);

	// if (!isLoaded) {
	// 	return (
	// 		<div className="max-w-xs h-10 bg-gray-200 rounded animate-pulse" />
	// 	);
	// }

	return (
		<div className="grid gap-5">
			<Card>
				<CardContent>
					<h2 className="text-lg font-medium">Система</h2>
				</CardContent>
				<CardContent>
					<div className="grid grid-cols-1 gap-6">
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="notification_push">
										<Languages className="size-4" />
										Язык системы
									</FieldLabel>
									<FieldDescription>
										Выберите, на каком языке отображать
										интерфейс
									</FieldDescription>
								</FieldContent>
								<Select defaultValue={"instant"}>
									<SelectTrigger
										className="w-auto hover:bg-accent"
										size={"sm"}
									>
										<SelectValue placeholder="Уведомления" />
									</SelectTrigger>
									<SelectContent
										className="w-52"
										align={"end"}
									>
										<SelectGroup>
											<SelectItem value="instant">
												Мгновенно
											</SelectItem>
											<SelectItem value="hourly">
												Ежечасно
											</SelectItem>
											<SelectItem value="daily">
												Ежедневно
											</SelectItem>
											<SelectItem value="weekly">
												Еженедельно
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</Field>
						</div>
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="notification_push">
										<SunMoon className="size-4" />
										Тема
									</FieldLabel>
									<FieldDescription>
										Выберите, на каком языке отображать
										интерфейс
									</FieldDescription>
								</FieldContent>
								<Select
									defaultValue={theme || "system"}
									onValueChange={(value) => setTheme(value)}
								>
									<SelectTrigger
										className="w-auto hover:bg-accent"
										size={"sm"}
									>
										<SelectValue placeholder="Тема" />
									</SelectTrigger>
									<SelectContent
										className="w-52"
										align={"end"}
									>
										<SelectGroup>
											<SelectItem value="light">
												Светлая
											</SelectItem>
											<SelectItem value="dark">
												Тёмная
											</SelectItem>
											<SelectItem
												// Удалите onChange отсюда
												value="system"
											>
												Системная
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</Field>
						</div>
						<Separator />
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="notification_push">
										<SunMoon className="size-4" />
										Часовой пояс
									</FieldLabel>
									<FieldDescription>
										Выберите, на каком языке отображать
										интерфейс
									</FieldDescription>
								</FieldContent>
								<Select
									defaultValue={timezone}
									onValueChange={setTimezone}
								>
									<SelectTrigger size={"sm"}>
										<SelectValue placeholder="Выберите часовой пояс" />
									</SelectTrigger>
									<SelectContent align={"end"}>
										<SelectGroup>
											{timezones.map((tz) => (
												<SelectItem
													key={tz.value}
													value={tz.value}
												>
													{tz.label}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</Field>
						</div>
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="notification_push">
										Формат даты
									</FieldLabel>
									<FieldDescription>
										Выберите, на каком языке отображать
										интерфейс
									</FieldDescription>
								</FieldContent>
								<Select defaultValue={"instant"}>
									<SelectTrigger
										className="w-auto hover:bg-accent"
										size={"sm"}
									>
										<SelectValue placeholder="Уведомления" />
									</SelectTrigger>
									<SelectContent
										className="w-52"
										align={"end"}
									>
										<SelectGroup>
											<SelectItem value="instant">
												Мгновенно
											</SelectItem>
											<SelectItem value="hourly">
												Ежечасно
											</SelectItem>
											<SelectItem value="daily">
												Ежедневно
											</SelectItem>
											<SelectItem value="weekly">
												Еженедельно
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</Field>
						</div>
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="system_time_format">
										Формат времени
									</FieldLabel>
									<FieldDescription>
										Выберите, на каком языке отображать
										интерфейс
									</FieldDescription>
								</FieldContent>
								<Select defaultValue={"hourly"}>
									<SelectTrigger
										className="w-auto hover:bg-accent"
										size={"sm"}
									>
										<SelectValue placeholder="Уведомления" />
									</SelectTrigger>
									<SelectContent
										className="w-52"
										align={"end"}
									>
										<SelectGroup>
											<SelectItem value="hourly">
												24 часа
											</SelectItem>
											<SelectItem value="instant">
												12 часов
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</Field>
						</div>
						<Separator />
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="notification_push">
										Начальная страница
									</FieldLabel>
									<FieldDescription>
										Страница, которая открывается после
										входа
									</FieldDescription>
								</FieldContent>

								<Popover open={open} onOpenChange={setOpen}>
									<PopoverTrigger asChild>
										<Button
											size={"sm"}
											variant={"outline"}
											role="combobox"
											aria-expanded={open}
											className="w-auto justify-between font-normal"
										>
											{value
												? appPages.find(
														(appPages) =>
															appPages.value ===
															value
												  )?.label
												: "Выберите страницу"}
											<ChevronDown className="text-muted-foreground/50" />
										</Button>
									</PopoverTrigger>
									<PopoverContent
										className="max-w-52 p-0"
										align={"end"}
									>
										<Command>
											<CommandInput
												placeholder="Поиск страниц..."
												className="h-9"
											/>
											<CommandList>
												<CommandEmpty>
													Страница не найдена.
												</CommandEmpty>
												<CommandGroup>
													{appPages.map(
														(appPages) => (
															<CommandItem
																key={
																	appPages.value
																}
																value={
																	appPages.value
																}
																onSelect={(
																	currentValue
																) => {
																	setValue(
																		currentValue ===
																			value
																			? ""
																			: currentValue
																	);
																	setOpen(
																		false
																	);
																}}
															>
																{appPages.label}
																<Check
																	className={cn(
																		"ml-auto",
																		value ===
																			appPages.value
																			? "opacity-100"
																			: "opacity-0"
																	)}
																/>
															</CommandItem>
														)
													)}
												</CommandGroup>
											</CommandList>
										</Command>
									</PopoverContent>
								</Popover>
							</Field>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
