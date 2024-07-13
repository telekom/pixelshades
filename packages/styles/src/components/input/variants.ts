// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { focusRing } from "../../utils"

export const inputVariants = tv({
	slots: {
		root: [
			"flex gap-md w-full items-center",
			"rounded-md border text-subtle-foreground border-neutral-border bg-neutral-subtle shadow-sm transition-colors",
			"hover:bg-neutral-subtle-hover hover:border-neutral-border-hover",
			"file:border-0 file:bg-transparent file:text-sm file:font-medium",
			"disabled:cursor-not-allowed disabled:opacity-50",
			"data-[invalid]:border-destructive-border hover:data-[invalid]:border-destructive-border-hover",
			"[&_svg]:size-4",
		],
		input: [
			"bg-transparent outline-none w-full h-full text-foreground placeholder:text-subtle-foreground disabled:text-subtle-foreground-disabled disabled:cursor-default",
		],
	},

	defaultVariants: { size: "md", focusRing: true },
	variants: {
		size: {
			none: { root: "" },
			md: { root: "h-9 px-md rounded-md gap-sm" },
		},
		focusRing: {
			true: { root: focusRing() },
			false: { root: "outline-0" },
		},
		multiline: {
			true: {
				root: "h-auto flex-col items-stretch p-md",
				input: "min-h-14 resize-none overflow-auto",
			},
			false: {
				input: "flex-1",
			},
		},
	},
})
