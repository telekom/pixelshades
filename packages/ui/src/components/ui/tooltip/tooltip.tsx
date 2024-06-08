"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { tooltipVariants } from "@pixelshades/styles/components/tooltip"
import {
	Tooltip as AriaTooltip,
	type TooltipProps as AriaTooltipProps,
	TooltipTrigger as AriaTooltipTrigger,
	type TooltipTriggerComponentProps,
} from "react-aria-components"
import { IconInfoCircle } from "../../../icons"
import { Button } from "../button"

const TooltipRoot = (props: TooltipTriggerComponentProps) => <AriaTooltipTrigger {...props} />

TooltipRoot.displayName = "TooltipRoot"

export interface TooltipContentProps extends AriaTooltipProps {
	/** The styles to be applied to the tooltip content. */
	className?: string
}

const TooltipContent = ({ children, className, offset = 10, ...props }: TooltipContentProps) => (
	<AriaTooltip offset={offset} className={tooltipVariants({ className })} {...props}>
		{children}
	</AriaTooltip>
)

TooltipContent.displayName = "TooltipContent"

export interface TooltipProps extends AriaTooltipProps {
	/** The styles to be applied to the tooltip root. */
	className?: string
}

const DefaultTooltipp = ({ children, className, ...props }: TooltipProps) => {
	return (
		<TooltipRoot delay={200} closeDelay={200}>
			<Button className="size-4 hover:text-primary" variant="ghost" size="icon">
				<IconInfoCircle className="size-3" />
			</Button>
			<TooltipContent className={className} {...props}>
				{children}
			</TooltipContent>
		</TooltipRoot>
	)
}

DefaultTooltipp.displayName = "Tooltip"

export const Tooltip = Object.assign(DefaultTooltipp, {
	Root: TooltipRoot,
	Content: TooltipContent,
})
