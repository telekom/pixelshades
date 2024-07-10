import { ComboBox } from "@pixelshades/ui/components"
import { useState } from "react"

export default function Example() {
	const [value, setValue] = useState("health")

	return (
		<ComboBox label="Project" inputValue={value} onInputChange={setValue}>
			<ComboBox.Item id="health">Health Dashboard</ComboBox.Item>
			<ComboBox.Item id="todo">To-Do App</ComboBox.Item>
			<ComboBox.Item id="ui">UI Kit</ComboBox.Item>
			<ComboBox.Item id="portfolio">Portfolio Site</ComboBox.Item>
		</ComboBox>
	)
}
