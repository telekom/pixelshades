import { getLocalTimeZone, today } from "@internationalized/date"
import { RangeCalendar } from "@pixelshades/ui/components"

export default function Example() {
	const now = today(getLocalTimeZone())

	return <RangeCalendar minValue={now} maxValue={now.add({ days: 15 })} />
}
