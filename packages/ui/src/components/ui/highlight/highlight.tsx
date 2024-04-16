import { Typography } from "../typography"
import { highlighter } from "./highlighter"

type HighlightProps = {
	/** Element that will be rendered highlighted */
	children: string
	/** Elements characters that will be highlighted */
	highlight?: string | string[]
	/** Minimum length to highlight */
	minLengthToHighlight?: number
}
/** Displays a Text with highlighted characters */
export const Highlight = ({ children, highlight = "", minLengthToHighlight = 0 }: HighlightProps) => {
	const highlightChunks = highlighter(children, highlight, minLengthToHighlight)
	return (
		<Typography as="span">
			{highlightChunks.map(({ chunk, highlighted }, i) =>
				highlighted ? (
					<span key={i} className={"bg-primary text-primary-foreground"} data-highlight={chunk}>
						{chunk}
					</span>
				) : (
					<span key={i}>{chunk}</span>
				),
			)}
		</Typography>
	)
}
