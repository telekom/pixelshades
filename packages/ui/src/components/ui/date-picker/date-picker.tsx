"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { DatePickerProps as AriaDatePickerProps, ValidationResult } from "react-aria-components"
import { DatePicker as AriaDatePicker, Dialog as AriaDialog, type DateValue } from "react-aria-components"

import { IconChevronDown } from "@tabler/icons-react"
import { DateInput, DateSegment } from "../../core/date-input/date-input"
import { FormField, type FormFieldProps } from "../../core/form-field"
import { type InputBasedCompBaseProps, InputRoot } from "../../core/input"
import { Button } from "../button"
import { Calendar } from "../calendar"
import { Popover } from "../popover"

interface DatePickerProps<T extends DateValue>
	extends AriaDatePickerProps<T>,
		FormFieldProps,
		Omit<InputBasedCompBaseProps, "after" | "loaderPosition"> {}

const DatePicker = <T extends DateValue>({
	className,
	children,
	isRequired,
	// FormField Props
	label,
	helperText,
	tooltip,
	description,
	errorMessage,

	// Input Root Props
	before,
	isLoading,
	...props
}: DatePickerProps<T>) => (
	<AriaDatePicker className="flex flex-col gap-sm" isRequired={isRequired} {...props}>
		<FormField label={label} description={description} tooltip={tooltip} isRequired={isRequired}>
			<InputRoot className="justify-between" before={before} isLoading={isLoading} loaderPosition="before">
				<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
				<Button size="xs-icon" variant="ghost">
					<IconChevronDown className="size-4" />
				</Button>
			</InputRoot>
		</FormField>

		<Popover className="w-fit overflow-hidden border-none bg-transparent shadow-none">
			<AriaDialog>
				<Calendar />
			</AriaDialog>
		</Popover>
	</AriaDatePicker>
)

export { type DatePickerProps, DatePicker }
