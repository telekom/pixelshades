import { drawerVariants } from "@pixelshades/styles/components/drawer"
import type { DialogContentProps, DialogFooterProps, DialogHeaderProps, DialogTitleProps } from "../dialog"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../dialog"
import { Modal, type ModalOverlayProps } from "../modal"

const { modalVertical, modalHorizontal } = drawerVariants()

export const PLACEMENTS = ["bottom", "left", "right", "top"] as const
export type DrawerPlacement = (typeof PLACEMENTS)[number]

export interface DrawerProps extends ModalOverlayProps {
	/** The placement of the drawer. */
	placement?: DrawerPlacement
}

const DrawerRoot = ({ placement, children, className, ...props }: DrawerProps) => {
	const modalVariant = ({ placement, ...props }: DrawerProps) =>
		placement === "bottom" || placement === "top"
			? modalHorizontal({ placement, ...props })
			: modalVertical({ placement, ...props })

	return (
		<Modal className={modalVariant({ placement, className })} isDismissable={true} {...props}>
			{children}
		</Modal>
	)
}

DrawerRoot.displayName = "Drawer"

const DrawerContent = ({ children, ...props }: DialogContentProps) => (
	<DialogContent {...props}>{children}</DialogContent>
)

DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({ ...props }: DialogHeaderProps) => <DialogHeader {...props} />

DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({ ...props }: DialogFooterProps) => <DialogFooter {...props} />

DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = ({ ...props }: DialogTitleProps) => <DialogTitle slot="title" {...props} />

DrawerTitle.displayName = "DrawerTitle"

const DrawerTrigger = Modal.Trigger

export const Drawer = Object.assign(DrawerRoot, {
	Content: DrawerContent,
	Header: DrawerHeader,
	Title: DrawerTitle,
	Trigger: DrawerTrigger,
	Footer: DrawerFooter,
})

export { DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerFooter }
