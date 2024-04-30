import { Slider } from "@pixelshades/ui/components"
import { useState } from "react"

export default function Example() {
	const [value, setValue] = useState(25)

	return (
		<Slider
			label="Slide to change the value"
			description={<small>This is a description!</small>}
			defaultValue={30}
			onChangeEnd={(value) => setValue(value as number)}
		/>
	)
}
