"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { TimeFieldProps as AriaTimeFieldProps, TimeValue } from "react-aria-components"
import { TimeField as AriaTimeField } from "react-aria-components"

import { DateInput, DateSegment } from "../../core/date-input/date-input"
import { FormField, type FormFieldProps } from "../../core/form-field"
import { type InputBasedCompBaseProps, InputRoot } from "../../core/input"

export interface TimeFieldProps<T extends TimeValue>
	extends AriaTimeFieldProps<T>,
		FormFieldProps,
		InputBasedCompBaseProps {}

const TimeField = <T extends TimeValue>({
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

	...props
}: TimeFieldProps<T>) => (
	<AriaTimeField isRequired={isRequired} {...props}>
		{(innerProps) => (
			<FormField
				label={label}
				description={description}
				helperText={helperText}
				tooltip={tooltip}
				isDisabled={innerProps.isDisabled}
				isRequired={isRequired}
			>
				<InputRoot before={before} after={after} isLoading={isLoading} loaderPosition={loaderPosition}>
					<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
				</InputRoot>
			</FormField>
		)}
	</AriaTimeField>
)

TimeField.displayName = "TimeField"

export type { TimeValue }

export { TimeField }
