// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { Slot } from "@radix-ui/react-slot"
import React, { type ReactElement, isValidElement } from "react"
import { cn } from "../styles/cn.shared-runtime"

/**
 * The same as `React.forwardRef` but passes the `ref` as a prop and returns a
 * component with the same generic type.
 */
export function forwardRef<T extends React.FC<any>>(render: T) {
	const Role = React.forwardRef((props, ref) => render({ ...props, ref }))
	Role.displayName = render.displayName || render.name
	return Role as unknown as T
}

export function RenderSlot({
	item,
	className,
	fallbackAs = "span",
}: { item: ReactElement<HTMLElement>; className?: string; fallbackAs?: string }) {
	const Component = isValidElement(item) ? Slot : fallbackAs

	return <Component className={cn(className, item?.props?.className)}>{item}</Component>
}
