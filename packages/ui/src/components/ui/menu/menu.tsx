import { menuVariants } from "@dv/styles/components/menu"
import type { HTMLAttributes } from "react"

import {
	Header as AriaHeader,
	Menu as AriaMenu,
	MenuItem as AriaMenuItem,
	type MenuItemProps as AriaMenuItemProps,
	type MenuProps as AriaMenuProps,
	MenuTrigger as AriaMenuTrigger,
	type MenuTriggerProps as AriaMenuTriggerProps,
	Section as AriaSection,
	Popover,
	Separator,
} from "react-aria-components"

const { menuPopover, content, header, item, separator } = menuVariants()

export type MenuProps = AriaMenuTriggerProps

const Menu = AriaMenuTrigger

const MenuSection = AriaSection

export type MenuContentProps<T extends object> = AriaMenuProps<T> & { className?: string }

const MenuContent = <T extends object>({ children, className, ...props }: MenuContentProps<T>) => (
	<Popover isNonModal {...props} className={menuPopover()}>
		<AriaMenu {...props} className={content({ className })}>
			{children}
		</AriaMenu>
	</Popover>
)

export type MenuItemProps = AriaMenuItemProps & { className?: string }

const MenuItem = ({ children, className, ...props }: MenuItemProps) => (
	<AriaMenuItem {...props} className={item({ className })}>
		{children}
	</AriaMenuItem>
)

export type MenuHeaderProps = HTMLAttributes<HTMLElement> & { className?: string }

const MenuHeader = ({ children, className, ...props }: MenuHeaderProps) => (
	<AriaHeader {...props} className={header({ className })}>
		{children}
	</AriaHeader>
)

export type MenuSeperatorProps = HTMLAttributes<HTMLElement> & { className?: string }

const MenuSeperator = ({ className, ...props }: MenuSeperatorProps) => (
	<Separator {...props} className={separator({ className })} />
)

export { Menu, MenuSection, MenuContent, MenuItem, MenuHeader, MenuSeperator }
