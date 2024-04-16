import { tv } from "tailwind-variants"

export const dateFieldVariants = tv({
	slots: {
		input: "min-w-sm flex w-fit whitespace-nowrap rounded-md border border-border p-2 outline-none ring-ring focus-within:border-transparent focus-within:ring-2",
		dateSegment: "rounded-md p-1 text-end outline-none focus:bg-secondary focus:text-secondary-foreground",
	},
})
