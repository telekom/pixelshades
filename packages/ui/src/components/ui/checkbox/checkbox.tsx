"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { type ElementRef, type ReactNode, forwardRef } from "react"

import { checkboxVariant } from "@pixelshades/styles/components/checkbox"
import { IconCheck } from "@tabler/icons-react"
import React from "react"
import {
	type CheckboxProps as AriaCheckBoxProps,
	Checkbox as AriaCheckbox,
	type ValidationResult,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { If } from "../../utils"
import { FormDescription, FormFieldError } from "../form"
import { Label } from "../label"

type CheckboxVariantProps = VariantProps<typeof checkboxVariant>

interface CheckBoxProps extends CheckboxVariantProps, AriaCheckBoxProps {
	/** The label of the checkbox. */
	label?: ReactNode
	/** The description of the checkbox. */
	description?: ReactNode
	/** A subtle description next to the checkbox groups label. */
	helperText?: ReactNode
	/** The error message of the checkbox. */
	errorMessage?: string | ((validation: ValidationResult) => string)
	/** The tooltip of the checkbox. */
	tooltip?: ReactNode
	/** The className of the checkbox. */
	className?: string
}

const Checkbox = forwardRef<ElementRef<typeof AriaCheckbox>, CheckBoxProps>(
	({ className, label, id, helperText, errorMessage, description, tooltip, size, children, ...props }, ref) => {
		const generatedId = React.useId()
		const elId = id ?? generatedId

		return (
			<AriaCheckbox id={elId} className={checkboxVariant({ size }).root({ className })} ref={ref} {...props}>
				{({ isSelected, isDisabled, isRequired }) => (
					<>
						<div className={checkboxVariant({ size }).box()}>{isSelected && <IconCheck />}</div>
						<span className="inline-flex flex-col">
							<If condition={label || description || tooltip}>
								<Label
									aria-disabled={isDisabled}
									htmlFor={elId}
									description={description}
									tooltip={tooltip}
									isRequired={isRequired}
								>
									{label}
								</Label>
							</If>
							<FormDescription aria-disabled={isDisabled}>{helperText}</FormDescription>
							<FormFieldError>{errorMessage}</FormFieldError>
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
