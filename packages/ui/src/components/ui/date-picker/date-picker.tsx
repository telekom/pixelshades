"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { DatePickerProps as AriaDatePickerProps, ValidationResult } from "react-aria-components"
import {
	Button as AriaButton,
	DatePicker as AriaDatePicker,
	Dialog as AriaDialog,
	DateInput,
	DateSegment,
	type DateValue,
} from "react-aria-components"

import { datePickerVariants } from "@pixelshades/styles/components/date-picker"
import { IconChevronDown } from "@tabler/icons-react"
import { FormField, type FormFieldProps } from "../../core/form"
import { Button } from "../button"
import { Calendar } from "../calendar"
import { FormFieldGroup } from "../form"
import { Popover } from "../popover"

const { base, dateInput } = datePickerVariants()

interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T>, FormFieldProps {}

const DatePicker = <T extends DateValue>({
	className,
	label,
	description,
	tooltip,
	helperText,
	errorMessage,
	children,
	isRequired,
	...props
}: DatePickerProps<T>) => (
	<AriaDatePicker className="flex flex-col gap-sm" isRequired={isRequired} {...props}>
		<FormField label={label} description={description} tooltip={tooltip} isRequired={isRequired}>
			<FormFieldGroup className={"relative flex items-center"}>
				<DateInput className={dateInput()}>
					{(segment) => <DateSegment className={base()} segment={segment} />}
				</DateInput>
				<Button size="xs-icon" variant="ghost">
					<IconChevronDown className="size-4" />
				</Button>
			</FormFieldGroup>
		</FormField>

		<Popover className="w-fit overflow-hidden border-none bg-transparent shadow-none">
			<AriaDialog>
				<Calendar />
			</AriaDialog>
		</Popover>
	</AriaDatePicker>
)

export { type DatePickerProps, DatePicker }
