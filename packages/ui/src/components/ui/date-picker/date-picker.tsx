"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { DatePickerProps as AriaDatePickerProps, ValidationResult } from "react-aria-components"
import {
	Button as AriaButton,
	DatePicker as AriaDatePicker,
	Dialog as AriaDialog,
	Group as AriaGroup,
	Text as AriaText,
	DateInput,
	DateSegment,
	type DateValue,
} from "react-aria-components"

import { ChevronDownIcon } from "lucide-react"

import { datePickerVariants } from "@pixelshades/styles/components/date-picker"
import { inputVariants } from "@pixelshades/styles/components/input"
import { If } from "../../utils"
import { Calendar } from "../calendar"
import { FormDescription, FormFieldError } from "../form"
import { type FormComponentLabelProps, Label } from "../label"
import { Popover } from "../popover"

const { group, inputButton, input, base } = datePickerVariants()

interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T>, FormComponentLabelProps {
	helperText?: string
	errorMessage?: string | ((validation: ValidationResult) => string)
}

const DatePicker = <T extends DateValue>({
	className,
	label,
	description,
	tooltip,
	helperText,
	errorMessage,
	children,
	...props
}: DatePickerProps<T>) => (
	<AriaDatePicker className={className} {...props}>
		<Label description={description} tooltip={tooltip}>
			{label}
		</Label>
		<AriaGroup className={group()}>
			<DateInput className={inputVariants({ className: input() })}>
				{(segment) => <DateSegment className={base()} segment={segment} />}
			</DateInput>
			<AriaButton className={inputButton()}>
				<ChevronDownIcon />
			</AriaButton>
		</AriaGroup>
		<If condition={helperText}>
			<FormDescription>{helperText}</FormDescription>
		</If>
		<FormFieldError>{errorMessage}</FormFieldError>
		<Popover className="w-fit border-none p-0">
			<AriaDialog>
				<Calendar />
			</AriaDialog>
		</Popover>
	</AriaDatePicker>
)

export { type DatePickerProps, DatePicker }
