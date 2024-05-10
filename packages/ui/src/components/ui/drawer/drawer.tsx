"use client"

import { drawerVariants } from "@pixelshades/styles/components/drawer"
import type { VariantProps } from "tailwind-variants"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../dialog"
import { Modal, type ModalOverlayProps } from "../modal"

export type DrawerPlacement = VariantProps<typeof drawerVariants>["placement"]

export interface DrawerProps extends ModalOverlayProps, VariantProps<typeof drawerVariants> {
	/** The placement of the drawer. */
	placement?: DrawerPlacement
}

const DrawerRoot = ({ placement, children, className, ...props }: DrawerProps) => {
	return (
		<Modal
			className={drawerVariants({
				placement,
				orientation: placement === "bottom" || placement === "top" ? "horizontal" : "vertical",
				className,
			})}
			isDismissable
			{...props}
		>
			{children}
		</Modal>
	)
}

DrawerRoot.displayName = "Drawer"

const DrawerContent = DialogContent

DrawerContent.displayName = "DrawerContent"

const DrawerHeader = DialogHeader

DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = DialogFooter

DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = DialogTitle

DrawerTitle.displayName = "DrawerTitle"

const DrawerTrigger = DialogTrigger

export const Drawer = Object.assign(DrawerRoot, {
	Content: DrawerContent,
	Header: DrawerHeader,
	Title: DrawerTitle,
	Trigger: DrawerTrigger,
	Footer: DrawerFooter,
})

export { DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerFooter }
