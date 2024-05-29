import { Button } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex flex-row flex-wrap gap-md">
			<Button color="primary">Primary</Button>
			<Button color="destructive">Destructive</Button>
			<Button color="warning">Warning</Button>
		</div>
	)
}
