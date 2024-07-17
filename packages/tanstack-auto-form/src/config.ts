import AutoFormCheckbox from "./fields/checkbox"
import AutoFormDate from "./fields/date"
import AutoFormEnum from "./fields/enum"
import AutoFormInput from "./fields/input"
import AutoFormNumber from "./fields/number"

export const INPUT_COMPONENTS = {
	checkbox: AutoFormCheckbox,
	date: AutoFormDate,
	select: AutoFormEnum,
	number: AutoFormNumber,
	fallback: AutoFormInput,
}

/**
 * Define handlers for specific Zod types.
 * You can expand this object to support more types.
 */
export const DEFAULT_ZOD_HANDLERS: {
	[key: string]: keyof typeof INPUT_COMPONENTS
} = {
	ZodBoolean: "checkbox",
	ZodDate: "date",
	ZodEnum: "select",
	ZodNativeEnum: "select",
	ZodNumber: "number",
}
