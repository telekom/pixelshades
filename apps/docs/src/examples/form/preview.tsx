import { Button, Form, TextField, TimeField } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Form>
			<TextField
				label="Email"
				name="email"
				tooltip="Email address"
				description="Your best email"
				isRequired
				type="email"
			/>

			<TimeField label="Start Date" isRequired />

			<Button type="submit">Submit</Button>
		</Form>
	)
}
