/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as DocsImport } from "./routes/docs";
import { Route as DocsSlugImport } from "./routes/docs/$slug";
import { Route as DocsComponentsSlugIndexImport } from "./routes/docs/components/$slug/index";
import { Route as DocsIndexImport } from "./routes/docs/index";
import { Route as ExamplesImport } from "./routes/examples";
import { Route as IndexImport } from "./routes/index";

// Create/Update Routes

const ExamplesRoute = ExamplesImport.update({
	path: "/examples",
	getParentRoute: () => rootRoute,
} as any);

const DocsRoute = DocsImport.update({
	path: "/docs",
	getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
	path: "/",
	getParentRoute: () => rootRoute,
} as any);

const DocsIndexRoute = DocsIndexImport.update({
	path: "/",
	getParentRoute: () => DocsRoute,
} as any);

const DocsSlugRoute = DocsSlugImport.update({
	path: "/$slug",
	getParentRoute: () => DocsRoute,
} as any);

const DocsComponentsSlugIndexRoute = DocsComponentsSlugIndexImport.update({
	path: "/components/$slug/",
	getParentRoute: () => DocsRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
	interface FileRoutesByPath {
		"/": {
			preLoaderRoute: typeof IndexImport;
			parentRoute: typeof rootRoute;
		};
		"/docs": {
			preLoaderRoute: typeof DocsImport;
			parentRoute: typeof rootRoute;
		};
		"/examples": {
			preLoaderRoute: typeof ExamplesImport;
			parentRoute: typeof rootRoute;
		};
		"/docs/$slug": {
			preLoaderRoute: typeof DocsSlugImport;
			parentRoute: typeof DocsImport;
		};
		"/docs/": {
			preLoaderRoute: typeof DocsIndexImport;
			parentRoute: typeof DocsImport;
		};
		"/docs/components/$slug/": {
			preLoaderRoute: typeof DocsComponentsSlugIndexImport;
			parentRoute: typeof DocsImport;
		};
	}
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
	IndexRoute,
	DocsRoute.addChildren([DocsSlugRoute, DocsIndexRoute, DocsComponentsSlugIndexRoute]),
	ExamplesRoute,
]);

/* prettier-ignore-end */
