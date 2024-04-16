import { tv } from "tailwind-variants"

export const dataListVariants = tv({
	slots: {
		root: "flex gap-sm",
		item: "mt-md flex w-full flex-none items-center gap-x-md",
		label: "flex-none text-subtle-foreground",
		value: "m-0 text-sm flex items-center gap-md",
	},
	variants: {
		direction: {
			vertical: {
				root: "flex-col",
				label: "min-w-0",
			},
			horizontal: {
				root: "flex-wrap",
				label: "min-w-[100px]",
			},
		},
	},
	defaultVariants: {
		direction: "horizontal",
	},
})
