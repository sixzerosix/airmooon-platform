"use client";

import { useState } from "react";
import Link from "next/link";

import { Section } from "@/components/layouts";
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
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
	KeyRound,
	Mail,
	Fingerprint,
} from "lucide-react";

export default function Security() {
	const [isAdditionalEmail, setIsAdditionalEmail] = useState(false);
	const [isVisiblePassword, setIsVisiblePassword] = useState(false);
	return (
		<div className="grid gap-5">
			<Card>
				<CardContent>
					<h2 className="text-lg font-medium">Безопасность</h2>
				</CardContent>
				<CardContent>
					<div className="grid grid-cols-1 gap-6">
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="2fa">
										<KeyRound className="size-4" />
										Пароль
									</FieldLabel>
									<FieldDescription>
										Последнее изменение: 12.12.2025
									</FieldDescription>
								</FieldContent>
								<Dialog>
									<form>
										<DialogTrigger asChild>
											<Button variant="outline" size="sm">
												Сменить
											</Button>
										</DialogTrigger>
										<DialogContent className="sm:max-w-[425px]">
											<DialogHeader>
												<DialogTitle>
													<div className="flex items-center gap-2">
														<span
															onClick={() =>
																setIsVisiblePassword(
																	!isVisiblePassword
																)
															}
														>
															{isVisiblePassword ? (
																<Eye />
															) : (
																<EyeOff />
															)}
														</span>
														Смена пароля
													</div>
												</DialogTitle>
												<DialogDescription>
													Смена пароля возможна только
													1 раз в 24 часа.
												</DialogDescription>
											</DialogHeader>
											<div className="grid gap-4">
												<div className="grid gap-3">
													<Label htmlFor="current_password">
														Текущий пароль
													</Label>
													<InputGroup>
														<InputGroupInput
															type={
																isVisiblePassword
																	? "text"
																	: "password"
															}
															id="current_password"
															placeholder="Пароль"
														/>
													</InputGroup>
												</div>
												<div className="grid gap-3">
													<Label htmlFor="new_password">
														Новый пароль
													</Label>
													<InputGroup>
														<InputGroupInput
															type={
																isVisiblePassword
																	? "text"
																	: "password"
															}
															id="new_password"
															placeholder="Пароль"
														/>
													</InputGroup>
												</div>
												<div className="grid gap-3">
													<Label htmlFor="repeat_new_password">
														Повторите новый пароль
													</Label>
													<InputGroup>
														<InputGroupInput
															type={
																isVisiblePassword
																	? "text"
																	: "password"
															}
															id="repeat_new_password"
															placeholder="Пароль"
														/>
													</InputGroup>
												</div>
											</div>
											<DialogFooter>
												<DialogClose asChild>
													<Button variant="outline">
														Отмена
													</Button>
												</DialogClose>
												<Button type="submit">
													Сохранить пароль
												</Button>
											</DialogFooter>
										</DialogContent>
									</form>
								</Dialog>
							</Field>
						</div>

						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="2fa">
										<Mail className="size-4" />
										Резервный Email
									</FieldLabel>
									<FieldDescription>
										Не установлен
									</FieldDescription>
								</FieldContent>
								<Dialog>
									<form>
										<DialogTrigger asChild>
											<Button variant="outline" size="sm">
												Добавить
											</Button>
										</DialogTrigger>
										<DialogContent className="sm:max-w-[425px]">
											<DialogHeader>
												<DialogTitle>
													Добавить резервный Email
												</DialogTitle>
												<DialogDescription>
													Введите резервный Email.
												</DialogDescription>
											</DialogHeader>
											<div className="grid gap-4">
												<div className="grid gap-3">
													<Label htmlFor="email">
														Email
													</Label>
													<InputGroup>
														<InputGroupInput
															type="email"
															id="userEmail"
															placeholder="Email"
														/>
														<InputGroupAddon>
															<MailIcon />
														</InputGroupAddon>
													</InputGroup>
												</div>
											</div>
											<DialogFooter>
												<DialogClose asChild>
													<Button variant="outline">
														Отмена
													</Button>
												</DialogClose>
												<Button type="submit">
													Сохранить
												</Button>
											</DialogFooter>
										</DialogContent>
									</form>
								</Dialog>
							</Field>
						</div>

						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="2fa">
										<Mail className="size-4" />
										Резервный Email
									</FieldLabel>
									<FieldDescription>
										Последнее изменение: 12.12.2025
									</FieldDescription>
								</FieldContent>

								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="secondary" size="sm">
											air@email.com
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										align="end"
										className="min-w-36"
									>
										<DropdownMenuItem>
											Изменить
										</DropdownMenuItem>
										<DropdownMenuItem>
											Удалить
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</Field>
						</div>

						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="2fa">
										<Fingerprint className="size-4" />
										Многофакторная аутентификация
									</FieldLabel>
									<FieldDescription>
										Включите многофакторную аутентификацию.
										При отсутствии устройства используйте
										код из письма.
									</FieldDescription>
								</FieldContent>
								<Switch id="2fa" />
							</Field>
						</div>
					</div>
				</CardContent>
				<CardContent>
					<div className="flex items-center">
						<h2 className="text-lg font-medium flex-1">
							Активные сессии
						</h2>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" size="icon-sm">
									<Ellipsis className="size-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								align="end"
								className="min-w-36"
							>
								<DropdownMenuItem>
									Завершить все кроме текущей
								</DropdownMenuItem>
								<DropdownMenuItem>
									Завершить все
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</CardContent>
				<CardContent>
					<div className="grid gap-4">
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="2fa">
										<Computer className="size-4" />
										Chrome на Windows
										<Badge variant="outline">Текущая</Badge>
									</FieldLabel>
									<FieldDescription>
										Москва, Россия · 192.168.1.25 ·
										Активность: 1 минуту назад
									</FieldDescription>
								</FieldContent>
								<Button variant="outline" size="sm" disabled>
									Завершить
								</Button>
							</Field>
						</div>
						<Separator />
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="2fa">
										<Smartphone className="size-4" />
										Safari на iPhone 16
									</FieldLabel>
									<FieldDescription>
										Санкт-Петербург, Россия · 192.168.1.40 ·
										Активность: Вчера в 19:42
									</FieldDescription>
								</FieldContent>
								<AlertDialog>
									<AlertDialogTrigger asChild>
										<Button variant="outline" size="sm">
											Завершить
										</Button>
									</AlertDialogTrigger>
									<AlertDialogContent>
										<AlertDialogHeader>
											<AlertDialogTitle>
												Завершить сессию?
											</AlertDialogTitle>
											<AlertDialogDescription>
												Вы уверены, что хотите завершить
												эту сессию? После выхода
												потребуется повторный вход на
												этом устройстве.
											</AlertDialogDescription>
										</AlertDialogHeader>
										<AlertDialogFooter>
											<AlertDialogCancel>
												Отмена
											</AlertDialogCancel>
											<AlertDialogAction>
												Завершить
											</AlertDialogAction>
										</AlertDialogFooter>
									</AlertDialogContent>
								</AlertDialog>
							</Field>
						</div>
						<Separator />
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="2fa">
										<Computer className="size-4" />
										Firefox на macOS
									</FieldLabel>
									<FieldDescription>
										Новосибирск, Россия · 192.168.1.666 ·
										Активность: 3 дня назад
									</FieldDescription>
								</FieldContent>
								<AlertDialog>
									<AlertDialogTrigger asChild>
										<Button variant="outline" size="sm">
											Завершить
										</Button>
									</AlertDialogTrigger>
									<AlertDialogContent>
										<AlertDialogHeader>
											<AlertDialogTitle>
												Завершить сессию?
											</AlertDialogTitle>
											<AlertDialogDescription>
												Вы уверены, что хотите завершить
												эту сессию? После выхода
												потребуется повторный вход на
												этом устройстве.
											</AlertDialogDescription>
										</AlertDialogHeader>
										<AlertDialogFooter>
											<AlertDialogCancel>
												Отмена
											</AlertDialogCancel>
											<AlertDialogAction>
												Завершить
											</AlertDialogAction>
										</AlertDialogFooter>
									</AlertDialogContent>
								</AlertDialog>
							</Field>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
