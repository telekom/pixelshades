"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { TimeFieldProps as AriaTimeFieldProps, TimeValue, ValidationResult } from "react-aria-components"
import { TimeField as AriaTimeField, DateInput, DateSegment, Text } from "react-aria-components"

import { dateFieldVariants } from "@pixelshades/styles/components/date-field"
import { inputVariants } from "@pixelshades/styles/components/input"
import type { ReactNode } from "react"
import { FormField, type FormFieldProps } from "../../core/form"
import { FormDescription, FormFieldError } from "../form"

export interface TimeFieldProps<T extends TimeValue> extends AriaTimeFieldProps<T>, FormFieldProps {}

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
		<FormField>
			<DateInput className={inputVariants()}>
				{(segment) => <DateSegment className={dateFieldVariants()} segment={segment} />}
			</DateInput>
		</FormField>
	</AriaTimeField>
)

TimeField.displayName = "TimeField"

export type { TimeValue }

export { TimeField }
