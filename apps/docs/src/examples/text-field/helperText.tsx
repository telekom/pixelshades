import { TextField } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex flex-col gap-xl">
			<TextField label="Project" helperText="Helper Text" />
			<TextField label="Project" errorMessage="Error message" isInvalid />
		</div>
	)
}
