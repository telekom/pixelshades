import { Badge } from "@pixelshades/ui/components"
import { IconMoodSmile } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Badge variant="default" before={<IconMoodSmile />}>
			Badge Label
		</Badge>
	)
}
