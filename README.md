# js-version-check

## Set up

```
yarn add js-version-check
```

## Usage

```js
import VersionCheck from 'js-version-check';

console.log(VersionCheck('1.0.12', '1.0.10')); // return 1
console.log(VersionCheck('1.0.1', '1.0.10')); // return -1
console.log(VersionCheck('1.0.1', '1.0.1')); // return 0
```

## Version Naming support

```
1.0.0.0.0...0
```
