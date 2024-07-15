import type { Category, DocsNav, Item, SubCategory } from "~/types/docs-nav"
import { type Components, components, general_pages } from "#site/content"

function convertToDocsNav(components: Components[]): DocsNav {
	const docsNav: DocsNav = []

	for (const component of components) {
		const { breadcrumbs, title, permalink, description } = component

		// Create the item
		const item: Item = {
			title,
			href: permalink,
		}

		// Navigate through the breadcrumbs to place the item in the correct category/subcategory
		let currentLevel: (Category | SubCategory | Item)[] = docsNav
		for (let i = 0; i < breadcrumbs.length; i++) {
			const breadcrumb = breadcrumbs[i]

			if (i === 0) {
				// Top level category
				let category = currentLevel.find(
					(cat): cat is Category => "slug" in cat && cat.slug === breadcrumb.crumb,
				)
				if (!category) {
					category = {
						title: breadcrumb.name,
						slug: breadcrumb.crumb,
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
					(subCat): subCat is SubCategory => "items" in subCat && subCat.slug === breadcrumb.crumb,
				)
				if (!subCategory) {
					subCategory = {
						title: breadcrumb.name,
						slug: breadcrumb.crumb,
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

export const sidebarItems = convertToDocsNav([
	...general_pages.sort((a, b) => (a.sortingIndex || 0) - (b.sortingIndex || 0)),
	...components,
])
