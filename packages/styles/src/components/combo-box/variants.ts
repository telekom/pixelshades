// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const comboboxVaraints = tv({
	slots: {
		root: "max-h-inherit flex flex-col gap-sm outline-none",
		popover: "w-[--trigger-width]",
	},
})
