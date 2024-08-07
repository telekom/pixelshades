// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { cn } from "@pixelshades/cn"
import type { Meta, StoryObj } from "@storybook/react"
import { Inter } from "next/font/google"
import { Calendar } from "./calendar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof Calendar> = {
	component: Calendar,
	title: "Components/UI/Calendar",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div className={cn(inter.variable, "dark relative h-full w-full font-sans")}>
			<Story />
		</div>
	),
}

export default meta

type Story = StoryObj<typeof Calendar>

export const Default: Story = {
	args: {},
}
