"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { DateFieldProps as AriaDateFieldProps, DateValue, ValidationResult } from "react-aria-components"
import { DateField as AriaDateField, DateInput, DateSegment } from "react-aria-components"

import { dateFieldVariants } from "@pixelshades/styles/components/date-field"
import { inputVariants } from "@pixelshades/styles/components/input"
import { cn } from "@pixelshades/cn"
import type { ReactNode } from "react"
import { FormDescription, FormFieldError } from "../form"
import { type FormComponentLabelProps, Label } from "../label"

interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T>, FormComponentLabelProps {
	/** A helper text to display below the date field. */
	helperText?: ReactNode
	/** The error message to display if the date field is invalid. */
	errorMessage?: string | ((validation: ValidationResult) => string)
}

const DateField = <T extends DateValue>({
	label,
	helperText,
	tooltip,
	description,
	errorMessage,
	className,
	isRequired,
	...props
}: DateFieldProps<T>) => (
	<AriaDateField className={cn("flex flex-col gap-sm", className)} isRequired={isRequired} {...props}>
		<Label description={description} isRequired={isRequired} tooltip={tooltip}>
			{label}
		</Label>
		<DateInput className={inputVariants(props as any)}>
			{(segment) => <DateSegment className={dateFieldVariants()} segment={segment} />}
		</DateInput>
		{helperText && <FormDescription>{helperText}</FormDescription>}
		<FormFieldError>{errorMessage}</FormFieldError>
	</AriaDateField>
)

DateField.displayName = "DateField"

export { type DateFieldProps, DateField }
