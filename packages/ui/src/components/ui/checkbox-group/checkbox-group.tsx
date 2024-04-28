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
	className?: string
	children?: ReactNode
	helperText?: string
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
		{description && <FormDescription>{helperText}</FormDescription>}
		<FormFieldError>{errorMessage}</FormFieldError>
	</AriaCheckboxGroup>
)

CheckboxGroup.displayName = "CheckboxGroup"

export { type CheckboxGroupProps, CheckboxGroup }
