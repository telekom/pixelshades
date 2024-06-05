"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { TimeFieldProps as AriaTimeFieldProps, TimeValue, ValidationResult } from "react-aria-components"
import { TimeField as AriaTimeField, DateInput, DateSegment, Text } from "react-aria-components"

import { dateFieldVariants } from "@pixelshades/styles/components/date-field"
import { inputVariants } from "@pixelshades/styles/components/input"
import type { ReactNode } from "react"
import { FormDescription, FormFieldError } from "../form"
import { type FormComponentLabelProps, Label } from "../label"

export interface TimeFieldProps<T extends TimeValue> extends AriaTimeFieldProps<T>, FormComponentLabelProps {
	/** A label to be displayed above the time field */
	label?: ReactNode
	/** A helper text to be displayed below the time field */
	helperText?: ReactNode
	/** The error message to be displayed when the time field is in an error state */
	errorMessage?: string | ((validation: ValidationResult) => string)
}

const TimeField = <T extends TimeValue>({
	label,
	helperText,
	errorMessage,
	description,
	tooltip,
	isRequired,
	...props
}: TimeFieldProps<T>) => (
	<AriaTimeField className="flex flex-col gap-md" isRequired={isRequired} {...props}>
		<Label description={description} tooltip={tooltip} isRequired={isRequired}>
			{label}
		</Label>
		<DateInput className={inputVariants()}>
			{(segment) => <DateSegment className={dateFieldVariants()} segment={segment} />}
		</DateInput>
		{helperText && <FormDescription>{helperText}</FormDescription>}
		<FormFieldError>{errorMessage}</FormFieldError>
	</AriaTimeField>
)

TimeField.displayName = "TimeField"

export type { TimeValue }

export { TimeField }
