import { LoadingSpinner } from "@dv/ui/components"
import { Loader, LoaderIcon } from "@dv/ui/icons"

export default function Example() {
	return (
		<div className="flex justify-center gap-lg">
			<LoadingSpinner />
			<LoadingSpinner icon={<Loader />} />
		</div>
	)
}
