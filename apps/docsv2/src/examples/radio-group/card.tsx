import { RadioGroup } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<RadioGroup defaultValue="dog" orientation="horizontal" label="Favorite pet" description="Description">
			<RadioGroup.Card value="dog">Dog</RadioGroup.Card>
			<RadioGroup.Card value="cat">Cat</RadioGroup.Card>
			<RadioGroup.Card value="dragon">Dragon</RadioGroup.Card>
		</RadioGroup>
	)
}
