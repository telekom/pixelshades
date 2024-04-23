"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { labelVariants } from "@pixelshades/styles/components/label"
import { forwardRef } from "@pixelshades/utils/jsx"
import type { ReactNode } from "react"
import {
	Label as AriaLabel,
	type LabelProps as AriaLabelProps,
	Text as AriaText,
	type TextProps,
} from "react-aria-components"
import { If } from "../../utils"
import { Tooltip } from "../tooltip"

interface LabelProps extends AriaLabelProps {
	tooltip?: ReactNode
	description?: ReactNode
}

const LabelRoot = forwardRef(({ className, children, description, tooltip, ...props }: LabelProps) => {
	const RenderedLabel = () => (
		<AriaLabel className={labelVariants(className).base()} {...props}>
			<span>{children}</span>
			<If condition={description}>
				{(description) => <span className={labelVariants(className).description()}>{description}</span>}
			</If>
			{tooltip ? <Tooltip>{tooltip}</Tooltip> : null}
		</AriaLabel>
	)

	return <RenderedLabel />
})

export type LabelHelperTextProps = TextProps

const LabelHelperText = forwardRef(({ children, ...props }: LabelHelperTextProps) => {
	if (!children) {
		return null
	}

	return (
		<AriaText slot="description" className={labelVariants().helperText()} {...props}>
			{children}
		</AriaText>
	)
})

export const Label = Object.assign(LabelRoot, {
	HelperText: LabelHelperText,
})

export { LabelHelperText, type LabelProps }
