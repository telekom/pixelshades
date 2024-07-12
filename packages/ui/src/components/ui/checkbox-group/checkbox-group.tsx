"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { checkboxGroup } from "@pixelshades/styles/components/checkbox-group"
import type { ReactNode } from "react"
import type { CheckboxGroupProps as AriaCheckboxGroupProps } from "react-aria-components"
import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components"
import { type FormComponentLabelProps, Label } from "../../core/label"
import { FormDescription, FormFieldError } from "../form"

interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, "className" | "children">, FormComponentLabelProps {
	/** The className of the checkbox group. */
	className?: string
	/** Checkbox or any other components to render in the checkbox group. */
	children?: ReactNode
	/** A subtle description next to the checkbox groups label. */
	helperText?: string
	/** The error message of the checkbox group. */
	errorMessage?: string
}

const CheckboxGroup = ({
	className,
	label,
	helperText,
	description,
	tooltip,
	errorMessage,
	children,
	...props
}: CheckboxGroupProps) => (
	<AriaCheckboxGroup {...props} className={checkboxGroup({ className })}>
		{({ isRequired, isDisabled }) => (
			<>
				<Label description={description} aria-disabled={isDisabled} tooltip={tooltip} isRequired={isRequired}>
					{label}
				</Label>
				{children}
				{helperText && <FormDescription aria-disabled={isDisabled}>{helperText}</FormDescription>}
				<FormFieldError>{errorMessage}</FormFieldError>
			</>
		)}
	</AriaCheckboxGroup>
)

CheckboxGroup.displayName = "CheckboxGroup"

export { type CheckboxGroupProps, CheckboxGroup }
