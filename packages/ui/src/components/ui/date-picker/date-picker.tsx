import type { DatePickerProps as AriaDatePickerProps } from "react-aria-components"
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

import { datePickerVariants } from "@dv/styles/components/date-picker"
import { If } from "../../utils"
import { Calendar } from "../calendar"
import { Label } from "../label"
import { Popover } from "../popover"

const { group, input, inputButton, dateSegment } = datePickerVariants()

interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
	label?: string
	description?: string
	error?: string
}

const DatePicker = <T extends DateValue>({
	className,
	label,
	description,
	error,
	children,
	...props
}: DatePickerProps<T>) => (
	<AriaDatePicker className={className} {...props}>
		<Label>{label}</Label>
		<AriaGroup className={group()}>
			<DateInput className={input()}>
				{(segment) => <DateSegment className={dateSegment()} segment={segment} />}
			</DateInput>
			<AriaButton className={inputButton()}>
				<ChevronDownIcon />
			</AriaButton>
		</AriaGroup>
		<If condition={description}>
			<AriaText slot="description">{description}</AriaText>
		</If>
		<If condition={error}>
			<AriaText slot="error">{error}</AriaText>
		</If>
		<Popover className="w-fit border-none p-0">
			<AriaDialog>
				<Calendar />
			</AriaDialog>
		</Popover>
	</AriaDatePicker>
)

export { type DatePickerProps, DatePicker }
