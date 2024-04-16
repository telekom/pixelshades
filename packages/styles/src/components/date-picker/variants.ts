import { tv } from "tailwind-variants"
import { dateFieldVariants } from "../date-field/variants"

export const datePickerVariants = tv({
	slots: {
		group: "relative flex w-fit items-center rounded-md border border-border bg-surface shadow-lg",
		iconButton: "appearance-none border-none bg-primary p-0 align-middle text-primary-fg outline-none",
		input: "flex w-fit whitespace-nowrap border-transparent bg-transparent pr-8 focus-within:border-transparent focus-within:ring-2",
		inputButton:
			"absolute right-2 flex appearance-none items-center justify-center rounded-md outline-none ring-primary ring-offset-2 ring-offset-surface data-[hovered]:bg-subtle data-[focus-visible]:ring-2",
	},
	extend: dateFieldVariants,
})
