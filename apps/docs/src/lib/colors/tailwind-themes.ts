import Color from "colorjs.io"

export interface Shade {
	name: string | number
	lightness: number
	highContrastLightness: number
}

export interface Palette {
	name: string | number
	color: Color
}

const baseShades: Shade[] = [
	{ name: "50", lightness: 98, highContrastLightness: 98 },
	{ name: "100", lightness: 95, highContrastLightness: 90 },
	{ name: "200", lightness: 90, highContrastLightness: 75 },
	{ name: "300", lightness: 82, highContrastLightness: 60 },
	{ name: "400", lightness: 64, highContrastLightness: 45 },
	{ name: "500", lightness: 46, highContrastLightness: 30 },
	{ name: "600", lightness: 33, highContrastLightness: 20 },
	{ name: "700", lightness: 24, highContrastLightness: 15 },
	{ name: "800", lightness: 14, highContrastLightness: 10 },
	{ name: "900", lightness: 7, highContrastLightness: 5 },
	{ name: "950", lightness: 4, highContrastLightness: 3 },
]

// This generates a color palette based on the provided color and shades.
// It takes a color string and an array of shades as input, and returns an array of palette objects.
export const generateColorPalette = ({
	color,
	preserve,
	highcontrast,
	shades = baseShades,
}: { color: string; preserve?: boolean; shades?: Shade[]; highcontrast?: boolean }) => {
	const startColor = new Color(color).to("oklch")

	const lightnessDelta: { [key: string]: number } = {}

	const palette: Palette[] = shades.map((shade) => {
		const color = new Color(startColor)

		if (highcontrast) {
			color.set({
				"hsl.l": shade.highContrastLightness,
			})
		} else {
			color.set({
				"hsl.l": shade.lightness,
			})
		}

		if (preserve) {
			lightnessDelta[shade.name] = color.get("hsl.l") - startColor.get("hsl.l")
		}

		return {
			name: shade.name,
			color: color,
		}
	})

	if (preserve) {
		const [closestShade] = Object.keys(lightnessDelta).sort((a, b) => lightnessDelta[a] - lightnessDelta[b])

		palette[palette.findIndex((shade) => shade.name === closestShade)].color = startColor
	}

	return palette
}
