// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const avatarVariants = tv({
	base: [
		"overflow-hidden inline-grid relative shrink-0 bg-secondary align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1",
		"outline outline-1 -outline-offset-1 outline-foreground/[--ring-opacity]",
	],
	variants: {
		size: {
			xxs: "size-4",
			xs: "size-6",
			sm: "size-8",
			md: "size-10",
			lg: "size-12",
			xl: "size-16",
			"2xl": "size-20",
		},
		variant: {
			square: "rounded-[--avatar-radius] *:rounded-[--avatar-radius] [&_[data-slot=badge]]:rounded-full",
			rounded: "rounded-full *:rounded-full",
		},
	},
	defaultVariants: {
		variant: "rounded",
		size: "md",
	},
})

export const avatarGroupVariants = tv({
	base: "flex items-center justify-center -space-x-md [&_[data-slot=avatar]]:ring-2 [&_[data-slot=avatar]]:ring-background",
})
