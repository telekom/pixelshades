import { Button, Tooltip } from "@pixelshades/ui/components"
import { useState } from "react"

type Placement = "top" | "right" | "bottom" | "left" | "start" | "end"

export default function Example() {
	const [placement, setPlacement] = useState<Placement>("top")

	return (
		<div className="flex flex-col items-center gap-8">
			<ul className="flex flex-row flex-wrap gap-3">
				<li>
					<Button onPress={() => setPlacement("top")}>Top</Button>
				</li>
				<li>
					<Button onPress={() => setPlacement("right")}>Right</Button>
				</li>
				<li>
					<Button onPress={() => setPlacement("bottom")}>Bottom</Button>
				</li>
				<li>
					<Button onPress={() => setPlacement("left")}>Left</Button>
				</li>
				<li>
					<Button onPress={() => setPlacement("start")}>Start</Button>
				</li>
				<li>
					<Button onPress={() => setPlacement("end")}>End</Button>
				</li>
			</ul>
			<Tooltip placement={placement}>Small Little Tooltip</Tooltip>
		</div>
	)
}
