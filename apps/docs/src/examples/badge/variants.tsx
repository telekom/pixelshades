import { Badge } from "@dv/ui/components"
import { ArrowRightIcon, SmileIcon } from "@dv/ui/icons"

export default function Example() {
	return (
		<div className="flex flex-wrap gap-lg">
			<Badge variant="default" before={<SmileIcon />} after={<ArrowRightIcon />}>
				Badge Label
			</Badge>
			<Badge variant="alert" before={<SmileIcon />} after={<ArrowRightIcon />}>
				Badge Label
			</Badge>
			<Badge variant="info" before={<SmileIcon />} after={<ArrowRightIcon />}>
				Badge Label
			</Badge>
			<Badge variant="outline" before={<SmileIcon />} after={<ArrowRightIcon />}>
				Badge Label
			</Badge>
		</div>
	)
}
