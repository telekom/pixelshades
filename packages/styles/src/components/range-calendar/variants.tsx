// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { calendarVariants } from "../calendar"

export const dateRangeCalendarVariants = tv({
	slots: {
		cell: "data-[selected]:rounded-none [&[data-selection-end]]:rounded-r-md [&[data-selection-start]]:rounded-l-md",
	},
	extend: calendarVariants,
})
