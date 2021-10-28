# input-masks
Masks for input fields in forms.

## Description
This is a utility lib that provides mask functions for inputs, it is necessary to reference these functions in the `keyup` event **(Important: Only in the onKeyUp event)** in inputs `type=text` **(Give preference to type text)** to achieve the desired mask effect.

## Installation
```bash
$npm i @lbtek/input-masks
# or
$ yarn add @lbtek/input-masks
```

## Use
Available mask functions:

- **cepMask**
- **cpfMask**
- **cnpjMask**
- **cpfCnpjMask**
- **phoneMask**

### Example of use:

```html
<input type="text" id="randomInput">

<script>
  import { cpfCnpjMask } from '@lbtek/input-masks'

  document.getElementById('randomInput')
    .addEventListener('keyup', cpfCnpjMask)
</script>
```
