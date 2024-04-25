import { components, dvds_pages, general_pages } from "#site/content"

export const getNavbarItems = () => {
	// the order of the items is important, must be the same as in the sidebar
	return [...general_pages, ...dvds_pages, ...components]
}
