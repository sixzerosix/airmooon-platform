import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/layouts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Plus, EllipsisVertical, Star } from "lucide-react";

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
	Item,
	ItemActions,
	ItemContent,
	ItemGroup,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@/components/ui/item";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
	return (
		<Section>
			<Container>
				<div className="grid"></div>
				<div className="flex max-sm:flex-col gap-5 justify-between">
					<div className="flex-1">
						<div className="grid gap-5">
							<Card>
								<CardHeader className="gap-0">
									<CardTitle>Проекты</CardTitle>
								</CardHeader>
							</Card>
							<ItemGroup className="gap-3">
								<Item
									variant="outline"
									className={`${true && "border-primary"}`}
								>
									<ItemMedia>
										<Button
											variant={"secondary"}
											size={"icon-sm"}
											className="absolute rounded-full -top-2 -left-2 z-10 size-6 border-2 border-background"
										>
											<Star className="fill-chart-4 text-chart-4" />
										</Button>
										<Avatar className="size-11 rounded-lg">
											<Link href="/projects/12f9fdd3-b576-436a-9a92-8adf799ee47e">
												<AvatarImage src="https://github.com/evilrabbit.png" />
												<AvatarFallback>
													ER
												</AvatarFallback>
											</Link>
										</Avatar>
									</ItemMedia>
									<ItemContent>
										<ItemTitle>
											<Link href="/projects/12f9fdd3-b576-436a-9a92-8adf799ee47e">
												Evil Маркетинг
											</Link>
											<Badge variant={"outline"}>
												Исследование
											</Badge>
										</ItemTitle>
										<ItemDescription className="flex gap-2 items-center">
											<HoverCard>
												<HoverCardTrigger asChild>
													<Avatar className="size-4">
														<AvatarImage src="https://github.com/evilrabbit.png" />
														<AvatarFallback>
															ER
														</AvatarFallback>
													</Avatar>
												</HoverCardTrigger>
												<HoverCardContent
													className="w-80"
													align={"start"}
												>
													<div className="flex justify-between gap-4">
														<Avatar>
															<AvatarImage src="https://github.com/vercel.png" />
															<AvatarFallback>
																VC
															</AvatarFallback>
														</Avatar>
														<div className="space-y-1">
															<h4 className="text-sm font-semibold">
																@nextjs
															</h4>
															<p className="text-sm">
																The React
																Framework -
																created and
																maintained by
																@vercel.
															</p>
															<div className="text-muted-foreground text-xs">
																Joined December
																2021
															</div>
														</div>
													</div>
												</HoverCardContent>
											</HoverCard>
											Обновленно 5 минут назад
										</ItemDescription>
									</ItemContent>
									<ItemContent>
										<div className="*:data-[slot=avatar]:ring-background flex -space-x-3 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
											<Tooltip>
												<TooltipTrigger asChild>
													<Avatar>
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
													<Avatar>
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
											<Tooltip>
												<TooltipTrigger asChild>
													<Avatar>
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
										</div>
									</ItemContent>
									<ItemActions>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button
													size="icon-sm"
													variant="ghost"
													className="rounded-full"
													aria-label="Invite"
												>
													<EllipsisVertical />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent
												align={"end"}
												className="min-w-40"
											>
												<DropdownMenuItem asChild>
													<Link href="/projects/12f9fdd3-b576-436a-9a92-8adf799ee47e">
														Открыть
													</Link>
												</DropdownMenuItem>
												<DropdownMenuItem>
													Поделиться
												</DropdownMenuItem>
												<DropdownMenuItem>
													Настройки
												</DropdownMenuItem>
												<DropdownMenuSeparator />
												<DropdownMenuItem>
													Удалить
												</DropdownMenuItem>
												<DropdownMenuItem>
													Архивировать
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</ItemActions>
								</Item>
								<Item variant="outline">
									<ItemMedia>
										<Avatar className="size-10">
											<AvatarImage src="https://github.com/evilrabbit.png" />
											<AvatarFallback>ER</AvatarFallback>
										</Avatar>
									</ItemMedia>
									<ItemContent>
										<ItemTitle>Evil Rabbit</ItemTitle>
										<ItemDescription>
											Last seen 5 months ago
										</ItemDescription>
									</ItemContent>
									<ItemActions>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button
													size="icon-sm"
													variant="ghost"
													className="rounded-full"
													aria-label="Invite"
												>
													<EllipsisVertical />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent
												align={"end"}
												className="min-w-40"
											>
												<DropdownMenuItem>
													Поделиться
												</DropdownMenuItem>
												<DropdownMenuItem>
													Настройки
												</DropdownMenuItem>
												<DropdownMenuSeparator />
												<DropdownMenuItem>
													Удалить
												</DropdownMenuItem>
												<DropdownMenuItem>
													Архивировать
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</ItemActions>
								</Item>
							</ItemGroup>
						</div>
					</div>

					<div className="max-w-3xs w-full">
						<Card>
							<CardContent>
								<p>Company Details</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</Container>
		</Section>
	);
}
