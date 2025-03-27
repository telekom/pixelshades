"use client"

import { DatePicker, type DateValue } from "@pixelshades/ui/components"
import { useState } from "react"

export default function Example() {
	const [value, setValue] = useState<DateValue | null>(null)

	return <DatePicker value={value} onChange={setValue} />
}
