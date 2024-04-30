// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { inputVariants } from "../input"

export const selectVariants = tv({
	slots: {
		root: "max-h-inherit flex flex-col gap-md overflow-auto outline-none",
		item: "relative m-md flex cursor-default flex-col rounded-md p-sm outline-none ring-focus ring-offset-background aria-selected:!bg-primary data-[focus-visible]:border-transparent data-[focus-visible]:bg-background data-[hovered]:bg-subtle data-[focus-visible]:ring-2 data-[hovered]:aria-selected:bg-primary data-[focus-visible]:aria-selected:ring-offset-2",
		value: "text-sm",
		popover: "min-w-[var(--trigger-width)] w-fit",
		button: inputVariants({ className: "justify-between" }),
		icon: "size-4 text-subtle-foreground",
	},
})
