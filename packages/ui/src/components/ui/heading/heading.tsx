import { forwardRef } from "../../../utils/jsx"

import { headingVariants } from "@dv/styles/components/heading"
import { type ElementType, createElement, useContext } from "react"
import type { Props } from "../../../utils/types"
import { HeadingContext } from "./heading-context"

type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6

type HeadingElements = `h${HeadingLevels}`
type TagName = HeadingElements

const Heading = forwardRef(function Heading(props: HeadingProps) {
	const { className, level, ...elementProps } = props

	const contextLevel = useContext(HeadingContext)

	const currentLevel = level || contextLevel

	const classes = headingVariants({ className, variant: currentLevel })

	const Tag = `h${currentLevel}` as keyof React.JSX.IntrinsicElements
	const htmlProps = { ...elementProps, className: classes }

	return createElement(Tag, htmlProps)
})

type HeadingOptions<_T extends ElementType = TagName> = {
	level?: HeadingLevels
}

type HeadingProps<T extends ElementType = TagName> = Props<T, HeadingOptions<T>>

export * from "./heading-levels"

export type { HeadingLevels, HeadingOptions, HeadingProps }

export { Heading }
