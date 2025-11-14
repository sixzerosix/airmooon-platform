"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/layouts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function CommentsPage() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Section>
			<Container size={"xs"}>
				<div className="grid gap-3">
					<Collapsible open={isOpen} onOpenChange={setIsOpen}>
						<Card className="py-4">
							<CardContent className="grid gap-4 px-4">
								<CollapsibleTrigger className="text-start">
									<div className="font-medium mb-[0.25em]">
										Этот подход, сфокусированный на
										скорости.
									</div>
									<div className="text-sm text-muted-foreground">
										Далеко-далеко за словесными горами в
										стране гласных и согласных живут рыбные
										тексты. Деревни меня однажды журчит
										своих, живет взобравшись.
									</div>
									<div
										className={`gap-2 mt-4 ${
											isOpen ? "hidden" : "inline-flex"
										}`}
									>
										<Badge variant={"outline"}>Общие</Badge>
										<div className="*:data-[slot=avatar]:ring-background flex -space-x-1.5 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
											<Tooltip>
												<TooltipTrigger asChild>
													<Avatar className="size-5 ring-2 ring-background">
														<AvatarImage
															src="https://github.com/shadcn.png"
															alt="@shadcn"
														/>
														<AvatarFallback>
															CN
														</AvatarFallback>
													</Avatar>
												</TooltipTrigger>
												<TooltipContent>
													@Superman
												</TooltipContent>
											</Tooltip>
											<Tooltip>
												<TooltipTrigger asChild>
													<Avatar className="size-5 ring-2 ring-background">
														<AvatarImage
															src="https://github.com/evilrabbit.png"
															alt="@evilrabbit"
														/>
														<AvatarFallback>
															ER
														</AvatarFallback>
													</Avatar>
												</TooltipTrigger>
												<TooltipContent>
													@Superman
												</TooltipContent>
											</Tooltip>
											<Tooltip>
												<TooltipTrigger asChild>
													<Avatar className="size-5 ring-2 ring-background">
														<AvatarImage
															src="https://github.com/maxleiter.png"
															alt="@maxleiter"
														/>
														<AvatarFallback>
															LR
														</AvatarFallback>
													</Avatar>
												</TooltipTrigger>
												<TooltipContent>
													@Superman
												</TooltipContent>
											</Tooltip>

											<Badge
												variant={"default"}
												className="z-10 h-5 px-1 rounded-full text-xs ring-2 ring-background"
											>
												+6
											</Badge>
										</div>
										<div className="inline-flex gap-1">
											<Badge variant={"secondary"}>
												AI
											</Badge>
											<Badge variant={"secondary"}>
												Бот
											</Badge>
											<Badge variant={"secondary"}>
												Трейдинг
											</Badge>
											<Badge
												variant={"default"}
												className="z-10 h-5 px-1 rounded-full text-xs"
											>
												+6
											</Badge>
										</div>
									</div>
								</CollapsibleTrigger>
								<CollapsibleContent className="text-start">
									<div className="grid text-sm grid-cols-[auto_1fr] gap-1">
										<div className="contents">
											<div className="min-w-32 text-muted-foreground py-1.5">
												Категория
											</div>
											<div className="inline-flex items-center">
												<Select
													defaultValue={"instant"}
												>
													<SelectTrigger className="w-auto !h-6 px-2 gap-1 hover:bg-accent">
														<SelectValue placeholder="Уведомления" />
													</SelectTrigger>
													<SelectContent
														className="w-52"
														align={"end"}
													>
														<SelectGroup>
															<SelectItem value="instant">
																Общие
															</SelectItem>
															<SelectItem value="hourly">
																Проектные
															</SelectItem>
															<SelectItem value="daily">
																Личные
															</SelectItem>
															<SelectItem value="weekly">
																Тестовые
															</SelectItem>
														</SelectGroup>
													</SelectContent>
												</Select>
											</div>
										</div>

										<div className="contents">
											<div className="min-w-32 text-muted-foreground  py-1.5">
												Участники
											</div>
											<div className="inline-flex items-center">
												<div className="*:data-[slot=avatar]:ring-background flex -space-x-1.5 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
													<Tooltip>
														<TooltipTrigger asChild>
															<Avatar className="size-5 ring-2 ring-background">
																<AvatarImage
																	src="https://github.com/shadcn.png"
																	alt="@shadcn"
																/>
																<AvatarFallback>
																	CN
																</AvatarFallback>
															</Avatar>
														</TooltipTrigger>
														<TooltipContent>
															@Superman
														</TooltipContent>
													</Tooltip>
													<Tooltip>
														<TooltipTrigger asChild>
															<Avatar className="size-5 ring-2 ring-background">
																<AvatarImage
																	src="https://github.com/evilrabbit.png"
																	alt="@evilrabbit"
																/>
																<AvatarFallback>
																	ER
																</AvatarFallback>
															</Avatar>
														</TooltipTrigger>
														<TooltipContent>
															@Superman
														</TooltipContent>
													</Tooltip>
													<Tooltip>
														<TooltipTrigger asChild>
															<Avatar className="size-5 ring-2 ring-background">
																<AvatarImage
																	src="https://github.com/maxleiter.png"
																	alt="@maxleiter"
																/>
																<AvatarFallback>
																	LR
																</AvatarFallback>
															</Avatar>
														</TooltipTrigger>
														<TooltipContent>
															@Superman
														</TooltipContent>
													</Tooltip>

													<Badge
														variant={"default"}
														className="z-10 h-5 px-1 rounded-full text-xs ring-2 ring-background"
													>
														+6
													</Badge>
												</div>
											</div>
										</div>

										<div className="contents">
											<div className="min-w-32 text-muted-foreground  py-1.5">
												Метки
											</div>
											<div className="inline-flex items-center">
												<div className="inline-flex flex-wrap items-center gap-1.5">
													<Badge
														variant={"secondary"}
													>
														AI
													</Badge>
													<Badge
														variant={"secondary"}
													>
														Бот
													</Badge>
													<Badge
														variant={"secondary"}
													>
														Трейдинг
													</Badge>
													<Badge
														variant={"secondary"}
													>
														Автоматизация
													</Badge>
												</div>
											</div>
										</div>
										<div className="contents">
											<div className="min-w-32 text-muted-foreground py-1.5">
												Создана
											</div>
											<div className="inline-flex items-center">
												<div className="flex items-center gap-1.5">
													<Tooltip>
														<TooltipTrigger asChild>
															<Avatar className="size-5 ring-2 ring-background">
																<AvatarImage
																	src="https://github.com/shadcn.png"
																	alt="@shadcn"
																/>
																<AvatarFallback>
																	CN
																</AvatarFallback>
															</Avatar>
														</TooltipTrigger>
														<TooltipContent>
															@Superman
														</TooltipContent>
													</Tooltip>
													<span>1 ноября 18:01</span>
												</div>
											</div>
										</div>
									</div>
								</CollapsibleContent>
							</CardContent>
						</Card>
					</Collapsible>
					<Card className="py-4">
						<CardContent className="px-4">
							<Textarea placeholder="Написать комментарий..."></Textarea>
						</CardContent>
					</Card>
				</div>
			</Container>
		</Section>
	);
}
