import { Breadcrumbs } from "@pixelshades/ui/components"
import { MoveRightIcon } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Breadcrumbs separator={<MoveRightIcon className="size-4 text-subtle" />}>
			<Breadcrumbs.Item>Products</Breadcrumbs.Item>
			<Breadcrumbs.Item>Product</Breadcrumbs.Item>
			<Breadcrumbs.Item last>Product A</Breadcrumbs.Item>
		</Breadcrumbs>
	)
}
