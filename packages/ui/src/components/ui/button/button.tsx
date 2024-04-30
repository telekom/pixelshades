"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type React from "react"
import { forwardRef } from "react"
import type { VariantProps } from "tailwind-variants"

import { buttonVariants } from "@pixelshades/styles/components/button"

import { RenderSlot } from "@pixelshades/utils/jsx"
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	type ButtonRenderProps,
} from "react-aria-components"
import { If } from "../../utils"
import { buttonGroupContext } from "../button-group/button-group-context"
import { LoadingSpinner } from "../loading-spinner"

type ButtonVariantProps = VariantProps<typeof buttonVariants>

interface ButtonProps extends ButtonVariantProps, AriaButtonProps {
	isLoading?: boolean
	before?: React.ReactElement<HTMLElement>
	after?: React.ReactElement<HTMLElement>
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ size, variant, className, children, isLoading, isDisabled, before, after, withRing, ...props }, ref) => {
		const buttonGroupState = buttonGroupContext.useStyleContext()

		/* If Button is in Button Group apply Button Group Styles, this can still be overwritten on button layer **/
		const buttonStyles = (values: ButtonRenderProps) =>
			buttonGroupState
				? buttonGroupState.base({
						variant,
						withRing,
						size,
						className: typeof className === "function" ? className(values) : className,
					})
				: buttonVariants({
						variant,
						withRing,
						size,
						className: typeof className === "function" ? className(values) : className,
					})

		return (
			<AriaButton className={buttonStyles} isDisabled={isDisabled || isLoading} ref={ref} {...props}>
				<>
					{isLoading && <LoadingSpinner className="size-4 text-inherit" />}
					<If condition={before && !isLoading}>
						<RenderSlot item={before!} className={"size-4 text-inherit"} />
					</If>
					{children}
					<If condition={after}>
						<RenderSlot item={after!} className={"size-4 text-inherit"} />
					</If>
				</>
			</AriaButton>
		)
	},
)

export { type ButtonProps, Button }
