"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { ReactNode } from "react"
import { useContext } from "react"
import type { HeadingLevels } from "./heading"
import { HeadingContext } from "./heading-context"

export function HeadingLevel({ level, children }: HeadingLevelProps) {
	const contextLevel = useContext(HeadingContext)
	const nextLevel = Math.max(Math.min(level || contextLevel + 1, 6), 1) as HeadingLevels
	return <HeadingContext.Provider value={nextLevel}>{children}</HeadingContext.Provider>
}

export interface HeadingLevelProps {
	/**
	 * The heading level. By default, it'll increase the level by 1 based on the
	 * context.
	 */
	level?: HeadingLevels
	children?: ReactNode
}
