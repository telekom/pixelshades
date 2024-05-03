"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { dialogVariants } from "@pixelshades/styles/components/dialog"
import { createStyleContext } from "@pixelshades/utils/styles"
import type React from "react"
import {
	Dialog as AriaDialogContent,
	DialogTrigger as AriaDialogTrigger,
	Heading,
	type HeadingProps,
} from "react-aria-components"
import { Modal, type ModalOverlayProps } from "../modal"

const { withContext } = createStyleContext(dialogVariants)

const { header, title, footer } = dialogVariants()

const DialogRoot = ({ children, className, ...props }: ModalOverlayProps) => (
	<Modal isDismissable={true} {...props}>
		{children}
	</Modal>
)

DialogRoot.displayName = "Dialog"

const DialogContent = withContext(AriaDialogContent, "content")

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

export const Dialog = Object.assign(DialogRoot, {
	Content: DialogContent,
	Header: DialogHeader,
	Title: DialogTitle,
	Trigger: DialogTrigger,
	Footer: DialogFooter,
})

export { DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter }
