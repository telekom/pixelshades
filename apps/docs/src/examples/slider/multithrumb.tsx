import { Slider } from "@pixelshades/ui/components"

export default function Example() {
	return <Slider label="Range" helperText="helper text" thumbLabels={["start", "end"]} defaultValue={[30, 60]} />
}
