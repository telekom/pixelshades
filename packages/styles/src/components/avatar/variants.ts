// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const avatarVariants = tv({
	slots: {
		root: "inline-grid align-middle *:col-start-1 *:row-start-1 aspect-square",
		image: "rounded-full",
		ring: "ring-1 ring-black/5 ring-inset forced-colors:outline dark:ring-white/5",
	},

	variants: {
		size: {
			xs: { root: "h-6 min-w-6 text-xs" },
			sm: { root: "h-8 min-w-8 text-sm" },
			md: { root: "h-10 min-w-10 text-md" },
			lg: { root: "h-12 min-w-12 text-lg" },
			xl: { root: "h-16 min-w-16 text-xl" },
			"2xl": { root: "h-20 min-w-20 text-2xl" },
		},
		variant: {
			rounded: {
				root: "rounded-full",
				image: "rounded-full",
				ring: "rounded-full",
			},
		},
	},

	defaultVariants: {
		variant: "rounded",
		size: "md",
	},
})
