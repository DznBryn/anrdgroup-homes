import type { ReactNode } from 'react';
import type { LinksFunction } from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
import tailwindStylesheet from '~/styles/tailwind.css';

import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration
} from '@remix-run/react';


export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
	{ rel: 'stylesheet', href: tailwindStylesheet },
];


export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	);
}

type DocumentProps = {
	children: ReactNode;
};

function Document({ children }: DocumentProps) {
	return (
		<html lang='en'>
			<head>
				<Meta />
				<meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
