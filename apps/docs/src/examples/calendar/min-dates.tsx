import { getLocalTimeZone, today } from "@internationalized/date"
import { Calendar } from "@pixelshades/ui/components"

export default function Example() {
	const now = today(getLocalTimeZone())

	return <Calendar minValue={now} maxValue={now.add({ days: 15 })} />
}
