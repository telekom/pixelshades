# @pixelshades/ui

## 0.3.13

### Patch Changes

- edb8853: fix: missconfigured export

## 0.3.12

### Patch Changes

- 0196e8c: fix: tailwind config colors

## 0.3.11

### Patch Changes

- e81ee8f: fix: Alert export

## 0.3.10

### Patch Changes

- 643fc86: feat: add default .css vars
- 85ea017: fix: readd Button ref props
- Updated dependencies [85ea017]
  - @pixelshades/styles@0.3.6
  - @pixelshades/utils@0.1.2

## 0.3.9

### Patch Changes

- 515a668: fix: Avatar Type Exports
- Updated dependencies [515a668]
  - @pixelshades/styles@0.3.5

## 0.3.8

### Patch Changes

- 1af9ef5: fix: avatar bundling

## 0.3.7

### Patch Changes

- 9cb144d: feat: add Avatar Component
- Updated dependencies [9cb144d]
  - @pixelshades/styles@0.3.4

## 0.3.6

### Patch Changes

- 35eaf22: modernize RadioGroup

## 0.3.5

### Patch Changes

- 4598f44: refactor: cleanup drawer
- 8b82d38: feat: update calendar to mark today's date
- cf81fb5: feat: add RadioCard
- 50066dc: fix: radio group working horizontally
- Updated dependencies [4598f44]
- Updated dependencies [8b82d38]
- Updated dependencies [cf81fb5]
- Updated dependencies [50066dc]
  - @pixelshades/styles@0.3.3

## 0.3.4

### Patch Changes

- f5d039e: feat: add SelectLabel and SelectSection to Select

## 0.3.3

### Patch Changes

- 96d5a16: unify popover styles across components
- ee6d32d: fix: select not rendering an empty label anymore
- 079e2d6: feat: add DialogCloseButton component
- Updated dependencies [96d5a16]
- Updated dependencies [079e2d6]
  - @pixelshades/styles@0.3.2

## 0.3.2

### Patch Changes

- 56d4739: chore: remove popover width to be able be set in components
- Updated dependencies [87ae004]
- Updated dependencies [56d4739]
  - @pixelshades/styles@0.3.1

## 0.3.1

### Patch Changes

- 6c61b28: fix: drawer not bundling as client component

## 0.3.0

### Minor Changes

- 1a3afa0: add drawer component

### Patch Changes

- de2134e: fix: menu button submenus not opening
- Updated dependencies [de2134e]
- Updated dependencies [1a3afa0]
  - @pixelshades/styles@0.3.0
  - @pixelshades/utils@0.1.1

## 0.2.1

### Patch Changes

- f245ca8: fix: add optional onClick for compabiltiy with other libraries

## 0.2.0

### Minor Changes

- 2e6a01f: feat: add new design token "info"
- e588c3e: feat: enhance Button styling and capabilties
- cfe51d2: feat: add date-range-picker component
- 416398d: feat: enhance all input based components

### Patch Changes

- 8e5e8da: feat: add slider component
- Updated dependencies [e588c3e]
- Updated dependencies [8e5e8da]
- Updated dependencies [cfe51d2]
- Updated dependencies [416398d]
  - @pixelshades/styles@0.2.0

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
