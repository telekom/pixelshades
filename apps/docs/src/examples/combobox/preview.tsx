import { ComboBox, ComboBoxItem } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<ComboBox label="Project">
			<ComboBoxItem>Health Dashboard</ComboBoxItem>
			<ComboBoxItem>To-Do App</ComboBoxItem>
			<ComboBoxItem>UI Kit</ComboBoxItem>
			<ComboBoxItem>Portfolio Site</ComboBoxItem>
		</ComboBox>
	)
}
