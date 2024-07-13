import { TextField } from "@pixelshades/ui/components"
import { useState } from "react"

export default function Example() {
	const [value, setValue] = useState("")

	return <TextField value={value} onChange={setValue} placeholder="Controlled" />
}
