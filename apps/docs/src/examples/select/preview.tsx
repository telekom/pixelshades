import { Select } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Select label="Framework" description="Description" helperText="Helper Text" tooltip="Tooltip">
			<Select.Item>React</Select.Item>
			<Select.Item>Qwik</Select.Item>
			<Select.Item>Vue</Select.Item>
			<Select.Item>Svelte</Select.Item>
			<Select.Section>
				<Select.Label>Others</Select.Label>
				<Select.Item>Angular</Select.Item>
				<Select.Item>JQuery</Select.Item>
			</Select.Section>
		</Select>
	)
}
