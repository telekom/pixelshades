"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

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

import { getLocalTimeZone, isToday } from "@internationalized/date"
import { dateRangeCalendarVariants } from "@pixelshades/styles/components/range-calendar"
import { IconChevronLeft, IconChevronRight } from "../../../icons"

const { root, header, heading, gridHeaderCell, cell, grid, iconButton } = dateRangeCalendarVariants()

export interface RangeCalendarProps<T extends DateValue> extends Omit<AriaRangeCalendarProps<T>, "className"> {
	/** The error message to display when the date picker is invalid. */
	error?: string
	/** The className to apply styles to the component. */
	className?: string
}

const RangeCalendar = ({ className, visibleDuration, error, ...props }: RangeCalendarProps<DateValue>) => (
	<AriaRangeCalendar className={root({ className })} visibleDuration={visibleDuration} {...props}>
		<header className={header()}>
			<AriaButton className={iconButton()} slot="previous">
				<IconChevronLeft className="h-6 w-6" />
			</AriaButton>
			<AriaHeading className={heading()} />
			<AriaButton className={iconButton()} slot="next">
				<IconChevronRight className="size-6" />
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

RangeCalendar.displayName = "RangeCalendar"

export { RangeCalendar }
