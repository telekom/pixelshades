// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { inputVariants } from "../input"

export const selectVariants = tv({
	slots: {
		root: "max-h-inherit flex flex-col gap-md overflow-auto outline-none",
		item: [
			"relative flex cursor-pointer select-none items-center gap-md px-md py-sm rounded-md text-base leading-5 outline-none ring-focus ring-offset-background aria-selected:!bg-primary aria-selected:!text-primary-foreground data-[focus-visible]:border-transparent data-[focus-visible]:bg-background data-[hovered]:bg-subtle data-[focus-visible]:ring-2 data-[hovered]:aria-selected:bg-primary data-[focus-visible]:aria-selected:ring-offset-2",
		],
		value: "text-sm",
		popover: "min-w-[var(--trigger-width)] w-fit p-xs",
		button: inputVariants({ className: "justify-between" }),
		icon: "size-4 text-subtle-foreground",
	},
})
