#!/bin/sh

set -e

pnpm i --frozen-lockfile
#pnpm update:version

pnpm build

# 使用环境变量中的 registry 地址
#REGISTRY_URL="http://nexus.limonergy.com:8081/repository/limo-npm/"
REGISTRY_URL="https://registry.npmjs.org/"

# 发布到指定的 registry
cd ../dist/limo-ui
npm publish --registry=$REGISTRY_URL
cd -

echo "✅ Publish completed"
