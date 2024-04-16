import { ProgressBar } from "@dv/ui/components"

export default function Example() {
	return (
		<div className="gap-lg flex flex-col w-full">
			<ProgressBar label="Sending…" formatOptions={{ style: "currency", currency: "JPY" }} value={60} />
			<ProgressBar label="Feeding…" valueLabel="30 of 100 dogs" value={30} />
		</div>
	)
}
