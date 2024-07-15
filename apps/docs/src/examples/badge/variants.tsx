import { Badge } from "@pixelshades/ui/components"
import { IconArrowRight, IconMoodSmile } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<div className="flex flex-col gap-md">
			<div className="flex flex-row flex-wrap justify-center gap-md">
				<Badge variant="outline" color="default" before={<IconMoodSmile />} after={<IconArrowRight />}>
					Default
				</Badge>
				<Badge variant="outline" color="primary" before={<IconMoodSmile />} after={<IconArrowRight />}>
					Primary
				</Badge>
				<Badge variant="outline" color="info" before={<IconMoodSmile />} after={<IconArrowRight />}>
					Info
				</Badge>
				<Badge variant="outline" color="success" before={<IconMoodSmile />} after={<IconArrowRight />}>
					Success
				</Badge>
				<Badge variant="outline" color="warning" before={<IconMoodSmile />} after={<IconArrowRight />}>
					Warning
				</Badge>
				<Badge variant="outline" color="destructive" before={<IconMoodSmile />} after={<IconArrowRight />}>
					Destructive
				</Badge>
			</div>
		</div>
	)
}
