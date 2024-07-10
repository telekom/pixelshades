import { Button, Tooltip } from "@pixelshades/ui/components"
import { IconDeviceFloppy } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Tooltip.Root>
			<Button variant="solid">
				<IconDeviceFloppy />
			</Button>
			<Tooltip.Content>Save</Tooltip.Content>
		</Tooltip.Root>
	)
}
