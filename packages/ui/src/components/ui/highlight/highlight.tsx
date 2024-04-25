"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { Typography } from "../typography"
import { highlighter } from "./highlighter"

export type HighlightProps = {
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
				// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
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
