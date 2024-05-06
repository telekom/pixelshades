import { Heading, Radio, Typography } from "@pixelshades/ui/components"
import { createFileRoute } from "@tanstack/react-router"
import { ColorPreview } from "~/components/color-preview"
import { generateRadixColors } from "~/lib/colors/utils"

import { cn } from "@pixelshades/utils/styles"
import { useState } from "react"
import {
	amber,
	blue,
	cyan,
	emerald,
	fuchsia,
	gray,
	green,
	indigo,
	lime,
	neutral,
	orange,
	pink,
	purple,
	red,
	rose,
	sky,
	slate,
	stone,
	teal,
	violet,
	yellow,
	zinc,
} from "tailwindcss/colors"

export const Route = createFileRoute("/themes")({
	component: Index,
})

const neutralColors = [
	{ name: "slate", value: slate },
	{ name: "gray", value: gray },
	{ name: "zinc", value: zinc },
	{ name: "neutral", value: neutral },
	{ name: "stone", value: stone },
]

const primaryColors = [
	neutral[300],
	red[400],
	orange[500],
	amber[400],
	yellow[400],
	lime[500],
	green[500],
	emerald[600],
	teal[500],
	cyan[500],
	sky[500],
	blue[600],
	indigo[600],
	violet[600],
	purple[700],
	fuchsia[600],
	pink[600],
	rose[600],
]

function Index() {
	const [primaryColor, setPrimaryColor] = useState("hsl(329 100% 44%)")
	const [neutralColor, setNeutralColor] = useState(neutralColors[0])

	const darkModeResult = generateRadixColors({
		appearance: "dark",
		primary: primaryColor,
		success: "hsl(144 100% 44%)",
		info: "hsl(210 100% 32%)",
		destructive: "hsl(350 89% 60%)",
		neutral: neutralColor.value[500],
		background: neutralColor.value[950],
	})

	// console.log(
	// 	exportTheme({
	// 		primaryScale: darkModeResult.primaryScale,
	// 		neutralScale: darkModeResult.neutralScale,
	// 		infoScale: darkModeResult.infoScale,
	// 		successScale: darkModeResult.sucessScale,
	// 		destructiveScale: darkModeResult.destructiveScale,
	// 		background: darkModeResult.background,
	// 		foreground: darkModeResult.foreground,
	// 	}),
	// )

	return (
		<div className="container flex min-h-screen w-full flex-col items-center gap-layout-md py-layout-lg">
			<Heading level={1}>Create a new theme</Heading>

			<Radio.Group value={primaryColor} orientation="horizontal" onChange={(value) => setPrimaryColor(value)}>
				{primaryColors.map((color, i) => (
					<Radio showRadio={false} key={i} value={color}>
						{({ isSelected }) => {
							return (
								<ColorPreview
									className={cn({
										ring: isSelected,
									})}
									key={i}
									style={{ backgroundColor: color }}
								/>
							)
						}}
					</Radio>
				))}
			</Radio.Group>

			<Radio.Group
				orientation="horizontal"
				value={neutralColor.name}
				onChange={(value) => setNeutralColor(neutralColors.find((color) => color.name === value)!)}
			>
				{neutralColors.map((color, i) => (
					<Radio showRadio={false} key={i} value={color.name}>
						{({ isSelected }) => {
							return (
								<ColorPreview
									className={cn({
										ring: isSelected,
									})}
									key={i}
									style={{ backgroundColor: color.value[500] }}
								/>
							)
						}}
					</Radio>
				))}
			</Radio.Group>

			<div className="grid grid-cols-2 items-start justify-center gap-4 md:grid-cols-8 md:gap-6">
				<ColorPreview name="Background" style={{ backgroundColor: darkModeResult.background }} />
				<ColorPreview name="Primary" style={{ backgroundColor: darkModeResult.primaryScale[8] }} />
				<ColorPreview name="Destructive" style={{ backgroundColor: darkModeResult.destructiveScale[8] }} />
				<ColorPreview name="Subtle" style={{ backgroundColor: darkModeResult.neutralScale[8] }} />
				<ColorPreview name="Border" style={{ backgroundColor: darkModeResult.neutralScale[5] }} />
				<ColorPreview name="Ring" style={{ backgroundColor: darkModeResult.primaryScale[8] }} />
			</div>
			<div className="space-y-layout-md">
				<Heading level={2}>Scales</Heading>

				<div className="flex w-full flex-row items-center gap-md">
					<Typography className="flex-1">Primary</Typography>

					{darkModeResult.primaryScale.map((color, i) => (
						<ColorPreview key={i} style={{ backgroundColor: color }} />
					))}
				</div>

				<div className="flex w-full flex-row items-center gap-md">
					<Typography className="flex-1">Neutral</Typography>

					{darkModeResult.neutralScale.map((color, i) => (
						<ColorPreview key={i} style={{ backgroundColor: color }} />
					))}
				</div>

				<div className="flex w-full flex-row items-center gap-md">
					<Typography className="flex-1">Success</Typography>

					{darkModeResult.sucessScale.map((color, i) => (
						<ColorPreview key={i} style={{ backgroundColor: color }} />
					))}
				</div>

				<div className="flex w-full flex-row items-center gap-md">
					<Typography className="flex-1">Info</Typography>

					{darkModeResult.infoScale.map((color, i) => (
						<ColorPreview key={i} style={{ backgroundColor: color }} />
					))}
				</div>

				<div className="flex w-full flex-row items-center gap-md">
					<Typography className="flex-1">Destructive</Typography>

					{darkModeResult.destructiveScale.map((color, i) => (
						<ColorPreview key={i} style={{ backgroundColor: color }} />
					))}
				</div>
			</div>
		</div>
	)
}

