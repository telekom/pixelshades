// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { type VariantProps, tv } from "tailwind-variants"
import { focusRing } from "../../utils"
export type TabsVariantsProps = VariantProps<typeof tabsVariants>

export const tabsVariants = tv({
	slots: {
		root: "flex w-full flex-col items-start",
		list: "relative inline-flex gap-md items-center justify-between",
		tab: [
			"relative flex cursor-pointer justify-center transition-colors duration-200 aria-selected:cursor-default rounded-md",
		],
		panel: "rounded-lg outline-none ring-focus data-[focus-visible]:ring-2",
	},
	variants: {
		variant: {
			outline: {
				root: "",
				list: "border-blue-500 border-b",
				tab: "-mb-px border-red-500 rounded-b-none aria-selected:border aria-selected:bg-subtle aria-selected:border-b-transparent data-[hovered]:bg-subtle",
				panel: "bg-subtle",
			},
			line: {
				root: "",
				list: "",
				tab: "box-border border-primary aria-selected:rounded-none outline-none aria-selected:border-b-2 aria-selected:hover:bg-transparent data-[hovered]:bg-subtle",
			},
			pill: {
				root: "",
				list: "",
				tab: [
					"block text-subtle-foreground border border-transparent rounded-md aria-selected:text-foreground aria-selected:border-border aria-selected:bg-subtle",
					focusRing(),
				],
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
