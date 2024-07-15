import { DateField } from "@pixelshades/ui/components"
import { IconClock } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<DateField before={<IconClock />} />
			<DateField after={<IconClock />} />
		</div>
	)
}
