// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const drawerVariants = tv({
	slots: {
		modal: "max-w-full w-full md:w-full fixed outline-none border-0 border-primary shadow-lg shadow-primary rounded-none",
	},
	variants: {
		direction: {
			right: {
				modal: "border-l-2 w-1/6 top-0 bottom-0 right-0",
			},
			left: {
				modal: "border-r-2 w-1/6 top-0 bottom-0 left-0",
			},
			bottom: {
				modal: "border-t-2 h-1/3 bottom-0 right-0 left-0",
			},
			default: {
				modal: "border-t-2 h-1/3 bottom-0 right-0 left-0 lg:h-full lg:border-l-2 lg:w-1/6 lg:top-0 lg:bottom-0 lg:right-0 lg:left-auto",
			},
		},
	},
	defaultVariants: {
		direction: "default",
	},
})
