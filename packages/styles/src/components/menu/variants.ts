// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const menuVariants = tv({
	slots: {
		menuPopover:
			"overflow-auto rounded-xl border border-border bg-background shadow-xl data-[entering]:animate-fade data-[exiting]:animate-fadeOut p-0",
		label: "flex select-none items-center px-lg py-sm text-sm font-medium text-subtle-foreground",
		content: "flex flex-col gap-md rounded-xl py-md text-sm leading-6 antialiased",
		item: "relative flex cursor-pointer select-none items-center gap-md px-lg py-sm outline-none focus:bg-subtle data-[disabled]:pointer-events-none data-[disabled]:opacity-40 dark:focus:bg-white/5 [&:has(>svg:first-child)]:pl-md",
		shortcut: "ms-auto border-0 bg-transparent p-0 ps-lg text-foreground text-xs shadow-0",
		separator: "my-0",
		icon: "size-4 text-subtle-foreground",
	},
})
