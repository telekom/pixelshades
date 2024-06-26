import { TextField } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<TextField
			label="Project"
			description="Deploy your new project in one-click."
			helperText="Helper Text"
			rows={5}
			multiLine
		/>
	)
}
