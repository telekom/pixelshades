import { Slider } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="h-80">
			<Slider
				label="Slide up and down"
				orientation="vertical"
				description={<small>This is a description!</small>}
				value={30}
			/>
		</div>
	)
}
