// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { Meta, StoryObj } from "@storybook/react"
import { Inter } from "next/font/google"
import Badge from "./badge"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof Badge> = {
	component: Badge,
	title: "Components/UI/Badge",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div
			className={`${
				inter.variable
				// biome-ignore lint/nursery/useSortedClasses: <explanation>
			} font-sans relative w-full h-full dark`}
		>
			<Story />
		</div>
	),
	args: {},
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
	args: {
		children: "Default",
		variant: "default",
	},
}

export const Info: Story = {
	args: {
		children: "Info",
		variant: "info",
	},
}

export const Alert: Story = {
	args: {
		children: "Alert",
		variant: "alert",
	},
}
