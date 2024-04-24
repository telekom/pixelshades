import { Link } from "@pixelshades/ui/components";

export default function Example() {
	return (
		<div className="flex gap-md">
			<Link variant="active">Active</Link>
			<Link>Normal Link</Link>
		</div>
	);
}
