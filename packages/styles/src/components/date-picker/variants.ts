// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { dateFieldVariants } from "../date-field/variants"

export const datePickerVariants = tv({
	base: "",
	slots: {
		dateInput: "flex w-full items-center",
	},
	extend: dateFieldVariants,
})
