# @pixelshades/ui

## 0.1.1

### Patch Changes

- 5171866: fix: DatePicker
- Updated dependencies [5171866]
  - @pixelshades/styles@0.1.1

## 0.1.0

### Minor Changes

- 132364d: feat: Unify Select Styling
- ce9abf9: feat: add MultiLine TextField support

### Patch Changes

- c16e1af: fix DatePicker helperText type
- 57cc119: fix ref forwarding for TextField
- 861c19b: Add Required Indicator to Label
- Updated dependencies [e11db49]
- Updated dependencies [e11db49]
- Updated dependencies [132364d]
- Updated dependencies [ce9abf9]
  - @pixelshades/styles@0.1.0
  - @pixelshades/utils@0.1.0

## 0.0.8

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
- Updated dependencies [abcbd90]
- Updated dependencies [6fa08d8]
  - @pixelshades/styles@0.0.4
  - @pixelshades/utils@0.0.1

## 0.0.7

### Patch Changes

- fbb7db0: fix bundling
- Updated dependencies [fbb7db0]
  - @pixelshades/styles@0.0.3

## 0.0.5

### Patch Changes

- 14dfe06: Improved Form Support
- Updated dependencies [14dfe06]
  - @pixelshades/styles@0.0.1

## 0.0.1

### Patch Changes

- Update Component Export to use Objects
