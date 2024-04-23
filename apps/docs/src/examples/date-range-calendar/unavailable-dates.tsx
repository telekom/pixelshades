"use client"

import { isWeekend } from "@internationalized/date"
import { DateRangeCalendar } from "@pixelshades/ui/components"
import { useLocale } from "@pixelshades/ui/hooks"

export default function Example() {
	const { locale } = useLocale()

	return <DateRangeCalendar isDateUnavailable={(date) => isWeekend(date, locale)} />
}
