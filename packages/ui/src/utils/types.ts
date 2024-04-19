// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import React from "react"

/**
 * Any object.
 */
export type AnyObject = Record<string, any>

/**
 * Empty object.
 */
export type EmptyObject = Record<keyof any, never>

/**
 * Any function.
 */
export type AnyFunction = (...args: any) => any

/**
 * HTML props based on the element type, excluding custom props.
 * @template T The element type.
 * @template P Custom props.
 * @example
 * type ButtonHTMLProps = HTMLProps<"button", { custom?: boolean }>;
 */
export type HTMLProps<T extends React.ElementType, P extends AnyObject = EmptyObject> = Omit<
	React.ComponentPropsWithRef<T>,
	keyof P
> & {
	[index: `data-${string}`]: unknown
}

/**
 * Props based on the element type, including custom props.
 * @template T The element type.
 * @template P Custom props.
 */
export type Props<T extends React.ElementType, P extends AnyObject = EmptyObject> = P & HTMLProps<T, P>
