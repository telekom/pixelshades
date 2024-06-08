import { Badge } from "@pixelshades/ui/components"
import { IconArrowRight, IconMoodSmile } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Badge variant="outline" before={<IconMoodSmile />} after={<IconArrowRight />}>
			Badge Label
		</Badge>
	)
}
