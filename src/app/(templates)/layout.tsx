import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar/appSidebar";
import { Container, Main, Section } from "@/components/layouts";
import { SidebarTrigger } from "@/components/ui/sidebar";
interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<Section size={"xs"}>
					<Container size={"full"}>
						<SidebarTrigger />
					</Container>
				</Section>
				<Main>{children}</Main>
			</SidebarInset>
		</SidebarProvider>
	);
}
