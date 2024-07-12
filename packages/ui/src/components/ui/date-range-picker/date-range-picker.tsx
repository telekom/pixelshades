"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { DateRangePickerProps as AriaDateRangePickerProps, ValidationResult } from "react-aria-components"
import {
	DateRangePicker as AriaDateRangePicker,
	Dialog as AriaDialog,
	DateInput,
	DateSegment,
	type DateValue,
} from "react-aria-components"

import { datePickerVariants } from "@pixelshades/styles/components/date-picker"
import { IconChevronDown } from "@tabler/icons-react"
import { FormField, type FormFieldProps } from "../../core/form"
import { Button } from "../button"
import { FormFieldGroup } from "../form"
import { Popover } from "../popover"
import { RangeCalendar } from "../range-calendar"

const { base, dateInput } = datePickerVariants()

interface DateRangePickerProps<T extends DateValue> extends AriaDateRangePickerProps<T>, FormFieldProps {}

const DateRangePicker = <T extends DateValue>({
	className,
	label,
	description,
	tooltip,
	helperText,
	errorMessage,
	children,
	isRequired,
	...props
}: DateRangePickerProps<T>) => (
	<AriaDateRangePicker className="flex flex-col gap-md" isRequired={isRequired} {...props}>
		<FormField label={label} description={description} tooltip={tooltip} isRequired={isRequired}>
			<FormFieldGroup className={"relative flex items-center"}>
				<DateInput className={dateInput()} slot="start">
					{(segment) => <DateSegment className={base()} segment={segment} />}
				</DateInput>
				<span aria-hidden="true">–</span>
				<DateInput className={dateInput()} slot="end">
					{(segment) => <DateSegment className={base()} segment={segment} />}
				</DateInput>
				<Button size="xs-icon" variant="ghost">
					<IconChevronDown aria-hidden className="size-4" />
				</Button>
			</FormFieldGroup>
		</FormField>

		<Popover className="w-fit border-none p-0">
			<AriaDialog>
				<RangeCalendar />
			</AriaDialog>
		</Popover>
	</AriaDateRangePicker>
)

export { type DateRangePickerProps, DateRangePicker }
