// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const typographyVariants = tv({
	base: "tracking-tight",
	variants: {
		size: {
			xs: "text-xs",
			sm: "text-sm",
			md: "text-md",
			lg: "text-lg",
			xl: "text-xl",
			"2xl": "text-2xl",
			"3xl": "text-3xl",
			"4xl": "text-4xl",
			"5xl": "text-5xl",
			"6xl": "text-6xl",
			"7xl": "text-7xl",
		},
	},
})
