"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { forwardRef } from "@pixelshades/utils/jsx"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import type { ReactNode } from "react"
import type { NumberFieldProps as AriaNumberFieldProps } from "react-aria-components"
import { Input as AriaInput, NumberField as AriaNumberField } from "react-aria-components"
import { Button } from "../button"
import { FormDescription, FormFieldError, FormFieldGroup } from "../form"
import { Input } from "../input"
import { type FormComponentLabelProps, Label } from "../label"

export interface NumberFieldProps extends AriaNumberFieldProps, FormComponentLabelProps {
	helperText?: ReactNode
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
				<Input className="border-none" ref={ref} />
				<div className="flex flex-col">
					<Button className="size-3" slot="increment" size="icon" variant="ghost">
						<ChevronUpIcon />
					</Button>
					<Button className="size-3" slot="decrement" size="icon" variant="ghost">
						<ChevronDownIcon />
					</Button>
				</div>
			</FormFieldGroup>

			{helperText && <FormDescription>{helperText}</FormDescription>}
			<FormFieldError>{errorMessage}</FormFieldError>
		</AriaNumberField>
	),
)

export { NumberField }
