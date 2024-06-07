// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { baseInputSizes, focusRing } from "../../utils"

export const inputVariants = tv({
	base: [
		"flex gap-md w-full items-center",
		"rounded-md border border-neutral-border bg-neutral-subtle shadow-sm transition-colors",
		"hover:bg-neutral-subtle-hover hover:border-neutral-border-hover",
		"file:border-0 file:bg-transparent file:text-sm file:font-medium",
		"placeholder:text-subtle-foreground",
		"disabled:cursor-not-allowed disabled:opacity-50",
		"data-[invalid]:border-destructive-border hover:data-[invalid]:border-destructive-border-hover",
	],
	defaultVariants: { size: "md", focusRing: true },
	variants: {
		size: {
			none: "",
			...baseInputSizes.variants.size,
		},
		focusRing: {
			true: focusRing(),
			false: "outline-0",
		},
	},
})
