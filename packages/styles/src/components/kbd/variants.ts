import { tv } from "tailwind-variants"

export const kbdVariants = tv({
	base: "border-1 inline-flex cursor-default items-center rounded-full border border-border px-md font-sans text-subtle-foreground antialiased [&>abbr]:no-underline",
	variants: {
		size: {
			xs: "text-xs leading-6",
			sm: "text-sm leading-6",
			md: "py-xs text-base leading-6",
			lg: "py-xs text-lg",
		},
	},
	defaultVariants: {
		size: "xs",
	},
})
