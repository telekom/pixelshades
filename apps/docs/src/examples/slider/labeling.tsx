import { Slider } from "@pixelshades/ui/components"

export default function Example() {
	return <Slider label="Sending…" formatOptions={{ style: "currency", currency: "JPY" }} value={60} />
}
