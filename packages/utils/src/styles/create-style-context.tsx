"use client"

import { cn } from "@pixelshades/cn"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { type ComponentProps, type ElementType, createContext, forwardRef, useContext } from "react"

type Recipe = (props: any) => any
type VariantProps<R extends Recipe> = Parameters<R>[0]

/**
 * The `createStyleContext` function creates a context that can be used to pass style props to its children.
 * @param createStyles A function that returns a style object for a given component.
 * @returns A context provider and a context consumer.
 */
export const createStyleContext = <StylesFunction extends Recipe, Slot extends keyof ReturnType<StylesFunction>>(
	createStyles: StylesFunction,
) => {
	const StyleContext = createContext<ReturnType<typeof createStyles> | null>(null)

	const withProvider = <C extends ElementType>(Component: C, slot?: Slot) => {
		type ComponentPropsWithVariants = ComponentProps<C> & VariantProps<StylesFunction>

		const Comp = forwardRef<any, ComponentPropsWithVariants>((props, ref) => {
			const styles = createStyles(props)
			const variantClassNames = styles[slot ?? ""]?.()
			return (
				<StyleContext.Provider value={styles}>
					<Component ref={ref} {...(props as any)} className={cn(variantClassNames, props.className)} />
				</StyleContext.Provider>
			)
		})

		// @ts-expect-error JSX.IntrinsicElements do not have a displayName but Function and Class components do
		Comp.displayName = Component.displayName || Component.name || "Component"
		return Comp
	}

	const withContext = <C extends ElementType>(Component: C, slot?: Slot) => {
		type ComponentPropsWithVariants = ComponentProps<C> & VariantProps<StylesFunction>

		const Comp = forwardRef<any, ComponentPropsWithVariants>((props, ref) => {
			const slotRecipe = useContext(StyleContext)

			const variantClassNames = slotRecipe
				? slotRecipe?.[slot ?? ""]?.(props)
				: createStyles(props)?.[slot ?? ""]?.()

			return <Component ref={ref} {...(props as any)} className={cn(variantClassNames, props.className)} />
		})

		// @ts-expect-error JSX.IntrinsicElements do not have a displayName but Function and Class components do
		Comp.displayName = Component.displayName || Component.name || "Component"
		return Comp
	}

	const useStyleContext = () => {
		const context = useContext(StyleContext)

		return context
	}

	return {
		withProvider,
		withContext,
		useStyleContext,
	}
}
