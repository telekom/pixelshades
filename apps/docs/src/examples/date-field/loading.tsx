import { DateField } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<DateField isLoading />
			<DateField isLoading loaderPosition="before" />
			<DateField isLoading loaderPosition="after" />
		</div>
	)
}
