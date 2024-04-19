// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const inputVariants = tv({
	base: "flex rounded-md border border-input bg-transparent shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-subtle-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
	defaultVariants: { size: "md" },
	variants: {
		size: {
			md: "h-9 w-full px-3 py-1 text-sm",
		},
	},
})
