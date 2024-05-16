// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const toggleVariants = tv({
	slots: {
		button: "group inline-flex items-center justify-center whitespace-nowrap rounded-md py-1 px-2 focus:outline-none data-[selected=true]:bg-primary text-foreground hover:bg-primary/90 ",
		icon: "",
	},
	defaultVariants: { variant: "outline", size: "md" },
	variants: {
		variant: {
			outline: {
				button: "border border-border bg-transparent shadow-sm hover:bg-subtle hover:text-subtle-foreground",
				icon: "text-foreground",
			},
			ghost: { button: "hover:bg-subtle hover:text-subtle-foreground", icon: "" },

			subtle: {
				button: "bg-subtle text-subtle-foreground data-[selected=true]:text-foreground shadow-sm hover:bg-subtle/80",
				icon: "",
			},
		},
		size: {
			icon: { button: "size-9 rounded-md" },
			xs: { button: "h-7 px-1 text-xs rounded-md" },
			sm: { button: "h-8 px-2 text-xs rounded-md gap-0.5" },
			md: { button: "h-9 px-3 py-2 rounded-md gap-1" },
			lg: { button: "h-10 px-8 rounded-md gap-md" },
		},
		isDisabled: {
			true: { button: "opacity-50 cursor-not-allowed" },
		},
	},
})
