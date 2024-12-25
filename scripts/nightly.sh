sed -i 's/"name": "limo-ui",/"name": "@limo-ui\/nightly",/' packages/limo-ui/package.json
sed -i '2s/limo-ui/@limo-ui\/nightly/' internal/build-constants/src/pkg.ts
