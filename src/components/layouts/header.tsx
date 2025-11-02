"use client";

import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import { Container } from "./container";
import { Button } from "../ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User as UserIcon, Settings, LogOut } from "lucide-react";
import { useState } from "react";
import { Logo } from "./logo";

const Header = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const user = {
		email: "air@mooon.com",
		user_metadata: {
			full_name: "Air Mooon",
		},
	};
	return (
		<header className="h-16 border-b border-secondary">
			<Container
				size={"full"}
				className="flex items-center h-full justify-between"
			>
				<Link href={"/"}>
					<Logo src="/vercel.svg" alt="Airmooon" size={"sm"} />
				</Link>
				{/* Desktop Navigation */}
				<NavigationMenu className="hidden md:flex">
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link
									href="/"
									className={navigationMenuTriggerStyle()}
								>
									Главная
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>
								Задачи
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<div className="grid gap-3 p-2 md:w-[400px] lg:w-[500px]">
									<NavigationMenuLink asChild>
										<Link
											href="/todos"
											className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										>
											<div className="text-sm font-medium leading-none">
												Все задачи
											</div>
											<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
												Просмотр и управление всеми
												задачами
											</p>
										</Link>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<Link
											href="/todos/new"
											className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										>
											<div className="text-sm font-medium leading-none">
												Создать задачу
											</div>
											<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
												Добавить новую задачу в систему
											</p>
										</Link>
									</NavigationMenuLink>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>
								Проекты
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<div className="grid gap-3 p-2 md:w-[400px] lg:w-[500px]">
									<NavigationMenuLink asChild>
										<Link
											href="/projects"
											className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										>
											<div className="text-sm font-medium leading-none">
												Все проекты
											</div>
											<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
												Управление проектами и их
												этапами
											</p>
										</Link>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<Link
											href="/projects/new"
											className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										>
											<div className="text-sm font-medium leading-none">
												Новый проект
											</div>
											<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
												Создать новый проект
											</p>
										</Link>
									</NavigationMenuLink>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>

				{/* User Menu & Actions */}
				<div className="flex items-center gap-3">
					{isAuthenticated ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									className="relative h-8 w-8 rounded-full"
								>
									<Avatar className="h-8 w-8">
										<AvatarImage src={"/vercel.svg"} />
										<AvatarFallback>
											{user?.email
												?.charAt(0)
												.toUpperCase() || (
												<UserIcon className="h-4 w-4" />
											)}
										</AvatarFallback>
									</Avatar>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								className="w-56"
								align="end"
								forceMount
							>
								<DropdownMenuLabel className="font-normal">
									<div className="flex flex-col space-y-1">
										<p className="text-sm font-medium leading-none">
											{user?.email}
										</p>
										<p className="text-xs leading-none text-muted-foreground">
											{user?.user_metadata?.full_name ||
												"Пользователь"}
										</p>
									</div>
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild>
									<Link
										href="/profile"
										className="cursor-pointer"
									>
										<UserIcon className="mr-2 h-4 w-4" />
										<span>Профиль</span>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link
										href="/settings"
										className="cursor-pointer"
									>
										<Settings className="mr-2 h-4 w-4" />
										<span>Настройки</span>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem
									onClick={() => {}}
									className="cursor-pointer"
								>
									<LogOut className="mr-2 h-4 w-4" />
									<span>Выйти</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<Link href="/login">
							<Button variant="outline" size="sm">
								Войти
							</Button>
						</Link>
					)}
					<ModeToggle />
				</div>
			</Container>
		</header>
	);
};

export default Header;
