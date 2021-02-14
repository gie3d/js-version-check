# node-version-comparer

Set up

```
yarn add node-version-comparer
```

Usage

```js
import VersionComparer from 'node-version-comparer';

console.log(VersionComparer('1.0.12', '1.0.10')); // return 1
console.log(VersionComparer('1.0.1', '1.0.10')); // return -1
console.log(VersionComparer('1.0.1', '1.0.1')); // return 0
```
