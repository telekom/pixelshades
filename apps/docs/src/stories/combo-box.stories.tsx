import { ComboBox, ComboBoxItem } from "@dv/ui/components"
import type { Meta, StoryObj } from "@storybook/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof ComboBox> = {
	component: ComboBox,
	title: "Components/UI/ComboBox",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div className={`${inter.variable} font-sans relative w-full h-full dark`}>
			<Story />
		</div>
	),
}

export default meta

type Story = StoryObj<typeof ComboBox>

export const Example = () => {
	return (
		<ComboBox label="Project">
			<ComboBoxItem>Health Dashboard</ComboBoxItem>
			<ComboBoxItem>To-Do App</ComboBoxItem>
			<ComboBoxItem>UI Kit</ComboBoxItem>
			<ComboBoxItem>Portfolio Site</ComboBoxItem>
		</ComboBox>
	)
}

export const Outline: Story = {
	args: {
		children: "Outline",
	},
}
