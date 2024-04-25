import { DatePicker } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<DatePicker label="Day" granularity="day" />
			<DatePicker label="Hour" granularity="hour" />
			<DatePicker label="Minute" granularity="minute" />
			<DatePicker label="Second" granularity="second" />
		</div>
	)
}
