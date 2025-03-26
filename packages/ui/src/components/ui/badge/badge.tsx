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

interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, "color">, BadgeVariantsProps {
	/** Element shown before the child */
	before?: React.ReactElement<HTMLElement>
	/** Element shown after the child */
	after?: React.ReactElement<HTMLElement>

	ref?: React.ForwardedRef<HTMLSpanElement>
}

const { badge, icon, child } = badgeVariants()

/** Displays a Badge */
const Badge = ({ className, children, before, after, ref, ...props }: BadgeProps) => {
	return (
		<span ref={ref} className={badge({ className, ...props })} {...props}>
			<If condition={before}>
				<RenderSlot item={before!} className={icon({ ...props })} />
			</If>
			<If condition={children}>
				<span className={child({ ...props })}>{children}</span>
			</If>
			<If condition={after}>
				<RenderSlot item={after!} className={icon({ ...props })} />
			</If>
		</span>
	)
}

export { type BadgeProps, Badge }
