// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const menuVariants = tv({
	slots: {
		menuPopover:
			"overflow-auto rounded-xl border border-border bg-background shadow-xl data-[entering]:animate-fade data-[exiting]:animate-fadeOut p-0",
		header: "p-2",
		content: "flex h-fit w-56 flex-col gap-md py-2 outline-none",
		item: "relative flex cursor-pointer justify-between rounded-md p-sm text-foreground outline-none data-[focused]:bg-subtle",
	},
})
