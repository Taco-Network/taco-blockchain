import { createApi } from '@reduxjs/toolkit/query/react';

import tacoLazyBaseQuery from './tacoLazyBaseQuery';

export const baseQuery = tacoLazyBaseQuery({});

export default createApi({
  reducerPath: 'tacoApi',
  baseQuery,
  endpoints: () => ({}),
});
