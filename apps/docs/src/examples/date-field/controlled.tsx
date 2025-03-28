"use client"

import { DateField, type DateValue } from "@pixelshades/ui/components"
import { useState } from "react"

export default function Example() {
	const [value, setValue] = useState<DateValue | null>(null)

	return <DateField value={value} onChange={setValue} />
}
