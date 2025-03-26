"use client"

import { inputVariants } from "@pixelshades/styles/components/input"
import { mergeRefs } from "@react-aria/utils"
import { useControlledState } from "@react-stately/utils"
import { IconLoader } from "@tabler/icons-react"
import * as React from "react"
import { useCallback } from "react"
import { chain } from "react-aria"
import {
	Group as AriaGroup,
	type GroupProps as AriaGroupProps,
	Input as AriaInput,
	InputContext as AriaInputContext,
	type InputProps as AriaInputProps,
	TextArea as AriaTextArea,
	TextAreaContext as AriaTextAreaContext,
	type TextAreaProps as AriaTextAreaProps,
	Provider,
	composeRenderProps,
	useSlottedContext,
} from "react-aria-components"
import { type VariantProps, tv } from "tailwind-variants"

interface TextAreaInputProps extends Omit<AriaTextAreaProps, "className"> {
	className?: string
}
const TextAreaInput = React.forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
	({ className, onChange, rows = 1, ...props }, forwardedRef) => {
		const { input } = inputVariants({ multiline: true })
		const [inputValue, setInputValue] = useControlledState(props.value, props.defaultValue ?? "", () => {
			// Do nothing
		})
		const inputRef = React.useRef<HTMLTextAreaElement>(null)

		const onHeightChange = useCallback(() => {
			if (inputRef.current) {
				const input = inputRef.current
				const prevAlignment = input.style.alignSelf
				const prevOverflow = input.style.overflow
				const isFirefox = "MozAppearance" in input.style
				if (!isFirefox) {
					input.style.overflow = "hidden"
				}
				input.style.alignSelf = "start"
				input.style.height = "auto"
				input.style.height = `${input.scrollHeight + (input.offsetHeight - input.clientHeight)}px`
				input.style.overflow = prevOverflow
				input.style.alignSelf = prevAlignment
			}
		}, [])

		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		React.useLayoutEffect(() => {
			if (inputRef.current) {
				onHeightChange()
			}
		}, [onHeightChange, inputValue])

		return (
			<AriaTextArea
				ref={mergeRefs(inputRef, forwardedRef)}
				className={input({ className })}
				onChange={chain(onChange, setInputValue)}
				rows={rows}
				{...props}
			/>
		)
	},
)
TextAreaInput.displayName = "TextAreaInput"

interface InputProps extends Omit<AriaInputProps, "className" | "size"> {
	className?: string
}
const BaseInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
	const { input } = inputVariants()
	return <AriaInput ref={ref} className={input({ className })} {...props} />
})
BaseInput.displayName = "Input"

export interface InputBasedCompBaseProps {
	before?: React.ReactNode
	after?: React.ReactNode
	isLoading?: boolean
	loaderPosition?: "before" | "after"
}

interface InputRootProps
	extends Omit<AriaGroupProps, "className" | "before">,
		VariantProps<typeof inputVariants>,
		InputBasedCompBaseProps {
	className?: string
}

const InputRoot = ({
	className,
	before,
	after,
	isLoading,
	loaderPosition = "after",
	size,
	multiline,
	...props
}: InputRootProps) => {
	const { root } = inputVariants({ size, multiline })

	const inputContext = useSlottedContext(AriaInputContext)
	const textAreaContext = useSlottedContext(AriaTextAreaContext)

	const inputRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null)
	const isDisabled = props.isDisabled || inputContext?.disabled || textAreaContext?.disabled

	const isInvalid =
		props.isInvalid ||
		(!!inputContext?.["aria-invalid"] && inputContext["aria-invalid"] !== "false") ||
		(!!textAreaContext?.["aria-invalid"] && textAreaContext["aria-invalid"] !== "false")

	const handlePointerDown = (event: React.PointerEvent<HTMLElement>) => {
		const target = event.target as HTMLElement
		if (target.closest("input, button, a")) return
		const input = inputRef.current
		if (!input) return
		requestAnimationFrame(() => {
			input.focus()
		})
	}

	return (
		<AriaGroup
			role="presentation"
			{...props}
			onPointerDown={handlePointerDown}
			isDisabled={isDisabled}
			isInvalid={isInvalid}
			className={root({ className })}
		>
			{composeRenderProps(props.children, (children) => (
				<Provider
					values={[
						[
							AriaInputContext,
							{ ...inputContext, ref: mergeRefs(inputRef as any, inputContext?.ref ?? null) },
						],
						[
							AriaTextAreaContext,
							{ ...textAreaContext, ref: mergeRefs(inputRef as any, textAreaContext?.ref ?? null) },
						],
					]}
				>
					{isLoading && loaderPosition === "before" ? <IconLoader className="animate-spin" /> : before}
					{children}
					{isLoading && loaderPosition === "after" ? <IconLoader className="animate-spin" /> : after}
				</Provider>
			))}
		</AriaGroup>
	)
}

export type { InputProps, InputRootProps, TextAreaInputProps }
export { TextAreaInput, InputRoot }

export const Input = Object.assign(BaseInput, {
	Root: InputRoot,
})
