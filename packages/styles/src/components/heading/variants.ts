// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const headingVariants = tv({
	base: "heading",
	variants: {
		variant: {
			0: "",
			1: "text-5xl font-semibold",
			2: "text-3xl font-semibold",
			3: "text-xl font-medium",
			4: "text-lg font-medium",
			5: "text-base font-medium",
			6: "text-sm font-medium",
		},
	},
})
