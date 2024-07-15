"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import {
	Button as AriaButton,
	Calendar as AriaCalendar,
	type CalendarProps as AriaCalendarProps,
	Heading as AriaHeading,
	CalendarCell,
	CalendarGrid,
	CalendarGridBody,
	CalendarGridHeader,
	CalendarHeaderCell,
	type DateValue,
	Text,
} from "react-aria-components"

import { calendarVariants } from "@pixelshades/styles/components/calendar"

import { isToday } from "@internationalized/date"

import { getLocalTimeZone } from "@internationalized/date"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { Button } from "../button"
import { FormFieldError } from "../form"

const { root, header, heading, gridHeaderCell, cell, grid } = calendarVariants()

export interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, "className"> {
	/** The error message to display if the calendar is invalid. */
	errorMessage?: string
	/** The styles of the calendar. */
	className?: string
}

const Calendar = ({ className, visibleDuration, errorMessage, ...props }: CalendarProps<DateValue>) => (
	<AriaCalendar className={root({ className })} visibleDuration={visibleDuration} {...props}>
		<header className={header()}>
			<Button variant="ghost" size="icon" slot="previous">
				<IconChevronLeft className="size-6" />
			</Button>
			<AriaHeading className={heading()} />
			<Button variant="ghost" size="icon" slot="next">
				<IconChevronRight className="size-6" />
			</Button>
		</header>
		<div className={grid()}>
			{new Array(visibleDuration?.months || 1).fill(0).map((_, index) => (
				<CalendarGrid offset={{ months: index }} key={index}>
					<CalendarGridHeader>
						{(day) => <CalendarHeaderCell className={gridHeaderCell()}>{day}</CalendarHeaderCell>}
					</CalendarGridHeader>
					<CalendarGridBody>
						{(date) => (
							<CalendarCell
								data-today={isToday(date, getLocalTimeZone()) ? true : undefined}
								className={cell()}
								date={date}
							/>
						)}
					</CalendarGridBody>
				</CalendarGrid>
			))}
		</div>

		{errorMessage && (
			<Text className="text-destructive text-xs" slot="errorMessage">
				{errorMessage}
			</Text>
		)}
	</AriaCalendar>
)

Calendar.displayName = "Calendar"

export type { DateValue }

export { Calendar }
