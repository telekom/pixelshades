import { Breadcrumbs } from "@pixelshades/ui/components";

export default function Example() {
	return (
		<Breadcrumbs>
			<Breadcrumbs.Item>Products</Breadcrumbs.Item>
			<Breadcrumbs.Item>Product</Breadcrumbs.Item>
			<Breadcrumbs.Item last>Product A</Breadcrumbs.Item>
		</Breadcrumbs>
	);
}
