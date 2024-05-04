# @pixelshades/styles

## 0.3.1

### Patch Changes

- 87ae004: chore: remove padding from menu content
- 56d4739: chore: remove popover width to be able be set in components

## 0.3.0

### Minor Changes

- 1a3afa0: add drawer component

### Patch Changes

- de2134e: fix: menu button submenus not opening

## 0.2.0

### Minor Changes

- e588c3e: feat: enhance Button styling and capabilties
- cfe51d2: feat: add date-range-picker component
- 416398d: feat: enhance all input based components

### Patch Changes

- 8e5e8da: feat: add slider component

## 0.1.1

### Patch Changes

- 5171866: fix: DatePicker

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
