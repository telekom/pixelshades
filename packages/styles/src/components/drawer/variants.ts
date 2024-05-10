// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

const baseStyles = ["fixed", "border-primary", "overflow-y-scroll"]

export const drawerVariants = tv({
	base: "fixed overflow-y-scroll",
	variants: {
		orientation: {
			vertical: "h-full w-fit min-w-[320px] max-w-full",
			horizontal: "h-fit w-full min-h-[320px] max-h-full max-w-full",
		},
		placement: {
			right: [
				"right-0 border-l-2 rounded-r-none",

				// Animations
				"data-[entering]:animate-in data-[entering]:slide-in-from-right data-[entering]:ease-in data-[entering]:duration-200",
				"data-[exiting]:animate-out data-[exiting]:slide-out-from-left data-[exiting]:ease-out data-[exiting]:duration-150",
			],
			left: [
				"left-0 border-r-2 rounded-l-none",

				// Animations
				"data-[entering]:animate-in data-[entering]:slide-in-from-left data-[entering]:ease-in data-[entering]:duration-200",
				"data-[exiting]:animate-out data-[exiting]:slide-out-from-right data-[exiting]:ease-out data-[exiting]:duration-150",
			],
			bottom: [
				"bottom-0 border-t-2 rounded-b-none",

				// Animations
				"data-[entering]:animate-in data-[entering]:slide-in-from-bottom data-[entering]:ease-in data-[entering]:duration-200",
				"data-[exiting]:animate-out data-[exiting]:slide-out-from-top data-[exiting]:ease-out data-[exiting]:duration-150",
			],
			top: [
				"top-0 border-b-2 rounded-t-none",

				// Animations
				"data-[entering]:animate-in data-[entering]:slide-in-from-top data-[entering]:ease-in data-[entering]:duration-200",
				"data-[exiting]:animate-out data-[exiting]:slide-out-from-bottom data-[exiting]:ease-out data-[exiting]:duration-150",
			],
		},
	},
	defaultVariants: {
		placement: "right",
	},
})
