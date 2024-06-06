import { Button, Drawer } from "@pixelshades/ui/components"
import { FlameIcon, Menu } from "@pixelshades/ui/icons"
import { Link } from "@tanstack/react-router"
import { siteConfig } from "~/config/site"
import { SidebarNavContent } from "./sidebar-nav-content"

export const MobileNav = () => {
	return (
		<div className="block md:hidden">
			<Drawer.Trigger>
				<Button variant="icon" size="icon">
					<Menu />
				</Button>
				<Drawer placement="left">
					<Drawer.Content>
						<Drawer.Header>
							<Drawer.Title className="flex items-center gap-layout-xs">
								<Link to="/" className="mr-6 flex items-center space-x-2">
									<FlameIcon className="size-6 text-primary" />
									<span className="font-bold">{siteConfig.name}</span>
								</Link>
							</Drawer.Title>
						</Drawer.Header>
						<SidebarNavContent />
					</Drawer.Content>
				</Drawer>
			</Drawer.Trigger>
		</div>
	)
}
