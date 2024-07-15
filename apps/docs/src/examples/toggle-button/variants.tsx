import { ToggleButton } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex flex-wrap gap-lg">
			<ToggleButton>Toggle</ToggleButton>
			<ToggleButton variant="subtle">Toggle</ToggleButton>
			<ToggleButton variant="ghost">Toggle</ToggleButton>
		</div>
	)
}
