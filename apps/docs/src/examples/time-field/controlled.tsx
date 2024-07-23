"use client"

import { TimeField, type TimeValue } from "@pixelshades/ui/components"
import { useState } from "react"

import { Time } from "@internationalized/date"

export default function Example() {
	const [value, setValue] = useState<TimeValue>(new Time(11, 45))

	return <TimeField label="Start Date" value={value} onChange={setValue} />
}
