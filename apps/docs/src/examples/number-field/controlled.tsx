"use client"

import { NumberField } from "@pixelshades/ui/components"
import { useState } from "react"

export default function Example() {
	const [value, setValue] = useState(0)
	return (
		<NumberField
			value={value}
			onChange={setValue}
			label="Number of Items"
			description="How many items do you want to add?"
			helperText="Helper Text"
		/>
	)
}
