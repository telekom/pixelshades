// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const commandVariants = tv({
	slots: {
		command: "h-[600px] max-w-[425px] overflow-y-auto overflow-x-hidden",
		item: "relative flex cursor-pointer select-none items-center gap-md px-md py-sm outline-none focus:bg-subtle data-[disabled]:pointer-events-none data-[disabled]:opacity-40 dark:focus:bg-white/5 [&:has(>svg:first-child)]:pl-md",
		icon: "text-foreground",
		itemList: "",
		itemDescription: "text-start text-subtle-foreground",
		itemTitle: "text-start text-foreground",
		group: "flex flex-col gap-md overflow-hidden px-lg py-md text-xs text-subtle-foreground",
	},
})
