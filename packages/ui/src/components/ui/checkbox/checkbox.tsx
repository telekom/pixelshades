"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { type ElementRef, forwardRef } from "react"

import { checkboxVariant } from "@pixelshades/styles/components/checkbox"
import { IconCheck, IconMinus } from "@tabler/icons-react"
import { type CheckboxProps as AriaCheckBoxProps, Checkbox as AriaCheckbox } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { FormField, type FormFieldProps } from "../../core/form-field"

type CheckboxVariantProps = VariantProps<typeof checkboxVariant>

interface CheckBoxProps extends CheckboxVariantProps, AriaCheckBoxProps, FormFieldProps {
	/** The className of the checkbox. */
	className?: string
}

const { indicator, root } = checkboxVariant()

const Checkbox = forwardRef<ElementRef<typeof AriaCheckbox>, CheckBoxProps>(
	({ className, label, id, helperText, errorMessage, description, tooltip, children, ...props }, ref) => {
		return (
			<AriaCheckbox className={root({ className })} ref={ref} {...props}>
				{({ isDisabled, isRequired, isIndeterminate }) => (
					<>
						<div className={indicator()}>
							{isIndeterminate ? <IconMinus className="size-2.5" /> : <IconCheck className="size-3" />}
						</div>

						<span className="inline-flex flex-col">
							<FormField
								label={label}
								description={description}
								tooltip={tooltip}
								isRequired={isRequired}
								isDisabled={isDisabled}
								errorMessage={errorMessage}
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
