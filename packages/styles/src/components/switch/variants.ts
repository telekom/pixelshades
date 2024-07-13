// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { focusRing } from "../../utils"

export const switchVariants = tv({
	base: "group flex gap-md items-center text-foregound disabled:text-subtle-foreground forced-colors:disabled:text-[GrayText] text-sm transition"
})

export const switchTrack = tv({
	extend: focusRing,
	base: "flex h-5 w-9 px-px items-center shrink-0 cursor-default rounded-2xl transition duration-200 ease-in-out shadow-inner border border-transparent",
	variants: {
		isSelected: {
			false: "bg-neutral-background border border-neutral-border group-pressed:bg-neutral-background-hover",
			true: "bg-primary forced-colors:!bg-[Highlight] group-pressed:bg-primary-hover",
		},
		isDisabled: {
			true: "border-neutral-border-disabled forced-colors:group-selected:!bg-[GrayText] forced-colors:border-[GrayText]",
		},
	},
})

export const switchHandle = tv({
	base: "size-4 transform rounded-full bg-neutral-foreground outline outline-1 -outline-offset-1 outline-transparent shadow transition duration-200 ease-in-out",
	variants: {
		isSelected: {
			false: "translate-x-0",
			true: "translate-x-full",
		},
		isDisabled: {
			true: "forced-colors:outline-[GrayText]",
		},
	},
})
