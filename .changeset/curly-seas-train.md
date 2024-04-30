---
"@pixelshades/styles": minor
---

feat: add new styling

```ts
import { type TextFieldProps, TextField } from "@pixelshades/ui/components"

const TextField = forwardRef(
	({
		label,
		helperText,
		description,
		tooltip,
		errorMessage,
		ref,
		isRequired,
		multiLine,
		cols,
		rows,
		...props
	}: TextFieldProps & { ref?: any }) => (
		<AriaTextField className={"flex flex-col gap-sm"} isRequired={isRequired} {...props}>
			<Label tooltip={tooltip} description={description} isRequired={isRequired}>
				{label}
			</Label>
			
```
