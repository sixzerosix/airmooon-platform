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
	{ value: "Auto", label: "Авто определение" },
	{ value: "Pacific/Midway", label: "UTC−11:00 (Midway, Самоа)" },
	{
		value: "America/Los_Angeles",
		label: "UTC−08:00 (Лос-Анджелес, Ванкувер)",
	},
	{ value: "America/New_York", label: "UTC−05:00 (Нью-Йорк)" },
	{ value: "Europe/London", label: "UTC±00:00 (Лондон)" },
	{ value: "Europe/Berlin", label: "UTC+01:00 (Париж)" },
	{ value: "Europe/Moscow", label: "UTC+03:00 (Москва)" },
	{ value: "Asia/Bangkok", label: "UTC+07:00 (Бангкок)" },
	{ value: "Asia/Tokyo", label: "UTC+09:00 (Токио)" },
	{ value: "Australia/Sydney", label: "UTC+10:00 (Владивосток)" },
	{ value: "Pacific/Auckland", label: "UTC+12:00 (Фиджи)" },
];

const languages = [
	{ value: "ru", label: "Русский" },
	{ value: "en", label: "Английский" },
	{ value: "de", label: "Немецкий" },
	{ value: "ja", label: "Японский" },
	{ value: "es", label: "Испанский" },
	{ value: "fr", label: "Французский" },
	{ value: "zh", label: "Китайский" },
	{ value: "pt", label: "Португальский" },
	{ value: "ar", label: "Арабский" },
	{ value: "hi", label: "Хинди" },
];

export default function Security() {
	// Theme
	const { setTheme, theme } = useTheme();

	// Channels
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	const [label, setLabel] = useState("");

	// Timezone
	const [timezone, setTimezone] = useState<string>("");

	// Is Loaded
	// const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const saved = localStorage.getItem("user-timezone");

		// Если сохранено “Auto” — определяем по системе
		if (saved === "Auto" || !saved) {
			const systemTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
			setTimezone("Auto");
			setLabel(`Автоматически (${systemTZ})`);
			localStorage.setItem("user-timezone", "Auto");
		} else {
			setTimezone(saved);
			const tz = timezones.find((t) => t.value === saved);
			if (tz) setLabel(tz.label);
		}
	}, []);

	const handleTimezoneChange = (value: string) => {
		if (value === "Auto") {
			const systemTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
			setTimezone("Auto");
			setLabel(`Автоматически (${systemTZ})`);
			localStorage.setItem("user-timezone", "Auto");
		} else {
			setTimezone(value);
			const tz = timezones.find((t) => t.value === value);
			setLabel(tz ? tz.label : "");
			localStorage.setItem("user-timezone", value);
		}
	};

	const [language, setLanguage] = useState("Auto");

	useEffect(() => {
		// 1️⃣ Проверяем, есть ли сохранённый язык
		const savedLang = localStorage.getItem("app_language");

		if (savedLang && languages.some((lang) => lang.value === savedLang)) {
			setLanguage(savedLang);
			return;
		}

		// 2️⃣ Определяем язык системы
		const userLang = (
			navigator.language ||
			navigator.userLanguage ||
			"en"
		).split("-")[0];
		const found = languages.find((lang) => lang.value === userLang);
		setLanguage(found ? found.value : "en");
	}, []);

	// 3️⃣ При изменении сохраняем выбор
	const handleLanguageChange = (value: string) => {
		setLanguage(value);
		localStorage.setItem("app_language", value);
	};

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
								<Select
									value={language}
									onValueChange={handleLanguageChange}
								>
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
											{languages.map((lang) => (
												<SelectItem
													key={lang.value}
													value={lang.value}
												>
													{lang.label}
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
										{label &&
											"Текущий часовой пояс: " + label}
									</FieldDescription>
								</FieldContent>
								<Select
									value={timezone}
									onValueChange={handleTimezoneChange}
								>
									<SelectTrigger size={"sm"}>
										<SelectValue
											placeholder={label && label}
										/>
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
