// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { focusRing } from "../../utils"

export const tableVariants = tv({
	slots: {
		root: "relative w-full scroll-pt-[2.281rem] overflow-auto rounded-lg border border-border",
		table: "border-separate border-spacing-0 table-auto w-full",
		columnRoot:
			"cursor-default text-start font-semibold text-foreground text-sm [&:focus-within]:z-20 [&:hover]:z-20",
		column: ["px-md h-7 flex-1 flex gap-sm items-center overflow-hidden", focusRing()],
		header: "sticky top-0 z-10 rounded-t-lg border-b bg-subtle backdrop-blur-md forced-colors:bg-[Canvas]",
		label: "text-subtle-foreground",
		row: [
			"group/row relative cursor-default select-none -outline-offset-2 text-foreground disabled:text-neutral-foreground-disabled text-sm hover:bg-background-hover",
			"data-[selected]:bg-primary-subtle-background data-[selected]:hover:bg-primary-subtle-background-hover",
			focusRing(),
		],
		cell: "border-b border-border group-last/row:border-b-0 p-md truncate -outline-offset-2",
	},
})
