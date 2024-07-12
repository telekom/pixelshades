"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { DateFieldProps as AriaDateFieldProps, DateValue } from "react-aria-components"
import { DateField as AriaDateField, DateInput, DateSegment } from "react-aria-components"

import { cn } from "@pixelshades/cn"
import { dateFieldVariants } from "@pixelshades/styles/components/date-field"
import { inputVariants } from "@pixelshades/styles/components/input"
import { FormField, type FormFieldProps } from "../../core/form"

interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T>, FormFieldProps {}

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
		<FormField label={label} description={description} isRequired={isRequired} tooltip={tooltip}>
			<DateInput className={inputVariants(props as any)}>
				{(segment) => <DateSegment className={dateFieldVariants()} segment={segment} />}
			</DateInput>
		</FormField>
	</AriaDateField>
)

DateField.displayName = "DateField"

export { type DateFieldProps, DateField }
