import { Label, Radio } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Radio.Group
			defaultValue="dog"
			orientation="horizontal"
			label="Favorite pet"
			description="Description"
			helperText="WOW"
		>
			<Radio value="dog">Dog</Radio>
			<Radio value="cat">Cat</Radio>
			<Radio value="dragon">Dragon</Radio>
		</Radio.Group>
	)
}
