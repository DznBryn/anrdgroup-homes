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
import Modals from './components/Modals/Modals';
import Layout from './components/Layouts/Layout';


export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
	{ rel: 'stylesheet', href: tailwindStylesheet },
];


export default function App() {
	return (
		<Document>
			<Layout>
				<Outlet />
			</Layout>
			<Modals />
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
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1.0'></meta>
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
				<script
					type='text/javascript'
					src='//static.klaviyo.com/onsite/js/klaviyo.js?company_id=VB6Uwr'></script>
				<LiveReload />
			</body>
		</html>
	);
}
