// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { focusRing } from "../../utils"

export const switchVariants = tv({
	slots: {
		root: "group flex gap-2 items-center text-foreground disabled:text-foreground-disabled forced-colors:disabled:text-[GrayText] text-sm transition",
		track: focusRing({
			className:
				"flex h-5 w-8 px-px bg-red-500 items-center shrink-0 cursor-default rounded-full transition duration-200 ease-in-out shadow-inner border border-transparent",
		}),
		handle: "size-4 transform rounded-full bg-subtle outline outline-1 -outline-offset-1 outline-transparent shadow transition duration-200 ease-in-out",
	},
	variants: {
		isSelected: {
			false: {
				base: "bg-red-600 group-pressed:bg-foreground",
				handle: "translate-x-0",
			},
			true: {
				base: "bg-blue-600 forced-colors:!bg-[Highlight] group-pressed:bg-blue-700",
				handle: "translate-x-[100%]",
			},
		},
		isDisabled: {
			true: {
				base: "bg-pink-600 forced-colors:group-selected:!bg-[GrayText] forced-colors:border-[GrayText]",
				handle: "forced-colors:outline-[GrayText]",
			},
		},
	},
})
