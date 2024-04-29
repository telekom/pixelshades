"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { sliderVariants } from "@pixelshades/styles/components/slider"
import { RenderSlot } from "@pixelshades/utils/jsx"
import type { SliderProps as AriaSliderProps } from "react-aria-components"
import {
	Label as AriaLabel,
	Slider as AriaSlider,
	SliderOutput as AriaSliderOutput,
	SliderTrack as AriaSliderTrack,
	SliderThumb as AriaSliderThumb,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { If } from "../../utils"

const { sliderRoot, sliderHeader, sliderTrack, sliderThumb, sliderDescription } = sliderVariants()

interface SliderProps extends AriaSliderProps, VariantProps<typeof sliderVariants> {
	className?: string
	label?: string
	description?: React.ReactElement<HTMLElement>
}

const Slider = ({ className, label, description, orientation, ...props }: SliderProps) => {
	return (
		<AriaSlider className={sliderRoot({ className, orientation })} orientation={orientation} {...props}>
			<div className={sliderHeader({ className, orientation })}>
				<AriaLabel>{label}</AriaLabel>
				<AriaSliderOutput>
					{({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")}
				</AriaSliderOutput>
			</div>
			<AriaSliderTrack className={sliderTrack({ className, orientation })}>
				{({ state }) =>
					state.values.map((_, i) => (
						<AriaSliderThumb key={i} index={i} className={sliderThumb({ className, orientation })} />
					))
				}
			</AriaSliderTrack>
			<If condition={description}>
				<RenderSlot className={sliderDescription({ className, orientation })} item={description!} />
			</If>
		</AriaSlider>
	)
}

Slider.displayName = "Slider"

export { Slider }
