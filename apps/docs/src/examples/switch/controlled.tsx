import { Switch } from "@pixelshades/ui/components"
import { useState } from "react"

export default function Example() {
	const [value, setValue] = useState(false)

	return (
		<div className="flex flex-col gap-xl">
			<div>value: {value ? "true" : "false"}</div>
			<Switch label="Label" defaultSelected={value} onChange={(value) => setValue(value as boolean)} />
		</div>
	)
}
