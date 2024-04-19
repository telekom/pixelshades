// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const dateFieldVariants = tv({
	slots: {
		input: "min-w-sm flex w-fit whitespace-nowrap rounded-md border border-border p-md outline-none ring-ring focus-within:border-transparent focus-within:ring-2",
		dateSegment: "rounded-md p-xs text-end outline-none focus:bg-secondary focus:text-secondary-foreground",
	},
})
