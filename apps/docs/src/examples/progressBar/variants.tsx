import { ProgressBar } from "@dv/ui/components"

export default function Example() {
	return (
		<div className="flex w-full flex-col gap-lg">
			<ProgressBar variant="default" label="Default" value={25} />
			<ProgressBar variant="info" label="Info" value={45} />
			<ProgressBar variant="alert" label="Alert" value={75} />
			<ProgressBar variant="outline" label="Outline" value={95} />
		</div>
	)
}
