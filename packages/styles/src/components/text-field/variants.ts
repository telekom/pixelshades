// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { fieldBorderStyles } from "../form"

export const textFieldVariants = tv({
	base: "font-sm m-0 appearance-none rounded-md border border-border bg-background p-sm outline-none ring-fg focus:border-transparent focus:ring-2",
	variants: {
		...fieldBorderStyles.variants,
	},
})
