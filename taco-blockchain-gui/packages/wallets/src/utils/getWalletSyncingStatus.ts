import { SyncingStatus } from '@taco/api';

export default function getWalletSyncingStatus(walletState) {
  const { syncing, synced } = walletState;

  if (syncing) {
    return SyncingStatus.SYNCING;
  } else if (synced) {
    return SyncingStatus.SYNCED;
  }

  return SyncingStatus.NOT_SYNCED;
}
