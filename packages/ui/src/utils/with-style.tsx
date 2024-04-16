import type { ComponentProps, ElementType } from "react"
import type { VariantProps } from "tailwind-variants"
import { cn } from "."
import { forwardRef } from "./jsx"

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
		const variantClassNames = styles[slot ?? ""]?.()

		// @ts-expect-error
		return <Component ref={ref} {...props} className={cn(variantClassNames, props.className)} />
	})

	return StyledComponent
}
