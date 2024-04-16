import { tv } from "tailwind-variants"

export const textFieldVariants = tv({
	slots: {
		input: "font-sm m-0 appearance-none rounded-md border border-border bg-background p-sm outline-none ring-fg focus:border-transparent focus:ring-2",
		root: "flex flex-col gap-sm",
	},
})