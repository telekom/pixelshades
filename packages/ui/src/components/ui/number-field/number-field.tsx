"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { baseInputSizes } from "@pixelshades/styles/utils"
import { forwardRef } from "@pixelshades/utils/jsx"
import { cn } from "@pixelshades/utils/styles"
import type { ReactNode } from "react"
import type { NumberFieldProps as AriaNumberFieldProps } from "react-aria-components"
import { Input as AriaInput, NumberField as AriaNumberField } from "react-aria-components"
import { IconChevronDown, IconChevronUp } from "../../../icons"
import { Button } from "../button"
import { FormDescription, FormFieldError, FormFieldGroup } from "../form"
import { Input } from "../input"
import { type FormComponentLabelProps, Label } from "../label"

export interface NumberFieldProps extends AriaNumberFieldProps, FormComponentLabelProps {
	/** A helper text to display below the date picker. */
	helperText?: ReactNode
	/** The error message to display when the number field is invalid. */
	errorMessage?: string
}

const NumberField = forwardRef(
	({
		label,
		helperText,
		description,
		tooltip,
		errorMessage,
		ref,
		isRequired,

		...props
	}: NumberFieldProps & { ref?: any }) => (
		<AriaNumberField className={"flex flex-col gap-sm"} isRequired={isRequired} {...props}>
			<Label tooltip={tooltip} description={description} isRequired={isRequired}>
				{label}
			</Label>
			<FormFieldGroup>
				<AriaInput
					className={cn("w-full bg-transparent outline-none ring-0", baseInputSizes.variants.size)}
					ref={ref}
				/>
				<div className="flex flex-col">
					<Button className="size-3 overflow-hidden" slot="increment" size="icon" variant="ghost">
						<IconChevronUp />
					</Button>
					<Button className="size-3 overflow-hidden" slot="decrement" size="icon" variant="ghost">
						<IconChevronDown />
					</Button>
				</div>
			</FormFieldGroup>

			{helperText && <FormDescription>{helperText}</FormDescription>}
			<FormFieldError>{errorMessage}</FormFieldError>
		</AriaNumberField>
	),
)

export { NumberField }
