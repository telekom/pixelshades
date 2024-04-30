import { DateRangePicker } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<DateRangePicker label="Day" granularity="day" />
			<DateRangePicker label="Hour" granularity="hour" />
			<DateRangePicker label="Minute" granularity="minute" />
			<DateRangePicker label="Second" granularity="second" />
		</div>
	)
}
