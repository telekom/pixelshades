import { Breadcrumb, Breadcrumbs } from "@dv/ui/components"

export default function Example() {
	return (
		<Breadcrumbs>
			<Breadcrumb>Products</Breadcrumb>
			<Breadcrumb>Product</Breadcrumb>
			<Breadcrumb last>Product A</Breadcrumb>
		</Breadcrumbs>
	)
}
