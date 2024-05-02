"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { typographyVariants } from "@pixelshades/styles/components/typography"
import type { ReactNode } from "react"
import type { VariantProps } from "tailwind-variants"

export type TypographyProps<T extends React.ElementType> = {
	/** The HTML tag to be used for the typography */
	as?: T
	/** The children of the typography */
	children: ReactNode
} & TypographyVariantProps &
	React.ComponentPropsWithoutRef<T>

const Typography = <T extends React.ElementType = "p">({
	as,
	size,
	className,
	children,
	...elementProps
}: TypographyProps<T>) => {
	const Component = as || "p"

	const classes = typographyVariants({ size, className })
	return (
		<Component className={classes} {...elementProps}>
			{children}
		</Component>
	)
}

Typography.displayName = "Typography"

export { Typography }

export type TypographyVariantProps = VariantProps<typeof typographyVariants>
