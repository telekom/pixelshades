"use client"

import { isWeekend } from "@internationalized/date"
import { RangeCalendar } from "@pixelshades/ui/components"
import { useLocale } from "@pixelshades/ui/hooks"

export default function Example() {
	const { locale } = useLocale()

	return <RangeCalendar isDateUnavailable={(date) => isWeekend(date, locale)} />
}
