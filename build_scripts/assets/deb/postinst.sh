#!/usr/bin/env bash
# Post install script for the UI .deb to place symlinks in places to allow the CLI to work similarly in both versions

set -e

ln -s /usr/lib/taco-blockchain/resources/app.asar.unpacked/daemon/taco /usr/bin/taco || true
ln -s /usr/lib/taco-blockchain/resources/app.asar.unpacked/daemon /opt/taco || true
