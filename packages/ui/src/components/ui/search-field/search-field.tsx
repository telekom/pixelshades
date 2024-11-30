"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { forwardRef } from "@pixelshades/utils/jsx"
import type { ReactNode } from "react"
import type { SearchFieldProps as AriaSearchFieldProps } from "react-aria-components"
import { SearchField as AriaSearchField } from "react-aria-components"
import { If } from "../../utils"
import { FormDescription, FormFieldError } from "../form"
import { Input } from "../input"
import { searchFieldVariants } from "@pixelshades/styles/components/search-field"
import { type FormComponentLabelProps, Label } from "../label"
import { IconSearch } from "../../../icons"

const { input, icon } = searchFieldVariants()

export interface SearchFieldProps extends AriaSearchFieldProps, FormComponentLabelProps {
	/** A helper text to be displayed below the search field. */
	helperText?: ReactNode
	/** The error message to be displayed when the search field is in an error state. */
	errorMessage?: string
	/** The placeholder text to be displayed in the search field. */
	placeholder?: string
}

const SearchField = forwardRef(
	({
		label,
		helperText,
		description,
		tooltip,
		errorMessage,
		placeholder,
		ref,
		isRequired,
		...props
	}: SearchFieldProps & { ref?: any }) => (
		<AriaSearchField className={"flex flex-col gap-sm"} isRequired={isRequired} {...props}>
			<If condition={label || description || tooltip}>
				<Label tooltip={tooltip} description={description} isRequired={isRequired}>
					{label}
				</Label>
			</If>
			<div className="relative">
				<IconSearch className={icon()} />
				<Input placeholder={placeholder} ref={ref} className={input()} />
			</div>

			{helperText && <FormDescription>{helperText}</FormDescription>}
			<FormFieldError>{errorMessage}</FormFieldError>
		</AriaSearchField>
	),
)

export { SearchField }
