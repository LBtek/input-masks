# input-masks
Masks for input fields in forms.

## Description
This is a utility lib that provides mask functions for inputs, it is necessary to reference these functions in the `keyup` event **(Only in the 'keyup' event)** in inputs `type="text"` **(Give preference to type text)** to achieve the desired mask effect.

## Installation
```bash
$ npm i @lbtek/input-masks
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

### Example of basic use:

Use in a front-end project with resolution of importing modules through nodejs.
```html
<input type="text" id="randomInput">

<script>
  import { cpfCnpjMask } from '@lbtek/input-masks'

  document.getElementById('randomInput')
    .addEventListener('keyup', cpfCnpjMask)
</script>
```

### Attention!

To avoid problems with two-way data binding in vue components, you should use the 'lazy' modifier in v-model

To report a problem or suggestion, just open an issue in the [repository](https://github.com/LBtek/input-masks/issues).

This is an open source project, feel free to collaborate with the development of improvements 🤓.
