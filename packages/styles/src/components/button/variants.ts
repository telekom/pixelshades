// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const buttonVariants = tv({
	slots: {
		button: "group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
		icon: "",
	},
	defaultVariants: { variant: "solid", size: "md" },
	variants: {
		variant: {
			solid: {
				button: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
				icon: "text-primary-foreground",
			},
			outline: {
				button: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
				icon: "text-accent",
			},
			ghost: { button: "hover:bg-accent hover:text-accent-foreground", icon: "" },
			link: { button: "text-primary underline-offset-4 hover:underline", icon: "" },
			subtle: { button: "bg-subtle text-subtle-foreground shadow-sm hover:bg-subtle/80", icon: "" },
			destructive: {
				button: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				icon: "",
			},
		},
		withRing: {
			true: { button: "transition-all duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2" },
		},
		size: {
			icon: { button: "size-9 rounded-md" },
			xs: { button: "h-7 px-1 text-xs rounded-md" },
			sm: { button: "h-8 px-2 text-xs rounded-md gap-0.5" },
			md: { button: "h-9 px-md py-2 rounded-md gap-1" },
			lg: { button: "h-10 px-8 rounded-md gap-md" },
		},
	},
})
