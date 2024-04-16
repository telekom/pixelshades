import { tv } from "tailwind-variants"

export const switchVariants = tv({
	slots: {
		root: "flex items-center gap-md transition-none duration-200 [&>div]:ring-focus [&>div]:ring-offset-2 [&>div]:ring-offset-background [&>div]:data-[focus-visible]:ring-2",
		indicator:
			"h-6 w-10 cursor-pointer rounded-2xl bg-subtle duration-200 before:mx-[2px] before:mt-[2px] before:block before:h-5 before:w-5 before:rounded-2xl before:bg-foreground before:transition-all ",
		label: "text-foreground text-base",
	},
	variants: {
		selected: {
			true: { indicator: "bg-primary before:translate-x-4" },
		},
	},
	defaultVariants: {
		selected: false,
	},
})
