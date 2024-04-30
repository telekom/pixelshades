import { Badge } from "@pixelshades/ui/components"
import { Smile } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Badge variant="default" before={<Smile />}>
			Badge Label
		</Badge>
	)
}
