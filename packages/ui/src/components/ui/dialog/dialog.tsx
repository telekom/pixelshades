// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { dialogVariants } from "@pixelshades/styles/components/dialog"
import type React from "react"
import {
	Dialog as AriaDialogContent,
	DialogTrigger as AriaDialogTrigger,
	type DialogProps,
	Heading,
	type HeadingProps,
	Modal,
	ModalOverlay,
	type ModalOverlayProps,
} from "react-aria-components"

const { overlay, modal, content, header, title, footer } = dialogVariants()

const Dialog = ({ children, className, ...props }: ModalOverlayProps & { className?: string }) => (
	<ModalOverlay {...props} isDismissable={true} className={overlay()}>
		<Modal className={modal({ className })}>{children}</Modal>
	</ModalOverlay>
)

Dialog.displayName = "Dialog"

const DialogContent = ({ children, className, ...props }: DialogProps & { className?: string }) => (
	<AriaDialogContent {...props} className={content({ className })}>
		{children}
	</AriaDialogContent>
)

DialogContent.displayName = "DialogContent"

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={header({ className })} {...props} />
)

DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={footer({ className })} {...props} />
)

DialogFooter.displayName = "DialogFooter"

const DialogTitle = ({ className, ...props }: HeadingProps) => (
	<Heading slot="title" className={title({ className })} {...props} />
)

DialogTitle.displayName = "DialogTitle"

const DialogTrigger = AriaDialogTrigger

export { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogTrigger, dialogVariants }
