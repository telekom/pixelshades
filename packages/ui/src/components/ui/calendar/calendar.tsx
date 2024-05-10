"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { ChevronLeft, ChevronRight } from "lucide-react"

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

const { root, header, heading, gridHeaderCell, cell, grid, iconButton } = calendarVariants()

export interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, "className"> {
	/** The error message to display if the calendar is invalid. */
	error?: string
	/** The styles of the calendar. */
	className?: string
}

const Calendar = ({ className, visibleDuration, error, ...props }: CalendarProps<DateValue>) => (
	<AriaCalendar className={root({ className })} visibleDuration={visibleDuration} {...props}>
		<header className={header()}>
			<AriaButton className={iconButton()} slot="previous">
				<ChevronLeft className="h-6 w-6" />
			</AriaButton>
			<AriaHeading className={heading()} />
			<AriaButton className={iconButton()} slot="next">
				<ChevronRight className="size-6" />
			</AriaButton>
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

		{error && <Text slot="errorMessage">{error}</Text>}
	</AriaCalendar>
)

Calendar.displayName = "Calendar"

export { Calendar }
