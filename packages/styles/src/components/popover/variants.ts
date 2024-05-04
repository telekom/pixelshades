// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const popoverVariants = tv({
	slots: {
		base: [
			"rounded-md border bg-background text-foreground shadow-md outline-none forced-colors:bg-[Canvas] bg-clip-padding",
			"placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1",
		],

		arrow: "block forced-colors:fill-[Canvas] stroke-1 stroke-border forced-colors:stroke-[ButtonBorder] group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90",
	},

	variants: {
		isEntering: {
			true: { base: "animate-in fade-in ease-out duration-200" },
		},
		isExiting: {
			true: { base: "animate-out fade-out ease-in duration-150" },
		},
	},
})
