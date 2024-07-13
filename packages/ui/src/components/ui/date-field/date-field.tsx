"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { DateFieldProps as AriaDateFieldProps, DateValue } from "react-aria-components"
import { DateField as AriaDateField } from "react-aria-components"

import { cn } from "@pixelshades/cn"

import { DateInput, DateSegment } from "../../core/date-input/date-input"
import { FormField, type FormFieldProps } from "../../core/form-field"
import { type InputBasedCompBaseProps, InputRoot } from "../../core/input"

interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T>, FormFieldProps, InputBasedCompBaseProps {}

const DateField = <T extends DateValue>({
	className,
	isRequired,

	// FormField Props
	label,
	helperText,
	tooltip,
	description,
	errorMessage,

	// Input Root Props
	before,
	after,
	isLoading,
	loaderPosition,
	//
	...props
}: DateFieldProps<T>) => (
	<AriaDateField className={cn("flex flex-col gap-sm", className)} {...props}>
		{(innerProps) => (
			<>
				<FormField
					label={label}
					description={description}
					helperText={helperText}
					isRequired={isRequired}
					isDisabled={innerProps.isDisabled}
					tooltip={tooltip}
				>
					<InputRoot before={before} after={after} isLoading={isLoading} loaderPosition={loaderPosition}>
						<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
					</InputRoot>
				</FormField>
			</>
		)}
	</AriaDateField>
)

DateField.displayName = "DateField"

export { type DateFieldProps, DateField }
