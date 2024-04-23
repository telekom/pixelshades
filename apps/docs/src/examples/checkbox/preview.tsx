import { Button, Checkbox, Form } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Form>
			<Checkbox
				isRequired
				value="push"
				label="Label"
				description="Description"
				helperText="Helper Text"
				tooltip="Tooltip"
			/>
			<Button type="submit">Submit</Button>
		</Form>
	)
}
