import { LoadingSpinner } from "@dv/ui/components"

export default function Example() {
	return (
		<div className="flex justify-center gap-lg">
			<LoadingSpinner size="xs" />
			<LoadingSpinner size="sm" />
			<LoadingSpinner size="md" />
			<LoadingSpinner size="lg" />
			<LoadingSpinner size="xl" />
		</div>
	)
}
