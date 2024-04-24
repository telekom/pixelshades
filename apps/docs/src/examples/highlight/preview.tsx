import { Highlight, Typography } from "@pixelshades/ui/components";

export default function Example() {
	return (
		<Typography>
			<Highlight highlight={["ell", "rld"]}>Hello World</Highlight>
		</Typography>
	);
}
