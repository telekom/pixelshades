import { RadioGroup } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<RadioGroup
			defaultValue="dog"
			orientation="horizontal"
			label="Favorite pet"
			description="Description"
			helperText="WOW"
		>
			<RadioGroup.Item value="dog">Dog</RadioGroup.Item>
			<RadioGroup.Item value="cat">Cat</RadioGroup.Item>
			<RadioGroup.Item value="dragon">Dragon</RadioGroup.Item>
		</RadioGroup>
	)
}
