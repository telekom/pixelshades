// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { focusRing } from "../../utils"

export const listBoxStyles = tv({
	base: [
		focusRing(),
		"flex flex-col p-sm overflow-auto outline-none layout-grid:grid layout-grid:grid-cols-2 layout-grid:w-auto",
		"orientation-horizontal:flex-row orientation-horizontal:w-auto",
		"empty:justify-center empty:items-center empty:italic empty:min-h-24 empty:text-subtle-foreground empty:text-sm",
		"[&_.separator]:-mx-sm [&_.separator]:my-sm [&_.separator]:w-auto",
	],
	variants: {
		standalone: {
			true: "border bg-background w-48 rounded-md max-h-60 overflow-y-auto",
			false: "rounded-[inherit] max-h-[inherit]",
		},
	},
})

export const listBoxItemStyles = tv({
	base: [
		"flex cursor-pointer items-center rounded-sm px-sm py-md text-sm outline-none transition-colors",
		"disabled:pointer-default disabled:cursor-default",
		"hover:bg-background-hover data-[focused]:bg-background-active disabled:bg-neutral-background-disabled disabled:text-subtle-foreground-disabled",
		"selection-single:pl-0 selection-multiple:pl-0",
		"[&_svg]:size-4",
	],
	variants: {
		variant: {
			default: "text-foreground",
			success: "text-success-foreground",
			warning: "text-warning-foreground",
			destructive: "text-destructive-foreground",
		},
	},
	defaultVariants: {
		variant: "default",
	},
})
