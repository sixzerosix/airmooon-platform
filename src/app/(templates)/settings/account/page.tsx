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

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import {
	BadgeCheckIcon,
	ChevronRightIcon,
	CheckCircle2Icon,
	MailIcon,
	BadgeX,
} from "lucide-react";

export default function Account() {
	return (
		<>
			<Card>
				<CardContent>
					<h2 className="text-lg font-medium">Аккаунт</h2>
				</CardContent>
				<CardContent>
					<div className="grid grid-cols-1 gap-5">
						<div className="grid gap-2">
							<Label htmlFor="userLogin">Логин</Label>
							<Input
								type="text"
								id="userLogin"
								placeholder="Логин"
								defaultValue={"Moon"}
								disabled
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="userEmail">Email</Label>

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
						<div className="flex w-full flex-col gap-6">
							<Item variant="outline" className="max-sm:flex-col">
								<ItemContent>
									<ItemTitle>
										<BadgeX className="size-4" />
										Подтвердите свою учетную запись.
									</ItemTitle>
									<ItemDescription>
										Вам будет отправлено письмо с ссылкой
										для подтверждения.
									</ItemDescription>
								</ItemContent>
								<ItemActions className="max-sm:w-full">
									<Button size="sm" className="max-sm:w-full">
										Подтвердить
									</Button>
								</ItemActions>
							</Item>
							<Alert>
								<BadgeCheckIcon className="size-5" />
								<AlertTitle>
									Ваша учетная запись подтверждена.
								</AlertTitle>
							</Alert>
						</div>
					</div>
				</CardContent>
			</Card>
		</>
	);
}
