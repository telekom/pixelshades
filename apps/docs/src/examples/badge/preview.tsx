import { Badge } from "@dv/ui/components"
import { ArrowRightIcon, SmileIcon } from "@dv/ui/icons"

export default function Example() {
	return (
		<Badge before={<SmileIcon />} after={<ArrowRightIcon />}>
			Badge Label
		</Badge>
	)
}
