import { tv } from "tailwind-variants"
import { focusRing } from "../../utils"

export const radioGroupVariants = tv({
	slots: {
		root: "group flex flex-col gap-md",
		item: focusRing({
			className:
				"flex aspect-square size-4 items-center justify-center rounded-full border border-primary text-primary ring-offset-background group-data-[disabled]:opacity-50 group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2",
		}),
		group: "flex group-orientation-vertical:flex-col gap-md group-orientation-horizontal:gap-lg",
		card: "rounded-xl border bg-subtle p-lg text-foreground shadow data-[selected]:border-primary data-[focus-visible]:bg-primary/10",
	},
})
