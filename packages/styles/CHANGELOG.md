# @pixelshades/styles

## 0.1.0

### Minor Changes

- e11db49: feat: add TimeField Component
- 132364d: feat: Unify Select Styling
- ce9abf9: feat: add MultiLine TextField support

## 0.0.4

### Patch Changes

- abcbd90: Improved createStyleContext

  withContext will now default to it's own styles if no provider is set

  ```ts
  import { createStyleContext } from "@pixelshades/utils/styles";

  const { withContext, withProvider } = createStyleContext(styleVariants);

  const UnstyledButton = ({ children, ...props }: ButtonProps) => {
    return <div {...props}>{children}</div>;

    const Button = withContext(UnstyledButton, "button");
  };
  ```

- 6fa08d8: Rename DateRangeCalendar to RangeCalendar

## 0.0.3

### Patch Changes

- fbb7db0: fix bundling

## 0.0.1

### Patch Changes

- 14dfe06: Improved Form Support
