import { tv } from "tailwind-variants"

export const loadingSpinnerVariants = tv({
	base: "animate-[spin_1s_linear_infinite]",
	variants: {
		variant: {
			default: "text-primary",
			info: "text-subtle",
			alert: "text-destructive",
		},
		size: {
			xs: "size-2",
			sm: "size-4",
			md: "size-6",
			lg: "size-8",
			xl: "size-12",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
})
