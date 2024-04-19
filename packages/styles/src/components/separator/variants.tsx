// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const separatorVariants = tv({
	base: "bg-border rounded-full",
	defaultVariants: { orientation: "horizontal" },
	variants: {
		orientation: {
			vertical: "w-px mx-md h-full",
			horizontal: "h-px my-md w-full",
		},
	},
})
