// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { labelVariants } from "@pixelshades/styles/components/label"
import { Label as AriaLabel, type LabelProps } from "react-aria-components"

const Label = ({ className, ...props }: LabelProps) => <AriaLabel className={labelVariants(className)} {...props} />

Label.displayName = "Label"

export { Label, type LabelProps }
