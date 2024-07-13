"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { forwardRef } from "@pixelshades/utils/jsx"
import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components"
import { TextField as AriaTextField } from "react-aria-components"
import { FormField, type FormFieldProps } from "../../core/form-field"
import { Input, type InputBasedCompBaseProps } from "../../core/input"

export interface TextFieldProps extends AriaTextFieldProps, FormFieldProps, InputBasedCompBaseProps {
	/** Toggle between a text field and a text area. */
	multiLine?: boolean
	/** The number of columns in the text area. */
	cols?: number
	/** The number of rows in the text area. */
	rows?: number
	/** The number of rows in the text area. */
	placeholder?: string
}

export interface TextAreaFieldProps extends AriaTextFieldProps, InputBasedCompBaseProps, FormFieldProps {
	/** Toggle between a text field and a text area. */
	multiLine?: boolean
	/** The number of columns in the text area. */
	cols?: number
	/** The number of rows in the text area. */
	rows?: number

	/** The number of rows in the text area. */
	placeholder?: string
}

const TextField = forwardRef(
	({
		placeholder,
		ref,
		isRequired,
		multiLine,
		cols,
		rows,

		// FormField Props
		label,
		helperText,
		tooltip,
		description,
		errorMessage,

		// Input Root Props
		after,
		before,
		isLoading,
		loaderPosition,
		...props
	}: TextFieldProps & { ref?: any }) => (
		<AriaTextField className={"flex flex-col gap-sm"} isRequired={isRequired} {...props}>
			<FormField
				label={label}
				helperText={helperText}
				description={description}
				tooltip={tooltip}
				isRequired={isRequired}
				errorMessage={errorMessage}
			>
				<Input.Root before={before} after={after} loaderPosition={loaderPosition} isLoading={isLoading}>
					<Input ref={ref} placeholder={placeholder} />
				</Input.Root>
			</FormField>
		</AriaTextField>
	),
)

export { TextField }
