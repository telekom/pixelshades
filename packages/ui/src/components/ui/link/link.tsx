"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { Link as AriaLink, type LinkProps as AriaLinkProps } from "react-aria-components"

import { linkVariants } from "@pixelshades/styles/components/link"
import { cn } from "@pixelshades/cn"
import type { VariantProps } from "tailwind-variants"

export interface LinkProps extends AriaLinkProps, VariantProps<typeof linkVariants> {
	/** The styles of the link. */
	className?: string
}

const Link = ({ className, size, variant, ...props }: LinkProps) => {
	return (
		<AriaLink
			className={cn(
				linkVariants({
					className,
					variant,
					size,
				}),
			)}
			{...props}
		/>
	)
}

Link.displayName = "Link"

export { Link }
