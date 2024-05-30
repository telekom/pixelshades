// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"

export const badgeVariants = tv({
	slots: {
		icon: "size-4",
		child: "",
		badge: "inline-flex items-center rounded-md border antialiased transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	},

	variants: {
		variant: {
			default: {
				badge: "bg-primary text-primary-foreground dark:bg-primary/10 dark:text-primary border-primary",
				icon: "text-primary-foreground dark:text-primary",
			},
			info: {
				badge: "bg-subtle/10 text-subtle-foreground border-subtle",
				icon: "text-subtle-foreground dark:text-subtle",
			},
			alert: { badge: "bg-destructive/10 text-destructive border-destructive", icon: "text-destructive" },
			outline: { badge: "text-foreground border", icon: "text-foreground" },
		},
		size: {
			sm: { badge: "px-sm py-xs text-sm font-medium gap-xs", child: "text-xs" },
			md: { badge: "px-md py-sm text-sm font-medium gap-sm", child: "text-sm" },
		},
	},

	defaultVariants: {
		variant: "default",
		size: "md",
	},
})
