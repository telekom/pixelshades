import { drawerVariants } from "@pixelshades/styles/components/drawer"
import type { DialogContentProps, DialogFooterProps, DialogHeaderProps, DialogTitleProps } from "../dialog"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../dialog"
import { Modal, type ModalOverlayProps } from "../modal"

const { modal } = drawerVariants()

export interface DrawerProps extends ModalOverlayProps {
	direction?: "left" | "right" | "bottom"
}

const DrawerRoot = ({ direction, children, className, ...props }: DrawerProps) => (
	<Modal className={modal({ direction, className })} isDismissable={true} {...props}>
		{children}
	</Modal>
)

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
