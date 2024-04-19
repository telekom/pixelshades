// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const calendarVariants = tv({
	slots: {
		root: "w-fit max-w-full rounded-xl border border-border bg-background p-4 text-fg shadow-lg",
		header: "mb-4 flex items-center ",
		heading: "text-md m-0 flex-1 text-center text-lg font-bold",
		grid: "flex flex-row gap-layout-lg overflow-auto",
		gridHeaderCell: "pb-2 text-sm text-foreground",
		iconButton:
			"m-0 flex size-8 appearance-none items-center justify-center rounded-md text-center outline-none ring-focus data-[hovered]:bg-subtle data-[focus-visible]:ring-2",
		cell: "-m-[1px] mb-1 flex size-8 text-foreground items-center justify-center rounded-md p-5 text-center text-sm outline-none ring-focus data-[hovered]:bg-subtle data-[pressed]:bg-subtle data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[unavailable]:text-destructive data-[unavailable]:line-through data-[focus-visible]:ring-2 [&[data-outside-month]]:hidden data-[disabled]:text-subtle-foreground/80",
	},
})
