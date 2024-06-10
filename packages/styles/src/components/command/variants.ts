// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const commandVariants = tv({
	slots: {
		command: "max-w-[640px] overflow-y-auto overflow-x-hidden flex flex-col gap-md border rounded-md",
		item: "relative flex cursor-pointer select-none items-center gap-md px-md py-sm outline-none focus:bg-subtle data-[disabled]:pointer-events-none data-[disabled]:opacity-40 dark:focus:bg-white/5 [&:has(>svg:first-child)]:pl-md",
		icon: "text-foreground",
		itemDescription: "text-start text-subtle-foreground",
		itemTitle: "text-start text-foreground",
		group: "flex flex-col gap-xs overflow-hidden [&_[slot=title]]:px-lg [&_[slot=title]]:pt-md [&_[slot=title]]:text-xs [&_[slot=title]]:text-subtle-foreground",
		dialog: "w-[640px]",
	},
})
