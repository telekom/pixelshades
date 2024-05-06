"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { switchVariants } from "@pixelshades/styles/components/switch"

import { Switch as AriaSwitch, type SwitchProps as AriaSwitchProps } from "react-aria-components"

import type { ReactNode } from "react"
import React from "react"
import type { VariantProps } from "tailwind-variants"
import { If } from "../../utils"
import { FormDescription, FormFieldError } from "../form"
import { type FormComponentLabelProps, Label } from "../label"

type SwitchVariantProps = VariantProps<typeof switchVariants>

interface SwitchProps extends SwitchVariantProps, AriaSwitchProps, FormComponentLabelProps {
	/** The styles to be applied to the switch field, */
	className?: string
	/** A helper text to be displayed below the switch field. */
	helperText?: ReactNode
	/** The error message to be displayed when the switch is in an error state. */
	errorMessage?: string
}

const { root, track, handle } = switchVariants()

const Switch = ({
	className,
	children,
	errorMessage,
	helperText,
	label,
	description,
	id,
	tooltip,
	...restProps
}: SwitchProps) => {
	const generatedId = React.useId()
	const elId = id ?? generatedId

	return (
		<AriaSwitch className={root({ className })} id={elId} {...restProps}>
			{(renderProps) => (
				<>
					<div className={track(renderProps)}>
						<span className={handle(renderProps)} />
					</div>
					<span className="inline-flex flex-col">
						<If condition={label || description || tooltip}>
							<Label
								aria-disabled={renderProps.isDisabled}
								htmlFor={elId}
								description={description}
								tooltip={tooltip}
							>
								{label}
							</Label>
						</If>
						{helperText && (
							<FormDescription aria-disabled={renderProps.isDisabled}>{helperText}</FormDescription>
						)}
						<FormFieldError>{errorMessage}</FormFieldError>
					</span>
				</>
			)}
		</AriaSwitch>
	)
}

Switch.displayName = "Switch"

export { type SwitchProps, Switch }
