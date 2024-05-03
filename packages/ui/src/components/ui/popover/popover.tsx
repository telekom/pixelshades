"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { popoverVariants } from "@pixelshades/styles/components/popover"
import {
	Popover as AriaPopover,
	type PopoverProps as AriaPopoverProps,
	DialogTrigger,
	OverlayArrow,
	composeRenderProps,
} from "react-aria-components"
import { DialogContent } from "../dialog"

const PopoverTrigger = DialogTrigger

const { base, arrow } = popoverVariants()

interface PopoverProps extends AriaPopoverProps {
	showArrow?: boolean
}

const PopoverRoot = ({ className, offset = 4, children, showArrow, ...props }: PopoverProps) => (
	<AriaPopover
		offset={offset}
		className={composeRenderProps(className, (className, renderProps) => base({ ...renderProps, className }))}
		{...props}
	>
		{(innerProps) => (
			<>
				{showArrow && (
					<OverlayArrow className="group">
						<svg width={12} height={12} viewBox="0 0 12 12" className={arrow()}>
							<title>Arrow</title>
							<path d="M0 0 L6 6 L12 0" />
						</svg>
					</OverlayArrow>
				)}
				{typeof children === "function" ? children(innerProps) : children}
			</>
		)}
	</AriaPopover>
)

const PopoverContent = DialogContent

PopoverRoot.displayName = "Popover"

export const Popover = Object.assign(PopoverRoot, {
	Trigger: PopoverTrigger,
	Content: PopoverContent,
})

export { PopoverContent, PopoverRoot, PopoverTrigger }
