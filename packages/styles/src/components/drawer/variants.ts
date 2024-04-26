// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const drawerVariants = tv(
	{
		slots: {
			modalVertical: [
				"max-w-full",
				"w-full",
				"fixed",
				"outline-none",
				"border-0",
				"border-primary",
				"shadow-lg",
				"shadow-primary",
				"rounded-none",
			],
			modalHorizontal: [
				"max-w-full",
				"w-full",
				"fixed",
				"outline-none",
				"border-0",
				"border-primary",
				"shadow-lg",
				"shadow-primary",
				"rounded-none",
			],
		},
		variants: {
			direction: {
				right: {
					modalVertical: ["w-1/4", "border-t-0", "h-full", "border-l-2", "top-0", "left-[unset]"],
				},
				left: {
					modalVertical: ["border-r-2", "w-1/4", "top-0", "bottom-0", "left-0", "right-auto", "h-full"],
				},
				bottom: {
					modalHorizontal: ["w-full", "border-t-2", "h-1/3 ", "bottom-0 ", "right-0 ", "left-0"],
				},
			},
			size: {
				xs: { modalVertical: "", modalHorizontal: "" },
				sm: { modalVertical: "", modalHorizontal: "" },
				md: { modalVertical: "", modalHorizontal: "" },
				lg: { modalVertical: "", modalHorizontal: "" },
				xl: { modalVertical: "", modalHorizontal: "" },
				full: { modalVertical: "", modalHorizontal: "" },
			},
		},
		defaultVariants: {
			direction: "right",
		},
	},
	{
		responsiveVariants: ["md"], // `true` to apply to all screen sizes
	},
)
