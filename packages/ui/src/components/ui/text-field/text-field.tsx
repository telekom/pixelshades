"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { forwardRef } from "@pixelshades/utils/jsx"
import type { ReactNode } from "react"
import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components"
import { TextField as AriaTextField } from "react-aria-components"
import { FormField, type FormFieldProps } from "../../core/form"
import { If } from "../../utils"
import { FormDescription, FormFieldError } from "../form"
import { Input } from "../input"
import { TextArea } from "./text-area"

export interface TextFieldProps extends AriaTextFieldProps, FormFieldProps {
	/** Toggle between a text field and a text area. */
	multiLine?: boolean
	/** The number of columns in the text area. */
	cols?: number
	/** The number of rows in the text area. */
	rows?: number
	/** The number of rows in the text area. */
	placeholder?: string
}

export interface TextAreaFieldProps extends AriaTextFieldProps, FormFieldProps {
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
		label,
		helperText,
		description,
		tooltip,
		errorMessage,
		placeholder,
		ref,
		isRequired,
		multiLine,
		cols,
		rows,
		...props
	}: TextFieldProps & { ref?: any }) => (
		<AriaTextField className={"flex flex-col gap-sm"} isRequired={isRequired} {...props}>
			<FormField label={label} description={description} tooltip={tooltip} isRequired={isRequired}>
				{multiLine ? (
					<TextArea ref={ref} placeholder={placeholder} cols={cols} rows={rows} />
				) : (
					<Input placeholder={placeholder} ref={ref} />
				)}
			</FormField>
		</AriaTextField>
	),
)

export { TextField }
