"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { forwardRef } from "@pixelshades/utils/jsx"
import type { ReactNode } from "react"
import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components"
import { TextField as AriaTextField } from "react-aria-components"
import { If } from "../../utils"
import { FormDescription, FormFieldError } from "../form"
import { Input } from "../input"
import { type FormComponentLabelProps, Label } from "../label"
import { TextArea } from "./text-area"

export interface TextFieldProps extends AriaTextFieldProps, FormComponentLabelProps {
	/** A helper text to be displayed below the text field. */
	helperText?: ReactNode
	/** The error message to be displayed when the text field is in an error state. */
	errorMessage?: string
	/** Toggle between a text field and a text area. */
	multiLine?: boolean
	/** The number of columns in the text area. */
	cols?: number
	/** The number of rows in the text area. */
	rows?: number
}

const TextField = forwardRef(
	({
		label,
		helperText,
		description,
		tooltip,
		errorMessage,
		ref,
		isRequired,
		multiLine,
		cols,
		rows,
		...props
	}: TextFieldProps & { ref?: any }) => (
		<AriaTextField className={"flex flex-col gap-sm"} isRequired={isRequired} {...props}>
			<If condition={label || description || tooltip}>
				<Label tooltip={tooltip} description={description} isRequired={isRequired}>
					{label}
				</Label>
			</If>

			{multiLine ? <TextArea ref={ref} cols={cols} rows={rows} /> : <Input ref={ref} />}
			{helperText && <FormDescription>{helperText}</FormDescription>}
			<FormFieldError>{errorMessage}</FormFieldError>
		</AriaTextField>
	),
)

export { TextField }
