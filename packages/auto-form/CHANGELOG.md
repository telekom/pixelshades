# @pixelshades/utils

## 2.1.3

### Patch Changes

- 5edc863: Cleanup dep tree
- Updated dependencies [5edc863]
  - @pixelshades/toast@0.0.2
  - @pixelshades/ui@0.5.10
  - @pixelshades/utils@0.1.3

## 2.1.2

### Patch Changes

- 26db78a: fix combobox output value
- Updated dependencies [26db78a]
  - @pixelshades/ui@0.5.9
  - @pixelshades/toast@0.0.1

## 2.1.1

### Patch Changes

- 1c3078c: fix combobox havign wrong input for native enums
- Updated dependencies [1c3078c]
  - @pixelshades/ui@0.5.8
  - @pixelshades/toast@0.0.1

## 2.1.0

### Minor Changes

- 0c8de7b: add combobox field type

### Patch Changes

- 68999d9: fix: select being unctrolled
- Updated dependencies [63ffc97]
  - @pixelshades/ui@0.5.7
  - @pixelshades/toast@0.0.1

## 2.0.6

### Patch Changes

- Updated dependencies [e149d9c]
  - @pixelshades/ui@0.5.6
  - @pixelshades/toast@0.0.1

## 2.0.5

### Patch Changes

- Updated dependencies [b108742]
  - @pixelshades/ui@0.5.5
  - @pixelshades/toast@0.0.1

## 2.0.4

### Patch Changes

- Updated dependencies [577235f]
  - @pixelshades/ui@0.5.4
  - @pixelshades/toast@0.0.1

## 2.0.3

### Patch Changes

- Updated dependencies [5303d11]
  - @pixelshades/ui@0.5.3
  - @pixelshades/toast@0.0.1

## 2.0.2

### Patch Changes

- @pixelshades/ui@0.5.2
- @pixelshades/toast@0.0.1

## 2.0.1

### Patch Changes

- Updated dependencies [d35cecd]
  - @pixelshades/ui@0.5.1
  - @pixelshades/toast@0.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [894f331]
- Updated dependencies [eeedfd4]
  - @pixelshades/ui@0.5.0
  - @pixelshades/toast@0.0.1

## 1.0.10

### Patch Changes

- @pixelshades/ui@0.4.9
- @pixelshades/toast@0.0.1

## 1.0.9

### Patch Changes

- Updated dependencies [498e973]
  - @pixelshades/ui@0.4.8
  - @pixelshades/toast@0.0.1

## 1.0.8

### Patch Changes

- @pixelshades/ui@0.4.7
- @pixelshades/toast@0.0.1

## 1.0.7

### Patch Changes

- Updated dependencies [ecc5e9b]
- Updated dependencies [e4e994f]
  - @pixelshades/ui@0.4.6
  - @pixelshades/toast@0.0.1

## 1.0.6

### Patch Changes

- ff82c21: fix spacing inconsitencies
- ff82c21: add innerClassname for custom spacings
- Updated dependencies [26fc2a6]
  - @pixelshades/ui@0.4.5
  - @pixelshades/toast@0.0.1

## 1.0.5

### Patch Changes

- Updated dependencies [7762e00]
  - @pixelshades/ui@0.4.4
  - @pixelshades/toast@0.0.1

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
