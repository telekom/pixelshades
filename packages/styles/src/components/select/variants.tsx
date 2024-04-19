// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const selectVariants = tv({
	slots: {
		root: "max-h-inherit flex flex-col gap-md overflow-auto p-sm outline-none",
		item: "relative m-md flex cursor-default flex-col rounded-md p-sm outline-none ring-focus ring-offset-background aria-selected:!bg-primary data-[focus-visible]:border-transparent data-[focus-visible]:bg-background data-[hovered]:bg-subtle data-[focus-visible]:ring-2 data-[hovered]:aria-selected:bg-primary data-[focus-visible]:aria-selected:ring-offset-2",
		popover:
			"min-w-[var(--trigger-width)] rounded-xl border border-border bg-background text-foreground shadow-xl outline-none",
		button: "flex w-56 appearance-none items-center justify-between rounded-md border border-border p-sm outline-none ring-focus ring-offset-2 ring-offset-background data-[hovered]:bg-subtle data-[focus-visible]:ring-2",
		icon: "size-4 text-subtle-foreground",
	},
})
