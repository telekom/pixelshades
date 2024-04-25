import { Button, Tooltip } from "@pixelshades/ui/components"
import { SaveIcon } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Tooltip.Root>
			<Button variant="solid">
				<SaveIcon />
			</Button>
			<Tooltip.Content>Save</Tooltip.Content>
		</Tooltip.Root>
	)
}
