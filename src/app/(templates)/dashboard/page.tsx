import { Main, Section } from "@/components/layouts";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardPage() {
	return (
		<Main>
			<Section>
				<SidebarTrigger />
				<h1>Dashboard</h1>
			</Section>
		</Main>
	);
}
