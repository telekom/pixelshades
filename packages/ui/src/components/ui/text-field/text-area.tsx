"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { inputVariants } from "@pixelshades/styles/components/input"
import { forwardRef } from "@pixelshades/utils/jsx"
import { TextArea as AriaTextArea, type TextAreaProps as AriaTextAreaProps } from "react-aria-components"

import type { VariantProps } from "tailwind-variants"

type InputVariantProps = VariantProps<typeof inputVariants>

interface TextAreaProps extends InputVariantProps, Omit<AriaTextAreaProps, "size"> {
	ref?: any
}

const TextArea = forwardRef((props: TextAreaProps) => {
	const { className, size = "none", ...rest } = props
	return (
		<AriaTextArea
			className={(values) =>
				inputVariants({
					className: typeof className === "function" ? className(values) : className,
					size,
					...values,
				})
			}
			{...rest}
		/>
	)
})

export { type TextAreaProps, TextArea }
