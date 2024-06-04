# @pixelshades/styles

## 0.4.2

### Patch Changes

- 7f70aff: feat: add default button color prop

## 0.4.1

### Patch Changes

- abe3321: fix: input styling
- 6077f8b: fix badge variants

## 0.4.0

### Minor Changes

- 5cf4467: add color attribut to Button Component
- 11edbff: fix: neutral colors

### Patch Changes

- bb962ff: fix: combobox base styling

## 0.3.7

### Patch Changes

- c42882e: fix: ghost button hover styling
- 7b425fa: fix: calendar focus style
- 5aabf01: improve command component
- 9f7cfc7: feat: improve select and calendar styling

## 0.3.6

### Patch Changes

- 85ea017: fix: readd Button ref props

## 0.3.5

### Patch Changes

- 515a668: fix: Avatar Type Exports

## 0.3.4

### Patch Changes

- 9cb144d: feat: add Avatar Component

## 0.3.3

### Patch Changes

- 4598f44: refactor: cleanup drawer
- 8b82d38: feat: update calendar to mark today's date
- cf81fb5: feat: add RadioCard
- 50066dc: fix: radio group working horizontally

## 0.3.2

### Patch Changes

- 96d5a16: unify popover styles across components
- 079e2d6: feat: add DialogCloseButton component

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
