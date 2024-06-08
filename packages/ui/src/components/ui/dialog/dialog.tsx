"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type React from "react"

import { dialogVariants } from "@pixelshades/styles/components/dialog"

import { forwardRef } from "@pixelshades/utils/jsx"
import { IconX } from "@tabler/icons-react"
import { useContext } from "react"
import { chain } from "react-aria"
import {
	Dialog as AriaDialogContent,
	type DialogProps as AriaDialogProps,
	type HeadingProps as AriaHeadingProps,
	Heading,
	OverlayTriggerStateContext,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { Button, type ButtonProps } from "../button"
import { Modal, type ModalOverlayProps } from "../modal"

const { closeButton, modal, content, header, title, footer } = dialogVariants()

const DialogRoot = ({ children, className, ...props }: ModalOverlayProps) => (
	<Modal className={modal({ className })} isDismissable={true} {...props}>
		{children}
	</Modal>
)

DialogRoot.displayName = "Dialog"

export interface DialogContentProps extends AriaDialogProps, VariantProps<typeof dialogVariants> {
	/** Class name to apply to the Dialog. */
	className?: string
	/** Class name to apply to the close button. */
	closeButtonClassName?: string
	/** Hides default close button. It will not affect the functionality of the ESC key! */
	hideCloseButton?: boolean
}

const DialogContent = ({
	hideCloseButton = false,
	closeButtonClassName,
	children,
	className,
	padding,
	...props
}: DialogContentProps) => (
	<AriaDialogContent className={content({ className, padding })} {...props}>
		{(innerProps) => (
			<>
				{typeof children === "function" ? children(innerProps) : children}
				{!hideCloseButton && (
					<Button
						className={closeButton({ className: closeButtonClassName })}
						before={<IconX />}
						variant="ghost"
						size="xs-icon"
						onPress={innerProps.close}
					/>
				)}
			</>
		)}
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

export interface DialogCloseButtonProps extends ButtonProps {}

const DialogCloseButton = forwardRef(({ className, onPress, ...props }: DialogCloseButtonProps) => {
	const state = useContext(OverlayTriggerStateContext)

	if (!state) {
		throw new Error("DialogCloseButton must be used within a DialogTrigger")
	}

	return <Button className={className} onPress={chain(state.close, onPress)} {...props} />
})

const DialogTrigger = Modal.Trigger

export const Dialog = Object.assign(DialogRoot, {
	Content: DialogContent,
	Header: DialogHeader,
	Title: DialogTitle,
	Trigger: DialogTrigger,
	Footer: DialogFooter,
	CloseButton: DialogCloseButton,
})

export { DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogCloseButton }
