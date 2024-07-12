import { Button } from "@pixelshades/ui/components"
import { IconSailboat } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Button href="/docs" before={<IconSailboat />}>
			Button
		</Button>
	)
}
