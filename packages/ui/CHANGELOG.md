# @pixelshades/ui

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
