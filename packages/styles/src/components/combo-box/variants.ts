// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const comboboxVaraints = tv({
	slots: {
		root: "max-h-inherit flex flex-col gap-sm outline-none",
		inputRoot: "relative flex w-full items-center",
		item: "relative m-1 flex cursor-default flex-col rounded-md p-2 outline-none aria-selected:bg-subtle aria-selected:text-subtle-foreground data-[focused]:bg-subtle data-[focused]:aria-selected:bg-subtle ",
		popover: "w-[--trigger-width]",
		button: "absolute right-2 flex appearance-none items-center justify-center rounded-md border-0 outline-none data-[hovered]:bg-subtle",
	},
})
