// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { focusRing } from "../../utils"

export const buttonVariants = tv({
	extend: focusRing,
	base: "group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50",
	defaultVariants: { variant: "solid", size: "md" },
	variants: {
		variant: {
			solid: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			outline: "border border-border bg-transparent shadow-sm hover:bg-subtle hover:text-subtle-foreground",
			ghost: "hover:bg-subtle hover:text-subtle-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			subtle: "bg-subtle text-subtle-foreground shadow-sm hover:bg-subtle/80",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
		},
		withRing: {
			true: "transition-all duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",
		},
		size: {
			icon: "size-9 rounded-md",
			xs: "h-7 px-1 text-xs rounded-md",
			sm: "h-8 px-2 text-xs rounded-md gap-0.5",
			md: "h-9 px-md py-2 rounded-md gap-1",
			lg: "h-10 px-8 rounded-md gap-md",
		},
	},
})
