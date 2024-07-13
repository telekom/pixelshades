// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { focusRing } from "../../utils"

export const menuVariants = tv({
	slots: {
		label: "flex select-none items-center py-sm text-sm font-medium leading-6 px-md text-foreground",
		popover: "min-w-[var(--trigger-width)] w-fit",
		content: ["flex flex-col rounded-xl py-md text-sm leading-6 antialiased", focusRing()],
		item: "relative flex cursor-pointer select-none items-center gap-md px-md py-sm outline-none focus:bg-subtle data-[disabled]:pointer-events-none data-[disabled]:opacity-40 dark:focus:bg-white/5 [&:has(>svg:first-child)]:pl-md",
		shortcut: "ms-auto border-0 bg-transparent p-0 ps-lg text-foreground text-xs shadow-0",
		separator: "my-0",
		icon: "size-4 text-subtle-foreground",
	},
})
