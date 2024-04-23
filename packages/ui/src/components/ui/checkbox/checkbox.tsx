"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { Check } from "lucide-react"

import { type ElementRef, type ReactNode, forwardRef } from "react"

import { checkboxVariant } from "@pixelshades/styles/components/checkbox"
import React from "react"
import {
	type CheckboxProps as AriaCheckBoxProps,
	Checkbox as AriaCheckbox,
	FieldError,
	type ValidationResult,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { If } from "../../utils"
import { Label, LabelHelperText } from "../label"

type CheckboxVariantProps = VariantProps<typeof checkboxVariant>

interface CheckBoxProps extends CheckboxVariantProps, AriaCheckBoxProps {
	label?: ReactNode
	description?: ReactNode
	helperText?: ReactNode
	errorMessage?: string | ((validation: ValidationResult) => string)
	tooltip?: ReactNode
	className?: string
}

const Checkbox = forwardRef<ElementRef<typeof AriaCheckbox>, CheckBoxProps>(
	({ className, label, id, helperText, errorMessage, description, tooltip, size, children, ...props }, ref) => {
		const generatedId = React.useId()
		const elId = id ?? generatedId

		return (
			<AriaCheckbox id={elId} className={checkboxVariant({ size }).root({ className })} ref={ref} {...props}>
				{({ isSelected, isDisabled }) => (
					<>
						<div className={checkboxVariant({ size }).box()}>{isSelected && <Check />}</div>
						<span className="inline-flex flex-col">
							<If condition={description || tooltip || helperText}>
								<Label
									aria-disabled={isDisabled}
									htmlFor={elId}
									description={description}
									tooltip={tooltip}
								>
									{label}
								</Label>
							</If>
							<LabelHelperText aria-disabled={isDisabled}>{helperText}</LabelHelperText>
							<FieldError>{errorMessage}</FieldError>
						</span>

						{children}
					</>
				)}
			</AriaCheckbox>
		)
	},
)

Checkbox.displayName = "Checkbox"

export { type CheckBoxProps, Checkbox }
