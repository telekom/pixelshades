"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import {
	Radio as AriaRadio,
	RadioGroup as AriaRadioGroup,
	type RadioGroupProps as AriaRadioGroupProps,
	type RadioProps as AriaRadioProps,
	type ValidationResult,
} from "react-aria-components"

import { cn } from "@pixelshades/cn"
import { labelVariants } from "@pixelshades/styles/components/label"
import { radioGroupVariants } from "@pixelshades/styles/components/radio-group"
import { IconCircle } from "@tabler/icons-react"
import type { ReactNode } from "react"
import { FormField, type FormFieldProps } from "../../core/form"
import { If } from "../../utils"
import { FormDescription, FormFieldError } from "../form"

export interface RadioGroupProps extends AriaRadioGroupProps, FormFieldProps {
	/** The children of the radio group. */
	children?: ReactNode
}

const { item, group, root, card } = radioGroupVariants()

const RadioGroupRoot = ({
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
			<FormField label={label} description={description} tooltip={tooltip} isRequired={isRequired}>
				<div className={group()}>{children}</div>
			</FormField>
		</AriaRadioGroup>
	)
}

RadioGroupRoot.displayName = "RadioGroup"

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
							{values.isSelected && <IconCircle className="size-2.5 fill-current text-current" />}
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
			className={(values) => card({ className: typeof className === "function" ? className(values) : className })}
			{...props}
		>
			{children}
		</AriaRadio>
	)
}

RadioItem.displayName = "Radio"

export const RadioGroup = Object.assign(RadioGroupRoot, {
	Item: RadioItem,
	Card: RadioCard,
})

export { RadioItem, RadioCard }
