import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar/appSidebar";
import { Container, Main, Section } from "@/components/layouts";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { BreadcrumbSettings } from "./breadcrumbSettings";
interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<Section
					size={"xs"}
					className="sticky top-0 bg-background/95 z-50"
				>
					<Container size={"full"}>
						<div className="flex items-center gap-5">
							<SidebarTrigger />
							<BreadcrumbSettings />
						</div>
					</Container>
				</Section>
				<Main>{children}</Main>
			</SidebarInset>
		</SidebarProvider>
	);
}
