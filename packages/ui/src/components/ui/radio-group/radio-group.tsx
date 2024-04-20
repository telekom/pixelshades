"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { Circle } from "lucide-react"
import {
	Radio as AriaRadio,
	RadioGroup as AriaRadioGroup,
	type RadioProps as AriaRadioProps,
	type RadioGroupProps,
} from "react-aria-components"

import { labelVariants } from "@pixelshades/styles/components/label"
import { cn } from "@pixelshades/utils/styles"

const RadioGroup = ({ className, orientation = "vertical", ...props }: RadioGroupProps) => {
	return (
		<AriaRadioGroup
			className={(values) =>
				cn(
					{
						"grid gap-md": orientation === "vertical",
						"flex items-center gap-md": orientation === "horizontal",
					},
					typeof className === "function" ? className(values) : className,
				)
			}
			{...props}
		/>
	)
}

RadioGroup.displayName = "RadioGroup"

interface RadioProps extends AriaRadioProps {
	showRadio?: boolean
}

const RadioRoot = ({ className, children, showRadio = true, ...props }: RadioProps) => {
	return (
		<AriaRadio
			className={(values) =>
				cn(
					"group flex items-center gap-x-2 data-[focused]:outline-none",
					labelVariants(),
					typeof className === "function" ? className(values) : className,
				)
			}
			{...props}
		>
			{(values) => (
				<>
					{showRadio && (
						<span className="flex aspect-square size-4 items-center justify-center rounded-full border border-primary text-primary ring-offset-background group-data-[disabled]:opacity-50 group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2">
							{values.isSelected && <Circle className="size-2.5 fill-current text-current" />}
						</span>
					)}
					{typeof children === "function" ? children(values) : children}
				</>
			)}
		</AriaRadio>
	)
}

RadioRoot.displayName = "Radio"

export type { RadioProps, RadioGroupProps }

export const Radio = Object.assign(RadioRoot, {
	Group: RadioGroup,
})
