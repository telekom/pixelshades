"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { modalVariants } from "@pixelshades/styles/components/modal"
import {
	DialogTrigger as AriaDialogTrigger,
	Modal as AriaModal,
	type ModalOverlayProps as AriaModalOverlayProps,
	ModalOverlay,
} from "react-aria-components"

const { overlay, modal } = modalVariants()

export interface ModalOverlayProps extends AriaModalOverlayProps {
	className?: string
}

const ModalRoot = ({ children, className, ...props }: ModalOverlayProps) => (
	<ModalOverlay {...props} isDismissable={true} className={overlay()}>
		<AriaModal className={modal({ className })}>{children}</AriaModal>
	</ModalOverlay>
)

ModalRoot.displayName = "Modal"

const ModalTrigger = AriaDialogTrigger

export const Modal = Object.assign(ModalRoot, {
	Trigger: ModalTrigger,
})

export { ModalTrigger }
