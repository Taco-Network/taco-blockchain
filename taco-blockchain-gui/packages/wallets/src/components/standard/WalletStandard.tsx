import React from 'react';
import { Trans } from '@lingui/macro';
import { useShowDebugInformation, Flex } from '@taco/core';
import WalletHistory from '../WalletHistory';
import WalletStandardCards from './WalletStandardCards';
import WalletReceiveAddress from '../WalletReceiveAddress';
import WalletSend from '../WalletSend';
import WalletHeader from '../WalletHeader';
import WalletConnections from '../WalletConnections';

type StandardWalletProps = {
  walletId: number;
};

export default function StandardWallet(props: StandardWalletProps) {
  const { walletId } = props;
  const showDebugInformation = useShowDebugInformation();

  return (
    <Flex flexDirection="column" gap={2}>
      <WalletHeader
        walletId={walletId}
        title={<Trans>Taco Wallet</Trans>}
      />

      <Flex flexDirection="column" gap={3}>
        <WalletStandardCards walletId={walletId} />
        <WalletReceiveAddress walletId={walletId} />
        <WalletSend walletId={walletId} />
        <WalletHistory walletId={walletId} />
        {showDebugInformation && (
          <WalletConnections walletId={walletId} />
        )}
      </Flex>
    </Flex>
  );
}
