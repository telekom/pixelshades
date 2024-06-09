// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { focusRing } from "../../utils"

export const badgeVariants = tv({
	slots: {
		icon: "",
		child: "",
		badge: ["inline-flex items-center rounded-full antialiased transition-colors", focusRing()],
	},

	variants: {
		variant: {
			outline: {
				badge: "text-foreground border",
			},
		},
		color: {
			default: {
				badge: "border-neutral-border hover:border-neutral-border-hover bg-neutral-background hover:bg-neutral-background-hover hover:text-neutral-background-foreground-hover text-neutral-foreground",
				icon: "text-neutral-foreground hover:text-neutral-foreground-hover",
			},
			primary: {
				badge: "group/badge border-primary-border hover:border-primary-border-hover bg-primary-background hover:bg-primary-background-hover hover:text-primary-background-foreground-hover text-primary-background-foreground",
				icon: "text-primary-background-foreground group-hover/badge:text-primary-background-foreground-hover",
			},
			success: {
				badge: "group/badge border-success-border hover:border-success-border-hover bg-success-background hover:bg-success-background-hover hover:text-success-background-foreground-hover text-success-background-foreground",
				icon: "text-success-background-foreground group-hover/badge:text-success-background-foreground-hover",
			},
			destructive: {
				badge: "group/badge border-destructive-border hover:border-destructive-border-hover bg-destructive-background hover:bg-destructive-background-hover hover:text-destructive-background-foreground-hover text-destructive-background-foreground",
				icon: "text-destructive-background-foreground group-hover/badge:text-destructive-background-foreground-hover",
			},
			warning: {
				badge: "group/badge border-warning-border hover:border-warning-border-hover bg-warning-background hover:bg-warning-background-hover hover:text-warning-background-foreground-hover text-warning-background-foreground",
				icon: "text-warning-background-foreground group-hover/badge:text-warning-background-foreground-hover",
			},
			info: {
				badge: "group/badge border-info-border hover:border-info-border-hover bg-info-background hover:bg-info-background-hover hover:text-info-background-foreground-hover text-info-background-foreground",
				icon: "text-info-background-foreground group-hover/badge:text-info-background-foreground-hover",
			},
		},
		size: {
			sm: { badge: "px-sm py-xs text-xs font-normal gap-sm rounded-lg", child: "", icon: "size-3" },
			md: { badge: "px-md py-sm text-sm font-medium gap-sm", child: "", icon: "size-4" },
		},
	},

	defaultVariants: {
		variant: "outline",
		color: "default",
		size: "md",
	},
})
