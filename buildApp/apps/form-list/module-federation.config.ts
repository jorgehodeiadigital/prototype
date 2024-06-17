import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'form-list',
  exposes: {
    './Routes': 'apps/form-list/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
