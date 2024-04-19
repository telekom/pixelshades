// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { ReactNode } from "react"

import { buttonGroupContext } from "./button-group-context"

interface ButtonGroupProps {
	/** The children of the button group. */
	children: ReactNode

	/** The styles of the button group. */
	className?: string
}

const { withProvider } = buttonGroupContext

/** Displays a group of buttons with matching styles. */
const UnstyledButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
	return <div {...props}>{children}</div>
}

const ButtonGroup = withProvider(UnstyledButtonGroup, "buttonGroup")

export { ButtonGroup }
