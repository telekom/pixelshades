import type { LucideIcon } from "@dv/ui/icons"

export interface NavItem {
	title: string
	href?: string
	disabled?: boolean
	external?: boolean
	icon?: LucideIcon
	label?: string
}

export interface NavItemWithChildren extends NavItem {
	items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}
