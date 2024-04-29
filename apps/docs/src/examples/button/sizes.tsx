import { Button } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex flex-col gap-2">
			<Button size="xs">XS</Button>
			<Button size="sm">SM</Button>
			<Button size="md">MD (Default)</Button>
			<Button size="lg">LG</Button>
		</div>
	)
}
