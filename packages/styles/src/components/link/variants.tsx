import { tv } from "tailwind-variants"
import { typographyVariants } from "../typography/variants"

const linkVariants = tv({
	extend: typographyVariants,
	base: "text-primary underline-offset-4 hover:underline cursor-pointer",
	variants: {
		variant: {
			default: "",
			active: "font-semibold !no-underline cursor-default",
		},
	},
	defaultVariants: {
		variant: "default",
	},
})
export { linkVariants }
