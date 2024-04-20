"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { inputVariants } from "@pixelshades/styles/components/input"
import { forwardRef } from "react"
import { Input as AriaInput, type InputProps as AriaInputProps } from "react-aria-components"

import type { VariantProps } from "tailwind-variants"

type InputVariantProps = VariantProps<typeof inputVariants>

interface InputProps extends InputVariantProps, Omit<AriaInputProps, "size"> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { className, size, ...rest } = props
	return (
		<AriaInput
			className={(values) =>
				inputVariants({
					className: typeof className === "function" ? className(values) : className,
					size,
				})
			}
			ref={ref}
			{...rest}
		/>
	)
})

Input.displayName = "Input"

export { type InputProps, Input }
