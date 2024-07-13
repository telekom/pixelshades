"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { sliderVariants } from "@pixelshades/styles/components/slider"
import type { ReactNode } from "react"
import type { SliderProps as AriaSliderProps } from "react-aria-components"
import {
	Slider as AriaSlider,
	SliderOutput as AriaSliderOutput,
	SliderThumb as AriaSliderThumb,
	SliderTrack as AriaSliderTrack,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { FormField, type FormFieldProps } from "../../core/form-field"
import { FormDescription, FormFieldError } from "../form"

const { sliderRoot, sliderHeader, sliderTrack, sliderThumb, sliderOutput, sliderDescription } = sliderVariants()

interface SliderProps extends AriaSliderProps, FormFieldProps, VariantProps<typeof sliderVariants> {
	className?: string
	helperText?: ReactNode
	errorMessage?: string
	thumbLabels?: string[]
}

const Slider = ({
	className,
	label,
	helperText,
	errorMessage,
	description,
	tooltip,
	orientation,
	isDisabled,
	...props
}: SliderProps) => {
	return (
		<AriaSlider
			className={sliderRoot({ className, orientation })}
			orientation={orientation}
			isDisabled={isDisabled}
			{...props}
		>
			<FormField label={label} description={description} tooltip={tooltip} isDisabled={isDisabled}>
				<div className={sliderHeader({ className, orientation })}>
					<AriaSliderOutput className={sliderOutput({ className, orientation })}>
						{({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")}
					</AriaSliderOutput>
				</div>
				<AriaSliderTrack className={sliderTrack({ className, orientation })}>
					{({ state }) =>
						state.values.map((_, i) => (
							<AriaSliderThumb
								key={i}
								index={i}
								className={sliderThumb({ className, orientation, isDisabled })}
							/>
						))
					}
				</AriaSliderTrack>
			</FormField>
		</AriaSlider>
	)
}

Slider.displayName = "Slider"

export { Slider }
