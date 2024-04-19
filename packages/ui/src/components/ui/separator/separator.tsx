// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { separatorVariants } from "@pixelshades/styles/components/separator"
import { Separator as AriaSeparator, type SeparatorProps } from "react-aria-components"

const Separator = ({ className, orientation, ...props }: SeparatorProps) => (
	<AriaSeparator className={separatorVariants({ className, orientation })} {...props} />
)

Separator.displayName = "Separator"

export { Separator, type SeparatorProps }
