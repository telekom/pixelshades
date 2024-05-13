import { Slider } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Slider
			label="Slide to change the value"
			description={<small>This is a description!</small>}
			helperText="helper text"
			defaultValue={30}
		/>
	)
}
