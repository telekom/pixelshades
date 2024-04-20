"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { progressBarVariants } from "@pixelshades/styles/components/progress-bar"
import type React from "react"
import type { ProgressBarProps as AriaProgressBarProps } from "react-aria-components"
import { Label as AriaLabel, ProgressBar as AriaProgressBar } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { RenderSlot } from "../../../utils/jsx"
import { If } from "../../utils"

const { progressRoot, progressHeader, progressBar, progressFill, progressDescription } = progressBarVariants()

interface ProgressBarProps extends AriaProgressBarProps, VariantProps<typeof progressBarVariants> {
	className?: string
	label?: string
	description?: React.ReactElement<HTMLElement>
}

const ProgressBar = ({ className, size, variant, label, description, ...props }: ProgressBarProps) => {
	return (
		<AriaProgressBar className={progressRoot({ size, variant, className })} {...props}>
			{({ percentage, valueText }) => (
				<>
					<div className={progressHeader({ size, variant })}>
						<AriaLabel>{label}</AriaLabel>
						<span>{valueText}</span>
					</div>

					<div className={progressBar({ size, variant })}>
						<div className={progressFill({ size, variant })} style={{ width: `${percentage}%` }} />
					</div>

					<If condition={description}>
						<RenderSlot className={progressDescription({ size, variant })} item={description!} />
					</If>
				</>
			)}
		</AriaProgressBar>
	)
}

ProgressBar.displayName = "ProgressBar"

export { ProgressBar }
