// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const selectVariants = tv({
	slots: {
		root: "max-h-inherit flex flex-col gap-sm overflow-auto outline-none",
		value: "text-sm",
		popover: "min-w-[var(--trigger-width)] w-fit p-xs",
	},
})
