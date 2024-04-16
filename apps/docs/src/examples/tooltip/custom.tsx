import { Button, TooltipContent, TooltipRoot } from "@dv/ui/components"
import { SaveIcon } from "@dv/ui/icons"

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
