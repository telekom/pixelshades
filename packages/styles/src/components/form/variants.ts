import { tv } from "tailwind-variants"
import { focusRing } from "../../utils"
import { inputVariants } from "../input"

export const formVariants = tv({
	slots: {
		root: "flex flex-col gap-layout-md",
		label: "flex-none text-subtle-foreground line-clamp-1",
		description: "text-start text-subtle-foreground text-xs line-clamp-1",
		errorMessage: "text-destructive text-xs line-clamp-1",
	},
	variants: {
		size: {
			md: {
				root: "text-md",
				group: "text-md",
				label: "min-w-0",
			},
		},
	},
})

export const fieldBorderStyles = tv({
	variants: {
		isFocusWithin: {
			false: "border-border/90 forced-colors:border-[ButtonBorder]",
			true: "border-border forced-colors:border-[Highlight]",
		},
		isInvalid: {
			true: "border-destructive forced-colors:border-[Mark]",
		},
		isDisabled: {
			true: "border-border/10 forced-colors:border-[GrayText]",
		},
	},
})

export const formGroupVariants = tv({
	base: inputVariants({ className: "group" }),
	variants: fieldBorderStyles.variants,
	extend: focusRing,
})
