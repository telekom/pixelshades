import { Select, SelectItem } from "@dv/ui/components"
import type { Meta, StoryObj } from "@storybook/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof Select> = {
	component: Select,
	title: "Components/UI/Select",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div className={`${inter.variable} font-sans relative w-full h-full dark`}>
			<Story />
		</div>
	),
}

export default meta

type Story = StoryObj<typeof Select>

export const Default = () => {
	return (
		<Select label="Framework">
			<SelectItem>React</SelectItem>
			<SelectItem>Qwik</SelectItem>
			<SelectItem>Vue</SelectItem>
			<SelectItem>Svelte</SelectItem>
		</Select>
	)
}
