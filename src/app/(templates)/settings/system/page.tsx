"use client";

import React from "react";
import { useState } from "react";
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

export default function Security() {
	// Channels
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

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
									<SelectContent>
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
								<Select defaultValue={"instant"}>
									<SelectTrigger
										className="w-auto hover:bg-accent"
										size={"sm"}
									>
										<SelectValue placeholder="Уведомления" />
									</SelectTrigger>
									<SelectContent>
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
										Часовой пояс
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
									<SelectContent>
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
									<SelectContent>
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
										Формат времени
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
									<SelectContent>
										<SelectGroup>
											<SelectItem value="instant">
												12 часов
											</SelectItem>
											<SelectItem value="hourly">
												24 часа
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
										className="max-w-56 p-0"
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
						<Separator />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
