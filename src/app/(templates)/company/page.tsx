import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/layouts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
	Field,
	FieldContent,
	FieldDescription,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSeparator,
	FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CompanyPage() {
	return (
		<Section>
			<Container>
				<div className="grid"></div>
				<div className="flex max-sm:flex-col gap-5 justify-between">
					<div className="flex-1 max-w-2xl">
						<Card>
							<CardHeader>
								<CardTitle>Компания</CardTitle>
							</CardHeader>
							<CardContent>
								<FieldSet>
									<FieldGroup>
										<Field orientation="responsive">
											<FieldContent>
												<FieldLabel htmlFor="name">
													Название компании
												</FieldLabel>
												<FieldDescription>
													Укажите полное название
													компании
												</FieldDescription>
											</FieldContent>
											<Input
												id="name"
												placeholder="Название компании"
												required
												className=" sm:min-w-[300px]"
											/>
										</Field>

										<Field orientation="responsive">
											<FieldContent>
												<FieldLabel htmlFor="lastName">
													Коротко о компании
												</FieldLabel>
												<FieldDescription>
													Вы можете написать здесь
													краткое описание компании.
													Старайтесь укладываться в
													255 символов.
												</FieldDescription>
											</FieldContent>
											<Textarea
												id="message"
												placeholder="Краткое описание компании"
												required
												className="min-h-[100px] resize-none sm:min-w-[300px]"
											/>
										</Field>

										<Field orientation="responsive">
											<FieldContent>
												<FieldLabel htmlFor="name">
													Название компании
												</FieldLabel>
												<FieldDescription>
													Укажите полное название
													компании
												</FieldDescription>
											</FieldContent>
											<Input
												id="name"
												placeholder="Название компании"
												required
												className=" sm:min-w-[300px]"
											/>
										</Field>

										<FieldSeparator />
										<Field orientation="responsive">
											<Button type="submit">
												Submit
											</Button>
											<Button
												type="button"
												variant="outline"
											>
												Cancel
											</Button>
										</Field>
									</FieldGroup>
								</FieldSet>
							</CardContent>
						</Card>
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
