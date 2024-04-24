import { Label, Radio } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Radio.Group defaultValue="dog">
			<Label>Favorite pet</Label>
			<Radio value="dog">Dog</Radio>
			<Radio value="cat">Cat</Radio>
			<Radio value="dragon">Dragon</Radio>
		</Radio.Group>
	)
}
