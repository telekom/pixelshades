import { Label, Radio, RadioGroup } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<RadioGroup defaultValue="dog">
			<Label>Favorite pet</Label>
			<Radio value="dog">Dog</Radio>
			<Radio value="cat">Cat</Radio>
			<Radio value="dragon">Dragon</Radio>
		</RadioGroup>
	)
}
