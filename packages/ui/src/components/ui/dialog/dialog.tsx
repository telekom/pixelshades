"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { dialogVariants } from "@pixelshades/styles/components/dialog"
import type React from "react"
import {
	Dialog as AriaDialogContent,
	type DialogProps as AriaDialogProps,
	type HeadingProps as AriaHeadingProps,
	Heading,
} from "react-aria-components"
import { Modal, type ModalOverlayProps } from "../modal"

const { content, header, title, footer } = dialogVariants()

const DialogRoot = ({ children, className, ...props }: ModalOverlayProps) => (
	<Modal isDismissable={true} {...props}>
		{children}
	</Modal>
)

DialogRoot.displayName = "Dialog"

export interface DialogContentProps extends AriaDialogProps {
	className?: string
}

const DialogContent = ({ children, className, ...props }: DialogContentProps) => (
	<AriaDialogContent {...props} className={content({ className })}>
		{children}
	</AriaDialogContent>
)

DialogContent.displayName = "DialogContent"

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
	<div className={header({ className })} {...props} />
)

DialogHeader.displayName = "DialogHeader"

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const DialogFooter = ({ className, ...props }: DialogFooterProps) => (
	<div className={footer({ className })} {...props} />
)

DialogFooter.displayName = "DialogFooter"

export interface DialogTitleProps extends AriaHeadingProps {}

const DialogTitle = ({ className, ...props }: DialogTitleProps) => (
	<Heading slot="title" className={title({ className })} {...props} />
)

DialogTitle.displayName = "DialogTitle"

const DialogTrigger = Modal.Trigger

export const Dialog = Object.assign(DialogRoot, {
	Content: DialogContent,
	Header: DialogHeader,
	Title: DialogTitle,
	Trigger: DialogTrigger,
	Footer: DialogFooter,
})
export { DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter }
