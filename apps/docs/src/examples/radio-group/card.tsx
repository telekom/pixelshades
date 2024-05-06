import { Label, Radio } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Radio.Group defaultValue="dog" orientation="horizontal" label="Favorite pet" description="Description">
			<Radio.Card value="dog">Dog</Radio.Card>
			<Radio.Card value="cat">Cat</Radio.Card>
			<Radio.Card value="dragon">Dragon</Radio.Card>
		</Radio.Group>
	)
}
