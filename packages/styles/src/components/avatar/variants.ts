// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const avatarVariants = tv({
	slots: {
		root: "inline-grid align-middle aspect-square ring-1 ring-border ring-inset forced-colors:outline",
		image: "rounded-full",
	},

	variants: {
		size: {
			xxs: { root: "h-4 min-w-4 text-xs" },
			xs: { root: "h-6 min-w-6 text-sm" },
			sm: { root: "h-8 min-w-8 text-md" },
			md: { root: "h-10 min-w-10 text-lg" },
			lg: { root: "h-12 min-w-12 text-xl" },
			xl: { root: "h-16 min-w-16 text-2xl" },
			"2xl": { root: "h-20 min-w-20 text-3xl" },
		},
		variant: {
			rounded: {
				root: "rounded-full",
				image: "rounded-full",
			},
		},
	},

	defaultVariants: {
		variant: "rounded",
		size: "md",
	},
})
