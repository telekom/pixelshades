// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const labelVariants = tv({
	slots: {
		description: "text-subtle-foreground text-sm",
		helperText: "text-subtle-foreground text-sm",
	},
	base: "text-sm font-medium inline-flex shrink-0 items-center gap-sm antialiased leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
})
