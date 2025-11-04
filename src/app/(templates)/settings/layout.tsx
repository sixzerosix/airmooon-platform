import { Main, Section, Container } from "@/components/layouts";
import { Card, CardContent } from "@/components/ui/card";
import { SettingsSidebar } from "./settings-sidebar";

export default function SettingsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Section>
			<Container>
				<div className="flex max-sm:flex-col gap-5 justify-between">
					{/* Content */}
					<div className="flex-1 max-w-2xl">{children}</div>
					{/* Navigation settings */}
					<div className="max-w-3xs w-full">
						<SettingsSidebar />
					</div>
				</div>
			</Container>
		</Section>
	);
}
