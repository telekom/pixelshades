"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { forwardRef } from "@pixelshades/utils/jsx"
import type { NumberFieldProps as AriaNumberFieldProps } from "react-aria-components"
import { NumberField as AriaNumberField } from "react-aria-components"
import { IconChevronDown, IconChevronUp } from "../../../icons"
import { FormField, type FormFieldProps } from "../../core/form-field"
import { Input, type InputBasedCompBaseProps } from "../../core/input"
import { Button } from "../button"

export interface NumberFieldProps
	extends AriaNumberFieldProps,
		FormFieldProps,
		Omit<InputBasedCompBaseProps, "after" | "loaderPosition"> {}

const NumberField = forwardRef(
	({
		ref,
		isRequired,

		// FormField Props
		label,
		helperText,
		tooltip,
		description,
		errorMessage,

		// Input Root Props
		before,
		isLoading,

		...props
	}: NumberFieldProps & { ref?: any }) => (
		<AriaNumberField className="flex flex-col items-start gap-md" isRequired={isRequired} {...props}>
			{(innerProps) => (
				<FormField
					label={label}
					description={description}
					errorMessage={errorMessage}
					tooltip={tooltip}
					isRequired={isRequired}
					isDisabled={innerProps.isDisabled}
				>
					<Input.Root before={before} isLoading={isLoading} loaderPosition={"before"}>
						<Input ref={ref} />
						<div className="flex flex-col">
							<Button className="size-3 overflow-hidden" slot="increment" size="icon" variant="ghost">
								<IconChevronUp />
							</Button>
							<Button className="size-3 overflow-hidden" slot="decrement" size="icon" variant="ghost">
								<IconChevronDown />
							</Button>
						</div>
					</Input.Root>
				</FormField>
			)}
		</AriaNumberField>
	),
)

export { NumberField }
