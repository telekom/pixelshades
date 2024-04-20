"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { loadingSpinnerVariants } from "@pixelshades/styles/components/loading-spinner"
import { LoaderCircle } from "lucide-react"
import type React from "react"
import type { VariantProps } from "tailwind-variants"
import { RenderSlot } from "../../../utils/jsx"
import { If } from "../../utils"

interface LoadingSpinnerProps extends VariantProps<typeof loadingSpinnerVariants> {
	className?: string
	icon?: React.ReactElement<HTMLElement>
}

const LoadingSpinner = ({ className, size, variant, icon }: LoadingSpinnerProps) => {
	return (
		<If
			condition={icon}
			fallback={<LoaderCircle className={loadingSpinnerVariants({ size, variant, className })} />}
		>
			<RenderSlot item={icon!} className={loadingSpinnerVariants({ size, variant, className })} />
		</If>
	)
}

LoadingSpinner.displayName = "LoadingSpinner"

export { LoadingSpinner }
