"use client"

import { Calendar } from "@dv/ui/components"
import { useLocale } from "@dv/ui/hooks"
import { isWeekend } from "@internationalized/date"

export default function Example() {
	const { locale } = useLocale()

	return <Calendar isDateUnavailable={(date) => isWeekend(date, locale)} />
}
