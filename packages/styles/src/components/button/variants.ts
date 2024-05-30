// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tv } from "tailwind-variants"
import { focusRing } from "../../utils"

export const buttonVariants = tv({
	base: [
		"appearance-none",
		"group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
		focusRing(),
	],
	defaultVariants: { variant: "solid", size: "md", color: "primary" },
	variants: {
		variant: {
			solid: "shadow",
			outline: "border bg-transparent shadow-sm",
			ghost: "",
			link: "text-primary underline-offset-4 hover:underline",
		},
		color: {
			primary: "",
			destructive: "",
			warning: "",
		},
		withRing: {
			true: "transition-all duration-300 ring-offset-background  hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",
		},
		size: {
			"xs-icon": "size-6 rounded-md",
			icon: "size-9 rounded-md",
			xs: "h-7 px-sm text-xs rounded-md",
			sm: "h-8 px-md text-xs rounded-md gap-xs",
			md: "h-9 px-lg rounded-md gap-sm",
			lg: "h-10 px-xl rounded-md gap-md",
		},
	},
	compoundVariants: [
		// Solid
		{
			variant: "solid",
			color: "primary",
			className: [
				"bg-primary text-primary-foreground",
				"hover:bg-primary-hover hover:text-primary-foreground-hover",
				"disabled:bg-primary-disabled disabled:text-primary-foreground-disabled",
			],
		},
		{
			variant: "solid",
			color: "destructive",
			className: [
				"bg-destructive text-destructive-foreground",
				"hover:bg-destructive-hover hover:text-destructive-foreground-hover",
				"disabled:bg-destructive-disabled disabled:text-destructive-foreground-disabled",
			],
		},
		{
			variant: "solid",
			color: "warning",
			className: [
				"bg-warning text-warning-foreground",
				"hover:bg-warning-hover hover:text-warning-foreground-hover",
				"disabled:bg-warning-disabled disabled:text-warning-foreground-disabled",
			],
		},

		// Outline
		{
			variant: "outline",
			color: "primary",
			className: [
				"border-primary-border text-primary-background-foreground",
				"hover:bg-primary-background-hover hover:text-primary-background-foreground-hover hover:border-primary-border-hover",
			],
		},
		{
			variant: "outline",
			color: "destructive",
			className: [
				"border-destructive-border text-destructive-background-foreground",
				"hover:bg-destructive-background-hover hover:text-destructive-background-foreground-hover hover:border-destructive-border-hover",
			],
		},
		{
			variant: "outline",
			color: "warning",
			className: [
				"border-warning-border text-info-background-foreground",
				"hover:bg-warning-background-hover hover:text-warning-background-foreground-hover hover:border-warning-border-hover",
			],
		},

		// Ghost
		{
			variant: "ghost",
			color: "primary",
			className: "hover:bg-primary-subtle",
		},
		{
			variant: "ghost",
			color: "destructive",
			className: "hover:bg-destructive-subtle",
		},
		{
			variant: "ghost",
			color: "warning",
			className: "hover:bg-warning-subtle",
		},
	],
	extend: focusRing,
})
