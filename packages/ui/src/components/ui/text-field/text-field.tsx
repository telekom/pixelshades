"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { textFieldVariants } from "@pixelshades/styles/components/text-field"
import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components"
import { TextField as AriaTextField } from "react-aria-components"
import { FormDescription, FormFieldError } from "../form"
import { Input } from "../input"
import { type FormComponentLabelProps, Label } from "../label"

export interface TextFieldProps extends AriaTextFieldProps, FormComponentLabelProps {
	label?: string
	helperText?: string
	errorMessage?: string
}

const TextField = ({ label, helperText, description, tooltip, errorMessage, ...props }: TextFieldProps) => (
	<AriaTextField className={"flex flex-col gap-sm"} {...props}>
		<Label tooltip={tooltip} description={description}>
			{label}
		</Label>
		<Input />
		{helperText && !errorMessage && <FormDescription>{helperText}</FormDescription>}
		<FormFieldError>{errorMessage}</FormFieldError>
	</AriaTextField>
)

export { TextField }
