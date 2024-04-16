import { Checkbox } from "@dv/ui/components"
import type { Meta, StoryObj } from "@storybook/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	title: "Components/UI/Checkbox",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div className={`${inter.variable} font-sans relative w-full h-full dark`}>
			<Story />
		</div>
	),
	args: {},
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
	args: {},
}

export const WithLabel: Story = {
	args: {
		children: "Cool Label",
	},
}
