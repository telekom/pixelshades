import { LoadingSpinner } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex justify-center gap-lg">
			<LoadingSpinner variant="default" />
			<LoadingSpinner variant="info" />
			<LoadingSpinner variant="alert" />
		</div>
	)
}
