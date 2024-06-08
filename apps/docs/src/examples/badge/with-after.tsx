import { Badge } from "@pixelshades/ui/components"
import { IconArrowRight } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Badge variant="default" after={<IconArrowRight />}>
			Badge Label
		</Badge>
	)
}
