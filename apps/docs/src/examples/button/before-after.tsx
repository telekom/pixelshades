import { Button } from "@pixelshades/ui/components"
import { IconSailboat } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<div className="flex flex-wrap gap-lg">
			<Button before={<IconSailboat />}>Before</Button>

			<Button after={<IconSailboat />}>After</Button>
		</div>
	)
}
