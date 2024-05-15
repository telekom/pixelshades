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

function getContrastColor(color: Color) {
	// Calculate luminance
	const luminance = color.luminance

	// If luminance is greater than 0.5, use black for contrast, otherwise use white
	return luminance > 0.5 ? "#000000" : "#FFFFFF"
}

export type Theme = {
	primaryScale: Palette[]
	primaryContrast: string
	primaryHighcontrastScale: Palette[]

	neutralScale: Palette[]
	neutralHighcontrastScale: Palette[]
	neutralContrast: string

	successScale: Palette[]
	successHighcontrastScale: Palette[]

	infoScale: Palette[]
	infoHighcontrastScale: Palette[]

	destructiveScale: Palette[]
	destructiveHighcontrastScale: Palette[]

	background: Color
	contrast: Color
}

export const generateTheme = ({
	primary,
	success,
	info,
	destructive,
	neutral,
}: {
	primary: string
	success: string
	info: string
	destructive: string
	neutral: string
}): Theme => {
	const primaryScale = generateColorPalette({ color: primary })
	const primaryHighcontrastScale = generateColorPalette({ color: primary, highcontrast: true })
	const primaryContrast = getContrastColor(primaryScale[5].color)

	const neutralScale = generateColorPalette({ color: neutral })
	const neutralHighcontrastScale = generateColorPalette({ color: neutral, highcontrast: true })
	const neutralContrast = getContrastColor(primaryScale[5].color)

	const contrast = primaryScale[5].color.contrastWCAG21(neutralContrast)

	console.log(contrast)

	const successScale = generateColorPalette({ color: success })
	const successHighcontrastScale = generateColorPalette({ color: success, highcontrast: true })

	const infoScale = generateColorPalette({ color: info })
	const infoHighcontrastScale = generateColorPalette({ color: info, highcontrast: true })

	const destructiveScale = generateColorPalette({ color: destructive })
	const destructiveHighcontrastScale = generateColorPalette({ color: destructive, highcontrast: true })

	return {
		primaryScale,
		primaryHighcontrastScale,
		primaryContrast,

		neutralScale,
		neutralHighcontrastScale,
		neutralContrast,

		successScale,
		successHighcontrastScale,

		infoScale,
		infoHighcontrastScale,

		destructiveScale,
		destructiveHighcontrastScale,

		background: neutralScale[0].color,
		contrast: new Color("hsl(0 0% 100%)"),
	}
}

export const exportTheme = ({
	primaryScale,
	successScale,
	infoScale,
	destructiveScale,
	neutralScale,
	background,
	contrast,
}: Theme) => {
	const transformColor = (color: Color) => {
		return color.to("hsl").toString({ format: "hsl" }).replace("hsl(", "").replace(")", "")
	}

	const primaryScaleString = primaryScale
		.map((shade) => `--primary-scale-${shade.name}: ${transformColor(shade.color)};`)
		.join("\n\t\t")

	const neutralScaleString = neutralScale
		.map((shade) => `--neutral-scale-${shade.name}: ${transformColor(shade.color)};`)
		.join("\n\t\t")

	const successScaleString = successScale
		.map((shade) => `--success-scale-${shade.name}: ${transformColor(shade.color)};`)
		.join("\n\t\t")

	const infoScaleString = infoScale
		.map((shade) => `--info-scale-${shade.name}: ${transformColor(shade.color)};`)
		.join("\n\t\t")

	const destructiveScaleString = destructiveScale
		.map((shade) => `--destructive-scale-${shade.name}: ${transformColor(shade.color)};`)
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
      

		  --contrast: ${transformColor(contrast)};
          --background: ${transformColor(background)};
          --foreground: var(--neutral-scale-900);
      
          --subtle: var(--neutral-scale-100);
          --subtle-foreground: var(--neutral-scale-900);
      
          --border: var(--neutral-scale-300);
      
          --primary: var(--primary-scale-500);
          --primary-foreground: var(--contrast);
      
          --destructive: var(--destructive-scale-500);
          --destructive-foreground: var(--contrast);
          
          --ring: var(--primary);
          --radius: 0.5rem;
      
          --info: var(--info-scale-500);
          --info-foreground: var(--contrast);
        }
      }
    `

	return base
}
