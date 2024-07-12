import { RadioGroup } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<RadioGroup label="Favorite pet" defaultValue="dog">
			<RadioGroup.Item value="dog">Dog</RadioGroup.Item>
			<RadioGroup.Item value="cat">Cat</RadioGroup.Item>
			<RadioGroup.Item value="dragon">Dragon</RadioGroup.Item>
		</RadioGroup>
	)
}
