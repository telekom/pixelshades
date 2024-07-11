"use client"

import { tv } from "tailwind-variants"

export const focusRing = tv({
	base: [
		"outline outline-0 outline-ring forced-colors:outline-[Highlight] outline-offset-2",
		"data-[focus-visible]:outline-2 data-[focus-visible]:relative data-[focus-visible]:z-50",
		// "data-[focused]:outline-2",
		// "data-[invalid]:outline-2 data-[invalid]:outline-destructive",
	],
})

export const baseInputSizes = tv({
	variants: {
		size: {
			md: "h-9 px-md rounded-md gap-sm",
		},
	},
})

export const popoverBase = tv({
	base: [
		"rounded-md border bg-background text-foreground shadow-md outline-none forced-colors:bg-[Canvas] bg-clip-padding",

		// Animations
		"data-[entering]:animate-in data-[entering]:fade-in data-[entering]:ease-out data-[entering]:duration-200 data-[entering]:placement-top:slide-in-from-bottom-0.5 data-[entering]:placement-bottom:slide-in-from-top-0.5 data-[entering]:placement-top:slide-in-from-bottom-0.5 data-[entering]:placement-left:slide-in-from-right-0.5",
		"data-[exiting]:animate-out data-[exiting]:fade-out data-[exiting]:ease-out data-[exiting]:duration-150 data-[exiting]:placement-top:slide-out-from-bottom-0.5 data-[exiting]:placement-bottom:slide-out-from-top-0.5 data-[exiting]:placement-top:slide-out-from-bottom-0.5 data-[exiting]:placement-left:slide-out-from-right-0.5",
	],
})
