"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { checkboxGroup } from "@pixelshades/styles/components/checkbox-group"
import type { ReactNode } from "react"
import type { CheckboxGroupProps as AriaCheckboxGroupProps } from "react-aria-components"
import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components"
import { FormDescription, FormFieldError } from "../form"
import { type FormComponentLabelProps, Label } from "../label"

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
		<Label description={description} tooltip={tooltip}>
			{label}
		</Label>
		{children}
		{helperText && <FormDescription>{helperText}</FormDescription>}
		<FormFieldError>{errorMessage}</FormFieldError>
	</AriaCheckboxGroup>
)

CheckboxGroup.displayName = "CheckboxGroup"

export { type CheckboxGroupProps, CheckboxGroup }
