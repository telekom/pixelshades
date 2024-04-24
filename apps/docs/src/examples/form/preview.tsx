import { Button, Checkbox, Form, TextField } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Form>
			<TextField label="Surename" isRequired />
			<TextField label="Name" isRequired />

			<Button type="submit">Submit</Button>
		</Form>
	)
}
