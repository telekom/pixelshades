// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { type VariantProps, tv } from "tailwind-variants"

export type TabsVariantsProps = VariantProps<typeof tabsVariants>

export const tabsVariants = tv({
	slots: {
		root: "flex w-full flex-col items-start",
		list: "relative inline-flex gap-1 items-center justify-between",
		tab: "relative flex cursor-pointer justify-center rounded-md outline-none ring-focus ring-offset-2 ring-offset-ring transition-colors duration-200 aria-selected:cursor-default",
		panel: "rounded-lg outline-none ring-focus data-[focus-visible]:ring-2",
	},
	variants: {
		variant: {
			outline: {
				root: "",
				list: "border-blue-500 border-b",
				tab: "-mb-[1px] border-red-500 rounded-b-none aria-selected:border aria-selected:bg-subtle aria-selected:border-b-transparent data-[hovered]:bg-subtle data-[focus-visible]:ring-2",
				panel: "bg-subtle",
			},
			line: {
				root: "",
				list: "",
				tab: "border-primary aria-selected:rounded-none aria-selected:border-b-2 aria-selected:hover:bg-transparent data-[hovered]:bg-subtle data-[focus-visible]:ring-2",
			},
			pill: {
				root: "",
				list: "",
				tab: "block w-full text-subtle-foreground border border-transparent rounded-md aria-selected:text-foreground aria-selected:border-border aria-selected:bg-subtle",
				panel: "",
			},
		},
		size: {
			md: {
				tab: "p-sm",
				panel: "mt-sm",
			},
		},
	},
	defaultVariants: {
		variant: "line",
		size: "md",
	},
})
