import { Separator } from "@pixelshades/ui/components";

export default function Example() {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col">
				Content above
				<Separator />
				Content below
			</div>
			<div className="mt-5 flex h-10 items-center">
				Content left
				<Separator orientation="vertical" />
				Content right
			</div>
		</div>
	);
}
