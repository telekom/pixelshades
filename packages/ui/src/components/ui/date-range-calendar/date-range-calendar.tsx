"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { ChevronLeft, ChevronRight } from "lucide-react"

import {
	Button as AriaButton,
	Heading as AriaHeading,
	RangeCalendar as AriaRangeCalendar,
	type RangeCalendarProps as AriaRangeCalendarProps,
	CalendarCell,
	CalendarGrid,
	CalendarGridBody,
	CalendarGridHeader,
	CalendarHeaderCell,
	type DateValue,
	Text,
} from "react-aria-components"

import { dateRangeCalendarVariants } from "@pixelshades/styles/components/date-range-calendar"

const { root, header, heading, gridHeaderCell, cell, grid, iconButton } = dateRangeCalendarVariants()

export interface RangeCalendarProps<T extends DateValue> extends Omit<AriaRangeCalendarProps<T>, "className"> {
	error?: string
	className?: string
}

const DateRangeCalendar = ({ className, visibleDuration, error, ...props }: RangeCalendarProps<DateValue>) => (
	<AriaRangeCalendar className={root({ className })} visibleDuration={visibleDuration} {...props}>
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
								className={cell({
									className:
										"data-[selected]:rounded-none [&[data-selection-end]]:rounded-r-md [&[data-selection-start]]:rounded-l-md",
								})}
								date={date}
							/>
						)}
					</CalendarGridBody>
				</CalendarGrid>
			))}
		</div>

		{error && <Text slot="errorMessage">{error}</Text>}
	</AriaRangeCalendar>
)

DateRangeCalendar.displayName = "DateRangeCalendar"

export { DateRangeCalendar }
