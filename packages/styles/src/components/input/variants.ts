// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { focusRing } from "../../utils"

export const inputVariants = tv({
	base: "flex gap-md items-center rounded-md border border-border bg-transparent shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-subtle-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
	defaultVariants: { size: "md" },
	variants: {
		size: {
			md: "h-9 w-full px-md py-sm text-sm",
		},
	},
	extend: focusRing,
})
