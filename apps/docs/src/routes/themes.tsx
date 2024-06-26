import { Heading, RadioGroup, Typography } from "@pixelshades/ui/components"
import { createFileRoute } from "@tanstack/react-router"
import { ColorPreview } from "~/components/color-preview"

import { cn } from "@pixelshades/utils/styles"
import Color from "colorjs.io"
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
import { exportTheme, extendColorScale, generateTheme, transformTailwindColor } from "~/lib/colors/tailwind-themes"
import { invertValues } from "~/lib/colors/utils"

export const Route = createFileRoute("/themes")({
	component: Index,
})

const neutralColors = [
	{ name: "slate", value: slate[500] },
	{ name: "gray", value: gray[500] },
	{ name: "zinc", value: zinc[500] },
	{ name: "neutral", value: neutral[500] },
	{ name: "stone", value: stone[500] },
]

const shark = {
	"50": "#f5f6f6",
	"100": "#e5e7e8",
	"200": "#cdd0d4",
	"300": "#abafb5",
	"400": "#81868f",
	"500": "#666b74",
	"600": "#575b63",
	"700": "#4a4d54",
	"800": "#424448",
	"900": "#3a3c3f",
	"950": "#222326",
}

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
	const [neutralColor, setNeutralColor] = useState(neutralColors[0]!)
	const [successColor, setSuccessColor] = useState("hsl(144 100% 44%)")
	const [infoColor, setInfoColor] = useState("hsl(210 100% 32%)")
	const [destructiveColor, setDestructiveColor] = useState("hsl(350 89% 60%)")

	const theme = generateTheme({
		primary: primaryColor,
		success: successColor,
		info: infoColor,
		destructive: destructiveColor,
		neutral: neutralColor.value,
	})

	const extendedBlue = extendColorScale(blue, [850, 1000])
	const scale = invertValues(extendColorScale(rose, [850, 1000]))
	const scale2 = rose

	console.info(transformTailwindColor("neutral", invertValues(extendColorScale(shark, [850, 1000]))))

	// console.log(transformTailwindColor("neutral", shark))

	navigator.clipboard.writeText(exportTheme(theme))

	return (
		<div className="container flex min-h-screen w-full flex-col items-center gap-layout-md py-layout-lg">
			<Heading level={1}>Create a new theme</Heading>

			<div>
				{Object.entries(scale).map(([key, value]) => (
					<div key={key} className="flex items-center gap-md px-md py-sm" style={{ backgroundColor: value }}>
						<div className="w-[100px]">{key}</div>
						<div className="w-[200px]">{value}</div>
						<div>{new Color("hsl(0 0% 3.9216%)").contrastWCAG21(new Color(value).lighten(0.0))}</div>
					</div>
				))}
			</div>

			<div>
				{Object.entries(scale2).map(([key, value]) => (
					<div key={key} className="flex items-center gap-md px-md py-sm" style={{ backgroundColor: value }}>
						<div className="w-[100px]">{key}</div>
						<div className="w-[200px]">{value}</div>
						<div>{new Color("hsl(0 0% 100%)").contrastWCAG21(new Color(value))}</div>
					</div>
				))}
			</div>

			<div>
				{Object.entries(extendedBlue).map(([key, value]) => (
					<div key={key} className="flex items-center gap-md" style={{ backgroundColor: value }}>
						<div className="w-[100px]">{key}</div>
						<div className="w-[200px]">{value}</div>
					</div>
				))}
			</div>

			<RadioGroup value={primaryColor} orientation="horizontal" onChange={(value) => setPrimaryColor(value)}>
				{primaryColors.map((color, i) => (
					<RadioGroup.Item showRadio={false} key={i} value={color}>
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
					</RadioGroup.Item>
				))}
			</RadioGroup>

			<RadioGroup
				orientation="horizontal"
				value={neutralColor.name}
				onChange={(value) => setNeutralColor(neutralColors.find((color) => color.name === value)!)}
			>
				{neutralColors.map((color, i) => (
					<RadioGroup.Item showRadio={false} key={i} value={color.name}>
						{({ isSelected }) => {
							return (
								<ColorPreview
									className={cn({
										ring: isSelected,
									})}
									key={i}
									style={{ backgroundColor: color.value }}
								/>
							)
						}}
					</RadioGroup.Item>
				))}
			</RadioGroup>

			{/* <div className="grid grid-cols-2 items-start justify-center gap-4 md:grid-cols-8 md:gap-6">
				<ColorPreview name="Background" style={{ backgroundColor: darkModeResult.background }} />
				<ColorPreview name="Primary" style={{ backgroundColor: darkModeResult.primaryScale[8] }} />
				<ColorPreview name="Destructive" style={{ backgroundColor: darkModeResult.destructiveScale[8] }} />
				<ColorPreview name="Subtle" style={{ backgroundColor: darkModeResult.neutralScale[8] }} />
				<ColorPreview name="Border" style={{ backgroundColor: darkModeResult.neutralScale[5] }} />
				<ColorPreview name="Ring" style={{ backgroundColor: darkModeResult.primaryScale[8] }} />
			</div> */}
			<div className="space-y-layout-md">
				<Heading level={2}>Scales</Heading>

				<div className="flex w-full flex-row items-center gap-md">
					<Typography className="flex-1">Primary</Typography>

					{/* {darkModeResult.primaryScale.map((color, i) => (
						<ColorPreview key={i} style={{ backgroundColor: color }} />
					))} */}

					{theme.primaryScale.map((palette, i) => (
						<ColorPreview
							key={i}
							style={{ backgroundColor: palette.color.to("hsl").toString({ format: "hsl" }) }}
						/>
					))}
				</div>

				<div className="flex w-full flex-row items-center gap-md">
					<Typography className="flex-1">Neutral</Typography>

					{theme.neutralScale.map((palette, i) => (
						<ColorPreview
							key={i}
							style={{ backgroundColor: palette.color.to("hsl").toString({ format: "hsl" }) }}
						/>
					))}
				</div>

				<div className="flex w-full flex-row items-center gap-md">
					<Typography className="flex-1">Success</Typography>

					{theme.successScale.map((palette, i) => (
						<ColorPreview
							key={i}
							style={{ backgroundColor: palette.color.to("hsl").toString({ format: "hsl" }) }}
						/>
					))}
				</div>

				<div className="flex w-full flex-row items-center gap-md">
					<Typography className="flex-1">Info</Typography>

					{theme.infoScale.map((palette, i) => (
						<ColorPreview
							key={i}
							style={{ backgroundColor: palette.color.to("hsl").toString({ format: "hsl" }) }}
						/>
					))}
				</div>

				<div className="flex w-full flex-row items-center gap-md">
					<Typography className="flex-1">Destructive</Typography>

					{theme.destructiveScale.map((palette, i) => (
						<ColorPreview
							key={i}
							style={{ backgroundColor: palette.color.to("hsl").toString({ format: "hsl" }) }}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
