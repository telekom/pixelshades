import { Button, Drawer, Link } from "@pixelshades/ui/components"
import { IconFlame, IconMenu } from "@pixelshades/ui/icons"
import { siteConfig } from "~/config/site"
import { sidebarItems } from "~/lib/data"
import { DocsSidebar } from "./docs-sidebar"

export const MobileNav = () => {
	return (
		<div className="block md:hidden">
			<Drawer.Trigger>
				<Button variant="icon" size="icon">
					<IconMenu />
				</Button>
				<Drawer placement="left">
					<Drawer.Content>
						<Drawer.Header>
							<Drawer.Title className="flex items-center gap-layout-xs">
								<Link href="/" className="mr-6 flex items-center space-x-2">
									<IconFlame className="size-6 text-primary" />
									<span className="font-bold">{siteConfig.name}</span>
								</Link>
							</Drawer.Title>
						</Drawer.Header>
						<DocsSidebar items={sidebarItems} />
					</Drawer.Content>
				</Drawer>
			</Drawer.Trigger>
		</div>
	)
}
