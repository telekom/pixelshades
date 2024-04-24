import { DateField } from "@pixelshades/ui/components";

export default function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<DateField label="Day" granularity="day" />
			<DateField label="Hour" granularity="hour" />
			<DateField label="Minute" granularity="minute" />
			<DateField label="Second" granularity="second" />
		</div>
	);
}
