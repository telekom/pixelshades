"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { cn } from "@pixelshades/utils/styles"
import * as React from "react"
import { cardVariants } from "@pixelshades/styles/components/card"
import {Heading} from "../heading/heading";

const {root, header, title, description, content, footer } = cardVariants()

const CardRoot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={root({className})} {...props} />
	),
)
CardRoot.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={header({className})} {...props} />
	),
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => (
		<Heading level={3} ref={ref} className={title({className})} {...props} />
	),
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => (
		<p ref={ref} className={description({className})} {...props} />
	),
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={content({className})} {...props} />
	),
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={footer({className})}
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

export { CardTitle, CardContent, CardDescription, CardFooter, CardHeader }
