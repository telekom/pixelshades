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
			horizontal: "h-fit !w-full min-h-[320px] max-h-full !max-w-full",
		},
		placement: {
			right: "right-0 border-l-2 animate-in slide-in-from-right ease-in",
			left: "left-0 border-r-2 animate-in slide-in-from-left ease-in",
			bottom: "bottom-0 border-t-2 animate-in slide-in-from-bottom ease-in",
			top: "top-0 border-b-2 animate-in slide-in-from-top ease-in",
		},
	},
	defaultVariants: {
		placement: "right",
	},
})
