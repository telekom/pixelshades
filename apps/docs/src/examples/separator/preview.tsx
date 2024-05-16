import { Separator } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col">
				Content above
				<Separator />
				Content below
			</div>
		</div>
	)
}
