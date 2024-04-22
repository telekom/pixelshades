import { Outlet, createFileRoute } from "@tanstack/react-router"

import { DocsSidebarNav } from "~/components/sidebar-nav"
import type { SidebarNavItem } from "~/config/docs"
import { components, general_pages } from "#site/content"

export const Route = createFileRoute("/docs")({
	component: DocsLayout,
})

const sidebarItems: SidebarNavItem[] = []

const componentItems: SidebarNavItem[] = components.map((component) => ({
	title: component.title,
	href: component.permalink,
	label: component.primaryTag,
	items: [],
}))

const gettingStartedItems: SidebarNavItem[] = general_pages.map((page) => ({
	title: page.title,
	href: page.permalink,
	items: [],
}))

sidebarItems.push({
	title: "Getting Started",
	items: gettingStartedItems,
})

sidebarItems.push({
	title: "Components",
	items: componentItems,
})

function DocsLayout() {
	return (
		<div className="border-b">
			<div className="container flex-1 items-start md:grid lg:grid-cols-[240px_minmax(0,1fr)] md:grid-cols-[220px_minmax(0,1fr)] lg:gap-layout-lg md:gap-layout-md">
				<aside className="-ml-2 fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
					<div className="h-full overflow-y-scroll py-6 pr-6 lg:py-8">
						<DocsSidebarNav items={sidebarItems} />
					</div>
				</aside>
				<Outlet />
			</div>
		</div>
	)
}
