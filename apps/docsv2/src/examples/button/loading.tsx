import { Button } from "@pixelshades/ui/components"
import { IconSailboat } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Button before={<IconSailboat />} isLoading>
			Button
		</Button>
	)
}
