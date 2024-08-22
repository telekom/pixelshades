# @pixelshades/styles

## 0.5.6

### Patch Changes

- fe9c9ca: bump deps

## 0.5.5

### Patch Changes

- e0a8790: remove margin from seprarator

## 0.5.4

### Patch Changes

- c5a503f: fix checkbox styling
  fix table styling

## 0.5.3

### Patch Changes

- 75f1639: bump react aria

## 0.5.2

### Patch Changes

- 38aaf15: Upgrade to React-Aria 3.34.0

## 0.5.1

### Patch Changes

- 90fba18: fix: numberfield not showing error message
- ea4e5c7: fix component error states

## 0.5.0

### Minor Changes

- 21472a1: rework listbox based components

### Patch Changes

- 8e18984: remove experimental tabs variant

## 0.4.16

### Patch Changes

- 6b0f54f: rework form field based components
- 6b0f54f: rework all input based components

## 0.4.15

### Patch Changes

- efa8a72: stuff

## 0.4.14

### Patch Changes

- 77e21e2: Remove left/top border of last button in button group if button group consists of only 2 buttons

## 0.4.13

### Patch Changes

- 5edc863: Cleanup dep tree

## 0.4.12

### Patch Changes

- 63ffc97: unify formfield label spacing, fix numberfield button overlap

## 0.4.11

### Patch Changes

- e149d9c: add avatar profile menu example

## 0.4.10

### Patch Changes

- 5303d11: remove min heights from dialog

## 0.4.9

### Patch Changes

- 24c9388: fix badge styles

## 0.4.8

### Patch Changes

- d35cecd: rework badges

## 0.4.7

### Patch Changes

- 4b1f9ed: make Input Error State less in your face

## 0.4.6

### Patch Changes

- 498e973: reworked switch component

## 0.4.5

### Patch Changes

- 866f1be: fix combobox focus styles

## 0.4.4

### Patch Changes

- ecc5e9b: fix date picker popover styles

## 0.4.3

### Patch Changes

- 475d08b: add icon variant to button

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
