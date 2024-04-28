---
"@pixelshades/styles": patch
"@pixelshades/utils": patch
"@pixelshades/ui": patch
---

Improved createStyleContext

withContext will now default to it's own styles if no provider is set
```ts
import { createStyleContext } from "@pixelshades/utils/styles"

const { withContext, withProvider } = createStyleContext(styleVariants)

const UnstyledButton = ({ children, ...props }: ButtonProps) => {
	return <div {...props}>{children}</div>

const Button = withContext(UnstyledButton, "button")
}
