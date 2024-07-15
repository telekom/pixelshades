import { Badge } from "@pixelshades/ui/components"
import { IconArrowRight } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-md">
			<Badge before={<IconArrowRight />}>Before Badge</Badge>

			<Badge after={<IconArrowRight />}>After Badge</Badge>
		</div>
	)
}
