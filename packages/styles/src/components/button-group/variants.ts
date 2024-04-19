import { tv } from "tailwind-variants"
import { buttonVariants } from "../button/variants"

export const buttonGroupVariants = tv({
	slots: {
		buttonGroup: "flex items-center",
	},
	defaultVariants: {
		orientation: "horizontal",
	},
	variants: {
		orientation: {
			horizontal: {
				buttonGroup: "flex-row",
				button: "first:!rounded-r-none last:rounded-l-none [&:not(:first-child):not(:last-child)]:rounded-none [&:not(:first-child):not(:last-child)]:border-x-0",
			},
			vertical: {
				buttonGroup: "flex-col",
				button: "first:!rounded-b-none last:rounded-t-none [&:not(:first-child):not(:last-child)]:rounded-none [&:not(:first-child):not(:last-child)]:border-y-0 w-full",
			},
		},
	},
	extend: buttonVariants,
})
