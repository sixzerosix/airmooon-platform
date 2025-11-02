import { Main, Section, Container } from "@/components/layouts";
import { Card, CardContent } from "@/components/ui/card";
import { SettingsSidebar } from "./settingsSidebar";

export default function SettingsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Section>
			<Container>
				<div className="flex gap-5">
					{/* Content */}
					<div className="flex-1">{children}</div>
					{/* Navigation settings */}
					<div className="basis-2xs">
						<SettingsSidebar />
					</div>
				</div>
			</Container>
		</Section>
	);
}
