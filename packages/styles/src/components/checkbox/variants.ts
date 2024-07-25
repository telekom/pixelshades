// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { focusRingGroup } from "../../utils"

export const checkboxVariant = tv({
	slots: {
		root: [
			"group flex justify-start gap-md py-sm",
			"[&>div]:data-[selected]:bg-primary [&>div]:data-[selected]:text-primary-foreground",
			"[&>div]:data-[indeterminate]:bg-primary [&>div]:data-[indeterminate]:text-primary-foreground",
		],
		indicator: [
			"flex size-4 items-center justify-center shrink-0 rounded-sm border border-border cursor-pointer",
			"bg-transparent text-transparent group-selected:bg-primary group-selected:text-primary-foreground transition-colors duration-75 group-selected:border-transparent",
			"group-indeterminate:bg-primary group-indeterminate:text-primary-foreground",
			"group-read-only:cursor-default",
			"group-disabled:cursor-not-allowed group-disabled:border-border-disabled group-disabled:group-selected:text-neutral-foreground-disabled group-disabled:group-selected:bg-background-disabled group-disabled:group-indeterminate:bg-background-disabled",
			"group-invalid:border-destructive-border group-invalid:group-selected:bg-destructive-subtle-background group-invalid:group-selected:text-subtle-foreground",
			focusRingGroup(),
		],
	},
})
