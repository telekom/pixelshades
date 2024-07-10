import { Button } from "@pixelshades/ui/components"
import { IconAlarm } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<div className="flex flex-row flex-wrap gap-md">
			<Button variant="icon" size="icon" color="default">
				<IconAlarm />
			</Button>
			<Button variant="icon" size="icon" color="primary">
				<IconAlarm />
			</Button>
			<Button variant="icon" size="icon" color="destructive">
				<IconAlarm />
			</Button>
			<Button variant="icon" size="icon" color="warning">
				<IconAlarm />
			</Button>
		</div>
	)
}
