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

import { ChevronDownIcon } from "lucide-react"

import { datePickerVariants } from "@pixelshades/styles/components/date-picker"
import { inputVariants } from "@pixelshades/styles/components/input"
import type { ReactNode } from "react"
import { If } from "../../utils"
import { Calendar } from "../calendar"
import { FormDescription, FormFieldError, FormFieldGroup } from "../form"
import { type FormComponentLabelProps, Label } from "../label"
import { Popover } from "../popover"

const { inputButton, base } = datePickerVariants()

interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T>, FormComponentLabelProps {
	helperText?: ReactNode
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
	isRequired,
	...props
}: DatePickerProps<T>) => (
	<AriaDatePicker className="flex flex-col gap-md" isRequired={isRequired} {...props}>
		<Label description={description} tooltip={tooltip} isRequired={isRequired}>
			{label}
		</Label>
		<FormFieldGroup className={"relative flex items-center"}>
			<DateInput className={inputVariants({ className: "border-none" })}>
				{(segment) => <DateSegment className={base()} segment={segment} />}
			</DateInput>
			<AriaButton className={inputButton()}>
				<ChevronDownIcon />
			</AriaButton>
		</FormFieldGroup>
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
