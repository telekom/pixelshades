// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const sliderVariants = tv({
	slots: {
		sliderRoot: "flex flex-col w-full",
		sliderHeader: "flex justify-between",
		sliderTrack:
			"w-full h-8 before:absolute before:inset-x-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:bg-border before:rounded-full",
		sliderThumb: "size-6 bg-primary rounded-full top-1/2",
		sliderDescription: "",
	},
	defaultVariants: {
		orientation: "horizontal",
	},
	variants: {
		orientation: {
			vertical: {
				sliderRoot: "h-full flex-row ",
				sliderTrack: "w-8 h-full before:h-full before:left-1/2 before:-translate-x-1/2 before:w-1",
				sliderThumb: "left-1/2",
			},
			horizontal: "",
		},
	},
})
