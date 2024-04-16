import type { TimeFieldProps as AriaTimeFieldProps, TimeValue } from "react-aria-components"
import { TimeField as AriaTimeField, DateInput, DateSegment, Text } from "react-aria-components"

import { dateFieldVariants } from "@dv/styles/components/date-field"
import type { ReactNode } from "react"
import { Label } from "../label"

const { input, dateSegment } = dateFieldVariants()

export interface TimeFieldProps<T extends TimeValue> extends AriaTimeFieldProps<T> {
	label?: ReactNode
	description?: string
	errorMessage?: string
}

const TimeField = <T extends TimeValue>({ label, description, errorMessage, ...props }: TimeFieldProps<T>) => (
	<AriaTimeField className="flex flex-col gap-md" {...props}>
		<Label>{label}</Label>
		<DateInput className={input()}>
			{(segment) => <DateSegment className={dateSegment()} segment={segment} />}
		</DateInput>
		{description && <Text slot="description">{description}</Text>}
		{errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
	</AriaTimeField>
)

TimeField.displayName = "TimeField"

export { TimeField }
