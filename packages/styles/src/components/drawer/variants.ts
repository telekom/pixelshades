// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

const baseStyles = ["fixed", "border-primary", "overflow-y-scroll"]

export const drawerVariants = tv({
	slots: {
		modalVertical: [...baseStyles, "w-fit", "top-0", "bottom-0", "h-full", "w-fit", "min-w-[320px]", "max-w-full"],
		modalHorizontal: [...baseStyles, "h-fit", "right-0", "left-0", "w-full", "min-h-[320px]", "max-h-full"],
	},
	variants: {
		placement: {
			right: {
				modalVertical: ["right-0", "border-l-2"],
			},
			left: {
				modalVertical: ["left-0", "border-r-2"],
			},
			bottom: {
				modalHorizontal: ["bottom-0", "border-t-2"],
			},
			top: {
				modalHorizontal: ["top-0", "border-b-2"],
			},
		},
	},
	defaultVariants: {
		placement: "right",
	},
})
