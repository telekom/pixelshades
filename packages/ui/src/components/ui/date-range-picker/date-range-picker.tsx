"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { DateRangePickerProps as AriaDateRangePickerProps, ValidationResult } from "react-aria-components"
import {
	Button as AriaButton,
	DateRangePicker as AriaDateRangePicker,
	Dialog as AriaDialog,
	DateInput,
	DateSegment,
	type DateValue,
} from "react-aria-components"

import { ChevronDownIcon } from "lucide-react"

import { datePickerVariants } from "@pixelshades/styles/components/date-picker"
import type { ReactNode } from "react"
import { If } from "../../utils"
import { Button } from "../button"
import { FormDescription, FormFieldError, FormFieldGroup } from "../form"
import { type FormComponentLabelProps, Label } from "../label"
import { Popover } from "../popover"
import { RangeCalendar } from "../range-calendar"

const { base, dateInput } = datePickerVariants()

interface DateRangePickerProps<T extends DateValue> extends AriaDateRangePickerProps<T>, FormComponentLabelProps {
	/** A helper text to display below the date picker. */
	helperText?: ReactNode
	/** The error message to display when the date picker is invalid. */
	errorMessage?: string | ((validation: ValidationResult) => string)
}

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
		<Label description={description} tooltip={tooltip} isRequired={isRequired}>
			{label}
		</Label>
		<FormFieldGroup className={"relative flex items-center"}>
			<DateInput className={dateInput()} slot="start">
				{(segment) => <DateSegment className={base()} segment={segment} />}
			</DateInput>
			<span aria-hidden="true">–</span>
			<DateInput className={dateInput()} slot="end">
				{(segment) => <DateSegment className={base()} segment={segment} />}
			</DateInput>
			<Button size="xs-icon" variant="ghost">
				<ChevronDownIcon aria-hidden className="size-4" />
			</Button>
		</FormFieldGroup>
		<If condition={helperText}>
			<FormDescription>{helperText}</FormDescription>
		</If>
		<FormFieldError>{errorMessage}</FormFieldError>
		<Popover className="w-fit border-none p-0">
			<AriaDialog>
				<RangeCalendar />
			</AriaDialog>
		</Popover>
	</AriaDateRangePicker>
)

export { type DateRangePickerProps, DateRangePicker }
