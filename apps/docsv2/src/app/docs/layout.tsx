import { DocsSidebar } from "~/components/docs-sidebar"

import { beautifyObjectName } from "~/lib/utils"
import type { Category, DocsNav, Item, SubCategory } from "~/types/docs-nav"
import { type Components, components } from "#site/content"

interface DocsLayoutProps {
	children: React.ReactNode
}

function convertToDocsNav(components: Components[]): DocsNav {
	const docsNav: DocsNav = []

	for (const component of components) {
		const { breadcrumbs, title, permalink, description } = component

		// Create the item
		const item: Item = {
			title,
			href: permalink,
			label: description,
		}

		// Navigate through the breadcrumbs to place the item in the correct category/subcategory
		let currentLevel: (Category | SubCategory | Item)[] = docsNav
		for (let i = 0; i < breadcrumbs.length; i++) {
			const breadcrumb = breadcrumbs[i]

			if (i === 0) {
				// Top level category
				let category = currentLevel.find((cat): cat is Category => "slug" in cat && cat.slug === breadcrumb)
				if (!category) {
					category = {
						title: beautifyObjectName(breadcrumb),
						slug: breadcrumb,
						items: [],
					}
					currentLevel.push(category)
				}
				currentLevel = category.items
			} else if (i === breadcrumbs.length - 1) {
				// Last breadcrumb: add item to current level
				currentLevel.push(item)
			} else {
				// Intermediate levels: create or find subcategory
				let subCategory = currentLevel.find(
					(subCat): subCat is SubCategory => "items" in subCat && subCat.slug === breadcrumb,
				)
				if (!subCategory) {
					subCategory = {
						title: beautifyObjectName(breadcrumb),
						slug: breadcrumb,
						items: [],
					}
					currentLevel.push(subCategory)
				}
				currentLevel = subCategory.items
			}
		}
	}

	return docsNav as DocsNav
}

export default function DocsLayout({ children }: DocsLayoutProps) {
	const sidebarItems = convertToDocsNav(components)

	return (
		<div className="min-h-[90vh] border-b">
			<div className="container items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6">
				<aside className="z-30 hidden space-y-2 pt-6 md:sticky md:top-0 md:block">
					{/* <SearchDocs /> */}
					<div className="h-screen overflow-y-auto pb-layout-sm">
						<DocsSidebar items={sidebarItems} />
					</div>
				</aside>
				{children}
			</div>
		</div>
	)
}
