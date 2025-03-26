"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { menuVariants } from "@pixelshades/styles/components/menu"
import type { HTMLAttributes } from "react"

import { createStyleContext } from "@pixelshades/utils/styles"
import { IconChevronRight } from "@tabler/icons-react"
import {
	Header as AriaHeader,
	Menu as AriaMenu,
	MenuItem as AriaMenuItem,
	type MenuItemProps as AriaMenuItemProps,
	type MenuProps as AriaMenuProps,
	MenuTrigger as AriaMenuTrigger,
	type MenuTriggerProps as AriaMenuTriggerProps,
	Section as AriaSection,
	SubmenuTrigger as AriaSubMenuTrigger,
	type PopoverProps,
} from "react-aria-components"
import { Kbd } from "../kbd"
import { Popover } from "../popover"
import { Separator } from "../separator"

const { withContext, withProvider } = createStyleContext(menuVariants)

const { content, popover } = menuVariants()

export type MenuProps = AriaMenuTriggerProps

export type MenuContentProps<T extends object> = {
	placement?: PopoverProps["placement"]
	className?: string
} & AriaMenuProps<T>

const MenuContent = <T extends object>({ children, className, placement, ...props }: MenuContentProps<T>) => (
	<Popover className={popover({ className })} placement={placement}>
		<AriaMenu {...props} className={content({ className })}>
			{children}
		</AriaMenu>
	</Popover>
)

MenuContent.displayName = "MenuContent"

const MenuRoot = withProvider(AriaMenuTrigger)

const MenuSection = AriaSection

export type MenuItemProps = AriaMenuItemProps & { className?: string }

const MenuItem = withContext(AriaMenuItem, "item")

export type MenuHeaderProps = HTMLAttributes<HTMLElement> & { className?: string }

const MenuLabel = withContext(AriaHeader, "label")

const MenuShortcut = withContext(Kbd, "shortcut")

export type MenuSeperatorProps = HTMLAttributes<HTMLElement> & { className?: string }

const MenuSeparator = withContext(Separator, "separator")

const MenuSubMenu = AriaSubMenuTrigger

const MenuSubMenuTrigger = (props: MenuItemProps) => {
	return (
		<MenuItem>
			{(value) => {
				return (
					<>
						{typeof props.children === "function" ? props.children(value) : props.children}
						<IconChevronRight className={"ms-auto size-4 text-subtle-foreground"} />
					</>
				)
			}}
		</MenuItem>
	)
}

export const Menu = Object.assign(MenuRoot, {
	Section: MenuSection,
	Content: MenuContent,
	Shortcut: MenuShortcut,
	Item: MenuItem,
	Label: MenuLabel,
	Separator: MenuSeparator,
	SubMenu: MenuSubMenu,
	SubMenuTrigger: MenuSubMenuTrigger,
})

export { MenuContent, MenuSection, MenuItem, MenuLabel, MenuShortcut, MenuSeparator, MenuSubMenu, MenuSubMenuTrigger }
