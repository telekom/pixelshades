"use client"

import { isWeekend } from "@internationalized/date"
import { Calendar } from "@pixelshades/ui/components"
import { useLocale } from "@pixelshades/ui/hooks"

export default function Example() {
	const { locale } = useLocale()

	return <Calendar isDateUnavailable={(date) => isWeekend(date, locale)} />
}
