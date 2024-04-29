"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { forwardRef } from "@pixelshades/utils/jsx"
import type { ReactNode } from "react"
import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components"
import { TextField as AriaTextField } from "react-aria-components"
import { FormDescription, FormFieldError } from "../form"
import { Input } from "../input"
import { type FormComponentLabelProps, Label } from "../label"
import { TextArea } from "./text-area"

export interface TextFieldProps extends AriaTextFieldProps, FormComponentLabelProps {
	helperText?: ReactNode
	errorMessage?: string

	/** Text Area Props */
	multiLine?: boolean
	cols?: number
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
			<Label tooltip={tooltip} description={description} isRequired={isRequired}>
				{label}
			</Label>
			{multiLine ? <TextArea ref={ref} cols={cols} rows={rows} /> : <Input ref={ref} />}
			{helperText && !errorMessage && <FormDescription>{helperText}</FormDescription>}
			<FormFieldError>{errorMessage}</FormFieldError>
		</AriaTextField>
	),
)

export { TextField }
