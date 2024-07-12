"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { labelVariants } from "@pixelshades/styles/components/label"
import { forwardRef } from "@pixelshades/utils/jsx"
import type { ReactNode } from "react"
import { Label as AriaLabel, type LabelProps as AriaLabelProps, type TextProps } from "react-aria-components"
import { Tooltip } from "../ui/tooltip"
import { If } from "../utils"

interface FormComponentLabelProps {
	label?: ReactNode
	tooltip?: ReactNode
	description?: ReactNode
}

interface LabelProps extends AriaLabelProps {
	tooltip?: ReactNode
	description?: ReactNode
	isRequired?: boolean
}

const LabelRoot = forwardRef(({ className, children, description, isRequired, tooltip, ...props }: LabelProps) => {
	return (
		<AriaLabel className={labelVariants(className).base()} {...props}>
			<span>{children}</span>
			{isRequired && <span className={labelVariants().required()}>*</span>}
			<If condition={description}>
				{(description) => <span className={labelVariants(className).description()}>{description}</span>}
			</If>
			{tooltip ? <Tooltip>{tooltip}</Tooltip> : null}
		</AriaLabel>
	)
})

export const Label = Object.assign(LabelRoot, {})

export type { LabelProps, FormComponentLabelProps }
