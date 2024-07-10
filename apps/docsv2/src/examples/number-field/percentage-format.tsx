import { NumberField } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<NumberField
			label="Sales tax"
			defaultValue={0.45}
			formatOptions={{
				style: "percent",
			}}
		/>
	)
}
