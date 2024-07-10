import { TimeField } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<TimeField label="Hour" granularity="hour" />
			<TimeField label="Minute" granularity="minute" />
			<TimeField label="Second" granularity="second" />
		</div>
	)
}
