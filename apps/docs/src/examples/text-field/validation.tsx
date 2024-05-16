import { Button, TextField } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<form className="flex flex-col gap-xl">
			<TextField label="Project" isRequired />
			<div className="grid auto-cols-fr grid-flow-col gap-lg">
				<Button type="submit">Submit</Button>
				<Button type="reset" variant="subtle">
					Reset
				</Button>
			</div>
		</form>
	)
}
