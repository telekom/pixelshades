"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { sliderVariants } from "@pixelshades/styles/components/slider"
import type { SliderProps as AriaSliderProps } from "react-aria-components"
import {
	Slider as AriaSlider,
	SliderOutput as AriaSliderOutput,
	SliderTrack as AriaSliderTrack,
	SliderThumb as AriaSliderThumb,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { type FormComponentLabelProps, Label } from "../label"
import { FormDescription, FormFieldError } from "../form"
import type { ReactNode } from "react"

const { sliderRoot, sliderHeader, sliderTrack, sliderThumb, sliderOutput, sliderDescription } = sliderVariants()

interface SliderProps extends AriaSliderProps, FormComponentLabelProps, VariantProps<typeof sliderVariants> {
	className?: string
	helperText?: ReactNode
	errorMessage?: string
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
			<div className={sliderHeader({ className, orientation })}>
				<Label tooltip={tooltip} description={description}>
					{label}
				</Label>
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
			{helperText && !errorMessage && <FormDescription>{helperText}</FormDescription>}
			<FormFieldError>{errorMessage}</FormFieldError>
		</AriaSlider>
	)
}

Slider.displayName = "Slider"

export { Slider }
