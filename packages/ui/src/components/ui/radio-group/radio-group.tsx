"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { Circle } from "lucide-react"
import {
	Radio as AriaRadio,
	RadioGroup as AriaRadioGroup,
	type RadioGroupProps as AriaRadioGroupProps,
	type RadioProps as AriaRadioProps,
	type ValidationResult,
} from "react-aria-components"

import { labelVariants } from "@pixelshades/styles/components/label"
import { cn } from "@pixelshades/utils/styles"
import type { ReactNode } from "react"
import { FormDescription, FormFieldError } from "../form"
import { type FormComponentLabelProps, Label } from "../label"

export interface RadioGroupProps extends AriaRadioGroupProps, FormComponentLabelProps {
	children?: ReactNode
	helperText?: ReactNode
	errorMessage?: string | ((validation: ValidationResult) => string)
}

const RadioGroup = ({
	className,
	orientation = "vertical",
	description,
	helperText,
	tooltip,
	errorMessage,
	children,
	isRequired,
	...props
}: RadioGroupProps) => {
	return (
		<AriaRadioGroup
			className={(values) =>
				cn(
					"group flex flex-col gap-md",
					{
						"grid gap-md": orientation === "vertical",
						"flex items-center gap-md": orientation === "horizontal",
					},
					typeof className === "function" ? className(values) : className,
				)
			}
			isRequired={isRequired}
			{...props}
		>
			<Label description={description} tooltip={tooltip} isRequired={isRequired}>
				{props.label}
			</Label>
			<div className="flex gap-2 group-orientation-vertical:flex-col group-orientation-horizontal:gap-4">
				{children}
			</div>
			{helperText && <FormDescription>{helperText}</FormDescription>}
			<FormFieldError>{errorMessage}</FormFieldError>
		</AriaRadioGroup>
	)
}

RadioGroup.displayName = "RadioGroup"

export interface RadioProps extends AriaRadioProps {
	showRadio?: boolean
}

const RadioItem = ({ className, children, showRadio = true, ...props }: RadioProps) => {
	return (
		<AriaRadio
			className={(values) =>
				cn(
					"group flex items-center gap-x-2",
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

RadioItem.displayName = "Radio"

export const Radio = Object.assign(RadioItem, {
	Group: RadioGroup,
})

export { RadioGroup }
