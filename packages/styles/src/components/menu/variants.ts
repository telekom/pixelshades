import { tv } from "tailwind-variants"

export const menuVariants = tv({
	slots: {
		menuPopover:
			"overflow-auto rounded-xl border border-border bg-background shadow-xl data-[entering]:animate-fade data-[exiting]:animate-fadeOut ",
		header: "p-2",
		content: "flex h-fit w-56 flex-col gap-md p-2 outline-none",
		item: "relative flex cursor-pointer justify-between rounded-md p-2 text-foreground outline-none data-[focused]:bg-subtle",
		separator: "mx-2 my-2 h-[1px] bg-border",
	},
})
