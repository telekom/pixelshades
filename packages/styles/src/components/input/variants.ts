// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { baseInputSizes, focusRing } from "../../utils"

export const inputVariants = tv({
	base: [
		"flex gap-md md:w-full w-[150px] overflow-x-scroll items-center",
		"rounded-md border border-border bg-subtle shadow-sm transition-colors",
		"file:border-0 file:bg-transparent file:text-sm file:font-medium",
		"placeholder:text-subtle-foreground",
		"disabled:cursor-not-allowed disabled:opacity-50",
		"data-[invalid]:border-destructive data-[invalid]:text-destructive data-[invalid]:bg-destructive/10",
	],
	defaultVariants: { size: "md" },
	variants: {
		size: {
			none: "",
			...baseInputSizes.variants.size,
		},
	},
	extend: focusRing,
})
