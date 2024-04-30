import { tv } from "tailwind-variants"

export const focusRing = tv({
	base: [
		"outline outline-0 outline-ring forced-colors:outline-[Highlight] outline-offset-2",
		"data-[focus-visible]:outline-2",
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
