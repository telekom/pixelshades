"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { cn } from "@pixelshades/utils/styles"
import { Popover as AriaPopover, DialogTrigger, type PopoverProps } from "react-aria-components"

const PopoverTrigger = DialogTrigger

const PopoverRoot = ({ className, offset = 4, ...props }: PopoverProps) => (
	<AriaPopover
		offset={offset}
		className={(values) =>
			cn(
				"z-50 w-72 overflow-y-auto rounded-md border bg-background p-xs text-foreground shadow-md outline-none",
				"entering:fade-in-0 exiting:fade-out-0 exiting:zoom-out-95 entering:animate-in exiting:animate-out",
				"placement-bottom:slide-in-from-top-2 placement-left:slide-in-from-right-2 placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2",
				typeof className === "function" ? className(values) : className,
			)
		}
		{...props}
	/>
)

PopoverRoot.displayName = "Popover"

export const Popover = Object.assign(PopoverRoot, {
	Trigger: PopoverTrigger,
})
