import { ComboBox } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<ComboBox label="Project" tooltip="You can display anything here" defaultSelectedKey="health">
			<ComboBox.Item id="health">Health Dashboard</ComboBox.Item>
			<ComboBox.Item id="todo">To-Do App</ComboBox.Item>
			<ComboBox.Item id="ui">UI Kit</ComboBox.Item>
			<ComboBox.Item id="portfolio">Portfolio Site</ComboBox.Item>
		</ComboBox>
	)
}
