import { tv } from "tailwind-variants"

export const dateInputStyles = tv({
	slots: {
		input: [
			"flex justify-start items-center text-foreground placeholder:text-subtle-foreground disabled:text-subtle-foreground-disabled disabled:cursor-default",
		],
		segment:
			"rounded px-xs py-px outline-none focus:bg-subtle focus:text-suble-foreground focus:caret-transparent select-none type-literal:px-0 placeholder-shown:[&:not([data-disabled])]:[&:not([data-focused])]:text-subtle-foreground disabled:text-subtle-foreground-disabled",
	},
})
