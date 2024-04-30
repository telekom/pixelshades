// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { ComponentProps, ElementType } from "react"
import type { VariantProps } from "tailwind-variants"
import { forwardRef } from "../jsx/jsx"
import { cn } from "./cn"

type Recipe = (props: any) => any

export const withStyle = <
	C extends ElementType,
	StylesFunction extends Recipe,
	Slot extends keyof ReturnType<StylesFunction>,
>(
	Component: C,
	createStyles: StylesFunction,
	slot?: Slot,
) => {
	const StyledComponent = forwardRef(({ ...props }: ComponentProps<C> & VariantProps<StylesFunction>, ref) => {
		const styles = createStyles(props)
		const variantClassNames = typeof styles === "function" ? styles[slot ?? ""]?.() : styles

		// @ts-expect-error JSX.IntrinsicElements do not have a displayName but Function and Class components do
		return <Component ref={ref} {...props} className={cn(variantClassNames, props.className)} />
	})

	return StyledComponent
}
