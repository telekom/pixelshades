/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ThemesImport } from './routes/themes'
import { Route as GeneratorImport } from './routes/generator'
import { Route as ExamplesImport } from './routes/examples'
import { Route as DocsImport } from './routes/docs'
import { Route as AutoFormImport } from './routes/auto-form'
import { Route as IndexImport } from './routes/index'
import { Route as DocsIndexImport } from './routes/docs/index'
import { Route as DocsSlugImport } from './routes/docs/$slug'
import { Route as DocsComponentsSlugIndexImport } from './routes/docs/components/$slug/index'

// Create/Update Routes

const ThemesRoute = ThemesImport.update({
  path: '/themes',
  getParentRoute: () => rootRoute,
} as any)

const GeneratorRoute = GeneratorImport.update({
  path: '/generator',
  getParentRoute: () => rootRoute,
} as any)

const ExamplesRoute = ExamplesImport.update({
  path: '/examples',
  getParentRoute: () => rootRoute,
} as any)

const DocsRoute = DocsImport.update({
  path: '/docs',
  getParentRoute: () => rootRoute,
} as any)

const AutoFormRoute = AutoFormImport.update({
  path: '/auto-form',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DocsIndexRoute = DocsIndexImport.update({
  path: '/',
  getParentRoute: () => DocsRoute,
} as any)

const DocsSlugRoute = DocsSlugImport.update({
  path: '/$slug',
  getParentRoute: () => DocsRoute,
} as any)

const DocsComponentsSlugIndexRoute = DocsComponentsSlugIndexImport.update({
  path: '/components/$slug/',
  getParentRoute: () => DocsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/auto-form': {
      id: '/auto-form'
      path: '/auto-form'
      fullPath: '/auto-form'
      preLoaderRoute: typeof AutoFormImport
      parentRoute: typeof rootRoute
    }
    '/docs': {
      id: '/docs'
      path: '/docs'
      fullPath: '/docs'
      preLoaderRoute: typeof DocsImport
      parentRoute: typeof rootRoute
    }
    '/examples': {
      id: '/examples'
      path: '/examples'
      fullPath: '/examples'
      preLoaderRoute: typeof ExamplesImport
      parentRoute: typeof rootRoute
    }
    '/generator': {
      id: '/generator'
      path: '/generator'
      fullPath: '/generator'
      preLoaderRoute: typeof GeneratorImport
      parentRoute: typeof rootRoute
    }
    '/themes': {
      id: '/themes'
      path: '/themes'
      fullPath: '/themes'
      preLoaderRoute: typeof ThemesImport
      parentRoute: typeof rootRoute
    }
    '/docs/$slug': {
      id: '/docs/$slug'
      path: '/$slug'
      fullPath: '/docs/$slug'
      preLoaderRoute: typeof DocsSlugImport
      parentRoute: typeof DocsImport
    }
    '/docs/': {
      id: '/docs/'
      path: '/'
      fullPath: '/docs/'
      preLoaderRoute: typeof DocsIndexImport
      parentRoute: typeof DocsImport
    }
    '/docs/components/$slug/': {
      id: '/docs/components/$slug/'
      path: '/components/$slug'
      fullPath: '/docs/components/$slug'
      preLoaderRoute: typeof DocsComponentsSlugIndexImport
      parentRoute: typeof DocsImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AutoFormRoute,
  DocsRoute: DocsRoute.addChildren({
    DocsSlugRoute,
    DocsIndexRoute,
    DocsComponentsSlugIndexRoute,
  }),
  ExamplesRoute,
  GeneratorRoute,
  ThemesRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/auto-form",
        "/docs",
        "/examples",
        "/generator",
        "/themes"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/auto-form": {
      "filePath": "auto-form.tsx"
    },
    "/docs": {
      "filePath": "docs.tsx",
      "children": [
        "/docs/$slug",
        "/docs/",
        "/docs/components/$slug/"
      ]
    },
    "/examples": {
      "filePath": "examples.tsx"
    },
    "/generator": {
      "filePath": "generator.tsx"
    },
    "/themes": {
      "filePath": "themes.tsx"
    },
    "/docs/$slug": {
      "filePath": "docs/$slug.tsx",
      "parent": "/docs"
    },
    "/docs/": {
      "filePath": "docs/index.tsx",
      "parent": "/docs"
    },
    "/docs/components/$slug/": {
      "filePath": "docs/components/$slug/index.tsx",
      "parent": "/docs"
    }
  }
}
ROUTE_MANIFEST_END */
