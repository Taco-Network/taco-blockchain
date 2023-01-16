import { useGetNetworkInfoQuery } from '@taco/api-react';

export default function useIsMainnet(): boolean | undefined {
  const { data: networkInfo, isLoading } = useGetNetworkInfoQuery();
  const networkPrefix = networkInfo?.networkPrefix;

  if (!networkPrefix) {
    return undefined;
  }

  return networkPrefix.toLowerCase() === 'xtx';
}
