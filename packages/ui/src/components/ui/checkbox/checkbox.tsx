"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { Check } from "lucide-react"

import { type ElementRef, type ReactNode, forwardRef } from "react"

import { checkboxVariant } from "@pixelshades/styles/components/checkbox"
import React from "react"
import { type CheckboxProps as AriaCheckBoxProps, Checkbox as AriaCheckbox } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { Label } from "../label"

type CheckboxVariantProps = VariantProps<typeof checkboxVariant>

interface CheckBoxProps extends CheckboxVariantProps, AriaCheckBoxProps {
	label?: ReactNode
	description?: ReactNode
	tooltip?: ReactNode
	className?: string
}

const Checkbox = forwardRef<ElementRef<typeof AriaCheckbox>, CheckBoxProps>(
	({ className, label, id, description, tooltip, size, children, ...props }, ref) => {
		const generatedId = React.useId()
		const elId = id ?? generatedId

		return (
			<AriaCheckbox id={elId} className={checkboxVariant({ size }).root({ className })} ref={ref} {...props}>
				{({ isSelected }) => (
					<>
						<div className={checkboxVariant({ size }).box()}>{isSelected && <Check />}</div>
						<Label htmlFor={elId} description={description} tooltip={tooltip}>
							{label}
						</Label>
						{children}
					</>
				)}
			</AriaCheckbox>
		)
	},
)

Checkbox.displayName = "Checkbox"

export { type CheckBoxProps, Checkbox }
