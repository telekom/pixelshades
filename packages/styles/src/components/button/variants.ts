// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { focusRing } from "../../utils"

export const buttonVariants = tv({
	base: `group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 ${focusRing()}`,
	defaultVariants: { variant: "solid", size: "md" },
	variants: {
		variant: {
			solid: [
				"bg-primary text-primary-foreground shadow",
				"hover:bg-primary-hover hover:text-primary-foreground-hover",
				"disabled:bg-primary-disabled disabled:text-primary-foreground-disabled",
			],
			outline: [
				"border border-primary-border text-primary bg-transparent shadow-sm",
				"hover:bg-primary-background-hover hover:text-primary-background-foreground-hover hover:border-primary-border-hover",
			],
			ghost: "hover:bg-subtle",
			link: "text-primary underline-offset-4 hover:underline",
			destructive: [
				"bg-destructive text-destructive-foreground shadow-sm",
				"hover:bg-destructive-hover hover:text-destructive-foreground-hover",
			],
		},
		withRing: {
			true: "transition-all duration-300 ring-offset-background  hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",
		},
		size: {
			"xs-icon": "size-6 rounded-md",
			icon: "size-9 rounded-md",
			xs: "h-7 px-sm text-xs rounded-md",
			sm: "h-8 px-md text-xs rounded-md gap-xs",
			md: "h-9 px-lg rounded-md gap-sm",
			lg: "h-10 px-xl rounded-md gap-md",
		},
	},
	extend: focusRing,
})
