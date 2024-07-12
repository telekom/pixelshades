"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { cn } from "@pixelshades/cn"
import { baseInputSizes } from "@pixelshades/styles/utils"
import { forwardRef } from "@pixelshades/utils/jsx"
import type { ReactNode } from "react"
import type { NumberFieldProps as AriaNumberFieldProps } from "react-aria-components"
import { Input as AriaInput, NumberField as AriaNumberField } from "react-aria-components"
import { IconChevronDown, IconChevronUp } from "../../../icons"
import { FormField, type FormFieldProps } from "../../core/form"
import { Button } from "../button"
import { FormDescription, FormFieldError, FormFieldGroup } from "../form"

export interface NumberFieldProps extends AriaNumberFieldProps, FormFieldProps {}

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
			<FormField label={label} description={description} tooltip={tooltip} isRequired={isRequired}>
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
			</FormField>
		</AriaNumberField>
	),
)

export { NumberField }
