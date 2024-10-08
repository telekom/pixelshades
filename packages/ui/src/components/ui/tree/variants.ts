import { tv } from "tailwind-variants"

export const treeStyles = tv({
	base: "flex border max-h-96 min-w-72 [&::-webkit-scrollbar]:size-0.5 [scrollbar-width:thin] py-md rounded-lg bg-background cursor-default lg:text-sm flex-col overflow-auto forced-color-adjust-none outline-none",
	variants: {
		isFocusVisible: {
			true: "outline-offset-[-1px] outline-2 outline-primary",
		},
	},
})

export const treeItemStyles = tv({
	base: [
		"[&_[data-expanded]_[slot=chevron]_[data-slot=icon]]:rotate-90 outline-none [--padding:20px] p-[0.286rem_0.286rem_0.286rem_0.571rem] pl-[calc((var(--tree-item-level)-1)*20px+0.571rem+var(--padding))]",
		"[&_[slot=chevron]]:outline-none [&_[slot=chevron]_[data-slot=icon]]:text-subtle-foreground",
		"data-[has-child-rows]:[--padding:0px]",
	],
	variants: {
		isExpanded: {
			true: "[&_[slot=chevron]_[data-slot=icon]]:text-foreground [&_[slot=chevron]_[data-slot=icon]]:rotate-90 [&_[slot=chevron]_[data-slot=icon]]:transition [&_[slot=chevron]_[data-slot=icon]]:duration-200",
		},
		isFocusVisible: {
			true: "[&_[slot=chevron]_[data-slot=icon]]:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-primary",
		},
		isDisabled: {
			true: "opacity-50 forced-colors:text-[GrayText]",
		},
	},
})
