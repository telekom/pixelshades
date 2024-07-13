"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { DateRangePickerProps as AriaDateRangePickerProps } from "react-aria-components"
import { DateRangePicker as AriaDateRangePicker, Dialog as AriaDialog, type DateValue } from "react-aria-components"

import { IconChevronDown } from "@tabler/icons-react"
import { DateInput, DateSegment } from "../../core/date-input/date-input"
import { FormField, type FormFieldProps } from "../../core/form-field"
import { type InputBasedCompBaseProps, InputRoot } from "../../core/input"
import { Button } from "../button"
import { Popover } from "../popover"
import { RangeCalendar } from "../range-calendar"

interface DateRangePickerProps<T extends DateValue>
	extends AriaDateRangePickerProps<T>,
		FormFieldProps,
		Omit<InputBasedCompBaseProps, "after" | "loaderPosition"> {}

const DateRangePicker = <T extends DateValue>({
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
}: DateRangePickerProps<T>) => (
	<AriaDateRangePicker className="flex flex-col gap-md" isRequired={isRequired} {...props}>
		<FormField label={label} description={description} tooltip={tooltip} isRequired={isRequired}>
			<InputRoot before={before} isLoading={isLoading} loaderPosition={"before"}>
				<DateInput slot="start">{(segment) => <DateSegment segment={segment} />}</DateInput>
				<span aria-hidden="true">–</span>
				<DateInput slot="end">{(segment) => <DateSegment segment={segment} />}</DateInput>
				<Button className="ml-auto" size="xs-icon" variant="ghost">
					<IconChevronDown aria-hidden className="size-4" />
				</Button>
			</InputRoot>
		</FormField>

		<Popover className="w-fit border-none p-0">
			<AriaDialog>
				<RangeCalendar />
			</AriaDialog>
		</Popover>
	</AriaDateRangePicker>
)

export { type DateRangePickerProps, DateRangePicker }
