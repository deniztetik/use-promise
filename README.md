# use-promise

A React Hook that takes a promise which will be executed as an effect, with optional watchers

## Installation Instructions

`yarn add @aslan-hooks/use-promise`

or

`npm i --save @aslan-hooks/use-promise`

## Usage Instructions

```jsx
import React from "react";

import usePromise from "@aslan-hooks/use-promise";

const fakeAPICall = () =>
  new Promise(resolve => {
    setTimeout(() => resolve("Text"), 1000);
  });

const Component = () => {
  const [loading, result, error, refresh] = usePromise(fakeAPICall);

  return <div>{loading ? "Loading..." : `The result is ${result}`}</div>;
};
```
