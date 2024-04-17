import { tv } from "tailwind-variants"

export const tableVariants = tv({
	slots: {
		root: "table min-h-[100px] border-separate border-spacing-0 self-start rounded-xl border border-border p-4 outline-none",
		column: "border-b-2 border-border px-4 py-1 text-left outline-none",
		header: "text-fg after:table-row after:h-[2px]",
		label: "text-subtle-foreground",
		row: "relative cursor-default rounded-xl text-foreground outline-none ring-focus data-[focus-visible]:ring-2",
		cell: "px-4 py-2 outline-none ring-focus data-[focus-visible]:ring-2",
	},
})
