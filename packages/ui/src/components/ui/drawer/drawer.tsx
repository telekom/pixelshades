import { drawerVariants } from "@pixelshades/styles/components/drawer"
import type { DialogContentProps, DialogFooterProps, DialogHeaderProps, DialogTitleProps } from "../dialog"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../dialog"
import { Modal, type ModalOverlayProps } from "../modal"

const { modalVertical, modalHorizontal } = drawerVariants()

export const DIRECTIONS = ["bottom", "left", "right", "top"] as const
export type DrawerDirection = (typeof DIRECTIONS)[number]

export interface DrawerProps extends ModalOverlayProps {
	direction?: DrawerDirection
}

const DrawerRoot = ({ size, direction, children, className, ...props }: DrawerProps) => {
	const modalVariant = ({ direction, ...props }: DrawerProps) =>
		direction === "bottom" || direction === "top"
			? modalHorizontal({ direction, ...props })
			: modalVertical({ direction, ...props })

	return (
		<Modal className={modalVariant({ size, direction, className })} isDismissable={true} {...props}>
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
