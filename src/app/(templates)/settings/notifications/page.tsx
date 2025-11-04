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
	const [isAdditionalEmail, setIsAdditionalEmail] = useState(false);
	const [isVisiblePassword, setIsVisiblePassword] = useState(false);

	const [isEmailSource, setIsEmailSource] = React.useState<Checked>(true);
	const [isApplicationSource, setIsApplicationSource] =
		React.useState<Checked>(false);
	const [isPushSource, setIsPushSource] = React.useState<Checked>(false);
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
										Источники уведомлений
									</FieldLabel>
									<FieldDescription>
										Текущие: {isEmailSource && "Email, "}
										{isApplicationSource && "Приложение, "}
										{isPushSource && "Push-уведомления"}
										{!isEmailSource &&
											!isApplicationSource &&
											!isPushSource &&
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
											{(!isEmailSource &&
												!isApplicationSource &&
												!isPushSource &&
												"Отключено") ||
												"Всего: " +
													(+isEmailSource +
														+isApplicationSource +
														+isPushSource)}
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
										<DropdownMenuCheckboxItem
											checked={isEmailSource}
											onCheckedChange={setIsEmailSource}
										>
											Email
										</DropdownMenuCheckboxItem>
										<DropdownMenuCheckboxItem
											checked={isApplicationSource}
											onCheckedChange={
												setIsApplicationSource
											}
										>
											Приложение
										</DropdownMenuCheckboxItem>
										<DropdownMenuCheckboxItem
											checked={isPushSource}
											onCheckedChange={setIsPushSource}
										>
											Push-уведомления
										</DropdownMenuCheckboxItem>
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
										className="w-auto"
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
			<Card>
				<CardContent>
					<h2 className="text-lg font-medium">Уведомления</h2>
				</CardContent>
				<CardContent>
					<div className="grid grid-cols-1 gap-6">
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="notification_email">
										Уведомления по почте.
									</FieldLabel>
									<FieldDescription>
										Получайте важные уведомления и
										обновления на вашу электронную почту.
									</FieldDescription>
								</FieldContent>
								<Switch id="notification_email" />
							</Field>
						</div>
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="notification_app">
										Уведомления внутри приложения
									</FieldLabel>
									<FieldDescription>
										Получайте важные уведомления и
										обновления внутри приложения.
									</FieldDescription>
								</FieldContent>
								<Switch id="notification_app" />
							</Field>
						</div>
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="notification_push">
										Push-уведомления.
									</FieldLabel>
									<FieldDescription>
										Получайте важные уведомления и
										обновления через push-уведомления.
									</FieldDescription>
								</FieldContent>
								<Switch id="notification_push" />
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
									<SelectTrigger className="w-auto">
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
