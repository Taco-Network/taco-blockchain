import { WalletType } from '@taco/api';
import type { Wallet } from '@taco/api';

export default function getWalletPrimaryTitle(wallet: Wallet): string {
  switch (wallet.type) {
    case WalletType.STANDARD_WALLET:
      return 'Taco';
    default:
      return wallet.meta?.name ?? wallet.name;
  }
}
