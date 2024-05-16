import { Time } from "@internationalized/date"
import { TimeField } from "@pixelshades/ui/components"

export default function Example() {
	return <TimeField label="Start Time" defaultValue={new Time(9)} isReadOnly />
}
