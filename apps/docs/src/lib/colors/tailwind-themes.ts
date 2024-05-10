import Color from "colorjs.io"

export interface Shade {
	name: string | number
	lightness: number
}

export interface Palette {
	name: string | number
	color: Color
}

const baseShades: Shade[] = [
	{ name: "50", lightness: 98 },
	{ name: "100", lightness: 95 },
	{ name: "200", lightness: 90 },
	{ name: "300", lightness: 82 },
	{ name: "400", lightness: 64 },
	{ name: "500", lightness: 46 },
	{ name: "600", lightness: 33 },
	{ name: "700", lightness: 24 },
	{ name: "800", lightness: 14 },
	{ name: "900", lightness: 7 },
	{ name: "950", lightness: 4 },
]

// This generates a color palette based on the provided color and shades.
// It takes a color string and an array of shades as input, and returns an array of palette objects.
export const generateColorPalette = ({
	color,
	preserve,
	shades = baseShades,
}: { color: string; preserve?: boolean; shades?: Shade[] }) => {
	const startColor = new Color(color).to("oklch")

	const lightnessDelta: { [key: string]: number } = {}

	const palette: Palette[] = shades.map((shade) => {
		const color = new Color(startColor)

		color.set({
			"hsl.l": shade.lightness,
		})

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
