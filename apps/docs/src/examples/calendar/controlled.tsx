import { Calendar, type DateValue } from "@pixelshades/ui/components"
import { useState } from "react"

export default function Example() {
	const [value, setValue] = useState<DateValue>()
	return <Calendar value={value} onChange={setValue} />
}
