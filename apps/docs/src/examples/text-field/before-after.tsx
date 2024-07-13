import { TextField } from "@pixelshades/ui/components"
import { IconAlertTriangle } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<TextField before={<span>https://</span>} />

			<TextField after={<span>@gmail.com</span>} />

			<TextField before={<IconAlertTriangle className="text-warning" />} />
		</div>
	)
}
