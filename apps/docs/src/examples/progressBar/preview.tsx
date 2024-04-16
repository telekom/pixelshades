import { ProgressBar } from "@dv/ui/components"

export default function Example() {
	return <ProgressBar label="Loading…" description={<small>This is a description!</small>} value={25} />
}
