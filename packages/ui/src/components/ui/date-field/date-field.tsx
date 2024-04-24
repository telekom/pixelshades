"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { DateFieldProps as AriaDateFieldProps, DateValue } from "react-aria-components"
import { DateField as AriaDateField, DateInput, DateSegment, Text } from "react-aria-components"

import { dateFieldVariants } from "@pixelshades/styles/components/date-field"
import { inputVariants } from "@pixelshades/styles/components/input"
import { type FormComponentLabelProps, Label } from "../label"

interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T>, FormComponentLabelProps {
	helperText?: string
	errorMessage?: string
}

const DateField = <T extends DateValue>({
	label,
	helperText,
	tooltip,
	description,
	errorMessage,
	...props
}: DateFieldProps<T>) => (
	<AriaDateField className="flex flex-col gap-md" {...props}>
		<Label description={description} tooltip={tooltip}>
			{label}
		</Label>
		<DateInput className={inputVariants()}>
			{(segment) => <DateSegment className={dateFieldVariants()} segment={segment} />}
		</DateInput>
		{helperText && <Text slot="description">{helperText}</Text>}
		{errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
	</AriaDateField>
)

DateField.displayName = "DateField"

export { type DateFieldProps, DateField }
