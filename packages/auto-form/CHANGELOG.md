# @pixelshades/utils

## 1.0.4

### Patch Changes

- Updated dependencies [e0d5381]
- Updated dependencies [e0d5381]
  - @pixelshades/ui@0.4.3
  - @pixelshades/toast@0.0.1

## 1.0.3

### Patch Changes

- Updated dependencies [2b8bc56]
  - @pixelshades/ui@0.4.2
  - @pixelshades/toast@0.0.1

## 1.0.2

### Patch Changes

- 263994f: use @pixelshades/toast for toasting

## 1.0.1

### Patch Changes

- Updated dependencies [7b6c0ac]
  - @pixelshades/ui@0.4.1

## 1.0.0

### Patch Changes

- Updated dependencies [7907a9f]
- Updated dependencies [ce22f56]
- Updated dependencies [bb962ff]
- Updated dependencies [5cf4467]
- Updated dependencies [11edbff]
- Updated dependencies [2d0ce18]
- Updated dependencies [544e1b8]
  - @pixelshades/ui@0.4.0

## 0.0.5

### Patch Changes

- Updated dependencies [5aabf01]
- Updated dependencies [9f7cfc7]
  - @pixelshades/ui@0.3.15

## 0.0.4

### Patch Changes

- d9d108f: feat: export all types

## 0.0.3

### Patch Changes

- e495324: fix: ts missconfiguration

## 0.0.2

### Patch Changes

- Updated dependencies [fab11f0]
  - @pixelshades/ui@0.3.14

## 0.0.1

### Patch Changes

- f6ecb0d: Init Autoform
- Updated dependencies [edb8853]
  - @pixelshades/ui@0.3.13

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
