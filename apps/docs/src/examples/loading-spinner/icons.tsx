import { LoadingSpinner } from "@pixelshades/ui/components"
import { IconLoader } from "@pixelshades/ui/icons"

export default function Example() {
	return (
		<div className="flex justify-center gap-lg">
			<LoadingSpinner />
			<LoadingSpinner icon={<IconLoader />} />
		</div>
	)
}
