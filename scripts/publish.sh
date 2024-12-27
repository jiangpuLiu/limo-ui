#!/bin/sh

set -e

pnpm i --frozen-lockfile
#pnpm update:version

pnpm build

cd dist/limo-ui
npm publish --provenance
cd -

cd internal/eslint-config
npm publish
cd -

cd internal/metadata
pnpm build
npm publish
cd -

echo "✅ Publish completed"
