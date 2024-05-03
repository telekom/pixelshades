// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { dateFieldVariants } from "../date-field/variants"

export const datePickerVariants = tv({
	base: "",
	slots: {
		dateInput: "flex w-full items-center",
		inputButton:
			"flex size-4 appearance-none items-center justify-center rounded-md outline-none ring-primary ring-offset-2 ring-offset-surface data-[hovered]:bg-subtle data-[focus-visible]:ring-2",
	},
	extend: dateFieldVariants,
})
