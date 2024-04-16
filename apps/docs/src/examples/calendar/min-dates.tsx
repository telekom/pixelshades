import { Calendar } from "@dv/ui/components"
import { getLocalTimeZone, today } from "@internationalized/date"

export default function Example() {
	const now = today(getLocalTimeZone())

	return <Calendar minValue={now} maxValue={now.add({ days: 15 })} />
}
