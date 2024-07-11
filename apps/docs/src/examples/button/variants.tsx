import { Button } from "@pixelshades/ui/components"
import { IconShip } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<div className="flex flex-row flex-wrap gap-md">
			<Button>Default</Button>
			<Button variant="link">Link Button</Button>
			<Button variant="solid">Solid Button</Button>
			<Button variant="outline">Outlined Button</Button>
			<Button variant="ghost">Ghost Button</Button>
			<Button variant="icon" size="icon">
				<IconShip />
			</Button>
		</div>
	)
}
