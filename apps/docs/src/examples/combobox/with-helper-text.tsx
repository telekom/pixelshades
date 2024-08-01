import { ComboBox } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<ComboBox label="Project" helperText="You can display anything here">
			<ComboBox.Item>Health Dashboard</ComboBox.Item>
			<ComboBox.Item>To-Do App</ComboBox.Item>
			<ComboBox.Item>UI Kit</ComboBox.Item>
			<ComboBox.Item>Portfolio Site</ComboBox.Item>
		</ComboBox>
	)
}
