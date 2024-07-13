"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { type ElementRef, forwardRef } from "react"

import { checkboxVariant } from "@pixelshades/styles/components/checkbox"
import { IconCheck } from "@tabler/icons-react"
import React from "react"
import { type CheckboxProps as AriaCheckBoxProps, Checkbox as AriaCheckbox } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { FormField, type FormFieldProps } from "../../core/form-field"

type CheckboxVariantProps = VariantProps<typeof checkboxVariant>

interface CheckBoxProps extends CheckboxVariantProps, AriaCheckBoxProps, FormFieldProps {
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
							<FormField
								label={label}
								description={description}
								tooltip={tooltip}
								isRequired={isRequired}
								isDisabled={isDisabled}
							/>
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
