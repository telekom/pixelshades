import type { IconProps } from "@pixelshades/ui/icons"

export interface NavItem {
	title: string
	href?: string
	disabled?: boolean
	external?: boolean
	icon?: IconProps
	label?: string
	sortingIndex?: number
}

export interface NavItemWithChildren extends NavItem {
	items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}
