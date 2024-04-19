import { Button, TooltipContent, TooltipRoot } from "@pixelshades/ui/components"
import { SaveIcon } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<TooltipRoot>
			<Button variant="solid">
				<SaveIcon />
			</Button>
			<TooltipContent>Save</TooltipContent>
		</TooltipRoot>
	)
}
