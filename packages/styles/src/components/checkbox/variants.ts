// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { focusRing } from "../../utils"

export const checkboxVariant = tv({
	slots: {
		root: "flex justify-start gap-md py-sm [&>div]:ring-focus [&>div]:ring-offset-2 [&>div]:ring-offset-ring [&>div]:data-[selected]:border-primary [&>div]:data-[selected]:bg-primary [&>div]:data-[focus-visible]:ring-2",
		box: "flex items-center justify-center rounded-lg border border-border transition-all duration-200",
	},
	variants: {
		size: {
			md: { box: "size-5 min-w-5 rounded-md", root: "text-md" },
		},
	},
	defaultVariants: {
		size: "md",
	},
	extend: focusRing,
})
