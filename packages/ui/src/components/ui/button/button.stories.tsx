// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { cn } from "@pixelshades/cn"
import type { Meta, StoryObj } from "@storybook/react"
import { Inter } from "next/font/google"
import { FileTrigger } from "../file-trigger"
import { Button } from "./button"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof Button> = {
	component: Button,
	title: "Components/UI/Button",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div className={cn(inter.variable, "dark relative h-full w-full font-sans")}>
			<Story />
		</div>
	),
}

export default meta

type Story = StoryObj<typeof Button>

export const Solid: Story = {
	args: {
		variant: "solid",
		children: "Solid",
	},
}

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Outline",
	},
}

export const Subtle: Story = {
	args: {
		variant: "subtle",
		children: "Subtle",
	},
}

export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "Destructive",
	},
}

export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "Ghost",
	},
}

export const Link: Story = {
	args: {
		variant: "link",
		children: "Link",
	},
}

export const FileUpload: Story = {
	args: {
		variant: "solid",
		children: "Upload",
	},
	render: (args) => {
		return (
			<FileTrigger>
				<Button {...args} />
			</FileTrigger>
		)
	},
}
