// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const dialogVariants = tv({
	slots: {
		closeButton: "absolute top-2 right-2",
		container: "fixed inset-0 z-40 flex items-center justify-center",
		content: "flex flex-col gap-md text-foreground outline-none relative",
		modal: "rounded-xl max-w-full bg-background border outline-none md:max-w-2xl entering:animate-zoom",
		overlay:
			"fixed left-0 top-0 z-50 flex h-[var(--visual-viewport-height)] w-screen items-center justify-center bg-black/80 entering:animate-fade exiting:animate-fadeOut",

		header: "flex flex-col space-y-1.5 text-center sm:text-left",
		title: "text-lg font-semibold leading-none tracking-tight",
		footer: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
	},
	variants: {
		padding: {
			none: {
				content: "p-0",
			},
			sm: {
				content: "p-layout-xs",
			},
			md: {
				content: "p-layout-sm",
			},
			lg: {
				content: "p-layout-md",
			},
		},
	},
	defaultVariants: {
		padding: "md",
	},
})
