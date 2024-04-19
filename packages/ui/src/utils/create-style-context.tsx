// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { type ComponentProps, type ElementType, createContext, forwardRef, useContext } from "react"
import { cn } from "."

type Recipe = (props: any) => any
type VariantProps<R extends Recipe> = Parameters<R>[0]

export const createStyleContext = <StylesFunction extends Recipe, Slot extends keyof ReturnType<StylesFunction>>(
	createStyles: StylesFunction,
) => {
	const StyleContext = createContext<ReturnType<typeof createStyles> | null>(null)

	const withProvider = <C extends ElementType>(Component: C, slot?: Slot) => {
		const Comp = forwardRef((props: ComponentProps<C> & VariantProps<StylesFunction>, ref) => {
			const styles = createStyles(props)
			const variantClassNames = styles[slot ?? ""]?.()
			return (
				<StyleContext.Provider value={styles}>
					<Component ref={ref} {...props} className={cn(variantClassNames, props.className)} />
				</StyleContext.Provider>
			)
		})

		// @ts-expect-error JSX.IntrinsicElements do not have a displayName but Function and Class components do
		Comp.displayName = Component.displayName || Component.name || "Component"
		return Comp
	}

	const withContext = <C extends ElementType>(Component: C, slot?: Slot) => {
		type ComponentPropsWithVariants = ComponentProps<C>

		const Comp = forwardRef((props: ComponentPropsWithVariants, ref) => {
			const slotRecipe = useContext(StyleContext)
			const variantClassNames = slotRecipe?.[slot ?? ""]?.()

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
