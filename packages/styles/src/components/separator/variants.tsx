import { tv } from "tailwind-variants"

export const separatorVariants = tv({
	base: "bg-border rounded-full",
	defaultVariants: { orientation: "horizontal" },
	variants: {
		orientation: {
			vertical: "w-0.5 mx-md h-full",
			horizontal: "h-0.5 my-md w-full",
		},
	},
})
