import type { Meta, StoryObj } from "@storybook/react"
import { Inter } from "next/font/google"

import { Checkbox, CheckboxGroup } from "@dv/ui/components"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof CheckboxGroup> = {
	component: CheckboxGroup,
	title: "Components/UI/CheckboxGroup",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div className={`${inter.variable} font-sans relative w-full h-full dark`}>
			<Story />
		</div>
	),
	args: {},
}

export default meta

type Story = StoryObj<typeof CheckboxGroup>

export const Default: Story = {
	args: {},
	render: (args) => {
		return (
			<CheckboxGroup label="Notifications" defaultValue={["email"]} {...args}>
				<Checkbox value="push">Push</Checkbox>
				<Checkbox value="email">Email</Checkbox>
				<Checkbox value="text">Text</Checkbox>
			</CheckboxGroup>
		)
	},
}

export const WithError: Story = {
	args: {
		error: "Please Pick Something",
	},
	render: (args) => {
		return (
			<CheckboxGroup label="Notifications" {...args}>
				<Checkbox value="push">Push</Checkbox>
				<Checkbox value="email">Email</Checkbox>
				<Checkbox value="text">Text</Checkbox>
			</CheckboxGroup>
		)
	},
}
