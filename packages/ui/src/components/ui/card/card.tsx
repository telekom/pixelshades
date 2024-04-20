"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { cn } from "@pixelshades/utils/styles"
import * as React from "react"

const CardRoot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("rounded-xl border bg-card text-card-foreground shadow", className)} {...props} />
	),
)
CardRoot.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("flex flex-col space-y-3 p-6", className)} {...props} />
	),
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => (
		<h3 ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
	),
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => (
		<p ref={ref} className={cn("text-sm text-subtle-foreground", className)} {...props} />
	),
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("relative flex flex-col space-y-6 p-6 pt-0", className)} {...props} />
	),
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"flex items-center justify-between rounded-b-lg border-t bg-subtle p-6 dark:bg-transparent",
				className,
			)}
			{...props}
		/>
	),
)
CardFooter.displayName = "CardFooter"

export const Card = Object.assign(CardRoot, {
	Header: CardHeader,
	Title: CardTitle,
	Content: CardContent,
	Description: CardDescription,
	Footer: CardFooter,
})
