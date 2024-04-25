"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { RenderSlot } from "@pixelshades/utils/jsx"
import { createStyleContext } from "@pixelshades/utils/styles"
import {
	ToggleButton as AriaToggleButton,
	type ToggleButtonProps as AriaToggleButtonProps,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { If } from "../../utils"

import { toggleVariants } from "@pixelshades/styles/components/toggle-button"

const { withContext, withProvider } = createStyleContext(toggleVariants)

type ToggleVariantProps = VariantProps<typeof toggleVariants>

interface ToggleButtonProps extends ToggleVariantProps, AriaToggleButtonProps {
	/** The content to display before the toggle button. */
	before?: React.ReactElement<HTMLElement>
	/** The content to display after the toggle button. */
	after?: React.ReactElement<HTMLElement>
}

const { icon } = toggleVariants()

/** Displays a button that can be toggled on and off. */
const UnstyledToggleButton = ({ children, before, after, variant, size, ...props }: ToggleButtonProps) => {
	return (
		<AriaToggleButton {...props}>
			<>
				<If condition={before}>
					<RenderSlot item={before!} className={icon({ variant, size })} />
				</If>
				{children}
				<If condition={after}>
					<RenderSlot item={after!} className={icon({ variant, size })} />
				</If>
			</>
		</AriaToggleButton>
	)
}

const ToggleButton = withProvider(UnstyledToggleButton, "button")

export { ToggleButton }
