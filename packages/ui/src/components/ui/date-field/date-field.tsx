"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { DateFieldProps as AriaDateFieldProps, DateValue } from "react-aria-components"
import { DateField as AriaDateField, DateInput, DateSegment, Text } from "react-aria-components"

import { dateFieldVariants } from "@pixelshades/styles/components/date-field"
import type { ReactNode } from "react"
import { Label } from "../label"

const { input, dateSegment } = dateFieldVariants()

interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
	label?: ReactNode
	description?: string
	errorMessage?: string
}

const DateField = <T extends DateValue>({ label, description, errorMessage, ...props }: DateFieldProps<T>) => (
	<AriaDateField className="flex flex-col gap-md" {...props}>
		<Label>{label}</Label>
		<DateInput className={input()}>
			{(segment) => <DateSegment className={dateSegment()} segment={segment} />}
		</DateInput>
		{description && <Text slot="description">{description}</Text>}
		{errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
	</AriaDateField>
)

DateField.displayName = "DateField"

export { type DateFieldProps, DateField }