const exportTheme = ({
	primaryScale,
	successScale,
	infoScale,
	destructiveScale,
	neutralScale,
	background,
	foreground,
}: {
	primaryScale: string[]
	neutralScale: string[]
	successScale: string[]
	infoScale: string[]
	destructiveScale: string[]
	background: string
	foreground: string
}) => {
	const primaryScaleString = primaryScale
		.map((color, index) => `--primary-scale-${index + 1}: ${color.replace("hsl(", "").replace(")", "")};`)
		.join("\n\t\t")

	const neutralScaleString = neutralScale
		.map((color, index) => `--neutral-scale-${index + 1}: ${color.replace("hsl(", "").replace(")", "")};`)
		.join("\n\t\t")

	const successScaleString = successScale
		.map((color, index) => `--success-scale-${index + 1}: ${color.replace("hsl(", "").replace(")", "")};`)
		.join("\n\t\t")

	const infoScaleString = infoScale
		.map((color, index) => `--info-scale-${index + 1}: ${color.replace("hsl(", "").replace(")", "")};`)
		.join("\n\t\t")

	const destructiveScaleString = destructiveScale
		.map((color, index) => `--destructive-scale-${index + 1}: ${color.replace("hsl(", "").replace(")", "")};`)
		.join("\n\t\t")

	const base = `
    @layer base {
        :root {
          ${primaryScaleString}
        
          ${neutralScaleString}
        
          ${successScaleString}
        
          ${infoScaleString}
        
          ${destructiveScaleString}


          --spacing-xs: 0.125rem;
          --spacing-sm: 0.25rem;
          --spacing-md: 0.5rem;
          --spacing-lg: 1rem;
          --spacing-xl: 1.5rem;
      
          --spacing-layout-xs: 1rem;
          --spacing-layout-sm: 1.5rem;
          --spacing-layout-md: 2rem;
          --spacing-layout-lg: 3rem;
          --spacing-layout-xl: 4rem;
          --spacing-layout-2xl: 6rem;
      
      
          --background: ${background.replace("hsl(", "").replace(")", "")};
          --foreground: ${foreground.replace("hsl(", "").replace(")", "")};
      
          --subtle: var(--neutral-scale-9);
          --subtle-foreground: var(--neutral-scale-11);
      
          --border: var(--neutral-scale-6);
      
          --primary: var(--primary-scale-9);
          --primary-foreground: var(--primary-scale-12);
      
          --destructive: var(--destructive-scale-9);
          --destructive-foreground: var(--destructive-scale-12);
          
          --ring: var(--primary-scale-9);
          --radius: 0.5rem;
      
          --info: var(--info-scale-9);
          --info-foreground: var(--info-scale-12);
        }
      }
    `

	return base
}
