import { Button } from "@pixelshades/ui/components"
import { AlarmClock } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<div className="flex flex-row flex-wrap gap-md">
			<Button variant="icon" size="icon" color="default">
				<AlarmClock />
			</Button>
			<Button variant="icon" size="icon" color="primary">
				<AlarmClock />
			</Button>
			<Button variant="icon" size="icon" color="destructive">
				<AlarmClock />
			</Button>
			<Button variant="icon" size="icon" color="warning">
				<AlarmClock />
			</Button>
		</div>
	)
}
