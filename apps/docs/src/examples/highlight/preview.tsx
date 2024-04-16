import { Highlight, Typography } from "@dv/ui/components"

export default function Example() {
	return (
		<Typography>
			<Highlight highlight={["ell", "rld"]}>Hello World</Highlight>
		</Typography>
	)
}
