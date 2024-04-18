import { tv } from "tailwind-variants"
import { buttonVariants } from "../button"
import { cn } from "@dv/ui/utils"

export const buttonGroupVariants = tv({
	slots: {
		buttonGroup: "flex items-center",
		...buttonVariants.slots,
		button: cn(
			buttonVariants.slots.button,
			"first:rounded-r-none first:rounded-l-md last:rounded-r-md last:rounded-l-none",
		),
	},
	defaultVariants: {
		orientation: "horizontal",
		gap: 0,
		...buttonVariants.defaultVariants,
	},
	variants: {
		...buttonVariants.variants,
		// variants: {
		// 	...buttonVariants.variants.variant,
		// 	outline: "first:bg-red-500 last:bg-red-500 ",
		// 	// solid: "solid",
		// },
		variant: {
			...buttonVariants.variants.variant,
		},
		orientation: {
			horizontal: { buttonGroup: "flex-row" },
			vertical: { buttonGroup: "flex-col" },
		},
		gap: {
			0: { buttonGroup: "gap-0" },
			1: { buttonGroup: "gap-1" },
			2: { buttonGroup: "gap-2" },
			3: { buttonGroup: "gap-3" },
			4: { buttonGroup: "gap-4" },
			5: { buttonGroup: "gap-5" },
			6: { buttonGroup: "gap-6" },
			7: { buttonGroup: "gap-7" },
			8: { buttonGroup: "gap-8" },
			9: { buttonGroup: "gap-9" },
			10: { buttonGroup: "gap-10" },
		},
	},
})
