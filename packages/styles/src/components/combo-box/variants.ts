// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const comboboxVaraints = tv({
	slots: {
		input: "m-0 w-64 rounded-md border border-border bg-background p-2 align-middle text-fg outline-none ring-ring focus:border-transparent focus:ring-2",
		root: "max-h-inherit overflow-auto p-1 outline-none",
		item: "relative m-1 flex cursor-default flex-col rounded-md p-2 outline-none aria-selected:bg-secondary aria-selected:text-subtle-foreground data-[focused]:bg-subtle data-[focused]:aria-selected:bg-subtle ",
		popover: "w-56 rounded-xl border border-border bg-background p-2 text-fg shadow-xl outline-none",
		button: "absolute right-2 flex appearance-none items-center justify-center rounded-md border-0 outline-none data-[hovered]:bg-subtle",
	},
})
