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
			xxs: { root: "size-4 text-xs" },
			xs: { root: "size-6 text-sm" },
			sm: { root: "size-8 text-md" },
			md: { root: "size-10 text-lg" },
			lg: { root: "size-12 text-xl" },
			xl: { root: "size-16 text-2xl" },
			"2xl": { root: "size-20 text-3xl" },
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
