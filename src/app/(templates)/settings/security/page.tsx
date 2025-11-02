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

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import {
	BadgeCheckIcon,
	ChevronRightIcon,
	CheckCircle2Icon,
	MailIcon,
	BadgeX,
} from "lucide-react";

export default function Security() {
	const [isAdditionalEmail, setIsAdditionalEmail] = useState(false);
	return (
		<div className="grid gap-5">
			<Card>
				<CardContent>
					<h2 className="text-lg font-medium">Безопасность</h2>
				</CardContent>
				<CardContent>
					<div className="grid grid-cols-1 gap-5">
						<div className="grid gap-3">
							<Label htmlFor="userPassword">Пароль</Label>
							<div className="flex gap-3">
								<Input
									type="password"
									id="userPassword"
									placeholder="Пароль"
									defaultValue={"**********"}
									disabled
								/>
								<Button>Сменить пароль</Button>
							</div>
						</div>
						<div className="grid gap-3">
							<Label htmlFor="email">Резервный Email</Label>
							<InputGroup>
								<InputGroupInput
									type="email"
									id="userEmail"
									placeholder="Email"
									defaultValue={"moon@emain.com"}
									disabled
								/>
								<InputGroupAddon>
									<MailIcon />
								</InputGroupAddon>
							</InputGroup>
						</div>
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="2fa">
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
			</Card>
			<Card>
				<CardContent>
					<h2 className="text-lg font-medium">Безопасность</h2>
				</CardContent>
				<CardContent>
					<div className="grid grid-cols-1 gap-5">
						<div className="flex justify-between gap-3">
							<Label>Пароль</Label>

							<Button variant="outline" size="sm">
								Сменить
							</Button>
						</div>
						<div className="flex justify-between gap-3">
							<Label>Резервный Email</Label>
							{(isAdditionalEmail && (
								<div>air@email.com</div>
							)) || (
								<div className="text-muted-foreground">
									Нет резервного Email
								</div>
							)}
						</div>
						<div className="flex justify-between gap-3">
							<Label>Резервный Email</Label>
							{(isAdditionalEmail && (
								<div>air@email.com</div>
							)) || (
								<Button variant="outline" size="sm">
									Добавить
								</Button>
							)}
						</div>
						<div className="flex justify-between gap-3">
							<Label>Резервный Email</Label>

							<div>air@email.com</div>
						</div>
						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="2fa">
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
			</Card>
			<Card>
				<CardContent>
					<h2 className="text-lg font-medium">Безопасность</h2>
				</CardContent>
				<CardContent>
					<div className="grid grid-cols-1 gap-5">
						<div className="flex justify-between gap-3">
							<Label>Пароль</Label>

							<Button variant="outline" size="sm">
								Сменить
							</Button>
						</div>

						<div className="flex justify-between gap-3">
							<Label>Резервный Email</Label>
							{(isAdditionalEmail && (
								<div>air@email.com</div>
							)) || (
								<Button variant="outline" size="sm">
									Добавить
								</Button>
							)}
						</div>

						<div>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="2fa">
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
			</Card>
		</div>
	);
}
