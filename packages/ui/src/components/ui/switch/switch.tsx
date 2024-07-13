"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { switchHandle, switchTrack, switchVariants } from "@pixelshades/styles/components/switch"

import { Switch as AriaSwitch, type SwitchProps as AriaSwitchProps } from "react-aria-components"

import type { ReactNode } from "react"
import React from "react"
import { FormField, type FormFieldProps } from "../../core/form-field"
import { If } from "../../utils"
import { FormDescription, FormFieldError } from "../form"

interface SwitchProps extends AriaSwitchProps, FormFieldProps {
	/** The styles to be applied to the switch field, */
	className?: string
	/** A helper text to be displayed below the switch field. */
	helperText?: ReactNode
	/** The error message to be displayed when the switch is in an error state. */
	errorMessage?: string
}

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
		<AriaSwitch className={switchVariants({ className })} id={elId} {...restProps}>
			{(renderProps) => (
				<>
					<div className={switchTrack(renderProps)}>
						<span className={switchHandle(renderProps)} />
					</div>
					<FormField
						label={label}
						description={description}
						tooltip={tooltip}
						isDisabled={renderProps.isDisabled}
					/>
				</>
			)}
		</AriaSwitch>
	)
}

Switch.displayName = "Switch"

export { type SwitchProps, Switch }
