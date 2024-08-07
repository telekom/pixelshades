import { Breadcrumbs } from "@pixelshades/ui/components"
import { IconArrowMoveRight } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<Breadcrumbs separator={<IconArrowMoveRight className="size-4 text-subtle" />}>
			<Breadcrumbs.Item>Products</Breadcrumbs.Item>
			<Breadcrumbs.Item>Product</Breadcrumbs.Item>
			<Breadcrumbs.Item>Product A</Breadcrumbs.Item>
		</Breadcrumbs>
	)
}
