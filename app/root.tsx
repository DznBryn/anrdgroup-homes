import type { ReactNode } from 'react';
import type { LinksFunction } from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
import tailwindStylesheet from '~/styles/tailwind.css';
import type {
  V2_MetaFunction} from '@remix-run/react';
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

export const meta: V2_MetaFunction = () => {
	return [
		{ charset: 'utf-8' },
		{
			viewport:
				'width=device-width, initial-scale=2, maximum-scale=1.0, user-scalable=no'
		},
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'anrdhomes.com' },
	];
};

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
