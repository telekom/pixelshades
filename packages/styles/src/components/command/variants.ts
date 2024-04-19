// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const commandVariants = tv({
	slots: {
		command: "h-[600px] max-w-[425px] overflow-y-auto overflow-x-hidden",
		item: "flex cursor-pointer flex-row items-start gap-md p-md text-[16px] hover:rounded-md hover:bg-subtle-foreground/40 focus:outline focus:outline-primary focus:rounded-md",
		icon: "text-foreground",
		itemList: "",
		itemDescription: "text-start text-subtle-foreground",
		itemTitle: "text-start text-foreground",
		group: "flex flex-col gap-md",
	},
})
