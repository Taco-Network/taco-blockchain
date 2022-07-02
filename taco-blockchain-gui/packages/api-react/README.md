# @taco/api-react

![Alt text](https://www.taco-network.net/img/taco_logo.svg)

This library provides react hooks on the top of @taco/api and uses [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) under do hood.
It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & cache2 logic yourself. Providing much more benefits:

- Automatically refresh queries when data changed (using events from Taco Blockchain).
- Tracking loading state in order to show UI spinners.
- Avoiding duplicate requests for the same data.
- Optimistic updates to make the UI feel faster.
- Managing cache lifetimes as the user interacts with the UI.
- Ability to use it without React library
- Support for polling and parallel queries

## Query Example

### **`PublicKeys.tsx`**

```tsx
import React from 'react';
import { useGetPublicKeysQuery } from '@taco/api-react';
import Suspender from 'react-suspender';

export default function PublicKeys() {
  const { data: publicKeys, isLoading, error } = useGetPublicKeysQuery();

  if (isLoading) {
    return (
      <Suspender />
    );
  }

  if (error) {
    return (
      <Alert severiry="error">
        {error.message}
      </Alert>
    );
  }

  return (
    <ul>
      {publicKeys.map(key => (
        <li key={key}>
          {key}
        </li>
      ))}
    </ul>
  );
}
```

### **`Application.tsx`**

```tsx
import React, { Suspense } from 'react';
import Websocket from 'ws'; // or read this value from electron main application
import { store, api } from '@taco/api-react';
import PublicKeys from './PublicKeys';

// prepare api
api.initializeConfig({
  url: 'wss://127.0.0.1:54000',
  cert: fs.readFileSync(certPath).toString(), // or read this value from electron main application
  key: fs.readFileSync(keyPath).toString(), // or read this value from electron main application
  webSocket: Websocket,
});

export default function Application() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <PublickKeys />
      </Provider>
    </Suspense>
  );
}
```
