import { Button } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex flex-col gap-lg">
			<div className="flex flex-row flex-wrap gap-md">
				<Button color="primary">Primary</Button>
				<Button color="destructive">Destructive</Button>
				<Button color="warning">Warning</Button>
			</div>
			<div className="flex flex-row flex-wrap gap-md">
				<Button color="primary" variant="outline">
					Primary
				</Button>
				<Button color="destructive" variant="outline">
					Destructive
				</Button>
				<Button color="warning" variant="outline">
					Warning
				</Button>
			</div>
			<div className="flex flex-row flex-wrap gap-md">
				<Button color="primary" variant="ghost">
					Primary
				</Button>
				<Button color="destructive" variant="ghost">
					Destructive
				</Button>
				<Button color="warning" variant="ghost">
					Warning
				</Button>
			</div>
		</div>
	)
}
