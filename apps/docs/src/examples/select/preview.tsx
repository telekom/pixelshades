import { Select, SelectItem } from "@dv/ui/components"

export default function Example() {
	return (
		<Select label="Framework">
			<SelectItem>React</SelectItem>
			<SelectItem>Qwik</SelectItem>
			<SelectItem>Vue</SelectItem>
			<SelectItem>Svelte</SelectItem>
		</Select>
	)
}
