import type { SidebarNavItem } from "~/config/docs"
import { components, general_pages } from "#site/content"
import { DocsSidebarNav } from "./sidebar-nav"

const sidebarItems: SidebarNavItem[] = []

const componentItems: SidebarNavItem[] = components.map((component) => ({
	title: component.title,
	href: component.permalink,
	label: component.primaryTag,
	items: [],
}))

const gettingStartedItems: SidebarNavItem[] = general_pages
	.map((page) => ({
		title: page.title,
		href: page.permalink,
		sortingIndex: page.sortingIndex,
		items: [],
	}))
	.sort((a, b) => (a.sortingIndex && b.sortingIndex && a.sortingIndex > b.sortingIndex ? 1 : -1))

sidebarItems.push({
	title: "Getting Started",
	items: gettingStartedItems,
})

sidebarItems.push({
	title: "Components",
	items: componentItems,
})

export const SidebarNavContent = () => {
	return (
		<div className="h-full overflow-y-scroll py-6 pr-6 lg:py-8">
			<DocsSidebarNav items={sidebarItems} />
		</div>
	)
}
