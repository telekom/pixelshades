import { Badge } from "@pixelshades/ui/components"
import { ArrowRightIcon } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Badge variant="default" after={<ArrowRightIcon />}>
			Badge Label
		</Badge>
	)
}
