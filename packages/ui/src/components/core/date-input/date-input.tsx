"use client"

import React from "react"
import {
	DateInput as AriaDateInput,
	type DateInputProps as AriaDateInputProps,
	DateSegment as AriaDateSegment,
	type DateSegmentProps as AriaDateSegmentProps,
} from "react-aria-components"
import { dateInputStyles } from "./variants"

interface DateInputProps extends Omit<AriaDateInputProps, "className"> {
	className?: string
}
const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(({ className, ...props }, ref) => {
	const { input } = dateInputStyles()
	return <AriaDateInput ref={ref} className={input({ className })} {...props} />
})
DateInput.displayName = "Input"

interface DateSegmentProps extends Omit<AriaDateSegmentProps, "className"> {
	className?: string
}
const DateSegment = React.forwardRef<HTMLInputElement, DateSegmentProps>(({ className, ...props }, ref) => {
	const { segment } = dateInputStyles()
	return <AriaDateSegment ref={ref} className={segment({ className })} {...props} />
})
DateSegment.displayName = "Segment"

export type { DateInputProps, DateSegmentProps }
export { DateInput, DateSegment }
