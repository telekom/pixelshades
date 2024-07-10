import { ProgressBar } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex w-full flex-col gap-lg">
			<ProgressBar label="Sending…" formatOptions={{ style: "currency", currency: "JPY" }} value={60} />
			<ProgressBar label="Feeding…" valueLabel="30 of 100 dogs" value={30} />
		</div>
	)
}
