import { NumberField } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<NumberField
			label="Transaction amount"
			name="amount"
			defaultValue={45}
			formatOptions={{
				style: "currency",
				currency: "EUR",
			}}
		/>
	)
}
