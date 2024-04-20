"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { VariantProps } from "tailwind-variants"

import { badgeVariants } from "@pixelshades/styles/components/badge"
import { RenderSlot, forwardRef } from "@pixelshades/utils/jsx"
import type { HTMLAttributes } from "react"
import { If } from "../../utils"

type BadgeVariantsProps = VariantProps<typeof badgeVariants>

interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, BadgeVariantsProps {
	/** Element shown before the child */
	before?: React.ReactElement<HTMLElement>
	/** Element shown after the child */
	after?: React.ReactElement<HTMLElement>
}

const { badge, icon, child } = badgeVariants()

/** Displays a Badge */
const Badge = forwardRef(({ className, size, variant, children, before, after, ...props }: BadgeProps, ref) => {
	return (
		<span ref={ref} className={badge({ size, variant, className })} {...props}>
			<If condition={before}>
				<RenderSlot item={before!} className={icon({ variant, size })} />
			</If>
			<If condition={children}>
				<span className={child({ variant, size })}>{children}</span>
			</If>
			<If condition={after}>
				<RenderSlot item={after!} className={icon({ variant, size })} />
			</If>
		</span>
	)
})

export { type BadgeProps, Badge }
