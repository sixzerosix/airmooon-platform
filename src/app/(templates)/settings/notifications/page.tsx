"use client";

import { useState } from "react";
import Link from "next/link";

import { Section } from "@/components/layouts";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupButton,
} from "@/components/ui/input-group";

import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@/components/ui/item";

import {
	Field,
	FieldContent,
	FieldDescription,
	FieldLabel,
} from "@/components/ui/field";

import { Switch } from "@/components/ui/switch";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
	MailIcon,
	Eye,
	EyeOff,
	Computer,
	Smartphone,
	EllipsisVertical,
	Ellipsis,
	ChevronDown,
} from "lucide-react";
import React from "react";
import { is } from "date-fns/locale";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function Security() {
	// Channels
	const [isEmailChannel, setIsEmailChannel] = React.useState<Checked>(true);
	const [isApplicationChannel, setIsApplicationChannel] =
		React.useState<Checked>(false);
	const [isPushChannel, setIsPushChannel] = React.useState<Checked>(false);

	// Sources
	const [isTaskSource, setIsTaskSource] = React.useState<Checked>(true);
	const [isCommentSource, setIsCommentSource] = React.useState<Checked>(true);
	const [isEmployeeSource, setIsEmployeeSource] =
		React.useState<Checked>(true);
	const [isProjectSource, setIsProjectSource] = React.useState<Checked>(true);
	const [isProcessSource, setIsProcessSource] = React.useState<Checked>(true);

	return (
		<div className="grid gap-5">
			<Card>
				<CardContent>
					<h2 className="text-lg font-medium">Уведомления</h2>
				</CardContent>
				<CardContent>
					<div className="grid grid-cols-1 gap-6">
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="notification_source">
										Каналы уведомлений
									</FieldLabel>
									<FieldDescription>
										Текущие: {isEmailChannel && "Email, "}
										{isApplicationChannel && "Приложение, "}
										{isPushChannel && "Push-уведомления"}
										{!isEmailChannel &&
											!isApplicationChannel &&
											!isPushChannel &&
											"Нет"}
									</FieldDescription>
								</FieldContent>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											variant="outline"
											className="font-normal"
											size={"sm"}
										>
											{(!isEmailChannel &&
												!isApplicationChannel &&
												!isPushChannel &&
												"Отключено") ||
												"Всего: " +
													(+isEmailChannel +
														+isApplicationChannel +
														+isPushChannel)}
											<ChevronDown className="text-muted-foreground/50" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										className="min-w-56"
										align={"end"}
									>
										<DropdownMenuLabel>
											Каналы
										</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuCheckboxItem
											checked={isEmailChannel}
											onCheckedChange={setIsEmailChannel}
											onSelect={(e) => e.preventDefault()}
										>
											Email
										</DropdownMenuCheckboxItem>
										<DropdownMenuCheckboxItem
											checked={isApplicationChannel}
											onCheckedChange={
												setIsApplicationChannel
											}
											onSelect={(e) => e.preventDefault()}
										>
											Приложение
										</DropdownMenuCheckboxItem>
										<DropdownMenuCheckboxItem
											checked={isPushChannel}
											onCheckedChange={setIsPushChannel}
											onSelect={(e) => e.preventDefault()}
										>
											Push-уведомления
										</DropdownMenuCheckboxItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</Field>
						</div>
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="notification_source">
										Каналы уведомлений
									</FieldLabel>
									<FieldDescription>
										Текущие: {isEmailChannel && "Email, "}
										{isApplicationChannel && "Приложение, "}
										{isPushChannel && "Push-уведомления"}
										{!isEmailChannel &&
											!isApplicationChannel &&
											!isPushChannel &&
											"Нет"}
									</FieldDescription>
								</FieldContent>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											variant="outline"
											className="font-normal"
											size={"sm"}
										>
											{(!isEmailChannel &&
												!isApplicationChannel &&
												!isPushChannel &&
												"Отключено") ||
												"Выбрано: " +
													(+isEmailChannel +
														+isApplicationChannel +
														+isPushChannel)}
											<ChevronDown className="text-muted-foreground/50" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										className="min-w-56"
										align={"end"}
									>
										<DropdownMenuLabel>
											Каналы
										</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem
											onSelect={(e) => e.preventDefault()}
										>
											<Field orientation="horizontal">
												<FieldContent>
													<FieldLabel
														htmlFor="notification_email"
														className="font-normal"
													>
														Email
													</FieldLabel>
												</FieldContent>
												{/* Добавьте checked и onCheckedChange к Switch */}
												<Switch
													id="notification_email"
													checked={isEmailChannel}
													onCheckedChange={
														setIsEmailChannel
													}
												/>
											</Field>
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={(e) => e.preventDefault()}
										>
											<Field orientation="horizontal">
												<FieldContent>
													<FieldLabel
														htmlFor="notification_app"
														className="font-normal"
													>
														Приложение
													</FieldLabel>
												</FieldContent>
												{/* Добавьте checked и onCheckedChange к Switch */}
												<Switch
													id="notification_app"
													checked={
														isApplicationChannel
													}
													onCheckedChange={
														setIsApplicationChannel
													}
												/>
											</Field>
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={(e) => e.preventDefault()}
										>
											<Field orientation="horizontal">
												<FieldContent>
													<FieldLabel
														htmlFor="notification_push"
														className="font-normal"
													>
														Push
													</FieldLabel>
												</FieldContent>
												{/* Добавьте checked и onCheckedChange к Switch */}
												<Switch
													id="notification_push"
													checked={isPushChannel}
													onCheckedChange={
														setIsPushChannel
													}
												/>
											</Field>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</Field>
						</div>

						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="notification_source">
										Источники уведомлений
									</FieldLabel>
									<FieldDescription>
										Текущие: {isTaskSource && "Задачи, "}
										{isEmployeeSource && "Сотрудники, "}
										{isCommentSource && "Комментарии, "}
										{isProjectSource && "Проекты, "}
										{isProcessSource && "Процессы, "}
										{!isTaskSource &&
											!isEmployeeSource &&
											!isCommentSource &&
											!isProjectSource &&
											!isProcessSource &&
											"Нет"}
									</FieldDescription>
								</FieldContent>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											variant="outline"
											className="font-normal"
											size={"sm"}
										>
											{(!isTaskSource &&
												!isEmployeeSource &&
												!isCommentSource &&
												!isProjectSource &&
												!isProcessSource &&
												"Отключено") ||
												"Выбрано: " +
													(+isTaskSource +
														+isEmployeeSource +
														+isCommentSource +
														+isProjectSource +
														+isProcessSource)}
											<ChevronDown className="text-muted-foreground/50" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										className="min-w-56"
										align={"end"}
									>
										<DropdownMenuLabel>
											Источники
										</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem
											onSelect={(e) => e.preventDefault()}
										>
											<Field orientation="horizontal">
												<FieldContent>
													<FieldLabel
														htmlFor="notification_task"
														className="font-normal"
													>
														Задачи
													</FieldLabel>
												</FieldContent>
												{/* Добавьте checked и onCheckedChange к Switch */}
												<Switch
													id="notification_task"
													checked={isTaskSource}
													onCheckedChange={
														setIsTaskSource
													}
												/>
											</Field>
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={(e) => e.preventDefault()}
										>
											<Field orientation="horizontal">
												<FieldContent>
													<FieldLabel
														htmlFor="notification_employee"
														className="font-normal"
													>
														Сотрудники
													</FieldLabel>
												</FieldContent>
												{/* Добавьте checked и onCheckedChange к Switch */}
												<Switch
													id="notification_employee"
													checked={isEmployeeSource}
													onCheckedChange={
														setIsEmployeeSource
													}
												/>
											</Field>
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={(e) => e.preventDefault()}
										>
											<Field orientation="horizontal">
												<FieldContent>
													<FieldLabel
														htmlFor="notification_comment"
														className="font-normal"
													>
														Комментарии
													</FieldLabel>
												</FieldContent>
												{/* Добавьте checked и onCheckedChange к Switch */}
												<Switch
													id="notification_comment"
													checked={isCommentSource}
													onCheckedChange={
														setIsCommentSource
													}
												/>
											</Field>
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={(e) => e.preventDefault()}
										>
											<Field orientation="horizontal">
												<FieldContent>
													<FieldLabel
														htmlFor="notification_project"
														className="font-normal"
													>
														Проекты
													</FieldLabel>
												</FieldContent>
												{/* Добавьте checked и onCheckedChange к Switch */}
												<Switch
													id="notification_project"
													checked={isProjectSource}
													onCheckedChange={
														setIsProjectSource
													}
												/>
											</Field>
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={(e) => e.preventDefault()}
										>
											<Field orientation="horizontal">
												<FieldContent>
													<FieldLabel
														htmlFor="notification_process"
														className="font-normal"
													>
														Процессы
													</FieldLabel>
												</FieldContent>
												{/* Добавьте checked и onCheckedChange к Switch */}
												<Switch
													id="notification_process"
													checked={isProcessSource}
													onCheckedChange={
														setIsProcessSource
													}
												/>
											</Field>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</Field>
						</div>

						<Separator />
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="notification_push">
										Частота уведомлений
									</FieldLabel>
									<FieldDescription>
										Выберите, как часто получать уведомления
										и обновления
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
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
