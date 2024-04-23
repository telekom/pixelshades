import { getLocalTimeZone, today } from "@internationalized/date"
import { DateRangeCalendar } from "@pixelshades/ui/components"

export default function Example() {
	const now = today(getLocalTimeZone())

	return <DateRangeCalendar minValue={now} maxValue={now.add({ days: 15 })} />
}
