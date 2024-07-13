import { TextField } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<TextField isLoading placeholder="Default" />
			<TextField isLoading loaderPosition="before" placeholder="Before" />
			<TextField isLoading loaderPosition="after" placeholder="After" />
		</div>
	)
}
