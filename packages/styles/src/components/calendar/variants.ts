// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { buttonVariants } from "../button"

export const calendarVariants = tv({
	slots: {
		root: "w-fit max-w-full rounded-xl border border-border bg-background p-lg text-foreground shadow-lg",
		header: "mb-layout-xs flex items-center",
		heading: "m-0 flex-1 text-center text-lg font-bold",
		grid: "flex flex-row gap-layout-md overflow-auto",
		gridHeaderCell: "pb-2 text-sm text-subtle-foreground",
		iconButton: buttonVariants({ variant: "ghost", size: "icon" }),
		cell: [
			"relative -m-px mb-1 flex size-9 text-foreground items-center justify-center rounded-md text-center text-sm outline-none ring-focus data-[hovered]:bg-subtle data-[pressed]:bg-subtle data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[unavailable]:text-destructive data-[unavailable]:line-through data-[focus-visible]:ring-2 [&[data-outside-month]]:hidden data-[disabled]:text-subtle-foreground/80",
			"data-[today]:underline underline-offset-2",
		],
	},
})
