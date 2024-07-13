import { Highlight, TextField, Typography } from "@pixelshades/ui/components"
import { useState } from "react"

export default function Example() {
	const [inputValue, setInputValue] = useState("")

	const highlightedChars = inputValue.split("")
	const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

	return (
		<div className="flex flex-col gap-lg">
			<div>
				<TextField label="Search" value={inputValue} onChange={(value) => setInputValue(value)} />
			</div>
			<div className="flex flex-col gap-sm">
				{fruits.map((fruit) => (
					<Typography key={fruit}>
						<Highlight highlight={highlightedChars}>{fruit}</Highlight>
					</Typography>
				))}
			</div>
		</div>
	)
}
