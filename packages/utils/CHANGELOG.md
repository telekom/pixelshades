# @pixelshades/utils

## 0.1.6

### Patch Changes

- 75f1639: bump react aria
- Updated dependencies [75f1639]
  - @pixelshades/cn@0.1.7

## 0.1.5

### Patch Changes

- 6b0f54f: rework form field based components
- Updated dependencies [6b0f54f]
  - @pixelshades/cn@0.1.6

## 0.1.4

### Patch Changes

- efa8a72: stuff
- Updated dependencies [efa8a72]
  - @pixelshades/cn@0.1.4

## 0.1.3

### Patch Changes

- 5edc863: Cleanup dep tree
- Updated dependencies [5edc863]
  - @pixelshades/cn@0.1.3

## 0.1.2

### Patch Changes

- 85ea017: fix: readd Button ref props

## 0.1.1

### Patch Changes

- de2134e: fix: menu button submenus not opening

## 0.1.0

### Minor Changes

- e11db49: feat: add TimeField Component
- e11db49: fix: withStyle with variants without slots

## 0.0.1

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
