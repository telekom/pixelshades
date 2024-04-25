import { Badge } from "@pixelshades/ui/components"
import { ArrowRightIcon, SmileIcon } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Badge before={<SmileIcon />} after={<ArrowRightIcon />}>
			Badge Label
		</Badge>
	)
}
