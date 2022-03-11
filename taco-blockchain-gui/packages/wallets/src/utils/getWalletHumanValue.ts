import type { Wallet } from '@taco/api';
import { WalletType } from '@taco/api';
import { mojoToCATLocaleString, mojoToTacoLocaleString } from '@taco/core';

export default function getWalletHumanValue(wallet: Wallet, value: number): string {
  return wallet.type === WalletType.CAT
    ? mojoToCATLocaleString(value)
    : mojoToTacoLocaleString(value);
}
