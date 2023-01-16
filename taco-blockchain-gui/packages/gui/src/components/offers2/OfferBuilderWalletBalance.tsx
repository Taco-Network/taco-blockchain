import { WalletType } from '@taco/api';
import { useGetWalletBalanceQuery } from '@taco/api-react';
import { FormatLargeNumber, mojoToCATLocaleString, mojoToTacoLocaleString, useLocale } from '@taco/core';
import { useWallet } from '@taco/wallets';
import { Trans } from '@lingui/macro';
import React, { useMemo } from 'react';

export type OfferBuilderWalletBalanceProps = {
  walletId: number;
};

export default function OfferBuilderWalletBalance(props: OfferBuilderWalletBalanceProps) {
  const { walletId } = props;
  const [locale] = useLocale();
  const { data: walletBalance, isLoading: isLoadingWalletBalance } = useGetWalletBalanceQuery({
    walletId,
  });

  const { unit, wallet, loading } = useWallet(walletId);

  const isLoading = isLoadingWalletBalance || loading;

  const xtxBalance = useMemo(() => {
    if (isLoading || !wallet || !walletBalance || !('spendableBalance' in walletBalance)) {
      return undefined;
    }

    if (wallet.type === WalletType.STANDARD_WALLET) {
      return mojoToTacoLocaleString(walletBalance.spendableBalance, locale);
    }

    if (wallet.type === WalletType.CAT) {
      return mojoToCATLocaleString(walletBalance.spendableBalance, locale);
    }

    return undefined;
  }, [isLoading, wallet, walletBalance, walletBalance?.spendableBalance, locale]);

  if (!isLoading && xtxBalance === undefined) {
    return null;
  }

  return (
    <Trans>
      Spendable Balance:{' '}
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          {xtxBalance}
          &nbsp;
          {unit?.toUpperCase()}
        </>
      )}
    </Trans>
  );
}
