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
	label?: ReactNode
	helperText?: string
	errorMessage?: string | ((validation: ValidationResult) => string)
}

const TimeField = <T extends TimeValue>({
	label,
	helperText,
	errorMessage,
	description,
	tooltip,
	...props
}: TimeFieldProps<T>) => (
	<AriaTimeField className="flex flex-col gap-md" {...props}>
		<Label description={description} tooltip={tooltip}>
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

export { TimeField }
