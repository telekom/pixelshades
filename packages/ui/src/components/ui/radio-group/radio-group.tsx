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
import { radioGroupVariants } from "@pixelshades/styles/components/radio-group"
import { cn } from "@pixelshades/utils/styles"
import type { ReactNode } from "react"
import { If } from "../../utils"
import { FormDescription, FormFieldError } from "../form"
import { type FormComponentLabelProps, Label } from "../label"

export interface RadioGroupProps extends AriaRadioGroupProps, FormComponentLabelProps {
	/** The children of the radio group. */
	children?: ReactNode
	/** The helper text to display below the radio group. */
	helperText?: ReactNode
	/** The error message to display below the radio group. */
	errorMessage?: string | ((validation: ValidationResult) => string)
}

const { item, group, root, card } = radioGroupVariants()

const RadioGroup = ({
	className,
	description,
	helperText,
	tooltip,
	errorMessage,
	children,
	isRequired,
	label,
	...props
}: RadioGroupProps) => {
	return (
		<AriaRadioGroup
			className={(values) => root({ className: typeof className === "function" ? className(values) : className })}
			isRequired={isRequired}
			{...props}
		>
			<If condition={label || description || tooltip}>
				<Label description={description} tooltip={tooltip} isRequired={isRequired}>
					{label}
				</Label>
			</If>

			<div className={group()}>{children}</div>
			{helperText && <FormDescription>{helperText}</FormDescription>}
			<FormFieldError>{errorMessage}</FormFieldError>
		</AriaRadioGroup>
	)
}

RadioGroup.displayName = "RadioGroup"

export interface RadioProps extends AriaRadioProps {
	/** Whether the radio should be shown. */
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
						<span className={item()}>
							{values.isSelected && <Circle className="size-2.5 fill-current text-current" />}
						</span>
					)}
					{typeof children === "function" ? children(values) : children}
				</>
			)}
		</AriaRadio>
	)
}

const RadioCard = ({ className, children, showRadio = true, ...props }: RadioProps) => {
	return (
		<AriaRadio
			className={(values) =>
				card(
					{ className: typeof className === "function" ? className(values) : className },
				)
			}
			{...props}
		>
			{children}
		</AriaRadio>
	)
}

RadioItem.displayName = "Radio"

export const Radio = Object.assign(RadioItem, {
	Group: RadioGroup,
	Card: RadioCard,
})

export { RadioGroup, RadioItem }
