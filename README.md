<!--
SPDX-FileCopyrightText: 2023 Deutsche Telekom AG

SPDX-License-Identifier: CC0-1.0
-->

# Pixelshades

## About

This project is a cross Framework Component Library and Design System. It is used to create a consistent look and feel for the different applications through mutliple platforms and web frameworks..

## Setup

### Install Volta

To manage the correct Node version we recommend using [Volta](https://volta.sh/).

```bash
curl https://get.volta.sh | bash
```

Volta should pick the correct version set in `package.json`.

### Install Node

To install Node, run these commands: 

```bash
volta install node
```

### Setup Biome

#### Webstorm

1. Go to Webstorm Preferences
1. Click on the Plugins tab and search for Biome
1. Install Biome
1. In Preferences go to Languages and Frameworks -> Biome
1. Change Run for files to {**/*,*}.{js,mjs,cjs,ts,jsx,tsx,cts,json,jsonc,vue,svelte,astro,html,css,scss,md}
1. Click checkbox on save and apply
1. If you have to exclude code, see [Biome configuration](https://biomejs.dev/reference/configuration/)

#### Visual Studio Code

1. Go to Visual Studio Code Extensions
1. Click on the Plugins tab and search for Biome
1. If you have to exclude code, see [Biome configuration](https://biomejs.dev/reference/configuration/)


### Getting Started

For local development, you can use the following commands:

```bash
# Install dependencies
bun install

# Run the development server
bun run dev --filter docs
```

For building the project, you can use the following command:

```bash
# Build the project
bun run build --filter <package_name>
```

## Code of Conduct

This project has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) in version 2.1 as our code of conduct. Please see the details in our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). All contributors must abide by the code of conduct.

By participating in this project, you agree to abide by its [Code of Conduct](./CODE_OF_CONDUCT.md) at all times.

## Licensing

This project follows the [REUSE standard for software licensing](https://reuse.software/).  
Each file contains copyright and license information, and license texts can be found in the [./LICENSES](./LICENSES) folder. For more information visit https://reuse.software/.  
You can find a guide for developers at https://telekom.github.io/reuse-template/.
