"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { labelVariants } from "@pixelshades/styles/components/label"
import type { ReactNode } from "react"
import { Label as AriaLabel, type LabelProps as AriaLabelProps } from "react-aria-components"
import { If } from "../../utils"
import { Tooltip } from "../tooltip"

interface LabelProps extends AriaLabelProps {
	tooltip?: ReactNode
	description?: ReactNode
}

const Label = ({ className, children, description, tooltip, ...props }: LabelProps) => (
	<AriaLabel className={labelVariants(className).base()} {...props}>
		<span>{children}</span>
		<If condition={description}>
			{(description) => <span className={labelVariants(className).description()}>{description}</span>}
		</If>
		{tooltip ? <Tooltip>{tooltip}</Tooltip> : null}
	</AriaLabel>
)

Label.displayName = "Label"

export { Label, type LabelProps }
