import { useEffect } from 'react';
import type { PlotNFT } from '@taco/api';
import { useGetPlotNFTsQuery } from '@taco/api-react';
import useUnconfirmedPlotNFTs from './useUnconfirmedPlotNFTs';
import PlotNFTExternal from 'types/PlotNFTExternal';

export default function usePlotNFTs(): {
  loading: boolean;
  nfts?: PlotNFT[];
  external?: PlotNFTExternal[];
  error?: Error;
} {
  const { data, isLoading: isLoadingGetPlotNFTs, error } = useGetPlotNFTsQuery(undefined, {
    pollingInterval: 10000,
  });

  const { unconfirmed, isLoading: isLoadingUnconfirmedPlotNFTs } = useUnconfirmedPlotNFTs();
  const isLoading = isLoadingGetPlotNFTs || isLoadingUnconfirmedPlotNFTs;

  /*
  function removeConfirmed() {
    if (isLoading) {
      return;
    }


  }

  console.log('nfts', data?.nfts);

  useEffect(() => {
    removeConfirmed();
  }, [data?.nfts, unconfirmed, isLoading]);
  */

  return {
    loading: isLoading,
    nfts: data?.nfts,
    external: data?.external,
    error,
  };
}
