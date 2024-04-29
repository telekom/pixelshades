"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { forwardRef } from "@pixelshades/utils/jsx"
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

const TextField = forwardRef(
	({ label, helperText, description, tooltip, errorMessage, ref, ...props }: TextFieldProps & { ref?: any }) => (
		<AriaTextField className={"flex flex-col gap-sm"} {...props}>
			<Label tooltip={tooltip} description={description}>
				{label}
			</Label>
			<Input ref={ref} />
			{helperText && !errorMessage && <FormDescription>{helperText}</FormDescription>}
			<FormFieldError>{errorMessage}</FormFieldError>
		</AriaTextField>
	),
)

export { TextField }
