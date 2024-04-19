import { Breadcrumb, Breadcrumbs } from "@pixelshades/ui/components"
import { MoveRightIcon } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Breadcrumbs separator={<MoveRightIcon className="size-4 text-accent" />}>
			<Breadcrumb>Products</Breadcrumb>
			<Breadcrumb>Product</Breadcrumb>
			<Breadcrumb last>Product A</Breadcrumb>
		</Breadcrumbs>
	)
}
